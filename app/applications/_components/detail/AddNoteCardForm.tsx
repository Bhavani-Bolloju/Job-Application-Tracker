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
  DialogTrigger,
  DialogDescription
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
    <Dialog open={open} onOpenChange={onDialogStatus}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-accent-3 text-bg--1 hover:cursor-pointer hover:bg-accent-2 hover:text-bg--1"
          onClick={() => onDialogStatus(true)}
        >
          <Plus />
          <span className="capitalize">add note</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="mb-5 gap-0">
            <DialogTitle className="text-2xl text-text-secondary">
              Add note
            </DialogTitle>
            <DialogDescription className="text-text-muted">
              Add a note related to this application.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label
                htmlFor="notes"
                className="text-text-tertiary mb-1"
              >
                Note
              </Label>
              <Input
                id="notes"
                name="notes"
                required
                onChange={addNotes}
                className="py-3 px-4 sm:text-base! text-text-secondary"
              />
            </Field>
          </FieldGroup>
          <DialogFooter className="mt-5">
            <DialogClose asChild>
              <Button
                className="hover:cursor-pointer"
                variant="outline"
                onClick={() => onDialogStatus(false)}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-accent-3 text-background hover:bg-accent-2 hover:text-background hover:cursor-pointer"
            >
              Confirm
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddNoteCardForm;
