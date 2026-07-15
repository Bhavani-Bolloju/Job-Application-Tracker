import React from "react";

import { Status, cardColors } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";

import { Badge } from "@/components/ui/badge";

type Props = {
  role: string;
  company: string;
  status: Status;
  appliedDate: Date;
};

function RecentActivityItem({ role, company, status, appliedDate }: Props) {
  const formatAppliedDate = formatDistanceToNow(appliedDate, {
    addSuffix: true
  });

  return (
    <li className="grid grid-cols-[45px_1fr_auto] grid-rows-2 gap-x-5 gap-y-1 pb-5 ">
      <div className="col-span-1 col-start-1 row-start-1 row-span-2 border rounded-sm flex items-center justify-center text-2xl font-semibold  shadow-md ">
        {company[0]}
      </div>
      <div className="col-start-2 col-span-1 font-medium">{role}</div>
      <div className="col-start-2 col-span-1 row-start-2 row-span-1 text-sm text-text-muted">
        {company}
      </div>
      <div className={`col-start-3 col-span-1 row-start-1 text-center`}>
        <Badge
          className={`${cardColors[status]["icon-text"]} ${cardColors[status]["icon-bg"]} font-medium`}
        >
          {status[0] + status.slice(1).toLowerCase()}
        </Badge>
      </div>

      <div className="col-start-3 row-start-2 text-sm text-text-muted">{formatAppliedDate}</div>
    </li>
  );
}

export default RecentActivityItem;
