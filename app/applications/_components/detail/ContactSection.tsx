import React, { useState } from "react";
import { ContactRound } from "lucide-react";
import AddContactCardForm from "./AddContactCardForm";

import { ApplicationContactFormProps } from "@/lib/types";

import { Contact } from "@/lib/types";

import { useRouter } from "next/navigation";

import ContactCard from "./ContactCard";

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

    console.log(obj, "handle contact submit");

    await fetch("/api/contacts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(obj)
    });

    router.refresh();
  };

  const handleDelete = async function (id: string) {
    await fetch(`/api/contacts/${id}`, { method: "DELETE" });

    router.refresh();
  };

  // console.log(contacts, applicationId, "contact details -- section");

  return (
    <section className="mt-8">
      <div className="flex justify-between p-5 border-2 border-gray-300">
        <h3 className="flex items-center gap-2">
          <ContactRound className="w-5" />
          <span>contacts</span>
        </h3>
        <AddContactCardForm
          open={isDialogOpen}
          onDialogStatus={handleDialogStatus}
          onFormSubmit={handleFormSubmit}
        />
      </div>
      <ul>
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
        : <div className="border-2 border-gray-300 border-t-0 text-center p-3 capitalize">
            empty list
          </div>
        }
      </ul>
    </section>
  );
}

export default ContactSection;

