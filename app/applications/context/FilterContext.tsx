import { createContext, useState, useContext } from "react";
import { Status } from "@/lib/types";

import { type DateRange } from "react-day-picker";

type FilterContextType = {
  searchQuery: string;
  selectedStatus: Status | "all";
  selectedPlatform: string | "all";

  appliedDate: DateRange | undefined;
  followupDate: DateRange | undefined;

  isMoreFilterOpen: boolean;

  onSearchQueryChange: (value: string) => void;
  onStatusChange: (status: Status | "all") => void;
  onPlatformChange: (platform: string) => void;
  onAppliedDateChange: (date: DateRange | undefined) => void;
  onFollowupDateChange: (date: DateRange | undefined) => void;
  onToggleMoreFilter: () => void;
  onClearAllFilters: () => void;
  onClearFilter: (type: string) => void;
};
export const FilterContext = createContext<FilterContextType | null>(null);

export const FilterProvider = function ({
  children
}: {
  children: React.ReactNode;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<Status | "all">("all");
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [isMoreFilterOpen, setIsMoreFilterOpen] = useState(false);
  const [appliedDate, setAppliedDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined
  });
  const [followupDate, setFollowUpDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined
  });

  const handleSearchQuery = function (value: string) {
    setSearchQuery(value);
  };

  const handleStatus = function (status: Status | "all") {
    setSelectedStatus(status);
  };
  const handlePlatform = function (platform: string) {
    setSelectedPlatform(platform);
  };
  const handleToggleMoreFilter = function () {
    setIsMoreFilterOpen((prev) => !prev);
  };

  const handleAppliedDate = function (date: DateRange | undefined) {
    setAppliedDate(date);
  };

  const handleFollowupDate = function (date: DateRange | undefined) {
    setFollowUpDate(date);
  };

  const handleClearFilter = function (type: string) {
    if (type === "query") {
      setSearchQuery("");
    } else if (type === "status") {
      setSelectedStatus("all");
    } else if (type === "platform") {
      setSelectedPlatform("all");
    } else if (type === "appliedDate") {
      setAppliedDate({
        from: undefined,
        to: undefined
      });
    } else if (type === "followupDate") {
      setFollowUpDate({
        from: undefined,
        to: undefined
      });
    }
  };

  const handleClearAllFilters = function () {
    setSearchQuery("");
    setSelectedStatus("all");
    setSelectedPlatform("all");
  };

  const value: FilterContextType = {
    searchQuery,
    selectedStatus,
    selectedPlatform,
    appliedDate,
    followupDate,
    isMoreFilterOpen,

    onSearchQueryChange: handleSearchQuery,
    onStatusChange: handleStatus,
    onPlatformChange: handlePlatform,
    onAppliedDateChange: handleAppliedDate,
    onFollowupDateChange: handleFollowupDate,
    onToggleMoreFilter: handleToggleMoreFilter,
    onClearAllFilters: handleClearAllFilters,
    onClearFilter: handleClearFilter
  };

  return <FilterContext value={value}>{children}</FilterContext>;
};

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }

  return context;
}

