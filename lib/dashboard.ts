import { StatusCount, chartColors, STATUSES } from "./types";

type Props = StatusCount[];

export function buildStatusChartData(statusCount: Props) {
  const labels = statusCount.map((status) => status.status);

  const dataValues = statusCount.map((status) => status._count.status);

  const backgroundColor = labels.map((label) => chartColors[label]);

  let total = 0;

  if (dataValues.length > 0) {
    total = dataValues.reduce((prev, curr) => +prev + +curr);
  }

  return { labels, dataValues, backgroundColor, total };
}

export function buildStatusCardsData(statusCount: Props) {
  const statusCountMap = new Map();

  for (const { status, _count } of statusCount) {
    statusCountMap.set(status, _count.status);
  }

  for (const status of STATUSES) {
    if (!statusCountMap.has(status)) {
      statusCountMap.set(status, 0);
    }
  }

  return Object.fromEntries(statusCountMap);
}

