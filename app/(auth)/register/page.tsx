import type { Metadata } from "next";
import Link from "next/link";
import { AuthAside } from "../_components/auth-aside";
import { AuthCard } from "../_components/auth-card";
import { RegisterForm } from "./_components/register-form";

export const metadata: Metadata = {
  title: "Create an account",
  description:
    "Join ByteSpace for free and start learning from expert creators.",
  robots: { index: false },
};

export default function RegisterPage() {
  return (
    <>
      <AuthAside title="Sign up and come in">
        The registration process is straightforward, uncomplicated, and
        efficient, allowing users to sign up quickly, easily, and at no cost.
      </AuthAside>
      <AuthCard
        eyebrow="Create an Account"
        title="Welcome to ByteSpace"
        footer={
          <>
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-800 underline underline-offset-4 hover:no-underline"
            >
              Login
            </Link>
          </>
        }
      >
        <RegisterForm />
      </AuthCard>
    </>
  );
}
