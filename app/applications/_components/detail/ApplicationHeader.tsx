import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pencil, ExternalLink, ChevronLeft, Calendar } from "lucide-react";
import { Application, Mode } from "@/lib/types";
import { format } from "date-fns";

import ApplicationDrawer from "@/app/_components/ApplicationDrawer";

import { useRouter } from "next/navigation";

import { chartColors } from "@/lib/types";

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
    <div className="">
      <div className="flex items-stretch gap-4">
        <Link
          href="/applications"
          className="flex items-center gap-1 border-b-2 border-border mr-auto"
        >
          <ChevronLeft className="w-5 h-auto" />
          <span className="font-medium">Back</span>
        </Link>
        <Button
          variant="outline"
          className="flex items-center gap-2 py-2 px-4 border-2 border-border! rounded-md self-stretch h-auto bg-bg--1 hover:bg-background hover:cursor-pointer"
          onClick={handleEdit}
        >
          <Pencil className="w-4 text-zinc-500" />
          <span> Edit</span>
        </Button>
        {url && (
          <a
            href={url}
            target="_blank"
            className="flex items-center gap-2 py-2 px-4 border border-border rounded-md bg-white hover:bg-background"
          >
            <ExternalLink className="w-4 text-zinc-500" />
            <span>Open job Posting</span>
          </a>
        )}
      </div>
      <div className="grid grid-cols-[auto_auto_1fr] my-5 gap-x-5 mt-8">
        <div className="col-start-1 col-end-2 row-start-1 row-end-4 px-10 flex items-center justify-center text-4xl uppercase rounded-md shadow-md shadow-border border border-border ">
          {company[0]}
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 self-start capitalize font-medium text-page-title text-text-secondary">
          {company}
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 self-start text-card-title text-text-tertiary">
          {role}
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-4 self-start flex items-center mt-4 text-text-muted">
          <Calendar className="w-4 mr-2" />

          <span className="text-sm">{`Applied on ${formatDate}`}</span>
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-2 whitespace-nowrap self-center">
          <span
            style={{ backgroundColor: chartColors[status] }}
            className="inline-block px-2 rounded-lg text-white text-sm font-medium uppercase opacity-80"
          >
            {status[0] + status.slice(1).toLowerCase()}
          </span>
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
