import { Skeleton } from "@/components/ui/skeleton";
function ApplicationHeaderSkeleton() {
  return (
    <div>
      <div className="flex items-stretch gap-4">
        <Skeleton className="w-25 py-5 mr-auto" />
        <Skeleton className="w-25 py-5" />
        <Skeleton className="py-5 w-50" />
      </div>
      <div className="grid grid-cols-[auto_auto_1fr] my-5 gap-x-5 mt-8">
        <Skeleton className="col-start-1 col-end-2 row-start-1 row-end-4 px-15 self-start h-30" />
        <Skeleton className="col-start-2 col-end-3 row-start-1 row-end-2 h-8 w-30" />
        <Skeleton className="col-start-2 col-end-3 row-start-2 row-end-3 h-6 w-60" />
        <Skeleton className="col-start-2 col-end-3 row-start-3 row-end-4 w-30 h-4 self-end" />
        <Skeleton className="col-start-3 col-end-4 row-start-1 row-end-2 w-30 h-6" />
      </div>
    </div>
  );
}

export default ApplicationHeaderSkeleton;
