"use client";

import { Application } from "@/lib/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import StatusBadge from "./StatusBadge";
import FormMode from "./drawer/FormMode";
import ViewMode from "./drawer/ViewMode";
type Mode = "view" | "add" | "edit";

type Props = {
  isOpen: boolean;
  mode: Mode;
  application: Application | null;
  onClose: () => void;
};

export default function ApplicationDrawer({
  isOpen,
  mode,
  application,
  onClose
}: Props) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:w-135 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            {mode === "add" ? "Add Application" : application?.company}
          </SheetTitle>
          {mode === "view" && application && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-500">{application.role}</span>
              <StatusBadge status={application.status} />
            </div>
          )}
        </SheetHeader>

        <div className="mt-2 p-5">
          {mode === "view" && application && (
            <ViewMode application={application} />
          )}
          {(mode === "add" || mode === "edit") && (
            <FormMode application={application} onClose={onClose} />
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

