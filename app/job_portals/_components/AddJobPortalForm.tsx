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

import { JobPortalProps } from "@/lib/types";


type Props = {
  open: boolean;
  onPortalDialogStatus: (status: boolean) => void;
  onPortalFormSubmit: () => void;
  jobPortal: JobPortalProps | null;
};

function AddJobPortalForm({
  open,
  onPortalDialogStatus,
  onPortalFormSubmit,
  jobPortal
}: Props) {
  const [inputPortal, setInputPortal] = useState({
    name: jobPortal?.name ?? "",
    link: jobPortal?.link ?? "",
    description: jobPortal?.description ?? ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setInputPortal((prev) => ({ ...prev, [name]: value }));
  };

  // console.log(inputPortal, "input portal");
  const handleSubmit = async function (e: React.SubmitEvent) {
    e.preventDefault();

    const url =
      jobPortal ? `api/job_portals/${jobPortal.id}` : "api/job_portals/";
    const method = jobPortal ? "PUT" : "POST";

    try {
      const req = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputPortal)
      });
      console.log(req, "req");
    } catch {
      console.error("error");
    } finally {
      setInputPortal({
        name: "",
        link: "",
        description: ""
      });
      onPortalFormSubmit();
    }
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
              <Label htmlFor="name" className="text-text-tertiary mb-1 capit">
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
                value={inputPortal.description}
              ></Textarea>
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

