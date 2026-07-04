"use client";

import React from "react";

import RecentActivity from "./RecentActivity";
import StatusCards from "./StatusCards";
import StatusChart from "./StatusChart";
import DashboardHeader from "./DashboardHeader";
import DashboardFooter from "./DashboardFooter";

import { Application } from "@/lib/types";

import type { Session } from "next-auth";

type Props = {
  user: Session["user"] | undefined;
  applications: Application[];
};

function DashboardClient({ user, applications }: Props) {
  return (
    <div className="py-6 px-20">
      <DashboardHeader user={user} />
      <StatusCards applications={applications} />
      <StatusChart />
      <RecentActivity />
      <DashboardFooter />
    </div>
  );
}

export default DashboardClient;

