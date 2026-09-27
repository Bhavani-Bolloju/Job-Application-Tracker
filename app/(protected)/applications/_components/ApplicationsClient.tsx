"use client";

import { useState, useRef } from "react";
import { Application, Mode, FormValues } from "@/lib/types";
import ApplicationTable from "./ApplicationTable";

import { useRouter, redirect } from "next/navigation";
import FilterSection from "./filter/FilterSection";

import { FilterProvider } from "../context/FilterContext";

import ApplicationHeader from "./ApplicationHeader";

type Props = {
  applications: Application[];
};

function ApplicationsClient({ applications: applicationsData }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("add");
  const [selected, setSelected] = useState<Application | null>(null);
  const [applications, setApplications] = useState(applicationsData);

  const snapShotApplication = useRef<null | Application>(null);
  const applicationIndex = useRef<null | number>(null);

  const router = useRouter();

  function handleRowClick(id: string) {
    redirect(`/applications/${id}`);
  }

  function handleApplicationEdit(app: Application) {
    setSelected(app);
    snapShotApplication.current = app;
    setMode("edit");
    setIsOpen(true);
  }

  const handleOptimisticUIUpdate = function (app: FormValues, id: string) {
    const index = applications.findIndex(
      (application) => application.id === id
    );
    applicationIndex.current = index;
    setApplications((prev) => {
      const application = prev[index];
      const updatedApplication = { ...application, ...app };
      prev[index] = updatedApplication;
      return prev;
    });

    setIsOpen(false);
  };

  const handleUpdateFailure = function () {
    console.log(snapShotApplication.current, applicationIndex.current);

    setApplications((prev) => {
      if (!snapShotApplication.current || applicationIndex.current === null ) {
        return prev;
      }
      const applications = [...prev];
      applications[applicationIndex.current] = snapShotApplication.current;
      return applications;
    });

  };

  function handleAddNewApplication() {
    setSelected(null);
    setMode("add");
    setIsOpen(true);
  }

  async function handleDeleteApplication(id: string) {
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
    // router.refresh();
  }

  return (
    <div className="py-8 px-12 max-md:px-8">
      <ApplicationHeader
        onAddNew={handleAddNewApplication}
        isOpen={isOpen}
        mode={mode}
        application={selected}
        onClose={handleClose}
        onOptimisticUIUpdate={handleOptimisticUIUpdate}
        onUpdateFailure={handleUpdateFailure}
      />

      <FilterProvider>
        <FilterSection applications={applications} />

        <ApplicationTable
          applications={applications}
          onRowClick={handleRowClick}
          onEdit={handleApplicationEdit}
          onDelete={handleDeleteApplication}
        />
      </FilterProvider>
    </div>
  );
}

export default ApplicationsClient;
