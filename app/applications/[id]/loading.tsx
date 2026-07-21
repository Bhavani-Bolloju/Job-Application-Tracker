import ApplicationHeaderSkeleton from "../_components/detail/ApplicationHeaderSkeleton";

import ApplicationDetailsCardSkeleton from "../_components/detail/ApplicationDetailsCardSkeleton";

import NoteSectionSkeleton from "../_components/detail/NoteSectionSkeleton";
import ContactSectionSkeleton from "../_components/detail/ContactSectionSkeleton";

export default function Loading() {
  return (
    <div className="px-8 py-10">
      <ApplicationHeaderSkeleton />
      <ApplicationDetailsCardSkeleton />
      <NoteSectionSkeleton />
      <ContactSectionSkeleton />
    </div>
  );
}
