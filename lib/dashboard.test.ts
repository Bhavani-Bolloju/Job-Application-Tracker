import { buildStatusCardsData, buildStatusChartData } from "./dashboard";
import { StatusCount, chartColors } from "./types";

const fullStatusCounts: StatusCount[] = [
  {
    status: "APPLIED",
    _count: { status: 5 }
  },
  {
    status: "INTERVIEWED",
    _count: { status: 2 }
  },
  {
    status: "OFFER",
    _count: { status: 1 }
  },
  {
    status: "REJECTED",
    _count: { status: 3 }
  },
  {
    status: "WISHLIST",
    _count: { status: 4 }
  }
];

const partialStatusCounts: StatusCount[] = [
  {
    status: "APPLIED",
    _count: { status: 5 }
  },
  {
    status: "REJECTED",
    _count: { status: 2 }
  }
];

const emptyStatusCount: StatusCount[] = [];

describe("buildStatusChart", () => {
  it("returns chart label, data values, colors and total", () => {
    const result = buildStatusChartData(fullStatusCounts);

    expect(result.dataValues).toEqual([5, 2, 1, 3, 4]);
    expect(result.labels).toEqual([
      "APPLIED",
      "INTERVIEWED",
      "OFFER",
      "REJECTED",
      "WISHLIST"
    ]);
    expect(result.total).toEqual(15);
    expect(result.backgroundColor).toEqual([
      chartColors["APPLIED"],
      chartColors["INTERVIEWED"],
      chartColors["OFFER"],
      chartColors["REJECTED"],
      chartColors["WISHLIST"]
    ]);
  });

  it("returns empty chart data when input is empty", () => {
    const result = buildStatusChartData(emptyStatusCount);

    expect(result.dataValues).toEqual([]);
    expect(result.labels).toEqual([]);
    expect(result.total).toEqual(0);
    expect(result.backgroundColor).toEqual([]);
  });
});

describe("buildStatusCards", () => {
  it("return all status cards when every status exists", () => {
    const result = buildStatusCardsData(fullStatusCounts);

    expect(result).toEqual({
      APPLIED: 5,
      INTERVIEWED: 2,
      OFFER: 1,
      REJECTED: 3,
      WISHLIST: 4
    });
  });

  it("fills missing statuses with zero", () => {
    const result = buildStatusCardsData(partialStatusCounts);

    expect(result).toEqual({
      APPLIED: 5,
      INTERVIEWED: 0,
      OFFER: 0,
      REJECTED: 2,
      WISHLIST: 0
    });
  });

  it("return zero counts for every status when input is empty", () => {
    const result = buildStatusCardsData(emptyStatusCount);

    expect(result).toEqual({
      APPLIED: 0,
      INTERVIEWED: 0,
      OFFER: 0,
      REJECTED: 0,
      WISHLIST: 0
    });
  });
});

