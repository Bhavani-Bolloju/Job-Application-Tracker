import { useState } from "react";

import { Button } from "@/components/ui/button";
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

import { Plus } from "lucide-react";
import { ApplicationContactFormProps } from "@/lib/types";

type Props = {
  open: boolean;
  onDialogStatus: (status: boolean) => void;
  onFormSubmit: (value: ApplicationContactFormProps) => void;
};

function AddContactCardForm({ open, onDialogStatus, onFormSubmit }: Props) {
  const [inputContact, setInputContact] = useState<ApplicationContactFormProps>(
    {
      name: "",
      role: "",
      contactURL: ""
    }
  );

  const handleInput = function (e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setInputContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = function (e: React.SubmitEvent) {
    e.preventDefault();
    onFormSubmit(inputContact);
    onDialogStatus(false);
  };

  return (
    <Dialog open={open} onOpenChange={onDialogStatus}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={() => onDialogStatus(true)}
          className="bg-accent-3 text-bg--1 hover:cursor-pointer hover:bg-accent-2 hover:text-bg--1"
        >
          <Plus />
          <span>Add contact</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="mb-5 gap-0">
            <DialogTitle className="text-2xl text-text-secondary">
              Add profile Details{" "}
            </DialogTitle>
            <DialogDescription className="text-text-muted">
              Store recruiter or interviewer information.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name" className="text-text-tertiary mb-1">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={handleInput}
                required
                className="py-3 px-4 sm:text-base! text-text-secondary"
              />
            </Field>
            <Field>
              <Label htmlFor="role" className="text-text-tertiary mb-1">
                Role
              </Label>
              <Input
                id="role"
                name="role"
                onChange={handleInput}
                required
                className="py-3 px-4 sm:text-base! text-text-secondary"
              />
            </Field>
            <Field>
              <Label htmlFor="contactURL" className="text-text-tertiary mb-1">
                Contact URL
              </Label>
              <Input
                type="url"
                id="contactURL"
                name="contactURL"
                onChange={handleInput}
                className="py-3 px-4 sm:text-base! text-text-secondary"
                required
              />
            </Field>
          </FieldGroup>
          <DialogFooter className="mt-5">
            <DialogClose asChild>
              <Button
                variant="outline"
                onClick={() => onDialogStatus(false)}
                className="hover:cursor-pointer "
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

export default AddContactCardForm;
