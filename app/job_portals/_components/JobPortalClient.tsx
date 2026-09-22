"use client";

import React, { useState } from "react";

import JobPortalHeader from "./JobPortalHeader";

import JobPortals from "./JobPortals";

import { JobPortalProps, JobPortalFormProps } from "@/lib/types";

// onSearch, jobPortals, onEdit, onDelete
function JobPortalClient({ jobPortals }: { jobPortals: JobPortalProps[] }) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = function (value: JobPortalFormProps) {
    
    console.log(value)
  };

  const handlePortalDialogStatus = function (status: boolean) {
    setDialogOpen(status);
  };

  const handleEdit = function () {
    console.log("edit button");
  };
  const handleDelete = function (id: string) {
    console.log("handleDelete", id);
  };

  const handleSearch = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInputSearch(e.target.value)
  };

  return (
    <div>
      <JobPortalHeader
        open={isDialogOpen}
        onPortalDialogStatus={handlePortalDialogStatus}
        onPortalFormSubmit={handleSubmit}
      />

      <JobPortals
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSearch={handleSearch}
        searchKeyword={inputSearch}
        jobPortals={jobPortals}
      />
    </div>
  );
}

export default JobPortalClient;

