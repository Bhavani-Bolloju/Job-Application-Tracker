"use client";

import { Application } from "@/lib/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";

import FormMode from "../applications/_components/drawer/FormMode";

import { Mode } from "@/lib/types";

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
  // console.log("application drawer")

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:w-135 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            {mode === "add" ? "Add Application" : application?.company}
          </SheetTitle>
        </SheetHeader>

        <div className="mt-2 p-5">
          <FormMode application={application} onClose={onClose} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
