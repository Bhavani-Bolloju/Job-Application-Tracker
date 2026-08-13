import { LucideIcon } from "lucide-react";
import React from "react";

import { cardColors } from "@/lib/types";

import { Status } from "@/lib/types";

type Props = {
  icon: LucideIcon;
  statusName: Status;
  statusCount: number;
};

function StatusCard({ icon: Icon, statusName, statusCount }: Props) {
  return (
    <li className="grid grid-cols-2 rounded-md shadow-sm shadow-border border border-border gap-x-2 gap-y-1 p-5 bg-bg--1">
      <div className="col-start-1 col-end-2 row-start-1 row-span-2  flex self-center justify-self-center items-center justify-center rounded-full overflow-hidden">
        <Icon
          className={`h-full w-full ${cardColors[statusName]["icon-text"]} ${cardColors[statusName]["icon-bg"]} p-4`}
        />
      </div>
      <div className="col-start-2 col-span-1 row-start-1 row-span-1 self-start font-medium">
        {statusName[0].toUpperCase()}
        {statusName.slice(1).toLowerCase()}
      </div>
      <div className="col-start-2 col-span-1 row-start-2 row-span-1 text-3xl max-md:text-2xl font-semibold text-text-secondary">
        {statusCount}
      </div>
    </li>
  );
}

export default StatusCard;
