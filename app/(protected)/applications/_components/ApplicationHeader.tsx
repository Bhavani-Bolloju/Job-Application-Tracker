import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

import ApplicationDrawer from "@/app/_components/ApplicationDrawer";

import { Mode, Application, FormValues } from "@/lib/types";

type Props = {
  onAddNew: () => void;
  isOpen: boolean;
  mode: Mode;
  application: Application | null;
  onClose: () => void;
  onOptimisticUIUpdateEdit: (app: FormValues, id: string) => void;
  onOptimisticUIUpdateEditFail: () => void;
};

function ApplicationHeader({
  onAddNew,
  isOpen,
  mode,
  application,
  onClose,
  onOptimisticUIUpdateEdit,
  onOptimisticUIUpdateEditFail
}: Props) {
  return (
    <div className="flex items-center justify-between mb-5 flex-wrap">
      <h1 className="mb-4 gap-3 capitalize text-page-title text-text-secondary">
        my applications
      </h1>
      <Button
        onClick={onAddNew}
        className="flex items-center gap-1 py-3 px-5 h-auto hover:cursor-pointer bg-accent-2 hover:bg-accent-3 add-application focus-within:bg-accent-3"
        id="btn-add-application"
      >
        <Plus aria-hidden="true" />
        <span>Add application</span>
      </Button>

      <ApplicationDrawer
        isOpen={isOpen}
        mode={mode}
        application={application}
        onClose={onClose}
        onOptimisticUIUpdateEdit={onOptimisticUIUpdateEdit}
        onOptimisticUIUpdateEditFail={onOptimisticUIUpdateEditFail}
      />
    </div>
  );
}

export default ApplicationHeader;
