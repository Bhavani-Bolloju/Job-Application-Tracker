import React, { useState } from "react";
import ApplicationDrawer from "@/app/_components/ApplicationDrawer";
import type { Session } from "next-auth";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

function DashboardHeader({ user }: { user: Session["user"] | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // console.log(user, "user");

  function handleAddNew() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
    router.refresh();
  }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-page-title font-bold mb-1 text-text-secondary">
            Hi, {user?.name} 👋
          </p>
          <p>Track your job applications </p>
        </div>
        <Button
          onClick={handleAddNew}
          className="flex items-center gap-1 py-3 px-4 h-auto hover:cursor-pointer bg-accent-1 hover:bg-accent-2"
        >
          <Plus />
          <span>Add application</span>
        </Button>
      </div>
      <ApplicationDrawer
        isOpen={isOpen}
        mode="add"
        application={null}
        onClose={handleClose}
      />
    </div>
  );
}

export default DashboardHeader;
