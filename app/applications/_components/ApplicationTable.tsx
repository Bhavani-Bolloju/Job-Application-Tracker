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

type Props = {
  applications: Application[];
  onRowClick: (app: Application) => void;
  onEdit: (app: Application) => void;
  onDelete: (id: string) => void;
};

function ApplicationTable({ applications }: Props) {
  if (applications.length == 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No applications yet. Add your first one!
      </div>
    );
  }

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
          <ApplicationRow key={app.id} application={app} />
        ))}
      </TableBody>
    </Table>
  );
}

export default ApplicationTable;

