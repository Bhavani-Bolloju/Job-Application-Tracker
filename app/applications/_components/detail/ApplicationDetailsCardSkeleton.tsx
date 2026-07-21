import React from "react";

import { List } from "lucide-react";

import DetailRowSkeleton from "./DetailRowSkeleton";

function ApplicationDetailsCardSkeleton() {
  return (
    <div className="mt-8 rounded-md shadow-sm shadow-border border border-border bg-bg--1 ">
      <div className="flex items-center gap-2 p-6 border-b border-border">
        <List className="w-5" />
        <h3 className="text-section-title">Application Details</h3>
      </div>
      <ul className="divide-y-2 divide-border">
        <DetailRowSkeleton />
        <DetailRowSkeleton />
        <DetailRowSkeleton />
        <DetailRowSkeleton />
        <DetailRowSkeleton />
        <DetailRowSkeleton />
        <DetailRowSkeleton />
        <DetailRowSkeleton />
        <DetailRowSkeleton />
        <DetailRowSkeleton />
      </ul>
    </div>
  );
}

export default ApplicationDetailsCardSkeleton;
