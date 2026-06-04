export interface User {
  id: string;
  email: string;
  displayName: string;
  isActive: boolean;
  lastLoginAt: Date;
  createdAt: Date;
  role: "admin" | "member" | "viewer";
}

export interface UserFilters {
  isActive?: boolean;
  role?: User["role"];
  loginAfter?: Date;
}
