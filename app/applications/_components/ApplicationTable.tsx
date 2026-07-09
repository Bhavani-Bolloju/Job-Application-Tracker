"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import { Application } from "@/lib/types";

import ApplicationRow from "./ApplicationRow";

import { useFilter } from "../context/FilterContext";

type Props = {
  applications: Application[];
  onRowClick: (id: string) => void;
  onEdit: (app: Application) => void;
  onDelete: (id: string) => void;
};

function ApplicationTable({
  applications,
  onRowClick,
  onEdit,
  onDelete
}: Props) {
  const {
    searchQuery,
    selectedStatus,
    selectedPlatform,
    draftAppliedDate,
    draftFollowupDate
  } = useFilter();

  let filteredApplications = applications;

  filteredApplications = filteredApplications.filter((application) =>
    application.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedStatus !== "all") {
    filteredApplications = filteredApplications.filter(
      (application) =>
        application.status.toLowerCase() == selectedStatus.toLowerCase()
    );
  }

  if (selectedPlatform !== "all") {
    filteredApplications = filteredApplications.filter(
      (application) =>
        application?.platform &&
        application?.platform.toLowerCase() == selectedPlatform.toLowerCase()
    );
  }

  if (filteredApplications.length == 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No applications yet. Add your first one!
      </div>
    );
  }

  if (draftAppliedDate && draftAppliedDate.from && draftAppliedDate.to) {
    const { from, to } = draftAppliedDate;

    filteredApplications = filteredApplications.filter(
      (application) =>
        application.appliedDate >= from && application.appliedDate <= to
    );
  }
  if (draftFollowupDate && draftFollowupDate.from && draftFollowupDate.to) {
    const { from, to } = draftFollowupDate;

    filteredApplications = filteredApplications.filter(
      (application) =>
        application.followupDate &&
        application.followupDate >= from &&
        application.followupDate <= to
    );
  }

  // console.log(draftAppliedDate, draftFollowupDate, "table");

  return (
    <Table className="mt-5">
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Platform</TableHead>
          <TableHead>Applied</TableHead>
          <TableHead>Follow up</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredApplications.map((app) => (
          <ApplicationRow
            key={app.id}
            application={app}
            onEdit={onEdit}
            onRowClick={onRowClick}
            onDelete={onDelete}
          />
        ))}
      </TableBody>
    </Table>
  );
}

export default ApplicationTable;
