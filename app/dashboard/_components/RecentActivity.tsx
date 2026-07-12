import { Application } from "@/lib/types";
import React from "react";
import RecentActivityItem from "./RecentActivityItem";

type Props = {
  recentApplications: Application[];
};

function RecentActivity({ recentApplications }: Props) {
  return (
    <div className="flex-1 py-4 px-8 rounded-md shadow-sm shadow-gray-200 border border-gray-50">
      <h2 className="text-section-title font-semibold mb-3">Recent activity</h2>
      <ul className="divide-y-2">
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
