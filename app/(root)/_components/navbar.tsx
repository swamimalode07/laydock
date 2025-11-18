"use client";

import { ModeToggle } from "@/components/mode-toggle";
import Button from "@/components/Button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { SignInButton, UserButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import { LogIn } from "lucide-react";

const font = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

const Navbar = () => {
  const scrolled = useScrollTop();
  const { isLoading } = useConvexAuth();

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "hidden"
          : ""
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LEFT — Logo + Name */}
        <div className="flex items-center gap-2">
          <Image
            src="/image.png"
            alt="Laydock Logo"
            width={32}
            height={32}
            className="rounded-md"
          />

          <p className={cn("text-2xl select-none", font.className)}>
            ZeroPage
          </p>
        </div>

        {/* RIGHT — Auth Buttons + Toggle */}
        <div className="flex items-center gap-4">

          {isLoading && <Spinner />}

          <SignedOut>
            {!isLoading && (
              <SignInButton mode="modal">
                <Button
                  icon={LogIn}
                  title="Log in"
                  className="font-light"
                />
              </SignInButton>
            )}
          </SignedOut>

          <SignedIn>
            {!isLoading && (
              <>
                <Button >
                  <Link href="/documents">
                  <span>Enter Zeropage</span>
                  </Link>
                </Button>
                <UserButton afterSignOutUrl="/" />
              </>
            )}
          </SignedIn>

          {/* <ModeToggle /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
