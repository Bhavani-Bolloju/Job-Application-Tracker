import React from "react";
import { Button } from "@/components/ui/button";

import { useFilter } from "../../context/FilterContext";
import { X } from "lucide-react";
import { format } from "date-fns";
import { Minus } from "lucide-react";

function ActiveFiltersBar() {
  const {
    searchQuery,
    selectedStatus,
    selectedPlatform,
    onClearFilter,
    onClearAllFilters,
    draftAppliedDate,
    draftFollowupDate
  } = useFilter();

  return (
    <div className="border-t border-gray-200 py-3">
      <div className="px-6 flex items-start">
        <span className="mr-3 font-medium text-card-title">
          Active Filters:
        </span>
        <div className="flex flex-wrap justify-start items-center gap-5 text-gray-700 text-sm">
          {searchQuery !== "" && (
            <div className="border-2 px-2 flex gap-1 items-center">
              <span>Company: </span>
              <span>{searchQuery}</span>
              <button
                className="hover:cursor-pointer ml-2 self-center"
                onClick={() => onClearFilter("query")}
              >
                <X className="w-4 h-auto text-gray-600" />
              </button>
            </div>
          )}
          {selectedStatus !== "all" && (
            <div className="border-2 px-2 flex gap-1 items-center">
              <span>Status: </span>
              <span>{selectedStatus}</span>
              <button
                className="hover:cursor-pointer ml-2"
                onClick={() => onClearFilter("status")}
              >
                <X className="w-3 text-gray-500" />
              </button>
            </div>
          )}
          {selectedPlatform !== "all" && (
            <div className="border-2 px-2 flex gap-1 items-center">
              <span>Platform: </span>
              <span>{selectedPlatform}</span>
              <button
                className="hover:cursor-pointer ml-2"
                onClick={() => onClearFilter("platform")}
              >
                <X className="w-3 text-gray-500" />
              </button>
            </div>
          )}
          {draftAppliedDate && draftAppliedDate.from && draftAppliedDate.to && (
            <div className="border-2 px-2 flex gap-1 items-center">
              <span>Applied Date: </span>
              <span className="flex items-center gap-1">
                <span>
                  {format(new Date(draftAppliedDate.from), "dd MMM y")}
                </span>
                <Minus className="w-4 text-gray-600" />
                <span>{format(new Date(draftAppliedDate.to), "dd MMM y")}</span>
              </span>
              <button
                className="hover:cursor-pointer ml-2"
                onClick={() => onClearFilter("appliedDate")}
              >
                <X className="w-5 h-auto text-gray-600" />
              </button>
            </div>
          )}
          {draftFollowupDate &&
            draftFollowupDate.from &&
            draftFollowupDate.to && (
              <div className="border-2 px-2 flex gap-1 items-center">
                <span>Follow-up Date: </span>
                <span className="flex items-center gap-1">
                  <span>
                    {format(new Date(draftFollowupDate.from), "dd MMM Y")}
                  </span>
                  <Minus className="w-4 text-gray-600" />
                  <span>
                    {format(new Date(draftFollowupDate.to), "dd MMM Y")}
                  </span>
                </span>
                <button
                  className="hover:cursor-pointer ml-2"
                  onClick={() => onClearFilter("followupDate")}
                >
                  <X className="w-3 text-gray-500" />
                </button>
              </div>
            )}
        </div>
        <Button
          variant="link"
          className="ml-auto text-blue-700 hover:cursor-pointer"
          onClick={onClearAllFilters}
        >
          Clear all
        </Button>
      </div>
    </div>
  );
}

export default ActiveFiltersBar;
