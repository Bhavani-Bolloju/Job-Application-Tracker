import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { EllipsisVertical } from "lucide-react";

import { format, formatDistanceToNow } from "date-fns";

type Props = {
  content: string;
  date: Date;
  onDelete: (id: string) => void;
  id: string;
};

function NoteCard({ content, date, onDelete, id }: Props) {
  const formattedDate = format(new Date(date), "PP");
  const relativeDate = formatDistanceToNow(new Date(date), { addSuffix: true });

  return (
    <li className="flex items-center px-5 py-3">
      <div>{content}</div>
      <div className="flex items-center gap-1 ml-auto mr-3 text-sm text-gray-500">
        <span>{formattedDate}</span>
        <span>({relativeDate})</span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="w-4"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <EllipsisVertical />
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
    </li>
  );
}

export default NoteCard;
