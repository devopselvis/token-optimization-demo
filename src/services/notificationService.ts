export interface NotificationPayload {
  userId: string;
  type: "email" | "push" | "sms";
  subject: string;
  body: string;
  scheduledAt?: Date;
}

export async function sendNotification(payload: NotificationPayload): Promise<boolean> {
  // Placeholder — in production this would call notification service
  console.log(`Sending ${payload.type} to ${payload.userId}: ${payload.subject}`);
  return true;
}

export function buildWelcomeNotification(userId: string): NotificationPayload {
  return {
    userId,
    type: "email",
    subject: "Welcome to the platform!",
    body: "Thanks for signing up. Here's how to get started...",
  };
}
