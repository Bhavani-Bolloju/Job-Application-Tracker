"use client";

import { useState, useRef, useOptimistic, startTransition } from "react";
import { Application, Mode, FormValues } from "@/lib/types";
import ApplicationTable from "./ApplicationTable";

import { useRouter, redirect } from "next/navigation";
import FilterSection from "./filter/FilterSection";

import { FilterProvider } from "../context/FilterContext";

import ApplicationHeader from "./ApplicationHeader";

import { toast } from "sonner";

type Props = {
  applications: Application[];
};

const updateFn = function (applications: Application[], id: string) {
  const filter = applications.filter((app) => app.id !== id);
  return filter;
};

function ApplicationsClient({ applications: applicationsData }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("add");
  const [selected, setSelected] = useState<Application | null>(null);
  const [applications, setApplications] = useState(applicationsData);
  const [optimisticState, addOptimistic] = useOptimistic(
    applications,
    updateFn
  );

  const snapShotApplication = useRef<null | Application>(null);
  const applicationIndex = useRef<null | number>(null);

  // const router = useRouter();

  function handleRowClick(id: string) {
    redirect(`/applications/${id}`);
  }

  function handleApplicationEdit(app: Application) {
    setSelected(app);
    snapShotApplication.current = app;
    setMode("edit");
    setIsOpen(true);
  }

  const handleOptimisticUIUpdateForEdit = function (
    app: FormValues,
    id: string
  ) {
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

  const handleOptimisticUIUpdateForEditFail = function () {
    console.log(snapShotApplication.current, applicationIndex.current);

    setApplications((prev) => {
      if (!snapShotApplication.current || applicationIndex.current === null) {
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
    startTransition(async () => {
      try {
        addOptimistic(id);

        const url = `/api/applications/${id}`;

        const response = await fetch(url, {
          method: "DELETE"
        });

        if (!response.ok) {
          throw new Error();
        }
        setApplications((prev) => prev.filter((app) => app.id !== id));
        //notify success
        toast.success("Application deleted", { position: "top-left" });
      } catch (error){
        //notify error
        console.log(error, "application delete error")
        toast.error("Failed to delete application", { position: "top-left" });
      }
    });
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
        onOptimisticUIUpdateEdit={handleOptimisticUIUpdateForEdit}
        onOptimisticUIUpdateEditFail={handleOptimisticUIUpdateForEditFail}
      />

      <FilterProvider>
        <FilterSection applications={applications} />

        <ApplicationTable
          applications={optimisticState}
          onRowClick={handleRowClick}
          onEdit={handleApplicationEdit}
          onDelete={handleDeleteApplication}
        />
      </FilterProvider>
    </div>
  );
}

export default ApplicationsClient;
