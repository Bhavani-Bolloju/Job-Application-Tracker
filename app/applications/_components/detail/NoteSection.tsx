import React, { useState } from "react";
import NoteCard from "./NoteCard";
import { Note } from "@/lib/types";

import { Notebook } from "lucide-react";

import AddNoteCardForm from "./AddNoteCardForm";

import { useRouter } from "next/navigation";

type Props = {
  notes: Note[];
  id: string;
};

function NoteSection({ notes, id }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleAddNote = async function (note: string) {
    const notesObj = { content: note, applicationId: id };
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

  console.log(notes);

  return (
    <div className="mt-8">
      <div className="flex justify-between p-5 border-2 border-gray-300">
        <h3 className="flex gap-2 items-center">
          <Notebook className="w-4" />
          <span>Notes</span>
        </h3>
        <AddNoteCardForm
          onAdd={handleAddNote}
          open={isOpen}
          onDialogStatus={handleDialog}
        />
      </div>
      <ul>
        
      </ul>
    </div>
  );
}

export default NoteSection;

