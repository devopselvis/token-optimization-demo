---
description: "Use when designing or reviewing API endpoints"
---

# API Design Standards

## URL Patterns
- Use plural nouns: /users, /orders
- Nest for relationships: /users/{id}/orders
- Use query params for filtering: /users?role=admin

## Request/Response
- Always use JSON
- Wrap responses: { data: T, meta: {...} }
- Use HTTP status codes correctly
- Include request-id header

## Versioning
- URL prefix: /api/v1/
- Never break backwards compatibility in same version

## Error Format
```json
{
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "Human-readable message",
    "details": [{ "field": "email", "issue": "invalid format" }]
  }
}
```

## Authentication
- Bearer token in Authorization header
- 401 for missing/invalid token
- 403 for insufficient permissions
