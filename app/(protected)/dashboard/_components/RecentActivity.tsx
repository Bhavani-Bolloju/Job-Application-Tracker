import { Application } from "@/lib/types";
import React from "react";
import RecentActivityItem from "./RecentActivityItem";

type Props = {
  recentApplications: Application[];
};

function RecentActivity({ recentApplications }: Props) {
  return (
    <div className="flex-1 min-w-0 p-8 rounded-md shadow-sm shadow-border border border-border bg-bg--1">
      <h2 className="text-section-title font-semibold mb-5">Recent activity</h2>
      <ul className="divide-y-2 space-y-5">
        {recentApplications.map((application) => (
          <RecentActivityItem
            key={application.id}
            role={application.role}
            company={application.company}
            appliedDate={application.appliedDate}
            status={application.status}
          />
        ))}
      </ul>
    </div>
  );
}

export default RecentActivity;
