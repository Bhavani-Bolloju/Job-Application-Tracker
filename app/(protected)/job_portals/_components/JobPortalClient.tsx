"use client";

import React, { useState, useOptimistic, startTransition } from "react";

import JobPortalHeader from "./JobPortalHeader";

import JobPortals from "./JobPortals";

import { JobPortalProps } from "@/lib/types";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

function updateFn(jobPortals: JobPortalProps[], id: string) {
  return jobPortals.filter((jobPortal) => jobPortal.id !== id);
}

function JobPortalClient({
  jobPortals: jobPortalsData
}: {
  jobPortals: JobPortalProps[];
}) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [jobPortal, setJobPortal] = useState<null | JobPortalProps>(null);
  const [jobPortals, setJobPortals] = useState(jobPortalsData);

  const [optimisticState, addOptimistic] = useOptimistic(jobPortals, updateFn);

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
    startTransition(async () => {
      addOptimistic(id);

      try {
        const url = `/api/job_portals/${id}`;
        const response = await fetch(url, {
          method: "DELETE"
        });

        if (!response.ok) {
          throw new Error();
        }

        setJobPortals((jobPortals) =>
          jobPortals.filter((jobPortal) => jobPortal.id !== id)
        );

        toast.success("Deleted Portal", { position: "top-left" });
      } catch {
        toast.error("Failed to delete portal", { position: "top-left" });
      }
    });
  };

  return (
    <div className="py-8 px-12 max-md:px-8">
      <JobPortalHeader
        open={isDialogOpen}
        onPortalDialogStatus={handlePortalDialogStatus}
        onPortalFormSubmit={handlePortalSubmit}
        jobPortal={jobPortal}
      />

      <JobPortals
        onEdit={handleEdit}
        onDelete={handleDelete}
        jobPortals={optimisticState}
      />
    </div>
  );
}

export default JobPortalClient;
