"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";
import Logo from "@/app/(dashboard)/_components/logo";

const HomeNavRoutes = () => {
  const { isSignedIn } = useUser();

  return (
    <>
      <div className="md:block md:mb-0 sm:px-6 sm:pt-6 sm:block">
        <div className="p-6">
          <Logo />
        </div>
      </div>
      <div className="flex gap-x-2 ml-auto">
        {!isSignedIn ? (
          <Link href="/dashboard">
            <Button size="sm" variant="ghost" className="max-[640px]:text-xs">
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
