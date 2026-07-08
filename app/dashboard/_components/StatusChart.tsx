import React from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { StatusCount, chartColors } from "@/lib/types";

import StatusChartLabelItem from "./StatusChartLabelItem";

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
  const labels = statusCount.map((status) => status.status);

  const dataValues = statusCount.map((status) => status._count.status);

  const backgroundColor = labels.map((label) => chartColors[label]);

  const total = dataValues.reduce((prev, curr) => +prev + +curr);

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
    <div className="basis-3/6 shadow-lg py-4 px-8">
      <h2 className="text-2xl mb-5">Applications by status</h2>
      <div className="h-100 flex ">
        <div className="h-full relative w-full basis-2/3">
          <Doughnut data={data} options={options} className="h-full w-full" />
          <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center">
            <span className="text-3xl font-medium">{total}</span>
            <span>Total</span>
          </div>
        </div>
        <ul className="flex-1 flex flex-col justify-center items-center">
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
  );
}

export default StatusChart;

