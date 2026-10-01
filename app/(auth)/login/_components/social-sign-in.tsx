import { FaFacebook, FaGoogle } from "react-icons/fa";

const socialButton =
  "grid size-18 place-items-center rounded-2xl border border-gray-200 bg-white transition-colors hover:bg-gray-50";

export function SocialSignIn() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-3 type-body-l text-gray-500">
        <span className="h-px flex-1 bg-gray-200" />
        or
        <span className="h-px flex-1 bg-gray-200" />
      </div>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          aria-label="Continue with Facebook"
          className={socialButton}
        >
          <FaFacebook aria-hidden className="size-10 text-gray-950" />
        </button>
        <button
          type="button"
          aria-label="Continue with Google"
          className={socialButton}
        >
          <FaGoogle aria-hidden className="size-9 text-gray-950" />
        </button>
      </div>
    </div>
  );
}
