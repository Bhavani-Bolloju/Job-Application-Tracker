import { Application } from "@/lib/types";
import React from "react";
import RecentActivityItem from "./RecentActivityItem";

type Props = {
  recentApplications: Application[];
};

function RecentActivity({ recentApplications }: Props) {
  console.log(recentApplications);

  return (
    <div className="basis-2/6 rounded-md shadow-lg py-4 px-8">
      <h2 className="text-2xl mb-2">Recent activity</h2>
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

