import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function StatusCardsSkeleton() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,14rem)] gap-x-4 mb-8">
      <Skeleton className="py-13 w-full" />
      <Skeleton className="py-13 w-full" />
      <Skeleton className="py-13 w-full" />
      <Skeleton className="py-13 w-full" />
      <Skeleton className="py-13 w-full" />
    </ul>
  );
}

export default StatusCardsSkeleton;
