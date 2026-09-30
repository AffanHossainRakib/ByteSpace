"use server";

import { isEmail } from "@/lib/validation";

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function subscribe(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "").trim();
  if (!isEmail(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }
  return {
    status: "success",
    message: "Thanks for subscribing!",
  };
}
