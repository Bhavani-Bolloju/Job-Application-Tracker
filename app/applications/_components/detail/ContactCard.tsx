import { Link, EllipsisVertical, UserRound } from "lucide-react";
import { ApplicationContactFormProps } from "@/lib/types";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";


type Props = ApplicationContactFormProps & {
  onDelete: (id: string) => void
  id: string;
}

function ContactCard({ name, role, contactURL, onDelete,id }: Props) {
  return (
    <li className="border-2 border-gray-300 border-t-0 px-5 py-3">
      <div className="flex items-center gap-5 ">
        <div className="flex items-end gap-1">
          <UserRound className="w-5" />
          <span className="capitalize">{name}</span>
        </div>
        <a
          href={contactURL}
          className="ml-auto inline-block"
          title="view profile"
        >
          <Link className="w-4" />
        </a>
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
      </div>
      <div>{role}</div>
    </li>
  );
}

export default ContactCard;

