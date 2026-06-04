import express from "express";
import { generateRequestId, wrapResponse } from "./utils/helpers";

const app = express();
app.use(express.json());

// Request ID middleware
app.use((req, res, next) => {
  req.headers["x-request-id"] = generateRequestId();
  next();
});

// Health check
app.get("/health", (req, res) => {
  res.json(wrapResponse({ status: "ok" }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
