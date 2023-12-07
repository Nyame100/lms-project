"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";

const HomeNavRoutes = () => {
  const { isSignedIn } = useUser();

  return (
    <>
      <div className="md:block md:mb-0 sm:px-6 sm:pt-6 sm:block">
        <SearchInput />
      </div>
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
    </>
  );
};

export default HomeNavRoutes;
