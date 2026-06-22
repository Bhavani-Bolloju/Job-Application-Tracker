"use client"
import ApplicationHeader from "./ApplicationHeader";
import ApplicationDetailsCard from "./ApplicationDetailsCard";

import { Application } from "@/lib/types";

type Props = {
  application: Application;
};

function ApplicationDetail({ application }: Props) {
 

  return (
    <div>
      <ApplicationHeader application={application} />
      <ApplicationDetailsCard application={application}/>
    </div>
  );
}

export default ApplicationDetail;

