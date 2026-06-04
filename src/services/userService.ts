import { User } from "../models/user";

/**
 * Filters users to only active accounts and sorts by most recent login.
 * Returns empty array if input is empty or no active users found.
 */
export function filterActiveUsersByLastLogin(users: User[]): User[] {
  if (!users || users.length === 0) {
    return [];
  }

  return users
    .filter((user) => user.isActive === true)
    .sort(
      (a, b) =>
        new Date(b.lastLoginAt).getTime() - new Date(a.lastLoginAt).getTime()
    );
}

/**
 * Poorly named version — for demo comparison.
 * Shows how vague names force Copilot to guess intent.
 */
export function processData(data: any[]): any[] {
  return data.filter((d) => d.isActive).sort((a, b) => b.lastLoginAt - a.lastLoginAt);
}
