import React, { useState } from "react";

import { JobPortalProps } from "@/lib/types";

import JobPortalCard from "./JobPortalCard";

import { Input } from "@/components/ui/input";

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
    (jobPortal.name.toLowerCase()).includes(inputSearch)
  );

  console.log(filteredJobPortals);

  return (
    <div className="border-2">
      <div>
        <div>portal count</div>
        <div>
          <Input type="text" onChange={handleSearch} value={inputSearch} />
        </div>
      </div>
      <ul>
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

