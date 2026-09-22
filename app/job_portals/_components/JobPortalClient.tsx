"use client";

import React, { useState } from "react";

import JobPortalHeader from "./JobPortalHeader";

import JobPortals from "./JobPortals";

import { JobPortalProps } from "@/lib/types";

import { useRouter } from "next/navigation";

// onSearch, jobPortals, onEdit, onDelete
function JobPortalClient({ jobPortals }: { jobPortals: JobPortalProps[] }) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [jobPortal, setJobPortal] = useState<null | JobPortalProps>(null);
  

  
  const router = useRouter();

  const handlePortalSubmit = async function () {
    setDialogOpen(false);
    router.refresh();
  };

  const handlePortalDialogStatus = function (status: boolean) {
    setDialogOpen(status);
  };

  const handleEdit = function (value: JobPortalProps) {
    setJobPortal(value);
    setDialogOpen(true);
  };
  const handleDelete = async function (id: string) {
    const url = `/api/job_portals/${id}`;

    const response = await fetch(url, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error("Failed to delete application");
    }

    router.refresh();
  };



  return (
    <div>
      <JobPortalHeader
        open={isDialogOpen}
        onPortalDialogStatus={handlePortalDialogStatus}
        onPortalFormSubmit={handlePortalSubmit}
        jobPortal={jobPortal}
      />

      <JobPortals
        onEdit={handleEdit}
        onDelete={handleDelete}
        jobPortals={jobPortals}
      />
    </div>
  );
}

export default JobPortalClient;

