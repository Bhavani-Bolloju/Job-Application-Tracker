"use client";

// import { MoreHorizontalIcon } from "lucide-react";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import { Application } from "@/lib/types";

import ApplicationRow from "./ApplicationRow";

// console.log("application table");

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
  if (applications.length == 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No applications yet. Add your first one!
      </div>
    );  
  }

  // console.log("application table");

  return (
    <Table>
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
        {applications.map((app) => (
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

