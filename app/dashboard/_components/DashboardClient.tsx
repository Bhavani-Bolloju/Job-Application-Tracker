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
  applications: Application[];
  statusCount: StatusCount[];
};

function DashboardClient({ user, applications, statusCount }: Props) {
  return (
    <div className="py-6 px-20">
      <DashboardHeader user={user} />
      <StatusCards statusCount={statusCount} />
      <StatusChart />
      <RecentActivity />
      <DashboardFooter />
    </div>
  );
}

export default DashboardClient;
