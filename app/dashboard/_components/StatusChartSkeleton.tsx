import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

function StatusChartSkeleton() {
  return (
    <div className="basis-3/6 rounded-md shadow-md shadow-border p-8  bg-bg--1">
      <Skeleton className="w-2/4 h-8 mb-5"></Skeleton>
      <Skeleton className="h-100"></Skeleton>
    </div>
  );
}

export default StatusChartSkeleton;
