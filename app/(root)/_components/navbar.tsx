"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { SignInButton, UserButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { Space_Grotesk } from "next/font/google";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Navbar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <nav
      className={cn(
        "z-50 fixed top-0 w-full backdrop-blur-md bg-background/80 dark:bg-[#1f1f1f]/80 transition-all duration-300",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-x-2">
          <span className="text-2xl animate-spin-slow">🌀</span>
          <p
            className={cn(
              "text-2xl font-semibold tracking-tight select-none",
              font.className
            )}
          >
            Laydock
          </p>
        </div>

        <div className="flex items-center gap-x-4">
          {isLoading && <Spinner />}

          <SignedOut>
            {!isLoading && (
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost">Login</Button>
                </SignInButton>
                <SignInButton mode="modal">
                  <Button>Get for free</Button>
                </SignInButton>
              </>
            )}
          </SignedOut>

          <SignedIn>
            {!isLoading && (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/documents">Enter Jotion</Link>
                </Button>
                <UserButton afterSignOutUrl="/" />
              </>
            )}
          </SignedIn>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
