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
  onDelete: (id: string) => void;
  id: string;
};

function ContactCard({ name, role, contactURL, onDelete, id }: Props) {
  return (
    <li className="p-3">
      <div className="flex items-center gap-5 ">
        <div className="flex items-end gap-1">
          <UserRound className="w-5" />
          <span className="capitalize">{name}</span>
        </div>
        {contactURL && (
          <a
            href={contactURL}
            className="ml-auto inline-block"
            title="view profile"
          >
            <Link className="w-4" />
          </a>
        )}
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
              <EllipsisVertical className="w-5 text-gray-950" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
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
      <div className="text-sm ml-6.5">{role}</div>
    </li>
  );
}

export default ContactCard;
