import React from "react";

import AddJobPortalForm from "./AddJobPortalForm";

import { JobPortalFormProps } from "@/lib/types";



type Props = {
  open: boolean;
  onPortalDialogStatus: (status: boolean) => void;
  onPortalFormSubmit: (value: JobPortalFormProps) => void;
};

function JobPortalHeader({
  open,
  onPortalDialogStatus,
  onPortalFormSubmit
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
      />
    </div>
  );
}

export default JobPortalHeader;

