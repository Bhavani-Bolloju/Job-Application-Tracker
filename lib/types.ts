export const STATUSES = [
  "WISHLIST",
  "APPLIED",
  "INTERVIEWED",
  "OFFER",
  "REJECTED"
] as const;

export const cardColors = {
  APPLIED: { "icon-text": "text-blue-600", "icon-bg": "bg-blue-100" },
  INTERVIEWED: { "icon-text": "text-orange-600", "icon-bg": "bg-orange-100" },
  OFFER: { "icon-text": "text-emerald-600", "icon-bg": "bg-emerald-100" },
  REJECTED: { "icon-text": "text-red-600", "icon-bg": "bg-red-100" },
  WISHLIST: { "icon-text": "text-violet-600", "icon-bg": "bg-violet-100" }
} as const;

export const chartColors = {
  APPLIED: "rgb(37, 99, 235)", // blue-600
  INTERVIEWED: "rgb(234, 88, 12)", // orange-600
  OFFER: "rgb(5, 150, 105)", // emerald-600
  REJECTED: "rgb(220, 38, 38)", // red-600
  WISHLIST: "rgb(124, 58, 237)" // violet-600
} as const;

export type Status = (typeof STATUSES)[number];

export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: Date;
  image: string;
  createdAt: Date;
  updateAt: Date;
  applications: Application[];
  // accounts: Accounts[];
  // sessions: Session[];
};
export type Application = {
  id: string;
  company: string;
  role: string;
  status: Status;
  appliedDate: Date;
  followupDate: Date | null;
  url: string | null;
  salary: string | null;
  location: string | null;
  notes: Note[];
  type: string | null;
  platform: string | null;
  contacts: Contact[];
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};

export type Note = {
  id: string;
  content: string;
  createdAt: Date;
  applicationId: string;
};

export type ApplicationContactFormProps = {
  name: string;
  role: string | null;
  contactURL: string | null;
};
export type Contact = {
  id: string;
  name: string;
  role: string | null;
  contactURL: string | null;
  applicationId: string;
};

export type Mode = "view" | "edit" | "add";

export type FormValues = {
  company: string;
  role: string;
  status: string;
  platform: string;
  type: string;
  location: string;
  salary: string;
  url: string;
  appliedDate: Date;
  followupDate: Date;
};

export type StatusCount = {
  status: Status;
  _count: {
    status: number;
  };
};
