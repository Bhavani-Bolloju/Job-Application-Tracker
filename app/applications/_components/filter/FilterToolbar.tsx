import QuickFilters from "./QuickFilters";
import MoreFiltersPanel from "./MoreFiltersPanel";

import { Application } from "@/lib/types";
import { useFilter } from "../../context/FilterContext";
type Props = {
  applications: Application[];
};
function FilterToolbar({ applications }: Props) {
  const { isMoreFilterOpen } = useFilter();

  return (
    <div>
      <QuickFilters applications={applications} />
      {isMoreFilterOpen && <MoreFiltersPanel />}
    </div>
  );
}

export default FilterToolbar;

