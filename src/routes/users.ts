import { Router } from "express";
import { filterActiveUsersByLastLogin } from "../services/userService";
import { wrapResponse } from "../utils/helpers";

const router = Router();

// GET /api/v1/users — list active users
router.get("/", async (req, res) => {
  try {
    // In production, fetch from database
    const allUsers: any[] = []; // placeholder
    const activeUsers = filterActiveUsersByLastLogin(allUsers);
    res.json(wrapResponse(activeUsers, { count: activeUsers.length }));
  } catch (error) {
    res.status(500).json({
      error: {
        code: "INTERNAL_ERROR",
        message: "Failed to fetch users",
      },
    });
  }
});

export default router;
