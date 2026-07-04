import React from "react";

import RecentActivity from "./RecentActivity";
import StatusCards from "./StatusCards";
import StatusChart from "./StatusChart";
import DashboardHeader from "./DashboardHeader";
import DashboardFooter from "./DashboardFooter";

function DashboardClient() {
  return (
    <div>
      <DashboardHeader />
      <DashboardFooter />
      <RecentActivity />
      <StatusCards />
      <StatusChart />
    </div>
  );
}

export default DashboardClient;

