"use client";

import { useState } from "react";
import { Application, Mode } from "@/lib/types";
import ApplicationTable from "./ApplicationTable";

import { useRouter, redirect } from "next/navigation";
import FilterSection from "./filter/FilterSection";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

import { FilterProvider } from "../context/FilterContext";
import ApplicationDrawer from "@/app/_components/ApplicationDrawer";

import Breadcrumbs from "@/app/_components/Breadcrumbs";

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

    await fetch(url, {
      method: "DELETE"
    });

    router.refresh();
  }

  function handleClose() {
    setIsOpen(false);
    router.refresh();
  }

  return (
    <div className="py-8 px-12">
      <Breadcrumbs />
      <div className="flex items-center justify-between mb-5">
        <h1 className="mb-4 flex items-center gap-3 text-accent-2">
          <BriefcaseBusiness className="w-8 h-auto" />
          <span className="capitalize text-page-title text-text-secondary">
            {" "}
            my applications
          </span>
        </h1>
        <Button
          onClick={handleAddNew}
          className="flex items-center gap-1 py-3 px-5 h-auto hover:cursor-pointer bg-accent-1 hover:bg-accent-2"
        >
          <Plus />
          <span>Add application</span>
        </Button>
      </div>

      <FilterProvider>
        <FilterSection applications={applications} />

        <ApplicationTable
          applications={applications}
          onRowClick={handleRowClick}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </FilterProvider>

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
