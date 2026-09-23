import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import ConfirmAlertDialog from "@/app/_components/ConfirmAlertDialog";

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
      <div className="ml-auto mr-3 text-sm text-text-muted">
        {`${formattedDate} (${relativeDate})`}
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
          <ConfirmAlertDialog
            onConfirm={handleDelete}
            successMsg="Note deleted successfully."
            failureMsg="Failed to delete note. Please try again."
            title="Delete Note?"
            description="This note will be permanently removed from this application."
          >
            <DropdownMenuItem
              variant="destructive"
              onSelect={(e) => {
                e.preventDefault();
              }}
            >
              Delete
            </DropdownMenuItem>
          </ConfirmAlertDialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}

export default NoteCard;
