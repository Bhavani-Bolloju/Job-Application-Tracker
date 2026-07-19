import React from "react";
import StatusCardsSkeleton from "./dashboard/_components/StatusCardsSkeleton";
import DashboardHeaderSkeleton from "./dashboard/_components/DashboardHeaderSkeleton";
import StatusChartSkeleton from "./dashboard/_components/StatusChartSkeleton";
import RecentActivitySkeleton from "./dashboard/_components/RecentActivitySkeleton";
import DashboardFooter from "./dashboard/_components/DashboardFooter";

export default function Loading() {
  return (
    <div className="py-8 px-12 bg-background text-foreground">
      <DashboardHeaderSkeleton />
      <StatusCardsSkeleton />
      <div className="flex justify-between gap-8 mb-8">
        <StatusChartSkeleton />
        <RecentActivitySkeleton />
      </div>
      <DashboardFooter />
    </div>
  );
}

