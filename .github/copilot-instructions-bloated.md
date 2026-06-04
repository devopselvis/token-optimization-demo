# Instructions for Copilot

Please always be helpful and provide complete answers. When writing code, please use best practices and follow clean code principles. Always add comments to explain what the code does. Use meaningful variable names. Follow the DRY principle. Write unit tests when applicable. Use TypeScript for all new files. Follow our team's coding standards. Be thorough in your explanations.

When working on this project, please note that we use:
- React 18 with TypeScript
- Node.js 20 for the backend
- Tailwind CSS for styling
- Jest for testing with React Testing Library for component tests
- ESLint with our custom config
- Prettier for formatting
- PostgreSQL for the database
- Express for the API server

When writing tests for this project, please make sure that you follow our testing conventions. We use Jest as our testing framework and we prefer to use the React Testing Library for component tests. Tests should be placed in a __tests__ directory next to the source file they're testing. Please make sure to include both happy path and error cases.

When working on API endpoints, please follow RESTful conventions. Use plural nouns for resource names. Use proper HTTP status codes. Always include error handling. Make sure to validate input data. Use middleware for authentication. Document any new endpoints.

Please always use functional components in React. Use hooks for state management. Keep components small and focused. Extract reusable logic into custom hooks. Use TypeScript interfaces for all props. Prefer named exports over default exports.

When writing code, please ensure that:
1. All functions have proper TypeScript types
2. Error messages are user-friendly
3. Sensitive data is never logged
4. Database queries use parameterized inputs
5. API responses follow our standard envelope format
6. Authentication is checked on all protected routes
