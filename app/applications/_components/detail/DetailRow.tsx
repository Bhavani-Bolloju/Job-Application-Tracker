import React from "react";
import StatusBadge from "../StatusBadge";
import { Status } from "@/lib/types";
import { format, formatDistanceToNow } from "date-fns";
import { ExternalLink } from "lucide-react";

type RowProps =
  | { title: "status"; value: Status }
  | {
      title: string;
      value: string | Date | null;
    };
function DetailRow({ title, value }: RowProps) {
  const finalValue =
    value === null ? "-"
    : value instanceof Date ? value.toString()
    : value;

  let content: React.ReactNode;

  if (title === "status" && typeof value === "string") {
    content = <StatusBadge status={value as Status} />;
  } else {
    content = finalValue;
  }

  if ((title === "applied date" || title === "follow-up date") && value) {
    const date = format(new Date(value), "PP");
    const distance = formatDistanceToNow(new Date(value), { addSuffix: true });
    content = `${date} (${distance})`;
  }

  return (
    <li className="flex items-center w-full">
      <span className="basis-1/5 capitalize text-sm p-4">{title}</span>
      <span
        className={`flex-1 py-3 ${title === "job URL" && value && "text-blue-700 flex items-center gap-2 hover:cursor-pointer hover:text-blue-800 hover:underline text-base "} border-l-2 border-gray-100 p-4`}
      >
        <span>{content}</span>
        {title === "job URL" && value && <ExternalLink className="w-3.5" />}
      </span>
    </li>
  );
}

export default DetailRow;
