import React from "react";

import { Status, cardColors } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";

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
    <li className="grid grid-cols-[45px_1fr_auto] grid-rows-2 gap-x-5 gap-y-1 py-4">
      <div className="col-span-1 col-start-1 row-start-1 row-span-2 border rounded-sm flex items-center justify-center text-2xl font-semibold text-gray-700 shadow-md shadow-gray-100">
        {company[0]}
      </div>
      <div className="col-start-2 col-span-1 font-medium">{role}</div>
      <div className="col-start-2 col-span-1 row-start-2 row-span-1 text-sm">
        {company}
      </div>
      <div
        className={`col-start-3 col-span-1 row-start-1 text-center ${cardColors[status]["icon-text"]} ${cardColors[status]["icon-bg"]} rounded-sm text-sm font-medium`}
        // style={{ text: chartColors[status] }}
      >
        {status[0] + status.slice(1).toLowerCase()}
      </div>
      <div className="col-start-3 row-start-2 text-sm">{formatAppliedDate}</div>
    </li>
  );
}

export default RecentActivityItem;
