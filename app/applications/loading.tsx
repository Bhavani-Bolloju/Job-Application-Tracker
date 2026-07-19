import Breadcrumbs from "@/app/_components/Breadcrumbs";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

import FilterSectionSkeleton from "./_components/filter/FilterSectionSkeleton";
import ApplicationTableSkeleton from "./_components/ApplicationTableSkeleton";

export default function Loading() {
  return   <div className="py-8 px-12">
      <Breadcrumbs />
      <div className="flex items-center justify-between mb-5">
        <h1 className="mb-4 flex items-center gap-3 text-accent-2">
          <BriefcaseBusiness className="w-8 h-auto" />
          <span className="capitalize text-page-title text-text-secondary">
            {" "}
            my applications
          </span>
        </h1>
        <Button
          className="flex items-center gap-1 py-3 px-5 h-auto hover:cursor-pointer bg-accent-1 hover:bg-accent-2"
          disabled
        >
          <Plus />
          <span>Add application</span>
        </Button>
      </div>

      <FilterSectionSkeleton />

      <ApplicationTableSkeleton />
    </div>
}
