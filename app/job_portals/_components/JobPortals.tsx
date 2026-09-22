import React from "react";

import { JobPortalProps } from "@/lib/types";

import JobPortalCard from "./JobPortalCard";

import { Input } from "@/components/ui/input";

type Props = {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  jobPortals: JobPortalProps[];
  onEdit: () => void;
  searchKeyword: string;
  onDelete: (id: string) => void;
};
function JobPortals({
  onSearch,
  jobPortals,
  onEdit,
  onDelete,
  searchKeyword
}: Props) {
  return (
    <div className="border-2">
      <div>
        <div>portal count</div>
        <div>
          <Input type="text" onChange={onSearch} value={searchKeyword} />
        </div>
      </div>
      <ul>
        {jobPortals?.length > 0 &&
          jobPortals.map((jobPortal) => (
            <JobPortalCard
              key={jobPortal.id}
              name={jobPortal.name}
              link={jobPortal.link}
              description={jobPortal.description}
              id={jobPortal.id}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
      </ul>
    </div>
  );
}

export default JobPortals;

