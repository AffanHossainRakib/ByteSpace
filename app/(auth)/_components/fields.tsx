"use client";

import { useState, type ComponentProps } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type FieldProps = ComponentProps<"input"> & {
  label: string;
  name: string;
  error?: string;
};

const input =
  "h-13 rounded-xl border-gray-200 bg-white px-6 text-lg leading-[1.6] placeholder:text-gray-400 md:text-lg";

export function Field({ label, name, error, className, ...props }: FieldProps) {
  const errorId = `${name}-error`;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="type-label-s text-gray-950">
        {label}
      </label>
      <Input
        id={name}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(input, className)}
        {...props}
      />
      {error && (
        <p id={errorId} className="type-body-s text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function PasswordField({ label, name, error, ...props }: FieldProps) {
  const [visible, setVisible] = useState(false);
  const errorId = `${name}-error`;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="type-label-s text-gray-950">
        {label}
      </label>
      <div className="relative">
        <Input
          id={name}
          name={name}
          type={visible ? "text" : "password"}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(input, "pr-14")}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          className="absolute top-1/2 right-3 grid size-10 -translate-y-1/2 place-items-center rounded-lg text-gray-400 hover:text-gray-950"
        >
          {visible ? (
            <MdVisibilityOff aria-hidden className="size-5" />
          ) : (
            <MdVisibility aria-hidden className="size-5" />
          )}
        </button>
      </div>
      {error && (
        <p id={errorId} className="type-body-s text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
