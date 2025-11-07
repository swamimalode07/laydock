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
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <nav
  className={cn(
    "z-50 fixed top-4 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out rounded-2xl",
    scrolled ? "opacity-0 : pointer-events-none"
  )}
>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-x-2">
          <Image
            src="/image.png"
            alt="Laydock Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
         <p
          className={cn("text-2xl select-none text-black" ,font.className)}>ZeroPage</p>
        </div>

        <div className="flex items-center gap-x-4">
          {isLoading && <Spinner />}

          <SignedOut>
            {!isLoading && (
              <>
                <SignInButton mode="modal">
                  <Button icon={LogIn} title="Log in" className="font-light"></Button>
                </SignInButton>
              </>
            )}
          </SignedOut>

          <SignedIn>
            {!isLoading && (
              <>
                <Button asChild>
                  <Link href="/documents">Enter Zeropage</Link>
                </Button>
                <UserButton afterSignOutUrl="/" />
              </>
            )}
          </SignedIn>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
