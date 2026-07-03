import QuickFilters from "./QuickFilters";
import MoreFiltersPanel from "./MoreFiltersPanel";

import { Application } from "@/lib/types";

type Props = {
  applications: Application[];
};
function FilterToolbar({ applications }: Props) {
 

  return (
    <div>
      <QuickFilters applications={applications} />
       <MoreFiltersPanel />
    </div>
  );
}

export default FilterToolbar;

