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
    <section className="mt-8">
      <div className="flex justify-between p-5 border-2 border-gray-300">
        <h3 className="flex gap-2 items-center">
          <Notebook className="w-4" />
          <span>Notes</span>
        </h3>
        <AddNoteCardForm
          onFormSubmit={handleFormSubmit}
          open={isOpen}
          onDialogStatus={handleDialog}
        />
      </div>
      <ul>
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
        : <div className="border-2 border-gray-300 border-t-0 text-center p-3 capitalize">
            empty list
          </div>
        }
      </ul>
    </section>
  );
}

export default NoteSection;

