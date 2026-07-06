import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

function DashboardFooter() {
  return (
    <div className="flex gap-5 mt-5 items-center border-2 rounded-md p-5 bg-gray-50">
      <Image src="/search-list.png" alt="search list" width={70} height={60} />
      <div>
        <p className="font-semibold mb-1">Want to see all your applications?</p>
        <p>View, search and filter all you job applications in one place</p>
      </div>
      <Button className="ml-auto p-5">View all applications</Button>
    </div>
  );
}

export default DashboardFooter;

