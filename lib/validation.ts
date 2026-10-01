import { z } from "zod";

export const emailSchema = z
  .string()
  .trim()
  .pipe(z.email("Enter a valid email address."));

export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Enter your password."),
});

export const signUpSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(100, "Enter your full name."),
  email: emailSchema,
  password: z.string().min(8, "Use at least 8 characters."),
});

export type FieldErrors<S extends z.ZodObject> = Partial<
  Record<keyof z.infer<S>, string>
>;

export function firstErrors<T>(error: z.ZodError<T>) {
  const { fieldErrors } = z.flattenError(error);
  return Object.fromEntries(
    Object.entries(fieldErrors).map(([field, messages]) => [
      field,
      (messages as string[])[0],
    ]),
  ) as Partial<Record<keyof T, string>>;
}

export function passwordStrength(v: string) {
  const score = [
    v.length >= 8,
    /[a-z]/.test(v) && /[A-Z]/.test(v),
    /\d/.test(v),
    /[^A-Za-z0-9]/.test(v),
  ].filter(Boolean).length;
  const label = ["Too short", "Weak", "Fair", "Good", "Strong"][
    v.length >= 8 ? score : 0
  ];
  return { score: v.length >= 8 ? score : Math.min(score, 1), label };
}

export type SignInInput = z.infer<typeof signInSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;
