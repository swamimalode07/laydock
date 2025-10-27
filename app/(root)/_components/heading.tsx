"use client";
import { Button } from '@/components/ui/button';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useConvexAuth } from 'convex/react';
import Link from 'next/link';
import { Spinner } from '@/components/spinner';
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';

const Heading = () => {
  const { isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4 text-3xl sm:text-5xl md:text-6xl font-bold pt-30">
      <h1 className="underline">this is heading component Lorem ipsum dolor sit</h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">Lorem ipsum dolor sit.</h3>

      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      )}

      <SignedIn>
        <Button asChild>
          <Link href="/documents">
            Try this site
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal">
          <Button>
            Laydock
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
};

export default Heading;
