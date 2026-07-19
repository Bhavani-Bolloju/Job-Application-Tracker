"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

function FilterSectionSkeleton() {
  return (
    <div className="mb-8 rounded-md shadow-sm shadow-border border border-border">
      <Skeleton className="w-full p-5 flex flex-row items-center gap-5 rounded-b-none">
        <Skeleton className="basis-[20%] py-5 bg-background" />
        <Skeleton className="basis-[15%] py-5 bg-background" />
        <Skeleton className="basis-[15%] py-5 bg-background" />
        <Skeleton className="basis-[15%] py-5 bg-background" />
      </Skeleton>
      <div className="rounded-t-none w-full p-5 flex flex-row items-center gap-5 justify-between">
        <span className="mr-3 font-medium text-card-title">
          Active Filters:
        </span>
        <Button
          variant="link"
          className="ml-auto hover:cursor-pointer text-accent-1 hover:text-accent-3"
        >
          Clear all
        </Button>
      </div>
    </div>
  );
}

export default FilterSectionSkeleton;
