import React from "react";
import Image from "next/image";

import Link from "next/link";

function DashboardFooter() {
  return (
    <div className="flex gap-5 px-8 py-5 items-center rounded-md shadow-md shadow-border border-2 border-border bg-bg--3">
      <Image src="/search-list.png" alt="search list" width={70} height={70} />
      <div>
        <p className="font-medium mb-1 text-text-secondary">
          Want to see all your applications?
        </p>
        <p className="text-sm">
          View, search and filter all you job applications in one place
        </p>
      </div>
      <Link
        href="/applications"
        className="ml-auto py-3 px-4 inline-block hover:cursor-pointer bg-accent-1 hover:bg-accent-2 text-background rounded-md text-sm"
      >
        View all applications
      </Link>
    </div>
  );
}

export default DashboardFooter;
