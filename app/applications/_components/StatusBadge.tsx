import { Badge } from "@/components/ui/badge";
import { Status } from "@/lib/types";

// type Status = "WISHLIST" | "APPLIED" | "INTERVIEWED" | "OFFER" | "REJECTED";

const statusStyles: Record<Status, string> = {
  WISHLIST: "bg-gray-100 text-gray-700 hover:bg-gray-100",
  APPLIED: "bg-blue-100 text-blue-700 hover:bg-blue-100",
  INTERVIEWED: "bg-purple-100 text-purple-700 hover:bg-purple-100",
  OFFER: "bg-green-100 text-green-700 hover:bg-green-100",
  REJECTED: "bg-red-100 text-red-700 hover:bg-red-100"
};

const statusLabels: Record<Status, string> = {
  WISHLIST: "Wishlist",
  APPLIED: "Applied",
  INTERVIEWED: "Interviewed",
  OFFER: "Offer",
  REJECTED: "Rejected"
};

type StatusProps = {
  status: Status;
};

export default function StatusBadge({ status }: StatusProps) {
  return (
    <Badge className={`${statusStyles[status]} text-base`}>
      {statusLabels[status]}
    </Badge>
  );
}

