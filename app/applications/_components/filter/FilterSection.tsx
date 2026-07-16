"use client";

import FilterToolbar from "./FilterToolbar";
import ActiveFiltersBar from "./ActiveFiltersBar";
import { Application } from "@/lib/types";

type Props = {
  applications: Application[];
};

function FilterSection({ applications }: Props) {
  return (
    <div className="mb-8 divide-y-2 space-y-5 rounded-md shadow-sm shadow-border border border-border  bg-bg--1">
      <FilterToolbar applications={applications} />
      <ActiveFiltersBar />
    </div>
  );
}

export default FilterSection;
