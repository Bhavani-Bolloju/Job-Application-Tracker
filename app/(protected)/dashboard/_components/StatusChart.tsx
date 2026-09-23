import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { StatusCount } from "@/lib/types";

import StatusChartLabelItem from "./StatusChartLabelItem";

import { buildStatusChartData } from "@/lib/dashboard";

type Props = {
  statusCount: StatusCount[];
};

// const centerTextPlugin = {
//   id: "centerText",
//   beforeDraw(chart) {
//     const { ctx } = chart;
//     const meta = chart.getDatasetMeta(0);

//     if (!meta.data.length) return;

//     const { x, y } = meta.data[0];

//     const total = chart.data.datasets[0].data.reduce(
//       (sum: number, value: number) => sum + value,
//       0
//     );

//     ctx.save();

//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";

//     ctx.font = "bold 28px Inter";
//     ctx.fillText(total.toString(), x, y - 10);

//     ctx.font = "14px Inter";
//     ctx.fillText("Applications", x, y + 16);

//     ctx.restore();
//   }
// };

ChartJS.register(ArcElement, Tooltip, Legend);

function StatusChart({ statusCount }: Props) {
  const { labels, dataValues, backgroundColor, total } =
    buildStatusChartData(statusCount);

  const data = {
    labels,
    datasets: [
      {
        label: "applications",
        data: dataValues,
        backgroundColor
      }
    ]
  };

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div className="min-w-0 flex-1 p-8 rounded-md shadow-md shadow-border border border-border bg-bg--1 ">
      <h2 className="text-section-title font-semibold mb-5 text-text-secondary">
        Applications by status
      </h2>
      <div className="h-100 max-sm:h-50 flex min-w-0">
        <div className="relative flex-1 min-w-0 h-auto flex items-center">
          <Doughnut data={data} options={options} className="h-auto" />

          <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center">
            <span className="text-3xl font-medium">{total}</span>
            <span className="text-base text-text-muted">Total</span>
          </div>
        </div>
        <div className="flex-1 min-w-0 flex items-center justify-center">
          <ul className=" flex flex-col gap-y-2 ">
            {statusCount.map((label) => (
              <StatusChartLabelItem
                key={label.status}
                status={label.status}
                count={label._count.status}
                total={total}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StatusChart;
