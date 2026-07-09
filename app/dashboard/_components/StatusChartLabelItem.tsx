import React from "react";

import { chartColors, Status } from "@/lib/types";
import { Percent } from "lucide-react";
type Props = {
  status: Status;
  count: number;
  total: number;
};

function StatusChartLabelItem({ status, count, total }: Props) {
  return (
    <li className="grid grid-cols-[20px_1fr] grid-rows-2 gap-x-3 mb-4">
      <span
        className={`w-3 h-3 rounded-full col-start-1 row-start-1 row-span-2 self-start justify-self-end mt-2`}
        style={{ backgroundColor: chartColors[status] }}
      ></span>
      <span className="col-start-2 row-start-1 self-start justify-self-start">
        {status[0] + status.slice(1).toLowerCase()}
      </span>
      <div className="col-start-2 row-start-2 text-gray-600 flex">
        <span>{count}</span>({" "}
        <span className="flex">
          <span>{Math.ceil((count / total) * 100)}</span>
          <Percent className="w-3" />
        </span>
        )
      </div>
    </li>
  );
}

export default StatusChartLabelItem;

