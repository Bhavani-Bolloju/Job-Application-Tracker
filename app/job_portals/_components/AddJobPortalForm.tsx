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
import { Textarea } from "@/components/ui/textarea";

import { Plus } from "lucide-react";

import {  JobPortalFormProps } from "@/lib/types";

type Props = {
  open: boolean;
  onPortalDialogStatus: (status: boolean) => void;
  onPortalFormSubmit: (value: JobPortalFormProps) => void;
};

function AddJobPortalForm({
  open,
  onPortalDialogStatus,
  onPortalFormSubmit
}: Props) {
  const [inputPortal, setInputPortal] = useState({
    name: "",
    link: "",
    description: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setInputPortal((prev) => ({ ...prev, [name]: value }));
  };

  // console.log(inputPortal, "input portal");
  const handleSubmit = function (e: React.SubmitEvent) {
    e.preventDefault();
    onPortalDialogStatus(false);
    onPortalFormSubmit(inputPortal);
  };

  return (
    <Dialog open={open} onOpenChange={onPortalDialogStatus}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={() => onPortalDialogStatus(true)}
          className="bg-accent-3 text-bg--1 hover:cursor-pointer hover:bg-accent-2 hover:text-bg--1 capitalize"
        >
          <Plus />
          <span>Add portal</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="mb-5 gap-0">
            <DialogTitle className="text-2xl text-text-secondary">
              Add Job Portal
            </DialogTitle>
            <DialogDescription className="text-text-muted">
              Add details of the job portal below
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label
                htmlFor="name"
                className="text-text-tertiary mb-1 capit"
              >
                Portal name
              </Label>
              <Input
                className="py-3 px-4 sm:text-base! text-text-secondary"
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={inputPortal.name}
                required
              />
            </Field>
            <Field>
              <Label htmlFor="link" className="text-text-tertiary mb-1">
                Portal URL
              </Label>
              <Input
                id="link"
                name="link"
                onChange={handleChange}
                className="py-3 px-4 sm:text-base! text-text-secondary"
                value={inputPortal.link}
                required
              />
            </Field>
            <Field>
              <Label htmlFor="description" className="text-text-tertiary mb-1">
                Description <span>(optional)</span>
              </Label>
              <Textarea
                id="description"
                name="description"
                onChange={handleChange}
              >
                eg: startup companies hiring
              </Textarea>
            </Field>
          </FieldGroup>
          <DialogFooter className="mt-5">
            <DialogClose asChild>
              <Button
                variant="outline"
                onClick={() => onPortalDialogStatus(false)}
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

export default AddJobPortalForm;

