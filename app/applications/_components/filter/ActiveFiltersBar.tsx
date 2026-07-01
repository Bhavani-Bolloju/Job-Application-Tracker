import React from "react";
import { Button } from "@/components/ui/button";

import { useFilter } from "../../context/FilterContext";
import { X } from "lucide-react";

function ActiveFiltersBar() {
  const { searchQuery, selectedStatus, selectedPlatform, onClearFilter, onClearAllFilters } = useFilter();

  return (
    <div className="border-t-2 py-3">
      <div className="px-6 flex items-start">
        <span className="mr-3">Active Filters:</span>
        <div className="flex flex-wrap justify-start items-center gap-5">
          {searchQuery !== "" && (
            <div className="border-2 px-2 flex gap-2 items-center">
              <span>{searchQuery}</span>
              <button className="hover:cursor-pointer" onClick={()=> onClearFilter("query")} >
                <X className="w-3" />
              </button>
            </div>
          )}
          {selectedStatus !== "all" && (
            <div className="border-2 px-2 flex gap-2 items-center">
              <span>{selectedStatus}</span>
              <button className="hover:cursor-pointer" onClick={()=> onClearFilter("status")} >
                <X className="w-3" />
              </button>
            </div>
          )}
          {selectedPlatform !== "all" && (
            <div className="border-2 px-2 flex gap-2 items-center">
              <span>{selectedPlatform}</span>
              <button className="hover:cursor-pointer" onClick={()=> onClearFilter("platform")} >
                <X className="w-3" />
              </button>
            </div>
          )}
        </div>
        <Button
          variant="link"
          className="ml-auto text-blue-700 hover:cursor-pointer"
          onClick={onClearAllFilters }
        >
          Clear all
        </Button>
      </div>
    </div>
  );
}

export default ActiveFiltersBar;

