import type { Metadata } from "next";
import Link from "next/link";
import { AuthAside } from "../_components/auth-aside";
import { AuthCard } from "../_components/auth-card";
import { LoginForm } from "./_components/login-form";
import { SocialSignIn } from "./_components/social-sign-in";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to ByteSpace to continue learning.",
  robots: { index: false },
};

export default function LoginPage() {
  return (
    <>
      <AuthAside title="Sign in with ease">
        Experience a seamless and efficient sign-in process that grants you
        instant access to a world of knowledge.
      </AuthAside>
      <AuthCard
        eyebrow="Sign In"
        title="Welcome Back"
        footer={
          <>
            New user?{" "}
            <Link
              href="/register"
              className="text-blue-800 underline underline-offset-4 hover:no-underline"
            >
              Create an account
            </Link>
          </>
        }
      >
        <LoginForm />
        <SocialSignIn />
      </AuthCard>
    </>
  );
}
