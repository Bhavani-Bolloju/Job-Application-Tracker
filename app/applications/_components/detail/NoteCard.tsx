import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import DeleteAlertDialog from "@/app/_components/DeleteAlertDialog";

import { EllipsisVertical } from "lucide-react";

import { format, formatDistanceToNow } from "date-fns";

type Props = {
  content: string;
  date: Date;
  onDelete: (id: string) => Promise<void>;
  id: string;
};

function NoteCard({ content, date, onDelete, id }: Props) {
  const formattedDate = format(new Date(date), "PP");
  const relativeDate = formatDistanceToNow(new Date(date), { addSuffix: true });

  const handleDelete = async function () {
    await onDelete(id);
  };

  return (
    <li className="flex items-center p-4">
      <div>{content}</div>
      <div className="flex items-center gap-1 ml-auto mr-3 text-sm text-text-muted">
        <span>{formattedDate}</span>
        <span>({relativeDate})</span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <EllipsisVertical className="w-5 text-gray-950" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {/* <DropdownMenuItem
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(application);
            }}
          >
            Edit
          </DropdownMenuItem> */}

          {/* <DropdownMenuSeparator /> */}

          <DeleteAlertDialog onDelete={handleDelete} />

          {/* <DropdownMenuItem
            variant="destructive"
            className="w-full"
            onClick={(e) => {
           
              onDelete(id);
            }}
          >
            Delete
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}

export default NoteCard;
