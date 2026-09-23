import React from "react";

import DetailRow from "./DetailRow";
import { List } from "lucide-react";

import { Application } from "@/lib/types";

type Props = {
  application: Application;
};

function ApplicationDetailsCard({ application }: Props) {
  const {
    company,
    role,
    appliedDate,
    followupDate,
    status,
    location,
    salary,
    type,
    platform,
    url
  } = application;

  let typeValue = type;

  if (typeValue) {
    typeValue = typeValue.replace("_", " ").toLowerCase();
  }

  return (
    <div className="mt-8 rounded-md shadow-sm shadow-border border border-border bg-bg--1 ">
      <div className="flex items-center gap-2 p-6 border-b border-border">
        <List className="w-5" />
        <h3 className="text-section-title">Application Details</h3>
      </div>
      <ul className="divide-y-2 divide-border">
        <DetailRow title="company" value={company} />
        <DetailRow title="role" value={role} />
        <DetailRow title="status" value={status} />
        <DetailRow title="applied date" value={appliedDate} />
        <DetailRow title="follow-up date" value={followupDate} />
        <DetailRow title="location" value={location} />
        <DetailRow title="salary" value={salary} />
        <DetailRow title="type" value={typeValue} />
        <DetailRow title="platform" value={platform} />
        <DetailRow title="job URL" value={url} />
      </ul>
    </div>
  );
}

export default ApplicationDetailsCard;
