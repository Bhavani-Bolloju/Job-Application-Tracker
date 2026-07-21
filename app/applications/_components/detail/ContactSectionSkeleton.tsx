import { ContactRound } from "lucide-react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

function ContactSectionSkeleton() {
  return (
    <section className="mt-8 rounded-md shadow-sm shadow-border border border-border bg-bg--1">
      <div className="flex justify-between p-6 border-b-2 border-border">
        <h3 className="flex items-center gap-2 text-section-title capitalize">
          <ContactRound className="w-5" />
          <span>contacts</span>
        </h3>
        <Button
          variant="outline"
          className="bg-accent-3 text-bg--1 hover:cursor-pointer hover:bg-accent-2 hover:text-bg--1"
          disabled
        >
          <Plus />
          <span>Add contact</span>
        </Button>
      </div>
      <ul className="divide-y-2 divide-border p-5">
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

export default ContactSectionSkeleton;
