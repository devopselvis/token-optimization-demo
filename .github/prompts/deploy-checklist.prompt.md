---
description: "Use when preparing or reviewing a deployment"
---

# Deploy Checklist

## Pre-Deploy
- [ ] All tests pass on CI
- [ ] No TypeScript errors (`tsc --noEmit`)
- [ ] Database migrations reviewed and tested
- [ ] Environment variables documented for new features
- [ ] API docs updated for new/changed endpoints

## Deploy Process
1. Merge PR to `main`
2. CI builds and runs full test suite
3. Docker image built and pushed to registry
4. Staging auto-deploys from `main`
5. Smoke test staging (health check + critical paths)
6. Production deploy via GitHub Actions workflow dispatch

## Post-Deploy
- [ ] Monitor error rates for 15 minutes
- [ ] Check key metrics dashboard
- [ ] Verify new feature works in production
- [ ] Update status page if needed

## Rollback
- Revert commit on `main` triggers auto-rollback
- Database: only additive migrations (never drop columns in same release)
- Feature flags: disable flag immediately if issues detected
