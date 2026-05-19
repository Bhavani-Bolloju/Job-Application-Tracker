import Field from "./Field";
import { Application } from "@/lib/types";

function ViewMode({ application }: { application: Application }) {
  return (
    <div className="space-y-4 text-sm">
      <Field label="Type" value={application.type} />
      <Field label="Location" value={application.location} />
      <Field label="Salary" value={application.salary} />
      <Field label="Platform" value={application.platform} />
      <Field label="URL" value={application.url} />
      <Field
        label="Applied"
        value={
          application.appliedDate ?
            new Date(application.appliedDate).toLocaleDateString()
          : null
        }
      />
      <Field
        label="Follow Up"
        value={
          application.followupDate ?
            new Date(application.followupDate).toLocaleDateString()
          : null
        }
      />
    </div>
  );
}

export default ViewMode;

