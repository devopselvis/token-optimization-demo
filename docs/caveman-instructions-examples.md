# Caveman-Style Instruction Compression

## The Principle

Write instructions in compressed, article-free, fragment style.
Drop: articles (a, an, the), filler words (just, really, basically, please), pleasantries, hedging.
Fragments OK. Short synonyms. Code unchanged.

---

## Examples: Before & After

### Example 1: General Instructions

**❌ BEFORE (~150 tokens):**
```markdown
# Instructions for Copilot

Please always be helpful and provide complete answers. When writing code,
please use best practices and follow clean code principles. Always add
comments to explain what the code does. Use meaningful variable names.
Follow the DRY principle. Write unit tests when applicable. Use TypeScript
for all new files. Follow our team's coding standards. Be thorough in
your explanations.

When working on this project, please note that we use:
- React 18 with TypeScript
- Tailwind CSS for styling
- Jest for testing
- ESLint with our custom config
- Prettier for formatting
```

**✅ AFTER (~40 tokens):**
```markdown
Stack: React 18, TypeScript, Tailwind, Jest, ESLint.
Style: Functional components, named exports, error boundaries at route level.
Tests: Co-locate with source. Use Testing Library. Mock external deps only.
```

**Savings: ~73% fewer tokens on EVERY request**

---

### Example 2: Testing Instructions

**❌ BEFORE (~70 tokens):**
```markdown
When writing tests for this project, please make sure that you follow our
testing conventions. We use Jest as our testing framework and we prefer to
use the React Testing Library for component tests. Tests should be placed
in a __tests__ directory next to the source file they're testing. Please
make sure to include both happy path and error cases.
```

**✅ AFTER (~15 tokens):**
```markdown
Tests: Jest + RTL. Co-locate in __tests__/. Cover happy path + error cases.
```

**Savings: ~78% fewer tokens on EVERY request**

---

### Example 3: API Standards

**❌ BEFORE (~90 tokens):**
```markdown
When working on API endpoints, please follow RESTful conventions. Use plural
nouns for resource names. Use proper HTTP status codes. Always include error
handling. Make sure to validate input data. Use middleware for authentication.
Document any new endpoints. Wrap all responses in our standard envelope format
with data and meta fields.
```

**✅ AFTER (~25 tokens):**
```markdown
API: RESTful, plural nouns, proper HTTP codes.
Errors: { error: { code, message, details[] } }
Responses: { data: T, meta: { timestamp, requestId } }
Auth: Bearer token middleware on protected routes.
```

**Savings: ~72% fewer tokens on EVERY request**

---

### Example 4: Project Context

**❌ BEFORE (~110 tokens):**
```markdown
This is a task management web application built with React and Node.js.
We use MongoDB as our database. The frontend is in the /src directory
and the backend API server is in the /server directory. We follow a
microservices architecture with separate services for authentication,
task management, and notifications. Each service communicates via REST APIs.
The project uses Docker for containerization and GitHub Actions for CI/CD.
```

**✅ AFTER (~40 tokens):**
```markdown
Task management app. React frontend (src/), Node.js API (server/).
DB: MongoDB. Architecture: microservices (auth, tasks, notifications) via REST.
Infra: Docker, GitHub Actions CI/CD.
```

**Savings: ~64% fewer tokens on EVERY request**

---

## The Math

If your instructions file saves 100 tokens per request, and you make 30 requests/day:
- **Daily savings:** 3,000 tokens
- **Monthly savings:** ~90,000 tokens
- **For a 10-person team:** ~900,000 tokens/month

At premium model rates, that's real money saved — and your context window has more room for actual code.

## Rules of Thumb

1. If the model already knows it (SOLID, clean code, be helpful) — delete it
2. If it's in package.json or tsconfig (framework versions, settings) — don't repeat it
3. If it only applies to some files — move it to a prompt file, not instructions
4. If it's longer than 3 lines for one concept — compress it
5. Read it aloud: if it sounds like an email, rewrite it as a telegram
