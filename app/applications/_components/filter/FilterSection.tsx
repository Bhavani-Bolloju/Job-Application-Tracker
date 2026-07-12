"use client";

import FilterToolbar from "./FilterToolbar";
import ActiveFiltersBar from "./ActiveFiltersBar";
import { Application } from "@/lib/types";

type Props = {
  applications: Application[];
};

function FilterSection({ applications }: Props) {
  return (
    <div className=" mb-8 rounded-md border-2 border-gray-100">
      <FilterToolbar applications={applications} />
      <ActiveFiltersBar />
    </div>
  );
}

export default FilterSection;
