import React, { useState } from "react";
import NoteCard from "./NoteCard";
import { Note } from "@/lib/types";

import { Notebook } from "lucide-react";

import AddNoteCardForm from "./AddNoteCardForm";

import { useRouter } from "next/navigation";

type Props = {
  notes: Note[];
  applicationId: string;
};

function NoteSection({ notes, applicationId }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleFormSubmit = async function (note: string) {
    const notesObj = { content: note, applicationId };
    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notesObj)
    });

    router.refresh();
  };

  const handleDialog = function (value: boolean) {
    setIsOpen(value);
  };

  const handleDelete = async function (id: string) {
    // console.log(id, "delete note item");
    await fetch(`/api/notes/${id}`, { method: "DELETE" });

    router.refresh();
  };

  return (
    <section className="mt-8 rounded-md shadow-sm shadow-gray-200 border border-border ">
      <div className="flex justify-between p-6 border-b-2 border-gray-100">
        <h3 className="flex gap-2 items-center text-section-title overflow-hidden ">
          <Notebook className="w-5 h-auto" />
          <span>Notes</span>
        </h3>
        <AddNoteCardForm
          onFormSubmit={handleFormSubmit}
          open={isOpen}
          onDialogStatus={handleDialog}
        />
      </div>
      <ul className="divide-y-2 divide-border">
        {notes.length > 0 ?
          <>
            {notes.map((note) => (
              <NoteCard
                key={note.id}
                id={note.id}
                content={note.content}
                onDelete={handleDelete}
                date={note.createdAt}
              />
            ))}
          </>
        : <div className=" text-center p-3 capitalize text-sm">empty list</div>}
      </ul>
    </section>
  );
}

export default NoteSection;
