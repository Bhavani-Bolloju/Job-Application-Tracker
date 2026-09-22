import React from "react";

import { Trash, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  onEdit: () => void;
  onDelete: (id: string) => void;
  name: string;
  link: string;
  description: string | null;
  id: string;
};

function JobPortalCard({
  name,
  link,
  description,
  id,
  onEdit,
  onDelete
}: Props) {
  return (
    <li>
      <div>{name[0]}</div>
      <div>{name}</div>
      <div>{link}</div>
      {description && <div>{description}</div>}
      <div>
        <Button onClick={onEdit}>
          <Trash />
        </Button>
        <Button onClick={() => onDelete(id)}>
          <Pencil />
        </Button>
      </div>
    </li>
  );
}

export default JobPortalCard;

