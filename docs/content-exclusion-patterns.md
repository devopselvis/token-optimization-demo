# Content Exclusion Patterns

Copy these into your repository or organization settings on GitHub.com under:
**Settings → Copilot → Content Exclusion**

> ⚠️ There is NO `.copilotignore` file. Exclusions are configured in GitHub settings only.

## Starter Patterns (Copy These)

```yaml
# Build artifacts
**/dist/**
**/build/**
**/out/**
**/.next/**

# Dependencies
**/node_modules/**
**/vendor/**

# Generated code
**/*.generated.ts
**/*.generated.js
**/generated/**
**/__generated__/**

# Database migrations (auto-generated, noisy)
**/migrations/**

# Large data files
**/*.sql
**/*.csv
**/*.json.bak

# Minified files
**/*.min.js
**/*.min.css

# Lock files (large, low signal)
**/pnpm-lock.yaml
**/package-lock.json
**/yarn.lock

# Environment and secrets
**/.env*
**/secrets/**

# Binary/media assets
**/*.png
**/*.jpg
**/*.gif
**/*.svg
**/*.woff
**/*.ttf
**/*.pdf
```

## Organization-Level Patterns

If you're an org admin, set these once for all repos:

```yaml
# Applied to ALL repos in the org
"*":
  - "**/node_modules/**"
  - "**/dist/**"
  - "**/build/**"
  - "**/*.min.js"
  - "**/vendor/**"

# Applied to specific repos
"https://github.com/your-org/legacy-app":
  - "**/old-code/**"
  - "**/deprecated/**"
```

## Important Caveats

1. Content exclusions currently apply to **code completions and Copilot Chat**
2. They do **NOT** apply to Copilot Agent Mode or Copilot CLI (as of mid-2026)
3. Always verify current scope in GitHub docs — this may change
4. Exclusions take effect immediately, no restart needed
