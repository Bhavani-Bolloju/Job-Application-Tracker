import React from "react";
import { Application } from "@/lib/types";

// import StatusCard from "./StatusCard";
type Props = {
  applications: Application[];
}
function StatusCards({applications}: Props) {
  return (
    <div>
      <h2>Status cards</h2>
    </div>
  );
}

export default StatusCards;

