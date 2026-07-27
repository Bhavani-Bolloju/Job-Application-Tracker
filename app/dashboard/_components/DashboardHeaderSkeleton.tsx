import { Skeleton } from "@/components/ui/skeleton";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";

import { Button } from "@/components/ui/button";

function DashboardHeaderSkeleton() {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        <Breadcrumb className="text-sm mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Button
          className="capitalize hover:cursor-pointer border-2 border-accent-2"
          variant="outline"
          disabled
        >
          Logout
        </Button>
      </div>
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
