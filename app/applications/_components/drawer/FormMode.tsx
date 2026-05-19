"use client";

import { useForm } from "react-hook-form";
import { Application } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { FieldLabel, Field, FieldError } from "@/components/ui/field";
// import { Textarea } from "@/components/ui/textarea";

type FormValues = {
  company: string;
  role: string;
  status: string;
  platform: string;
  type: string;
  location: string;
  salary: string;
  url: string;
  appliedDate: string;
  followupDate: string;
};

type Props = {
  application: Application | null;
  onClose: () => void;
};

function FormMode({ application, onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    defaultValues: {
      company: application?.company ?? "",
      role: application?.role ?? "",
      status: application?.status ?? "APPLIED",
      platform: application?.platform ?? "",
      type: application?.type ?? "",
      location: application?.location ?? "",
      salary: application?.salary ?? "",
      url: application?.url ?? "",
      appliedDate:
        application?.appliedDate ?
          new Date(application.appliedDate).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
      followupDate:
        application?.followupDate ?
          new Date(application.followupDate).toISOString().split("T")[0]
        : ""
    }
  });

  async function onSubmit(data: FormValues) {
    const url =
      application ? `/api/applications/${application.id}` : "/api/applications";
    const method = application ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    onClose();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Field>
        <FieldLabel htmlFor="company">Company *</FieldLabel>
        <Input
          id="company"
          {...register("company", { required: "Company is required" })}
        />
        {errors.company && <FieldError>{errors.company.message}</FieldError>}
      </Field>

      <Field>
        <FieldLabel htmlFor="role">Role *</FieldLabel>
        <Input
          id="role"
          {...register("role", { required: "Role is required" })}
        />
        {errors.role && (
          <FieldError>{errors.role.message}</FieldError>
        )}
      </Field>

      <Field>
        <FieldLabel htmlFor="status">Status *</FieldLabel>
        <select
          id="status"
          {...register("status", { required: true })}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          <option value="WISHLIST">Wishlist</option>
          <option value="APPLIED">Applied</option>
          <option value="INTERVIEWED">Interviewed</option>
          <option value="OFFER">Offer</option>
          <option value="REJECTED">Rejected</option>
        </select>
      </Field>

      <Field>
        <FieldLabel htmlFor="platform">Platform</FieldLabel>
        <Input id="platform" {...register("platform")} />
      </Field>

      <Field>
        <FieldLabel htmlFor="type">Type</FieldLabel>
        <select
          id="type"
          {...register("type")}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          <option value="">Select type</option>
          <option value="FULL_TIME">Full Time</option>
          <option value="PART_TIME">Part Time</option>
          <option value="CONTRACT">Contract</option>
        </select>
      </Field>

      <Field>
        <FieldLabel htmlFor="location">Location</FieldLabel>
        <Input id="location" {...register("location")} />
      </Field>

      <Field>
        <FieldLabel htmlFor="salary">Salary</FieldLabel>
        <Input id="salary" {...register("salary")} />
      </Field>

      <Field>
        <FieldLabel htmlFor="url">Job URL</FieldLabel>
        <Input id="url" {...register("url")} />
      </Field>

      <Field>
        <FieldLabel htmlFor="appliedDate">Applied Date</FieldLabel>
        <Input id="appliedDate" type="date" {...register("appliedDate")} />
      </Field>

      <Field>
        <FieldLabel htmlFor="followupDate">Follow Up Date</FieldLabel>
        <Input id="followupDate" type="date" {...register("followupDate")} />
      </Field>

      <div className="flex gap-2 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-black text-white py-2 rounded-lg text-sm hover:cursor-pointer"
        >
          {isSubmitting ?
            "Saving..."
          : application ?
            "Update"
          : "Add Application"}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 border py-2 rounded-lg text-sm hover:cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default FormMode;

