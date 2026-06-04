import { User } from "../models/user";

export interface BillingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  features: string[];
}

export function calculateInvoice(user: User, plan: BillingPlan): number {
  // Pro-rate based on days remaining in billing cycle
  const today = new Date();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const daysRemaining = daysInMonth - today.getDate();
  return (plan.monthlyPrice / daysInMonth) * daysRemaining;
}

export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}
