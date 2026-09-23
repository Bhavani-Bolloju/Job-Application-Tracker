import { createContext, useState, useContext } from "react";
import { Status } from "@/lib/types";

import { type DateRange } from "react-day-picker";

type FilterContextType = {
  searchQuery: string;
  selectedStatus: Status | "all";
  selectedPlatform: string | "all";

  draftAppliedDate: DateRange | undefined;
  draftFollowupDate: DateRange | undefined;
  appliedDate: DateRange | undefined;
  followupDate: DateRange | undefined;

  isMoreFilterOpen: boolean;

  onSearchQueryChange: (value: string) => void;
  onStatusChange: (status: Status | "all") => void;
  onPlatformChange: (platform: string) => void;
  onDraftAppliedDateChange: (date: DateRange | undefined) => void;
  onDraftFollowupDateChange: (date: DateRange | undefined) => void;
  onAppliedDateChange: (date: DateRange | undefined) => void;
  onFollowupDateChange: (date: DateRange | undefined) => void;
  onToggleMoreFilter: () => void;
  onClearAllFilters: () => void;
  onClearFilter: (type: string) => void;
  onApplyMoreFilters: () => void;
  onCancelMoreFilters: () => void;
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
  const [draftAppliedDate, setDraftAppliedDate] = useState<
    DateRange | undefined
  >(undefined);
  const [draftFollowupDate, setDraftFollowUpDate] = useState<
    DateRange | undefined
  >(undefined);

  const [appliedDate, setAppliedDate] = useState<DateRange | undefined>(
    draftAppliedDate
  );
  const [followupDate, setFollowUpDate] = useState<DateRange | undefined>(
    draftFollowupDate
  );

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

  const handleApplyMoreFilter = function () {
    setDraftAppliedDate(appliedDate);
    setDraftFollowUpDate(followupDate);
  };

  const handleCancelMoreFilter = function () {
    setAppliedDate(undefined);
    setFollowUpDate(undefined);
    setDraftAppliedDate(undefined);
    setDraftFollowUpDate(undefined);
  };

  const handleClearFilter = function (type: string) {
    if (type === "query") {
      setSearchQuery("");
    } else if (type === "status") {
      setSelectedStatus("all");
    } else if (type === "platform") {
      setSelectedPlatform("all");
    } else if (type === "appliedDate") {
      setDraftAppliedDate(undefined);
      setAppliedDate(undefined);
    } else if (type === "followupDate") {
      setDraftFollowUpDate(undefined);
      setFollowUpDate(undefined);
    }
  };

  const handleClearAllFilters = function () {
    setSearchQuery("");
    setSelectedStatus("all");
    setSelectedPlatform("all");
    setDraftAppliedDate(undefined);
    setDraftFollowUpDate(undefined);
    setIsMoreFilterOpen(false);
  };

  const value: FilterContextType = {
    searchQuery,
    selectedStatus,
    selectedPlatform,
    draftAppliedDate,
    draftFollowupDate,
    appliedDate,
    followupDate,
    isMoreFilterOpen,

    onSearchQueryChange: handleSearchQuery,
    onStatusChange: handleStatus,
    onPlatformChange: handlePlatform,
    onAppliedDateChange: handleAppliedDate,
    onDraftAppliedDateChange: handleAppliedDate,
    onFollowupDateChange: handleFollowupDate,
    onDraftFollowupDateChange: handleFollowupDate,
    onToggleMoreFilter: handleToggleMoreFilter,
    onClearAllFilters: handleClearAllFilters,
    onClearFilter: handleClearFilter,
    onApplyMoreFilters: handleApplyMoreFilter,
    onCancelMoreFilters: handleCancelMoreFilter
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

