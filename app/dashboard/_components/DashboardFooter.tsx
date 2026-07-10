import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import Link from "next/link";

function DashboardFooter() {
  return (
    <div className="flex gap-5 mt-5 items-center border-2 rounded-md p-5 bg-gray-50">
      <Image src="/search-list.png" alt="search list" width={70} height={70} />
      <div>
        <p className="font-medium mb-1">Want to see all your applications?</p>
        <p className="text-sm">View, search and filter all you job applications in one place</p>
      </div>
      <Link href="/applications" className="ml-auto">
        <Button className="p-5 hover:cursor-pointer">
          View all applications
        </Button>
      </Link>
    </div>
  );
}

export default DashboardFooter;

