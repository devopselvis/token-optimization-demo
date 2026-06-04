# Token Optimization Demos

Companion repository for the YouTube video: **"The 5 Rules of Token Optimization Every Developer MUST Know (GitHub Copilot)"**

📺 Watch the video: [YouTube Link]

## What's In This Repo

This repo is a sample TypeScript/Node.js project specifically structured to demonstrate token optimization techniques for GitHub Copilot. Use it to follow along with the video or as a template for your own projects.

### Demo Files

| File | Used In | Purpose |
|------|---------|---------|
| `.github/copilot-instructions.md` | Rule 1 & 2 | The optimized (lean) instructions file |
| `.github/copilot-instructions-bloated.md` | Rule 1 | The "before" bloated version for comparison |
| `.github/prompts/api-design.prompt.md` | Rule 2 | On-demand API design prompt file |
| `.github/prompts/testing.prompt.md` | Rule 2 | On-demand testing prompt file |
| `.github/prompts/deploy-checklist.prompt.md` | Rule 2 | On-demand deploy prompt file |
| `.github/copilot-setup-steps.yml` | Rule 5 | Coding agent setup file |
| `src/services/userService.ts` | Rule 4 | Contains `filterActiveUsersByLastLogin` |
| `src/models/user.ts` | Rule 4 | User type definition |
| `docs/content-exclusion-patterns.md` | Rule 5 | Starter list of exclusion patterns |
| `docs/caveman-instructions-examples.md` | Rule 4 | Before/after instruction compression examples |

### Project Structure

```
.github/
├── copilot-instructions.md          ← Optimized (lean) - ALWAYS LOADED
├── copilot-instructions-bloated.md  ← "Before" version for demo comparison
├── copilot-setup-steps.yml          ← Coding agent setup
└── prompts/
    ├── api-design.prompt.md         ← On-demand: API guidelines
    ├── testing.prompt.md            ← On-demand: Testing standards
    └── deploy-checklist.prompt.md   ← On-demand: Deploy process
src/
├── models/
│   └── user.ts                      ← User interface
├── services/
│   └── userService.ts               ← filterActiveUsersByLastLogin demo
├── utils/
│   └── helpers.ts                   ← Utility functions
└── __tests__/
    └── userService.test.ts          ← Co-located test example
docs/
├── content-exclusion-patterns.md    ← Copy-paste exclusion patterns
└── caveman-instructions-examples.md ← Before/after compression guide
```

## How To Use

1. **Clone this repo** and open in VS Code
2. **Follow along with the video** — each Rule section references specific files
3. **Copy what you need** — the instruction files, prompt files, and patterns are designed to be adapted for your projects

## The 5 Rules

1. **Treat Context Like a Budget** — Every token costs. Be intentional.
2. **Load On-Demand, Not Always-On** — Keep instructions lean, details in prompt files.
3. **Right-Size Your Model** — Lightweight models for simple, premium for complex.
4. **Be Precise, Not Polite** — Caveman style. No filler. Slash commands.
5. **Clean Your Context** — /clear between tasks. Close tabs. Exclude noise.

## License

MIT — use these patterns in your own projects!
