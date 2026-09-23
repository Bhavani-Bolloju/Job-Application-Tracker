"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { TriangleAlert } from "lucide-react";
import Link from "next/link";

export default function Error({
  reset
}: {
  // error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-xl">
        <CardHeader>
          <CardTitle className="flex flex-col gap-3 justify-center items-center mb-4">
            <TriangleAlert className="text-red-600 w-10 h-auto" />

            <span className="text-card-title">Something went wrong</span>
          </CardTitle>
          <CardDescription className="text-center">
            We couldn&apos;t load the page. Please try again.
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex justify-center gap-5">
          <Button
            onClick={reset}
            className="hover:cursor-pointer bg-accent-3 hover:bg-accent-2 text-background"
          >
            Try again
          </Button>
          <Button variant="outline" asChild>
            <Link href="/applications">Back to Applications</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

