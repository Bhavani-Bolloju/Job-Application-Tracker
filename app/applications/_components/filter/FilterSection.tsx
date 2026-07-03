"use client";

import FilterToolbar from "./FilterToolbar";
import ActiveFiltersBar from "./ActiveFiltersBar";
import { Application } from "@/lib/types";


type Props = {
  applications: Application[];
};

function FilterSection({ applications }: Props) {
  return (
    <div className="border-2 m-5 rounded-lg shadow-sm shadow-gray-100 pt-3">
      <FilterToolbar applications={applications} />
      <ActiveFiltersBar />
    </div>
  );
}

export default FilterSection;



