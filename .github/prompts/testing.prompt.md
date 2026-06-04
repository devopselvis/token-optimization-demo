---
description: "Use when writing or reviewing tests"
---

# Testing Standards

## Framework
- Jest for unit/integration tests
- React Testing Library for components
- Supertest for API endpoint tests

## File Placement
- Co-locate: `src/services/__tests__/userService.test.ts`
- Name: `{module}.test.ts`

## Coverage Requirements
- Happy path (expected inputs → expected outputs)
- Error cases (invalid input, missing data, network failures)
- Edge cases (empty arrays, null values, boundary values)

## Patterns
- Arrange / Act / Assert structure
- One assertion concept per test
- Mock external dependencies only (DB, APIs)
- Never mock the module under test
- Use factories for test data: `createUser({ overrides })`

## Naming
```typescript
describe('filterActiveUsers', () => {
  it('returns only users where isActive is true', () => { ... });
  it('returns empty array when no users are active', () => { ... });
  it('sorts by lastLoginAt descending', () => { ... });
});
```
