# Architecture Decision Records (ADRs)

This directory contains Architecture Decision Records (ADRs) for significant architectural and technical decisions made in the WargaBantuWarga.com project.

## Overview

An Architecture Decision Record is a document that captures an important architectural decision made along with its context and consequences. ADRs help to:

- Document the reasoning behind important decisions
- Make it easier for new team members to understand why things are the way they are
- Provide historical context for future decisions
- Enable better discussions about trade-offs

## ADR Format

We use a lightweight ADR format based on [MADR](https://adr.github.io/madr/):

```markdown
# ADR-XXXX: [Title]

## Status

Proposed | Accepted | Deprecated | Superseded by ADR-XXXX

## Context

What is the issue we're trying to resolve?

## Decision

What decision did we make?

## Rationale

Why did we make this decision?

## Consequences

What are the results of this decision?

## Alternatives Considered

What other options did we evaluate?

## Implementation Notes

(Optional) Any specific implementation details

## References

Links to related resources
```

## Current ADRs

- [ADR-0001: CSV Parsing for Google Sheets Data Fetching](./0001-csv-parsing-for-google-sheets.md)
- [ADR-0002: Consolidate Data Fetchers and Fix Google Sheets Discovery](./0002-consolidate-fetchers-and-fix-sheet-discovery.md)

## Submitting a New ADR

When proposing a significant architectural decision:

1. Copy the template above to `docs/decisions/NNNN-decision-title.md`
2. Fill in all sections with clear, concise language
3. Submit as part of a pull request with related implementation changes
4. Get approval from the team before marking as "Accepted"

## References

- [ADR GitHub](https://adr.github.io/)
- [MADR - Markdown Architecture Decision Records](https://adr.github.io/madr/)
