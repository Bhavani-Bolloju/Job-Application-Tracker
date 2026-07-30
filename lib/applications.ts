import { Application } from "./types";
import { type DateRange } from "react-day-picker";
import { startOfDay } from "date-fns";

interface Filters {
  company: string;
  followupDate: DateRange | undefined;
  appliedDate: DateRange | undefined;
  status: string;
  platform: string;
}
export function filterApplications(
  applications: Application[],
  filters: Filters
) {
  let filteredApplications = applications;

  filteredApplications = filteredApplications.filter((application) =>
    application.company.toLowerCase().includes(filters["company"].toLowerCase())
  );

  if (filters["status"] !== "all") {
    filteredApplications = filteredApplications.filter(
      (application) =>
        application.status.toLowerCase() == filters["status"].toLowerCase()
    );
  }

  if (filters["platform"] !== "all") {
    filteredApplications = filteredApplications.filter(
      (application) =>
        application?.platform &&
        application?.platform.toLowerCase() == filters["platform"].toLowerCase()
    );
  }

  if (
    filters["appliedDate"] &&
    filters["appliedDate"].from &&
    filters["appliedDate"].to
  ) {
    const { from, to } = filters["appliedDate"];

    filteredApplications = filteredApplications.filter(
      (application) =>
        startOfDay(application.appliedDate) >= startOfDay(from) &&
        startOfDay(application.appliedDate) <= startOfDay(to)
    );
  }
  if (
    filters["followupDate"] &&
    filters["followupDate"].from &&
    filters["followupDate"].to
  ) {
    const { from, to } = filters["followupDate"];

    filteredApplications = filteredApplications.filter(
      (application) =>
        application.followupDate &&
        startOfDay(application.followupDate) >= startOfDay(from) &&
        startOfDay(application.followupDate) <= startOfDay(to)
    );
  }

  return filteredApplications;
}

