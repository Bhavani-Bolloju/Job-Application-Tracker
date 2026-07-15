import { TableCell, TableRow } from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { Ellipsis } from "lucide-react";

import StatusBadge from "./StatusBadge";
import { format } from "date-fns";
import { Application, cardColors } from "@/lib/types";

import { Badge } from "@/components/ui/badge";

type Props = {
  application: Application;
  onRowClick: (id: string) => void;
  onEdit: (app: Application) => void;
  onDelete: (id: string) => void;
};

function ApplicationRow({ application, onEdit, onDelete, onRowClick }: Props) {
  const { id, company, role, status, platform, appliedDate, followupDate } =
    application;

  return (
    <TableRow
      onClick={(e) => {
        console.log("table row");
        e.stopPropagation();
        onRowClick(id);
      }}
      className="hover:cursor-pointer border-b border-border"
    >
      <TableCell className="font-medium  text-base px-5 py-4">{company}</TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>
        <Badge
          className={`${cardColors[status]["icon-text"]} ${cardColors[status]["icon-bg"]}`}
        >
          {status[0] + status.slice(1).toLowerCase()}
        </Badge>
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
            <Button
              variant="ghost"
              size="icon"
              className="size-8"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Ellipsis />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="w-full"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(application);
              }}
            >
              Edit
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              className="w-full"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(id);
              }}
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
