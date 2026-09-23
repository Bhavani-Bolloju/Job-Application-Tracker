import React from "react";

import AddJobPortalForm from "./AddJobPortalForm";

import { JobPortalProps } from "@/lib/types";

type Props = {
  open: boolean;
  onPortalDialogStatus: (status: boolean) => void;
  onPortalFormSubmit: () => void;
  jobPortal: JobPortalProps | null;
};

function JobPortalHeader({
  open,
  onPortalDialogStatus,
  onPortalFormSubmit,
  jobPortal
}: Props) {
  return (
    <div className="flex items-center justify-between mb-5 flex-wrap">
      <div>
        <h1 className="text-page-title font-bold text-text-secondary">
          Portals
        </h1>
        <p className="text-text-muted">
          Manage your job portals and keep track of where you&apos;re applying.
        </p>
      </div>

      <AddJobPortalForm
        open={open}
        onPortalDialogStatus={onPortalDialogStatus}
        onPortalFormSubmit={onPortalFormSubmit}
        jobPortal={jobPortal}
        key={jobPortal?.id}
      />
    </div>
  );
}

export default JobPortalHeader;



