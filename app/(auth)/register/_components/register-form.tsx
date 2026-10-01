"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { SubmitButton } from "@/components/submit-button";
import { signUpSchema, type SignUpInput } from "@/lib/validation";
import { Field, PasswordField } from "../../_components/fields";
import { signUp } from "../_actions/sign-up";
import { PasswordStrength } from "./password-strength";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", password: "" },
  });
  const password = useWatch({ control, name: "password" });

  const onSubmit = handleSubmit(async (data) => {
    const result = await signUp(data);
    for (const [field, message] of Object.entries(result.errors ?? {})) {
      setError(field as keyof SignUpInput, { message });
    }
    if (result.status === "success") toast.success(result.message);
  });

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <Field
        label="Full Name"
        autoComplete="name"
        placeholder="Jamie Davis"
        error={errors.name?.message}
        {...register("name")}
      />
      <Field
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="designer@example.com"
        error={errors.email?.message}
        {...register("email")}
      />
      <div className="flex flex-col gap-3">
        <PasswordField
          label="Password"
          autoComplete="new-password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register("password")}
        />
        <PasswordStrength value={password} />
      </div>
      <SubmitButton
        pending={isSubmitting}
        pendingText="Creating account…"
        className="ml-auto"
      >
        Continue
      </SubmitButton>
    </form>
  );
}
