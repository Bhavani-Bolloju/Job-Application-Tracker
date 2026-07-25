import { Link, EllipsisVertical, UserRound } from "lucide-react";
import { ApplicationContactFormProps } from "@/lib/types";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import ConfirmAlertDialog from "@/app/_components/ConfirmAlertDialog";

type Props = ApplicationContactFormProps & {
  onDelete: (id: string) => Promise<void>;
  id: string;
};

function ContactCard({ name, role, contactURL, onDelete, id }: Props) {
  const handleDelete = async function () {
    await onDelete(id);
  };

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
            <ConfirmAlertDialog
              onConfirm={handleDelete}
              title="Delete Contact?"
              description="This contact will be permanently removed from this application."
              successMsg="Contact deleted successfully."
              failureMsg="Failed to delete Contact. Please try again."
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="text-sm ml-6.5 text-text-muted">{role}</div>
    </li>
  );
}

export default ContactCard;
