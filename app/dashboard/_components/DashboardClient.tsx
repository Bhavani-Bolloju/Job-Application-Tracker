"use client";

import React from "react";

import RecentActivity from "./RecentActivity";
import StatusCards from "./StatusCards";
import StatusChart from "./StatusChart";
import DashboardHeader from "./DashboardHeader";
import DashboardFooter from "./DashboardFooter";

import { Application, StatusCount } from "@/lib/types";

import type { Session } from "next-auth";

type Props = {
  user: Session["user"] | undefined;
  statusCount: StatusCount[];
  recentApplications: Application[];
};

function DashboardClient({ user, statusCount, recentApplications }: Props) {
  return (
    <div className="py-8 px-12 max-sm:px-8 bg-background text-foreground">
      <DashboardHeader user={user} />
      <StatusCards statusCount={statusCount} />
      <div className="flex gap-8 mb-8 max-lg:flex-col">
        <StatusChart statusCount={statusCount} />
        <RecentActivity recentApplications={recentApplications} />
      </div>
      <DashboardFooter />
    </div>
  );
}

export default DashboardClient;
