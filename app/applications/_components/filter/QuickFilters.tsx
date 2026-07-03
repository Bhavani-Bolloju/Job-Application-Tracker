import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ListFilter } from "lucide-react";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { STATUSES } from "@/lib/types";
import { Application } from "@/lib/types";

import { useFilter } from "../../context/FilterContext";

type Props = {
  applications: Application[];
};

function QuickFilters({ applications }: Props) {
  const platforms = applications
    .map((application) => application.platform)
    .filter((val): val is string => val !== undefined);

  const uniquePlatforms = new Set(platforms);

  const {
    searchQuery,
    onSearchQueryChange,
    selectedStatus,
    onStatusChange,
    selectedPlatform,
    onPlatformChange,
    onToggleMoreFilter
  } = useFilter();

  const handleSearchQuery = function (e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    onSearchQueryChange(value);
  };


  return (
    <FieldGroup className="flex flex-row gap-5 items-stretch px-6 pt-2 pb-4">
      <Field
        orientation="horizontal"
        className="relative h-12 px-3 flex border-2 rounded-lg basis-72"
      >
        <Search
          aria-hidden="true"
          className="absolute top-1/2 -translate-y-1/2 left-2 w-4 text-gray-500"
        />
        <Input
          type="search"
          placeholder="Search Company..."
          className=" ml-5 border-0 focus:outline-none focus:ring-0 shadow-none focus:border-0  focus-visible:ring-0 rounded-none p-0 text-inherit text-base"
          value={searchQuery}
          onChange={handleSearchQuery}
        />
      </Field>

      <div className="relative border-2 rounded-lg flex items-center justify-center basis-50">
        <FieldLabel
          htmlFor="status"
          className="absolute -top-3 translate-y-0  left-2 bg-white px-2 capitalize"
        >
          status
        </FieldLabel>
        <Select value={selectedStatus} onValueChange={onStatusChange}>
          <SelectTrigger className="w-full focus-visible:ring-0 border-0 rounded-none capitalize ">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>

              {STATUSES.map((status) => {
                const val = status.toLowerCase();
                return (
                  <SelectItem key={status} value={val} className="capitalize">
                    {val}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="relative border-2 rounded-lg flex items-center justify-center basis-50 ">
        <FieldLabel
          htmlFor="platform"
          className="absolute -top-3 translate-y-0  left-2 bg-white px-2 capitalize"
        >
          platform
        </FieldLabel>
        <Select value={selectedPlatform} onValueChange={onPlatformChange}>
          <SelectTrigger className="w-full focus-visible:ring-0 border-0 rounded-none capitalize">
            <SelectValue placeholder="Select platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>

              {uniquePlatforms.size > 0 &&
                [...uniquePlatforms].map((platform) => {
                  return (
                    <SelectItem
                      key={platform}
                      value={platform}
                      className="capitalize"
                    >
                      {platform}
                    </SelectItem>
                  );
                })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button
        className="flex self-stretch h-auto hover:cursor-pointer"
        variant="outline"
        onClick={onToggleMoreFilter}
      >
        <ListFilter className="w-4.5" />
        <span className="capitalize">more filters</span>
        <ChevronDown className="w-4.5" />
      </Button>
    </FieldGroup>
  );
}

export default QuickFilters;

