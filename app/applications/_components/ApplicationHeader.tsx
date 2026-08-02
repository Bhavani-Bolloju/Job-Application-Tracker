import React from "react";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

import ApplicationDrawer from "@/app/_components/ApplicationDrawer";

import { Mode, Application } from "@/lib/types";

type Props = {
  onAddNew: () => void;
  isOpen: boolean;
  mode: Mode;
  application: Application | null;
  onClose: () => void;
};

function ApplicationHeader({
  onAddNew,
  isOpen,
  mode,
  application,
  onClose
}: Props) {
  return (
    <div className="flex items-center justify-between mb-5">
      <h1 className="mb-4 flex items-center gap-3 text-accent-2">
        <BriefcaseBusiness className="w-8 h-auto" />
        <span className="capitalize text-page-title text-text-secondary">
          {" "}
          my applications
        </span>
      </h1>
      <Button
        onClick={onAddNew}
        className="flex items-center gap-1 py-3 px-5 h-auto hover:cursor-pointer bg-accent-1 hover:bg-accent-2"
      >
        <Plus />
        <span>Add application</span>
      </Button>

      <ApplicationDrawer
        isOpen={isOpen}
        mode={mode}
        application={application}
        onClose={onClose}
      />
    </div>
  );
}

export default ApplicationHeader;

