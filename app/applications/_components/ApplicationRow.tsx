import { TableCell, TableRow } from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import StatusBadge from "./StatusBadge";
import { format } from "date-fns";
import { Application } from "@/lib/types";

type Props = {
  application: Application;
  onRowClick: (app: Application) => void;
  onEdit: (app: Application) => void;
  onDelete: (id: string) => void;
};

function ApplicationRow({ application, onEdit, onDelete, onRowClick }: Props) {
  const { id, company, role, status, platform, appliedDate, followupDate } =
    application;

  console.log("application row", id, company);

  return (
    <TableRow>
      <TableCell className="font-medium">{company}</TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>
        <StatusBadge status={status} />
      </TableCell>
      <TableCell>{platform}</TableCell>
      <TableCell>{format(new Date(appliedDate), "MMM d")}</TableCell>
      <TableCell>
        {" "}
        {followupDate ? format(new Date(followupDate), "MMM d") : "—"}{" "}
      </TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="w-full"
              onClick={() => onEdit(application)}
            >
              Edit
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              className="w-full"
              onClick={() => onDelete(id)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

export default ApplicationRow;

