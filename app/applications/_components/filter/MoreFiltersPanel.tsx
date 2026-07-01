import React, { useState } from "react";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FieldLabel } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

import { useFilter } from "../../context/FilterContext";

function MoreFiltersPanel() {
  const {
    appliedDate,
    followupDate,
    onAppliedDateChange,
    onFollowupDateChange
  } = useFilter();

  // console.log(appliedDate, "applied date more filters");
  // console.log(followupDate, "follow up date more filters");

  // TODO: Close popover automatically after a complete range selection.

  return (
    <div className="mt-3 border-t-2 py-2">
      <div className="mb-5 px-6">More filters</div>
      <div className="flex items-stretch gap-5 px-6 pb-3">
        <div className="relative border-2 rounded-lg flex items-center justify-center  h-12 ">
          <FieldLabel
            htmlFor="applied-date"
            className="absolute -top-3 translate-y-0  left-2 bg-white px-2 capitalize"
          >
            applied date
          </FieldLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="applied-date"
                className="justify-start px-2.5 border-none mx-5 hover:cursor-pointer"
              >
                <CalendarIcon />
                {appliedDate?.from ?
                  appliedDate.to ?
                    <>
                      {format(appliedDate.from, "LLL dd, y")} -{" "}
                      {format(appliedDate.to, "LLL dd, y")}
                    </>
                  : format(appliedDate.from, "LLL dd, y")
                : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                defaultMonth={appliedDate?.from}
                selected={appliedDate}
                onSelect={onAppliedDateChange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="relative border-2 rounded-lg flex items-center justify-center ">
          <FieldLabel
            htmlFor="follow-up-date"
            className="absolute -top-3 translate-y-0  left-2 bg-white px-2 capitalize"
          >
            Follow-up date
          </FieldLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="follow-up-date"
                className="justify-start px-2.5 border-0 mx-5 hover:cursor-pointer"
              >
                <CalendarIcon />
                {followupDate?.from ?
                  followupDate.to ?
                    <>
                      {format(followupDate.from, "LLL dd, y")} -{" "}
                      {format(followupDate.to, "LLL dd, y")}
                    </>
                  : format(followupDate.from, "LLL dd, y")
                : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                defaultMonth={followupDate?.from}
                selected={followupDate}
                onSelect={onFollowupDateChange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
        <Button variant="outline" className="h-auto capitalize px-4 ml-auto">
          cancel
        </Button>
        <Button className="h-auto capitalize px-4">apply filter</Button>
      </div>
    </div>
  );
}

export default MoreFiltersPanel;

