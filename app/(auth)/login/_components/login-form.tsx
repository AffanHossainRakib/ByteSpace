"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { SubmitButton } from "@/components/submit-button";
import { signInSchema, type SignInInput } from "@/lib/validation";
import { Field, PasswordField } from "../../_components/fields";
import { signIn } from "../_actions/sign-in";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
    mode: "onTouched",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = handleSubmit(async (data) => {
    const result = await signIn(data);
    for (const [field, message] of Object.entries(result.errors ?? {})) {
      setError(field as keyof SignInInput, { message });
    }
    if (result.status === "success") toast.success(result.message);
  });

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <Field
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="designer@example.com"
        error={errors.email?.message}
        {...register("email")}
      />
      <div className="flex flex-col gap-2">
        <PasswordField
          label="Password"
          autoComplete="current-password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register("password")}
        />
        <Link
          href="/forgot-password"
          prefetch={false}
          className="self-end type-body-s text-blue-800 hover:underline"
        >
          Forgot password?
        </Link>
      </div>
      <SubmitButton
        pending={isSubmitting}
        pendingText="Signing in…"
        className="ml-auto"
      >
        Sign In
      </SubmitButton>
    </form>
  );
}
