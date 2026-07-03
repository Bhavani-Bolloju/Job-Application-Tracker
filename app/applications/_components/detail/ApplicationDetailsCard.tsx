import React from "react";

import DetailRow from "./DetailRow";
import { List } from "lucide-react";
import NoteSection from "./NoteSection";
import ContactSection from "./ContactSection";

import { format } from "date-fns";

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
    url,
    id,
    notes,
    contacts,
    createdAt,
    updatedAt
  } = application;

  let typeValue = type;

  if (typeValue) {
    typeValue = typeValue.replace("_", " ").toLowerCase();
  }

  const formatCreatedAt = format(new Date(createdAt), "PP");
  const formatUpdatedAt = format(new Date(updatedAt), "PP");

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 p-5 border-2 border-gray-300">
        <List className="w-5" />
        <h3>Application Details</h3>
      </div>
      <ul>
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
      <NoteSection notes={notes} applicationId={id} />
      <ContactSection contacts={contacts} applicationId={id} />
      <div className="flex justify-between items-center text-gray-600 mt-8 text-lg">
        <span> Created on {formatCreatedAt} </span>
        <span> Last updated on {formatUpdatedAt} </span>
      </div>
    </div>
  );
}

export default ApplicationDetailsCard;

