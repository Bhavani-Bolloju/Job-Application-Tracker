import React from "react";

import AddJobPortalForm from "./AddJobPortalForm";

import { JobPortalProps } from "@/lib/types";

type Props = {
  open: boolean;
  onPortalDialogStatus: (status: boolean) => void;
  onPortalFormSubmit: () => void;
  jobPortal: JobPortalProps | null
};

function JobPortalHeader({
  open,
  onPortalDialogStatus,
  onPortalFormSubmit,
  jobPortal
}: Props) {
  return (
    <div>
      <h1>Portals</h1>
      <p>
        Manage your job portals and keep track of where you&apos;re applying.
      </p>

      <AddJobPortalForm
        open={open}
        onPortalDialogStatus={onPortalDialogStatus}
        onPortalFormSubmit={onPortalFormSubmit}
        jobPortal = {jobPortal}
        key = {jobPortal?.id}
      />
    </div>
  );
}

export default JobPortalHeader;

