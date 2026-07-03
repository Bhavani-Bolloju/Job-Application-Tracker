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
      <span className="border-2 border-t-0 border-gray-300 basis-1/5 py-3 px-5 bg-gray-50 capitalize">
        {title}
      </span>
      <span
        className={`border-2 border-t-0 border-gray-300 border-l-0 flex-1 px-5 py-3 ${title === "job URL" && "text-blue-700 flex items-center gap-2 hover:cursor-pointer hover:text-blue-800 hover:underline"}`}
      >
        <span>{content}</span>
        {title === "job URL" && <ExternalLink className="w-3.5" />}
      </span>
    </li>
  );
}

export default DetailRow;

