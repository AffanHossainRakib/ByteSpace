"use server";

import {
  firstErrors,
  signInSchema,
  type FieldErrors,
  type SignInInput,
} from "@/lib/validation";

export type SignInResult = {
  status: "success" | "error";
  message?: string;
  errors?: FieldErrors<typeof signInSchema>;
};

export async function signIn(input: SignInInput): Promise<SignInResult> {
  const result = signInSchema.safeParse(input);
  if (!result.success) {
    return { status: "error", errors: firstErrors(result.error) };
  }

  return {
    status: "success",
    message: "Looks good! Sign-in isn't connected yet.",
  };
}
