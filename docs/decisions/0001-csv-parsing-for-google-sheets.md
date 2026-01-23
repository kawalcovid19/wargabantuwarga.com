# ADR-0001: CSV Parsing for Google Sheets Data Fetching

## Status

Accepted

## Context

The data fetching infrastructure for WargaBantuWarga.com previously used HTML parsing with Cheerio for Google Sheets data. Specifically, `fetch-lbh.ts` was fetching the `htmlview` format of a Google Sheets document and parsing it as HTML using Cheerio selectors.

This approach has several limitations:

1. **Performance**: HTML parsing is more computationally expensive than CSV parsing
2. **Fragility**: HTML structure can change; CSV format is standardized
3. **Data Integrity**: Parsing HTML can lose data structure information (e.g., multi-line values within cells)
4. **Maintainability**: HTML parsing logic is complex and harder to test comprehensively
5. **Code Reusability**: The CSV format is more portable and easier to reuse across different data sources

## Decision

We have decided to:

1. **Migrate data fetching to CSV format**: Use Google Sheets' `export?format=csv` endpoint instead of `htmlview` for fetching LBH data
2. **Implement a custom CSV parser**: Create a shared `parseCSV()` function in `etc/fetchers/utils.ts` that handles:
   - Quoted values containing commas
   - Escaped quotes (RFC 4180 compliant)
   - Multi-line values (newlines within quoted cells)
   - Various line endings (LF, CRLF)
   - Empty rows and cells
   - Trailing whitespace trimming
3. **Use built-in fetch**: Switch from `cross-fetch` to the built-in Node.js `fetch` API for simpler redirect handling
4. **Comprehensive test coverage**: Add 13 unit tests covering edge cases and real-world scenarios to prevent regressions

## Rationale

### Why CSV over HTML

- **Standard Format**: CSV is a well-defined format (RFC 4180) with predictable parsing requirements
- **Better Data Preservation**: Multi-line cell values are preserved correctly in CSV
- **Smaller Payloads**: CSV is more compact than HTML
- **Alignment with Modern Tools**: Industry-standard for CSV handling

### Why a Custom Parser

- **Zero Dependencies**: No external libraries needed for this straightforward use case
- **Full Control**: Complete understanding and control of parsing behavior for code reviews
- **Simplicity**: Lightweight implementation focused on our specific needs (200 lines vs library dependencies)
- **Testability**: All edge cases are explicitly tested in our test suite
- **Maintainability**: Easy to debug and modify if needed

### Built-in Fetch

Node.js 18+ includes native `fetch` with better redirect handling than `cross-fetch`:

- Automatically follows redirects by default
- Standard API that developers are familiar with
- Reduces dependency count

## Consequences

### Positive

- ✅ Improved performance for data fetching (CSV parsing vs HTML parsing)
- ✅ Better data integrity for multi-line cell values
- ✅ Reusable `parseCSV()` function for other data sources
- ✅ Zero external dependencies required
- ✅ Full transparency of parsing logic for code reviews
- ✅ Simpler, more maintainable code in `fetch-lbh.ts`
- ✅ Comprehensive test coverage prevents regressions

### Negative

- ⚠️ Custom parser adds ~200 lines of code that needs maintenance
- ⚠️ Had to add `fetchMock.enableMocks()` to Jest setup to mock global `fetch`

## Related Decisions

- None yet

## Alternatives Considered

1. **Use PapaParse library**

   - Pros: Battle-tested, extensive edge case handling, community support
   - Cons: Additional dependency, complex type definitions, may be overkill for simple parsing needs
   - _Not chosen because custom parser is simpler and our test suite covers all necessary edge cases_

2. **Keep HTML parsing with optimizations**

   - Pros: No format change needed
   - Cons: Doesn't address underlying performance and fragility issues

3. **Use server-side transformation**
   - Pros: Could handle more complex transformations
   - Cons: Adds infrastructure complexity, increases latency

## Implementation Notes

- `parseCSV()` is exported from `etc/fetchers/utils.ts` with return type `ParsedCSV`
- Custom parser handles complexity (cyclomatic complexity ~21) but is well-tested
- Returns `{ headers: string[], rows: string[][] }` structure matching our data needs
- Tests include 13 test cases covering:
  - Simple CSV parsing
  - Quoted values with commas
  - Escaped quotes
  - Multi-line values
  - CRLF and mixed line endings
  - Empty rows and cells
  - Trailing whitespace
  - Real-world LBH data with multi-line phone numbers
- Integration tests in `fetch-lbh.test.ts` verify the complete pipeline
- eslint-disable-next-line complexity comment used for the parser function

## References

- [RFC 4180 - CSV Format](https://tools.ietf.org/html/rfc4180)
- [Node.js Fetch API](https://nodejs.org/api/fetch.html)
- Commit: `436ecba` - refactor: extract parseCSV to utils and add comprehensive tests
