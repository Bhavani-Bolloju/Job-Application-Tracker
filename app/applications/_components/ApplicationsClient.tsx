"use client";

import { useState } from "react";
import { Application } from "@/lib/types";
import ApplicationTable from "./ApplicationTable";
import ApplicationDrawer from "./ApplicationDrawer";

type Mode = "view" | "edit" | "add";

type Props = {
  applications: Application[];
};

function ApplicationsClient({ applications }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("add");
  const [selected, setSelected] = useState<Application | null>(null);

  function handleRowClick(app: Application) {
    setSelected(app);
    setMode("view");
    setIsOpen(true);
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
      />
      <ApplicationDrawer
        isOpen={isOpen}
        mode={mode}
        application={selected}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default ApplicationsClient;

