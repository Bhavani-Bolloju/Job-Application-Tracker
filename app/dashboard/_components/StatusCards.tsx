import React from "react";
import { StatusCount, STATUSES } from "@/lib/types";
import {
  FileText,
  Users,
  BriefcaseBusiness,
  CircleX,
  Heart
} from "lucide-react";

import StatusCard from "./StatusCard";
type Props = {
  statusCount: StatusCount[];
};

const icons = {
  APPLIED: FileText,
  INTERVIEWED: Users,
  OFFER: BriefcaseBusiness,
  REJECTED: CircleX,
  WISHLIST: Heart
};
function StatusCards({ statusCount }: Props) {
  const statusCountMap = new Map();

  for (const { status, _count } of statusCount) {
    statusCountMap.set(status, _count.status);
  }

  for (const status of STATUSES) {
    if (!statusCountMap.has(status)) {
      statusCountMap.set(status, 0);
    }
  }

  const statusObj = Object.fromEntries(statusCountMap);

  return (
    <ul className="grid grid-cols-[repeat(5,minmax(100px,180px))] gap-5 mb-5">
      {STATUSES.map((status) => {
        return (
          <StatusCard
            icon={icons[status]}
            key={status}
            statusName={status}
            statusCount={statusObj[status]}
          />
        );
      })}
    </ul>
  );
}

export default StatusCards;
