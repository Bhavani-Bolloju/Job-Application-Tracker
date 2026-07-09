import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pencil, ExternalLink, ChevronLeft, Calendar } from "lucide-react";
import { Application, Mode } from "@/lib/types";
import { format } from "date-fns";

import ApplicationDrawer from "@/app/_components/ApplicationDrawer";

import { useRouter } from "next/navigation";

import StatusBadge from "../StatusBadge";

import { Status } from "@/lib/types";

type Props = {
  application: Application;
};

function ApplicationHeader({ application }: Props) {
  const { company, role, appliedDate, url, status } = application;
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("add");

  const formatDate = format(new Date(appliedDate), "PP");

  const router = useRouter();

  function handleEdit() {
    setMode("edit");
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
    router.refresh();
  }

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
          onClick={handleEdit}
        >
          <Pencil />
          <span> Edit</span>
        </Button>
        {url && (
          <a
            href={url}
            target="_blank"
            className="flex items-center gap-2 py-2 px-4 border border-gray-200"
          >
            <ExternalLink />
            <span>Open job Posting</span>
          </a>
        )}
      </div>
      <div className="grid grid-cols-[auto_1fr_auto] my-5 gap-x-10">
        <div className="col-start-1 col-end-2 row-start-1 row-end-4 bg-red-200 px-10 flex items-center justify-center text-5xl rounded-lg">
          {company[0]}
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 self-start text-lg">
          {company}
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 self-start">
          {role}
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-4 self-start flex items-center gap-2 mt-5">
          <Calendar className="w-4" />
          <span>{formatDate}</span>
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-2 whitespace-nowrap justify-self-end">
          <StatusBadge status={status as Status} />
        </div>
      </div>

      <ApplicationDrawer
        isOpen={isOpen}
        mode={mode}
        application={application}
        onClose={handleClose}
      />
    </div>
  );
}

export default ApplicationHeader;
