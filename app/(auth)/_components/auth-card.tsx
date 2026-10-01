import type { ReactNode } from "react";

export function AuthCard({
  eyebrow,
  title,
  children,
  footer,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <section className="flex w-full max-w-144.75 flex-col gap-10 rounded-3xl bg-white px-6 py-8 md:px-15.75 md:py-15.25 lg:min-h-196">
      <div>
        <p className="type-body-l text-blue-800">{eyebrow}</p>
        <h1 className="type-title text-gray-950">{title}</h1>
      </div>
      {children}
      <p className="mt-auto text-center type-body-m text-gray-700">{footer}</p>
    </section>
  );
}
