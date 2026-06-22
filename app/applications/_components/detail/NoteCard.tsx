import React from "react";
import { EllipsisVertical } from "lucide-react";

import { format, formatDistanceToNow } from "date-fns";

type Props = {
  content: string;
  date: Date;
};

function NoteCard({ content, date }: Props) {
  const formattedDate = format(new Date(date), "PP");
  const relativeDate = formatDistanceToNow(new Date(date), { addSuffix: true });

  return (
    <div>
      <div>{content}</div>
      <div>
        <span>{formattedDate}</span>
        <span>({relativeDate})</span>
      </div>

      <EllipsisVertical />
    </div>
  );
}

export default NoteCard;

