import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
function RecentActivitySkeleton() {
  return (
    <div className="flex-1 p-8 rounded-md shadow-sm shadow-border border border-border bg-bg--1">
      <Skeleton className="w-2/4 h-8 mb-5"></Skeleton>
      <ul className="divide-y-2 space-y-5">
        <Skeleton className="py-8 "></Skeleton>
        <Skeleton className="py-8 "></Skeleton>
        <Skeleton className="py-8 "></Skeleton>
        <Skeleton className="py-8 "></Skeleton>
        <Skeleton className="py-8 "></Skeleton>
      </ul>
    </div>
  );
}

export default RecentActivitySkeleton;
