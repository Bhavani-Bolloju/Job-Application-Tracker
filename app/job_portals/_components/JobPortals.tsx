import React, { useState } from "react";

import { JobPortalProps } from "@/lib/types";

import JobPortalCard from "./JobPortalCard";

import { Input } from "@/components/ui/input";

import { Field } from "@/components/ui/field";
import { Search } from "lucide-react";

type Props = {
  // onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  jobPortals: JobPortalProps[];
  onEdit: (value: JobPortalProps) => void;
  // searchKeyword: string;
  onDelete: (id: string) => void;
};
function JobPortals({ jobPortals, onEdit, onDelete }: Props) {
  const [inputSearch, setInputSearch] = useState("");

  const handleSearch = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInputSearch(e.target.value);
  };

  const filteredJobPortals = jobPortals.filter((jobPortal) =>
    jobPortal.name.toLowerCase().includes(inputSearch.toLowerCase())
  );

  return (
    <div className="p-5 rounded-md shadow-sm shadow-border border border-border bg-bg--1">
      <div className="flex items-center justify-between mb-5">
        <div className="text-card-title text-text-muted">
          <span>Portals</span>
          <span>{` (${filteredJobPortals.length})`}</span>
        </div>

        <Field
          orientation="horizontal"
          className="relative flex px-2 py-1 border-2 rounded-lg sm:basis-72 text-body focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 w-full"
        >
          <Search
            aria-hidden="true"
            className=" absolute top-1/2 -translate-y-1/2 left-2 w-4 text-text-muted"
          />
          <Input
            type="search"
            placeholder="Search Company..."
            className=" ml-5 border-0 focus:outline-none focus:ring-0 shadow-none focus:border-0  focus-visible:ring-0 rounded-none px-2 font-geist text-body md:text-body placeholder:text-sm placeholder:text-text-muted "
            onChange={handleSearch}
            value={inputSearch}
          />
        </Field>
        {/* <div>
          <Input type="text" onChange={handleSearch} value={inputSearch}  />
        </div> */}
      </div>
      <ul className="divide-y-2 space-y-5 p-5 rounded-md shadow-sm shadow-border border border-border bg-bg--1">
        {filteredJobPortals?.length > 0 &&
          filteredJobPortals.map((jobPortal) => (
            <JobPortalCard
              key={jobPortal.id}
              jobPortal={jobPortal}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
      </ul>
    </div>
  );
}

export default JobPortals;







