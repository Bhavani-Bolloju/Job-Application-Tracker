import React from "react";
import ApplicationTable from "./_components/ApplicationTable";
import ApplicationDrawer from "./_components/ApplicationDrawer";
import FilterBar from "./_components/FilterBar";
import StatusBadge from "./_components/StatusBadge";

function page() {
  return (
    <div>
      <ApplicationTable />
      <ApplicationDrawer />
      <FilterBar />
      <StatusBadge />
    </div>
  );
}

export default page;

