import { Application } from "@/lib/types";

const createdAt = new Date("2026-07-31T00:00:00Z");
const updatedAt = new Date("2026-07-31T00:00:00Z");
function createApplication(overrides: Partial<Application> = {}): Application {
  return {
    id: "1",
    company: "Company",
    role: "Frontend Engineer",
    status: "APPLIED",
    platform: "LinkedIn",
    appliedDate: new Date("2026-06-30"),
    followupDate: new Date("2026-07-10"),
    notes: [
      {
        id: "",
        content: "",
        createdAt: new Date(),
        applicationId: ""
      }
    ],
    contacts: [
      {
        id: "",
        name: "",
        role: null,
        contactURL: null,
        applicationId: ""
      }
    ],
    location: "",
    salary: null,
    url: "",
    type: null,
    userId: "user-1",
    createdAt,
    updatedAt,

    ...overrides
  };
}

export default createApplication;
