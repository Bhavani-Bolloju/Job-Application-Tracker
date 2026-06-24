import { useState } from "react";

import { Button } from "@/components/ui/button";
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
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={() => onDialogStatus(true)}
          className="text-blue-700 border-blue-700 hover:cursor-pointer"
        >
          <Plus />
          <span>Add contact</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add profile Details </DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={handleInput}
                required
              />
            </Field>
            <Field>
              <Label htmlFor="role">Role</Label>
              <Input id="role" name="role" onChange={handleInput} required />
            </Field>
            <Field>
              <Label htmlFor="contactURL">Contact URL</Label>
              <Input
                type="url"
                id="contactURL"
                name="contactURL"
                onChange={handleInput}
                required
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={() => onDialogStatus(false)}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddContactCardForm;

