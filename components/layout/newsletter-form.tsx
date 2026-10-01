"use client";

import { useActionState } from "react";
import { subscribe, type NewsletterState } from "@/actions/newsletter";
import { FormStatus } from "@/components/form-status";
import { SubmitButton } from "@/components/submit-button";
import { useResultToast } from "@/components/toaster";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState<
    NewsletterState,
    FormData
  >(subscribe, {
    status: "idle",
  });
  useResultToast(state);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <div className="flex gap-3 md:gap-6">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          aria-invalid={state.status === "error" || undefined}
          aria-describedby="newsletter-status"
          className="h-13 flex-1 rounded-full border-gray-200 bg-white px-6 text-base leading-[1.6] placeholder:text-gray-950 md:max-w-94 md:text-base"
        />
        <SubmitButton
          pending={pending}
          pendingText="Subscribing…"
          className="self-center"
        >
          Subscribe
        </SubmitButton>
      </div>
      <FormStatus
        id="newsletter-status"
        status={state.status}
        message={state.status === "error" ? state.message : undefined}
      />
      <p className="mt-3 max-w-126 type-body-xs text-gray-950">
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates from our company.
      </p>
    </form>
  );
}
