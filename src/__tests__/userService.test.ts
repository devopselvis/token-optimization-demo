import { filterActiveUsersByLastLogin } from "../services/userService";
import { User } from "../models/user";

function createUser(overrides: Partial<User> = {}): User {
  return {
    id: "user-1",
    email: "test@example.com",
    displayName: "Test User",
    isActive: true,
    lastLoginAt: new Date("2026-01-15"),
    createdAt: new Date("2025-06-01"),
    role: "member",
    ...overrides,
  };
}

describe("filterActiveUsersByLastLogin", () => {
  it("returns only users where isActive is true", () => {
    const users = [
      createUser({ id: "1", isActive: true }),
      createUser({ id: "2", isActive: false }),
      createUser({ id: "3", isActive: true }),
    ];

    const result = filterActiveUsersByLastLogin(users);

    expect(result).toHaveLength(2);
    expect(result.every((u) => u.isActive)).toBe(true);
  });

  it("sorts by lastLoginAt descending (most recent first)", () => {
    const users = [
      createUser({ id: "1", lastLoginAt: new Date("2026-01-01") }),
      createUser({ id: "2", lastLoginAt: new Date("2026-03-15") }),
      createUser({ id: "3", lastLoginAt: new Date("2026-02-10") }),
    ];

    const result = filterActiveUsersByLastLogin(users);

    expect(result[0].id).toBe("2");
    expect(result[1].id).toBe("3");
    expect(result[2].id).toBe("1");
  });

  it("returns empty array when input is empty", () => {
    const result = filterActiveUsersByLastLogin([]);
    expect(result).toEqual([]);
  });

  it("returns empty array when no users are active", () => {
    const users = [
      createUser({ id: "1", isActive: false }),
      createUser({ id: "2", isActive: false }),
    ];

    const result = filterActiveUsersByLastLogin(users);
    expect(result).toEqual([]);
  });
});
