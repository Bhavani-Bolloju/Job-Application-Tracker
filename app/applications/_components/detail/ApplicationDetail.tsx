"use client";
import ApplicationHeader from "./ApplicationHeader";
import ApplicationDetailsCard from "./ApplicationDetailsCard";

import { Application } from "@/lib/types";

import { format } from "date-fns";

type Props = {
  application: Application;
};

import NoteSection from "./NoteSection";
import ContactSection from "./ContactSection";

function ApplicationDetail({ application }: Props) {
  const { notes, contacts, createdAt, updatedAt, id } = application;

  const formatCreatedAt = format(new Date(createdAt), "PP");
  const formatUpdatedAt = format(new Date(updatedAt), "PP");

  return (
    <div>
      <ApplicationHeader application={application} />
      <ApplicationDetailsCard application={application} />
      <NoteSection notes={notes} applicationId={id} />
      <ContactSection contacts={contacts} applicationId={id} />
      <div className="flex justify-between items-center mt-5">
        <span> Created on {formatCreatedAt} </span>
        <span> Last updated on {formatUpdatedAt} </span>
      </div>
    </div>
  );
}

export default ApplicationDetail;
