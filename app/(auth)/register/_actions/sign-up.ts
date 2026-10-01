"use server";

import {
  firstErrors,
  signUpSchema,
  type FieldErrors,
  type SignUpInput,
} from "@/lib/validation";

export type SignUpResult = {
  status: "success" | "error";
  message?: string;
  errors?: FieldErrors<typeof signUpSchema>;
};

export async function signUp(input: SignUpInput): Promise<SignUpResult> {
  const result = signUpSchema.safeParse(input);
  if (!result.success) {
    return { status: "error", errors: firstErrors(result.error) };
  }

  return {
    status: "success",
    message: "Looks good! Sign-up isn't connected yet.",
  };
}
