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
    <li className="grid grid-cols-2 py-5 px-3 rounded-md shadow gap-x-2 gap-y-1">
      <div className="col-start-1 col-end-2 row-start-1 row-span-2  flex self-center justify-self-center items-center justify-center h-12 w-12 rounded-full overflow-hidden">
        <Icon
          className={`h-full w-full ${cardColors[statusName]["icon-text"]} ${cardColors[statusName]["icon-bg"]} p-3`}
        />
      </div>
      <div className="col-start-2 col-span-1 row-start-1 row-span-1 text-sm self-start">
        {statusName[0].toUpperCase()}{ statusName.slice(1).toLowerCase()}
      </div>
      <div className="col-start-2 col-span-1 row-start-2 row-span-1 text-2xl">
        {statusCount}
      </div>
    </li>
  );
}

export default StatusCard;

