import React from "react";
import StatusCards from "./_components/StatusCards";
import StatusChart from "./_components/StatusChart";
import RecentActivity from "./_components/RecentActivity";
function page() {
  return (
    <div>
      <StatusCards />
      <StatusChart />
      <RecentActivity />
    </div>
  );
}

export default page;

