import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pencil, ExternalLink, ChevronLeft, Calendar } from "lucide-react";
import { Application } from "@/lib/types";
import { format } from "date-fns";

type Props = {
  application: Application;
};

function ApplicationHeader({ application }: Props) {
  const { company, role, appliedDate } = application;

  const formatDate = format(new Date(appliedDate), "PP");

  return (
    <div>
      <div className="flex items-stretch gap-5">
        <Link
          href="/applications"
          className="flex items-center gap-2 py-2 px-4 border border-gray-200 mr-auto"
        >
          <ChevronLeft />
          <span>Back</span>
        </Link>
        <Button
          variant="outline"
          className="flex items-center gap-2 py-2 px-4 border border-gray-200 rounded-none self-stretch h-auto"
        >
          <Pencil />
          <span> Edit</span>
        </Button>
        <a
          href=""
          target="_blank"
          className="flex items-center gap-2 py-2 px-4 border border-gray-200"
        >
          <ExternalLink />
          <span>Open job Posting</span>
        </a>
      </div>
      <div className="grid grid-cols-[auto_1fr_auto] my-5 gap-x-10">
        <div className="col-start-1 col-end-2 row-start-1 row-end-4 bg-red-200 px-10 flex items-center justify-center">
          logo
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 self-start">
          {company}
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 self-start">
          {role}
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-4 self-start flex items-center gap-2">
          <Calendar className="w-4" />
          <span>{formatDate}</span>
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-2 whitespace-nowrap justify-self-end">
          status
        </div>
      </div>
    </div>
  );
}

export default ApplicationHeader;

