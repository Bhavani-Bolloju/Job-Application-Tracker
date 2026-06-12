"use client";

import { useState } from "react";
import { Application } from "@/lib/types";
import ApplicationTable from "./ApplicationTable";
import ApplicationDrawer from "./ApplicationDrawer";
import { useRouter } from "next/navigation";

type Mode = "view" | "edit" | "add";

type Props = {
  applications: Application[];
};

function ApplicationsClient({ applications }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("add");
  const [selected, setSelected] = useState<Application | null>(null);
  const [deleteApplicationId, setDeleteApplicationId] = useState<string | null>(
    null
  );

  const router = useRouter();

  function handleRowClick(app: Application) {
    // setSelected(app);
    // setMode("view");
    // setIsOpen(true);
    console.log("redirect user to new page", app);
  }

  function handleEdit(app: Application) {
    setSelected(app);
    setMode("edit");
    setIsOpen(true);
  }

  function handleAddNew() {
    setSelected(null);
    setMode("add");
    setIsOpen(true);
  }

  function handleDelete(id: string) {
    // console.log(id);
    setDeleteApplicationId(id);
  }

  function handleClose() {
    setIsOpen(false);
    router.refresh();
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Applications</h1>
        <button
          onClick={handleAddNew}
          className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:cursor-pointer"
        >
          + Add New
        </button>
      </div>
      <ApplicationTable
        applications={applications}
        onRowClick={handleRowClick}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ApplicationDrawer
        isOpen={isOpen}
        mode={mode}
        application={selected}
        onClose={handleClose}
      />
    </div>
  );
}

export default ApplicationsClient;

