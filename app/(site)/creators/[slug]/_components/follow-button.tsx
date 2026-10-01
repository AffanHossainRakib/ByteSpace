"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function FollowButton() {
  const [following, setFollowing] = useState(false);
  return (
    <Button
      size="pill"
      aria-pressed={following}
      onClick={() => setFollowing((f) => !f)}
      className="text-[#040819] focus-visible:ring-white/70"
    >
      {following ? "Following" : "Follow"}
    </Button>
  );
}
