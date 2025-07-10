"use client";

import { Button } from "@/components/ui/button";
import { Calendar1 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <Calendar1 />
          <h1 className="text-2xl font-bold text-foreground">BookEasely</h1>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#home"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="#who-is-for"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Who It&apos;s For
          </Link>
          <Link
            href="#how-it-works"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex">
            Sign In
          </Button>
          <Button onClick={() => router.push("/auth/register")}>
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
}
