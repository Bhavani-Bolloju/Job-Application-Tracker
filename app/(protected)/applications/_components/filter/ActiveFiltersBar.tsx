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
    <div className="px-5 pb-5 flex items-start">
      <span className="mr-3 font-medium text-card-title">Active Filters:</span>
      <div className="flex flex-wrap justify-start items-center gap-5 text-sm">
        {searchQuery !== "" && (
          <div className="border-2 border-border rounded-sm px-2 flex gap-1 items-center bg-bg--2">
            <span className="text-zinc-500">Company: </span>
            <span className="text-foreground">{searchQuery}</span>
            <button
              className="hover:cursor-pointer ml-2 self-center"
              onClick={() => onClearFilter("query")}
            >
              <X className="w-4 h-auto text-zinc-500 hover:text-text-tertiary" />
            </button>
          </div>
        )}
        {selectedStatus !== "all" && (
          <div className="border-2 border-border rounded-sm px-2 flex gap-1 items-center bg-bg--2">
            <span className="text-zinc-500">Status: </span>
            <span className="text-foreground">{selectedStatus}</span>
            <button
              className="hover:cursor-pointer ml-2 self-center"
              onClick={() => onClearFilter("status")}
            >
              <X className="w-4 h-auto text-zinc-500 hover:text-text-tertiary" />
            </button>
          </div>
        )}
        {selectedPlatform !== "all" && (
          <div className="border-2 border-border rounded-sm px-2 flex gap-1 items-center bg-bg--2">
            <span className="text-zinc-500">Platform: </span>
            <span className="text-foreground">{selectedPlatform}</span>
            <button
              className="hover:cursor-pointer ml-2 self-center"
              onClick={() => onClearFilter("platform")}
            >
              <X className="w-4 h-auto text-zinc-500 hover:text-text-tertiary" />
            </button>
          </div>
        )}
        {draftAppliedDate && draftAppliedDate.from && draftAppliedDate.to && (
          <div className="border-2 border-border px-2 flex gap-1 items-center">
            <span className="text-zinc-500">Applied Date: </span>
            <span className="flex items-center gap-1">
              <span className="text-foreground">
                {format(new Date(draftAppliedDate.from), "dd MMM y")}
              </span>
              <Minus className="w-4 text-foreground" />
              <span className="text-foreground">
                {format(new Date(draftAppliedDate.to), "dd MMM y")}
              </span>
            </span>
            <button
              className="hover:cursor-pointer ml-2 self-center"
              onClick={() => onClearFilter("appliedDate")}
            >
              <X className="w-4 h-auto text-zinc-500 hover:text-text-tertiary" />
            </button>
          </div>
        )}
        {draftFollowupDate &&
          draftFollowupDate.from &&
          draftFollowupDate.to && (
            <div className="border-2 border-border rounded-sm px-2 flex gap-1 items-center bg-bg--2">
              <span className="text-zinc-500">Follow-up Date: </span>
              <span className="flex items-center gap-1">
                <span className="text-foreground">
                  {format(new Date(draftFollowupDate.from), "dd MMM y")}
                </span>
                <Minus className="w-4 text-foreground" />
                <span className="text-foreground">
                  {format(new Date(draftFollowupDate.to), "dd MMM y")}
                </span>
              </span>
              <button
                className="hover:cursor-pointer ml-2 self-center"
                onClick={() => onClearFilter("followupDate")}
              >
                <X className="w-4 h-auto text-zinc-500 hover:text-text-tertiary" />
              </button>
            </div>
          )}
      </div>
      <Button
        variant="link"
        className="ml-auto hover:cursor-pointer text-accent-1 hover:text-accent-3"
        onClick={onClearAllFilters}
      >
        Clear all
      </Button>
    </div>
  );
}

export default ActiveFiltersBar;
