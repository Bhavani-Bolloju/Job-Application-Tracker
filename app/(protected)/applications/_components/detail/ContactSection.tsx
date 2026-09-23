import React, { useState } from "react";
import { ContactRound } from "lucide-react";
import AddContactCardForm from "./AddContactCardForm";

import { ApplicationContactFormProps } from "@/lib/types";

import { Contact } from "@/lib/types";

import { useRouter } from "next/navigation";

import ContactCard from "./ContactCard";

import { toast } from "sonner";

type Props = {
  contacts: Contact[];
  applicationId: string;
};

function ContactSection({ contacts, applicationId }: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const router = useRouter();

  const handleDialogStatus = function (status: boolean) {
    setIsDialogOpen(status);
  };

  const handleFormSubmit = async function (value: ApplicationContactFormProps) {
    const obj = { ...value, applicationId };

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(obj)
      });

      if (!response.ok) throw new Error("");

      toast.success("Added contact successfully", { position: "top-left" });

      router.refresh();
    } catch {
      toast.error("Failed to add contact", { position: "top-left" });
    }
  };

  const handleDelete = async function (id: string) {
    const response = await fetch(`/api/contacts/${id}`, { method: "DELETE" });

    if (!response.ok) throw new Error("Failed to Delete.");

    router.refresh();
  };

  // console.log(contacts, applicationId, "contact details -- section");

  return (
    <section className="mt-8 rounded-md shadow-sm shadow-border border border-border bg-bg--1">
      <div className="flex justify-between p-6 border-b-2 border-border">
        <h3 className="flex items-center gap-2 text-section-title capitalize">
          <ContactRound className="w-5" />
          <span>contacts</span>
        </h3>
        <AddContactCardForm
          open={isDialogOpen}
          onDialogStatus={handleDialogStatus}
          onFormSubmit={handleFormSubmit}
        />
      </div>
      <ul className="divide-y-2 divide-border">
        {contacts?.length > 0 ?
          <>
            {contacts.map((contact) => (
              <ContactCard
                name={contact.name}
                key={contact.id}
                role={contact.role}
                contactURL={contact.contactURL}
                onDelete={handleDelete}
                id={contact.id}
              />
            ))}
          </>
        : <div className="text-center p-3 capitalize text-sm">empty list</div>}
      </ul>
    </section>
  );
}

export default ContactSection;
