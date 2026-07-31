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

import { buildStatusCardsData } from "@/lib/dashboard";

const icons = {
  APPLIED: FileText,
  INTERVIEWED: Users,
  OFFER: BriefcaseBusiness,
  REJECTED: CircleX,
  WISHLIST: Heart
};
function StatusCards({ statusCount }: Props) {
  const statusObj = buildStatusCardsData(statusCount);
  
  console.log(statusObj, "status cards obj");

  return (
    <ul className="grid grid-cols-[repeat98(auto-fit,14rem)] gap-x-4 mb-8">
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
