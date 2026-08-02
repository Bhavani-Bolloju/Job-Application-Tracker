"use client";

import { useState } from "react";
import { Application, Mode } from "@/lib/types";
import ApplicationTable from "./ApplicationTable";

import { useRouter, redirect } from "next/navigation";
import FilterSection from "./filter/FilterSection";


import { FilterProvider } from "../context/FilterContext";


import Breadcrumbs from "@/app/_components/Breadcrumbs";

import Logout from "@/app/_components/Logout";

import ApplicationHeader from "./ApplicationHeader";

type Props = {
  applications: Application[];
};

function ApplicationsClient({ applications }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("add");
  const [selected, setSelected] = useState<Application | null>(null);

  const router = useRouter();

  function handleRowClick(id: string) {
    redirect(`/applications/${id}`);
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

  async function handleDelete(id: string) {
    const url = `/api/applications/${id}`;

    const response = await fetch(url, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error("Failed to delete application");
    }

    router.refresh();
  }

  function handleClose() {
    setIsOpen(false);
    router.refresh();
  }

  return (
    <div className="py-8 px-12">
      <div className="flex justify-between items-center">
        <Breadcrumbs />
        <Logout />
      </div>

      <ApplicationHeader
        onAddNew={handleAddNew}
        isOpen={isOpen}
        mode={mode}
        application={selected}
        onClose={handleClose}
      />

      <FilterProvider>
        <FilterSection applications={applications} />

        <ApplicationTable
          applications={applications}
          onRowClick={handleRowClick}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </FilterProvider>
    </div>
  );
}

export default ApplicationsClient;
