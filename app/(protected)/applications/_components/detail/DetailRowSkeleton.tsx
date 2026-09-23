import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

function DetailRowSkeleton() {
  return (
    <li className="flex items-center w-full p-3 gap-2">
      <Skeleton className="basis-1/5 h-6" />
      <Skeleton className="basis-1/5 h-6" />
    </li>
  );
}

export default DetailRowSkeleton;
