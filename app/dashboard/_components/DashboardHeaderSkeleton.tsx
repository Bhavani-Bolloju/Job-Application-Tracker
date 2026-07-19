import { Skeleton } from "@/components/ui/skeleton";

function DashboardHeaderSkeleton() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          
        <Skeleton className="h-10 w-60 mb-2" />
        <Skeleton className="h-5 w-50" />
        </div>
      <Skeleton className="h-10 w-40" />
      </div>
    </div>
  );
}

export default DashboardHeaderSkeleton;
