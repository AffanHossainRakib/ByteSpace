"use server";

import { emailSchema } from "@/lib/validation";

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function subscribe(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const result = emailSchema.safeParse(formData.get("email") ?? "");
  if (!result.success) {
    return { status: "error", message: result.error.issues[0].message };
  }
  return {
    status: "success",
    message: "Thanks for subscribing!",
  };
}
