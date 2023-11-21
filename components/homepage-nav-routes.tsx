"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

const HomeNavRoutes = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="flex gap-x-2 ml-auto">
      {!isSignedIn ? (
        <Link href="/dashboard">
          <Button size="sm" variant="ghost">
            <User className="h-4 w-4 mr-2" />
            Sign in
          </Button>
        </Link>
      ) : (
        <Link href="/dashboard">
          <Button size="sm" variant="ghost">
            Dashboard
          </Button>
        </Link>
      )}

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default HomeNavRoutes;
