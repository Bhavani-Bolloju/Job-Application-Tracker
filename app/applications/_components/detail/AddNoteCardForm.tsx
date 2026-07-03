"use client";

import { useState } from "react";
import React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

type Props = {
  onFormSubmit: (note: string) => void;
  open: boolean;
  onDialogStatus: (value: boolean) => void;
};

function AddNoteCardForm({ onFormSubmit, open, onDialogStatus }: Props) {
  const [inputNote, setInputNote] = useState("");

  const addNotes = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInputNote(e.target.value);
  };

  const handleSubmit = function (e: React.SubmitEvent) {
    e.preventDefault();
    onFormSubmit(inputNote);
    onDialogStatus(false);
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-blue-700 border-blue-700 hover:cursor-pointer"
          onClick={() => onDialogStatus(true)}
        >
          <Plus />
          <span className="capitalize">add note</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add note</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="notes">Note</Label>
              <Input id="notes" name="notes" required onChange={addNotes} />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={() => onDialogStatus(false)}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Confirm</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddNoteCardForm;

