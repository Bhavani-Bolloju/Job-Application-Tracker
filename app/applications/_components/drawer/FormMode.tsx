"use client";

import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { Application } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { FieldLabel, Field, FieldError } from "@/components/ui/field";
// import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { FormValues } from "@/lib/types";

import { Button } from "@/components/ui/button";
import { format } from "date-fns";

type Props = {
  application: Application | null;
  onClose: () => void;
};

function FormMode({ application, onClose }: Props) {
  const {
    register,
    control,
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
      appliedDate: application?.appliedDate ?? new Date(),
      followupDate: application?.followupDate ?? undefined
      // appliedDate:
      //   application?.appliedDate ?
      //     new Date(application.appliedDate).toISOString().split("T")[0]
      //   : new Date().toISOString().split("T")[0],
      // followupDate:
      //   application?.followupDate ?
      //     new Date(application.followupDate).toISOString().split("T")[0]
      //   : ""
    }
  });

  const [openAppliedDate, setOpenAppliedDate] = useState(false);
  const [openFollowupDate, setOpenFollowupDate] = useState(false);

  async function onSubmit(data: FormValues) {
    const url =
      application ? `/api/applications/${application.id}` : "/api/applications";
    const method = application ? "PUT" : "POST";

    // console.log(url, method);

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    onClose();
  }

  // console.log("form mode");
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
        {errors.role && <FieldError>{errors.role.message}</FieldError>}
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

      <Controller
        control={control}
        name="appliedDate"
        render={({ field }) => (
          <Field>
            <FieldLabel htmlFor="appliedDate">Applied Date</FieldLabel>

            <Popover open={openAppliedDate} onOpenChange={setOpenAppliedDate}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="appliedDate"
                  className="justify-start font-normal"
                >
                  {field.value ?
                    format(field.value, "PPP")
                  : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={(date) => {
                    field.onChange(date);
                    setOpenAppliedDate(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </Field>
        )}
      />
      <Controller
        control={control}
        name="followupDate"
        render={({ field }) => (
          <Field>
            <FieldLabel htmlFor="followupDate">Follow Up Date</FieldLabel>

            <Popover open={openFollowupDate} onOpenChange={setOpenFollowupDate}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="followupDate"
                  className="justify-start font-normal"
                >
                  {field.value ?
                    format(field.value, "PPP")
                  : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={(date) => {
                    field.onChange(date);
                    setOpenFollowupDate(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </Field>
        )}
      />

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

