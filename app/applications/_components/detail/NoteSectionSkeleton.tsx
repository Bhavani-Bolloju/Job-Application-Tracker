import { Notebook } from "lucide-react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

function NoteSectionSkeleton() {
  return (
    <section className="mt-8 rounded-md shadow-sm shadow-border border border-border bg-bg--1">
      <div className="flex justify-between p-6 border-b-2 border-border">
        <h3 className="flex gap-2 items-center text-section-title overflow-hidden ">
          <Notebook className="w-5 h-auto" />
          <span>Notes</span>
        </h3>
        <Button
          variant="outline"
          className="bg-accent-3 text-bg--1 hover:cursor-pointer hover:bg-accent-2 hover:text-bg--1"
          disabled
        >
          <Plus />
          <span className="capitalize">add note</span>
        </Button>
      </div>
      <ul className="divide-y-2 divide-border p-3">
        <Skeleton className="flex w-full h-10 bg-white justify-between">
          <Skeleton className="w-1/4 h-5"></Skeleton>
          <Skeleton className="w-1/4 h-5 "></Skeleton>
          <Skeleton className="w-20 h-5 "></Skeleton>
        </Skeleton>
        <Skeleton className="flex w-full h-10 bg-white justify-between pt-5">
          <Skeleton className="w-1/4 h-5"></Skeleton>
          <Skeleton className="w-1/4 h-5 "></Skeleton>
          <Skeleton className="w-20 h-5 "></Skeleton>
        </Skeleton>
      </ul>
    </section>
  );
}

export default NoteSectionSkeleton;
