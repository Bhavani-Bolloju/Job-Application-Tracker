export const STATUSES = [
  "WISHLIST",
  "APPLIED",
  "INTERVIEWED",
  "OFFER",
  "REJECTED"
] as const;

export type Status = (typeof STATUSES)[number];

export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: Date;
  image: string;
  createdAt: Date;
  updateAt: Date;
  // applications: Application[];
  // accounts: Accounts[];
  // sessions: Session[]
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
  role: string;
  contactURL: string;
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

