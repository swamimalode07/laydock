"use client";
import React from "react";
import { ArrowRight, Plus } from "lucide-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { Spinner } from "@/components/spinner";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
import Button from "@/components/Button";
import Video from 'next-video';
import demovideo from "@/videos/demo-video.mp4"

const font = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

const Heading = () => {
  const { isLoading } = useConvexAuth();

  return (
    <div className="flex flex-col items-center justify-start text-center px-4 pt-28">
      <div className="max-w-3xl space-y-4 text-black">
        <h1
          className={cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight sm:leading-snug md:leading-[1.1] tracking-tight",
            font.className
          )}
        >
          Everything starts with <br className="hidden sm:block" />
          <span className="text-gray-900">Zeroᵗʰ Page.</span>
        </h1>

        <h3 className="text-base sm:text-xl md:text-2xl font-light font-sans -mt-2">
          A blank space for infinite beginnings — where you write, plan, and
          build with precision.
        </h3>
      </div>

      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      )}

      <SignedIn>
        <Button asChild variant="secondary" className="mt-6">
          <Link href="/documents">
            Try this site
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal">
          <Button title="Create Page" icon={Plus} className="mt-4" />
        </SignInButton>
      </SignedOut>

      <div className="w-full mt-8 max-w-4xl"> 
          <Video src={demovideo} />
      </div>
    </div>
  );
};

export default Heading;
