import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-providers";
import { Toaster } from "sonner";
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from "@/components/providers/modal-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "Laydock",
  description: "Another normie project",
  icons:[
    {
      media:"(prefers-color-scheme:light)",
      url:"/logo.svg",
      href:"/logo.svg"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
           <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
        <ConvexClientProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="laydock-key"
        >
          <Toaster position="top-right"/> 
            <ModalProvider/>
            {children}
        </ThemeProvider>
      </ConvexClientProvider>
      </ClerkProvider>
      </body>
    </html>
  );
}
