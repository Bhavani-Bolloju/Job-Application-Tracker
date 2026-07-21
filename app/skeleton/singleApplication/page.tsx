import React from "react";
import ApplicationHeaderSkeleton from "@/app/applications/_components/detail/ApplicationHeaderSkeleton";
import ApplicationDetailsCardSkeleton from "@/app/applications/_components/detail/ApplicationDetailsCardSkeleton";
import NoteSectionSkeleton from "@/app/applications/_components/detail/NoteSectionSkeleton";

import ContactSectionSkeleton from "@/app/applications/_components/detail/ContactSectionSkeleton";

function SingleApplication() {
  return (
    <div className="px-8 py-10">
      <ApplicationHeaderSkeleton />
      <ApplicationDetailsCardSkeleton />
      <NoteSectionSkeleton />
      <ContactSectionSkeleton />
    </div>
  );
}

export default SingleApplication;

