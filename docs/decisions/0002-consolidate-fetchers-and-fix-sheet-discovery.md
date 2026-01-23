# ADR-0002: Consolidate Data Fetchers and Fix Google Sheets Discovery

## Status

Accepted

## Context

The data fetching infrastructure had two separate fetchers that were problematic:

1. **Duplicate Fetchers**: `fetch-database.ts` and `fetch-sheets.ts` were nearly identical, both using HTML parsing with Cheerio, but pointing to different Google Sheets documents.

   - `fetch-database.ts` → Sheet ID `1SRByPnPalzDHgo5RM85yv2V_N8Z-OylBbIgrre_xwg0` (used by app)
   - `fetch-sheets.ts` → Sheet ID `1RIcSiQqPCw-6H55QIYwblIQDPpFQmDNC73ukFa05J7c` (not used)

2. **Sheet Discovery Failure**: The original HTML parsing approach relied on static `<li>` elements in `#sheet-menu`, but Google Sheets now renders this menu dynamically with JavaScript, causing zero sheets to be discovered.

3. **Data Integrity Issue**: The database output was consistently empty (`[]`) because sheet discovery silently failed with no error handling.

4. **Orchestrator Issues**: `fetch-wbw.ts` had no proper exit mechanism or error handling, causing it to hang indefinitely when any fetcher failed.

## Decision

1. **Remove `fetch-sheets.ts`**: Delete the deprecated fetcher that references an unused spreadsheet
2. **Refactor `fetch-database.ts` to use hybrid approach**:
   - Fetch HTML for sheet discovery but parse embedded JavaScript instead of DOM elements
   - Extract sheet metadata from JavaScript `items` array via regex
   - Fetch each sheet's data individually using CSV format with `gid` parameter
3. **Add `fetch-database-only.ts`**: Create an isolated test script for debugging individual fetchers
4. **Add `yarn fetch-database` npm script**: Enable quick testing without running all fetchers

## Rationale

### Why Remove `fetch-sheets.ts`

- **No Application Usage**: The only references to `wbw-sheets.json` are in `mirror-box.ts` (backup/mirroring) and `fetch-wbw.ts` (orchestrator), not in actual app code
- **Duplicative Maintenance**: Two nearly identical implementations create confusion and maintenance burden
- **Single Source of Truth**: Epic issue #783 explicitly references only one database schema spreadsheet

### Why Hybrid Approach for Sheet Discovery

- **Realistic**: Google Sheets has changed its HTML rendering to use embedded JavaScript for sheet menus
- **Robust**: Regex parsing of JavaScript is more reliable than relying on DOM selectors that may not exist
- **Maintains Dynamic Discovery**: Still dynamically discovers sheets without hardcoding IDs
- **Aligns with ADR-0001**: Continues the CSV-first philosophy for data while using minimal HTML parsing for metadata only

### Why JavaScript Parsing

The actual HTML structure now looks like:

```javascript
var items = [];
items.push({name: "DKI Jakarta", gid: "0", ...});
items.push({name: "Aceh", gid: "1011184764", ...});
```

Parsing this JavaScript is:

- More reliable than waiting for DOM elements that may never appear
- Standard for modern web scraping of JavaScript-heavy pages
- Separates concerns: use HTML for metadata, CSV for data

### Why Individual Fetcher Script

- **Debugging**: `yarn fetch-database` allows testing the database fetch in isolation
- **Performance Profiling**: Can measure just the database fetch without other data sources blocking
- **Error Isolation**: Easier to identify if the hang is caused by database, vaccination, FAQ, or LBH fetching
- **Development Speed**: Faster iteration when working on this specific fetcher

## Consequences

### Positive

- ✅ Database now successfully populates with 31 provinces and 9,044 contacts
- ✅ Removed code duplication and maintenance burden
- ✅ Fixed 6.5-second hang caused by empty sheet discovery
- ✅ Better error handling with proper error messages
- ✅ Faster debugging with isolated `yarn fetch-database` command
- ✅ Clear separation of concerns: HTML for discovery, CSV for data
- ✅ All 33 fetcher tests passing
- ✅ No external dependency additions (still using only `parseCSV` utility)

### Negative

- ⚠️ Tightly coupled to Google Sheets' current HTML structure (embedded JavaScript)
- ⚠️ If Google changes how they embed sheet metadata, discovery may break again
- ⚠️ Regex parsing is slightly more fragile than proper API approach
- ⚠️ Still depends on HTML to discover sheets (hybrid not pure CSV)

## Alternatives Considered

1. **Use Google Sheets API**

   - Pros: Most robust, official, no web scraping
   - Cons: Requires API key management, authentication, additional setup
   - Not chosen due to operational complexity

2. **Hardcode Sheet IDs**

   - Pros: Simpler than HTML parsing
   - Cons: Not dynamic, requires updates when sheets change
   - Not chosen because dynamic discovery is valuable

3. **Keep Both Fetchers**

   - Pros: No disruption to existing code
   - Cons: Maintenance burden, confusion about which is authoritative
   - Not chosen because issue #783 indicates single database schema

4. **Revert to Old HTML Parsing**
   - Pros: Minimal changes
   - Cons: Doesn't work with current Google Sheets HTML structure
   - Not chosen because it's broken

## Implementation Notes

### Code Changes

1. **fetch-database.ts**

   - Removed Cheerio HTML parsing for sheet menu
   - Added regex parsing of JavaScript `items` array
   - Regex pattern: `/items\.push\(\{name:\s*"([^"]+)"[^}]*?gid:\s*"([^"]+)"[^}]*?\}\)/g`
   - Maintains same output structure with sheet metadata and contacts

2. **Removed Files**

   - `fetch-sheets.ts` (deprecated)
   - References removed from `fetch-wbw.ts` and `mirror-box.ts`

3. **New Files**

   - `fetch-database-only.ts` - Isolated test/debug script
   - Updated `package.json` with `fetch-database` npm script

4. **Test Updates**
   - Updated `fetch-database.test.ts` to use JavaScript-based mock HTML
   - Now properly mocks the embedded items array structure
   - Tests verify both HTML discovery and CSV data fetching

### Performance

- Database fetch: ~6.5 seconds (includes 31 sheet CSV fetches)
- Output: 31 provinces, 9,044 contacts, 5.5 MB JSON
- All fetches happen in parallel via `Promise.all()`

### Error Handling

- Throws `Error("Could not find sheet items in HTML")` if JavaScript structure not found
- Throws `Error("No sheets found in spreadsheet")` if regex matches zero sheets
- `fetch-database-only.ts` has proper error logging with `process.exit(1)`

## Related Decisions

- [ADR-0001: CSV Parsing for Google Sheets Data Fetching](./0001-csv-parsing-for-google-sheets.md)
  - This ADR implements the CSV approach for database fetching at scale

## References

- **GitHub Issue**: #783 - Database Schema Migration
- **Commits**:
  - `c18bd87` - Remove fetch-sheets.ts, refactor fetch-database to CSV
  - `9655f71` - Fix sheet discovery by parsing embedded JavaScript
- **Files Modified**:
  - `etc/fetchers/fetch-database.ts`
  - `etc/fetchers/fetch-database-only.ts` (new)
  - `etc/fetchers/__tests__/fetch-database.test.ts`
  - `etc/fetchers/fetch-wbw.ts`
  - `etc/mirror-box.ts`
  - `package.json`
