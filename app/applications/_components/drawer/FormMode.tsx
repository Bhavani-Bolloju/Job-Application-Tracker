"use client";

import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { Application } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { FieldLabel, Field, FieldError } from "@/components/ui/field";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { FormValues } from "@/lib/types";

import { Button } from "@/components/ui/button";
import { format } from "date-fns";

import { toast } from "sonner";

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
    }
  });

  const [openAppliedDate, setOpenAppliedDate] = useState(false);
  const [openFollowupDate, setOpenFollowupDate] = useState(false);

  async function onSubmit(data: FormValues) {
    try {
      const url =
        application ?
          `/api/applications/${application.id}`
        : "/api/applications";
      const method = application ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      
      
      if (!res.ok) {
        throw new Error();
      }

      toast.success(
        `${application ? "Application updated." : "Application added."}`,
        { position: "top-left" }
      );
    } catch {
      
      toast.error("Failed to add application.", { position: "top-left" });
    }

    onClose();
  }

  // console.log("form mode");
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Field>
        <FieldLabel htmlFor="company" className="text-text-tertiary">
          Company
          <span aria-hidden="true">*</span>
        </FieldLabel>
        <Input
          className="text-body! px-3 py-2 text-text-secondary"
          id="company"
          aria-describedby="company-error"
          aria-invalid={!!errors.company}
          required
          {...register("company", { required: "Company is required" })}
        />
        {errors.company && (
          <FieldError id="company-error">{errors.company.message}</FieldError>
        )}
      </Field>

      <Field>
        <FieldLabel htmlFor="role" className="text-text-tertiary">
          Role
          <span aria-hidden="true">*</span>
        </FieldLabel>
        <Input
          className="text-body! px-3 py-2 text-text-secondary"
          id="role"
          aria-describedby="role-error"
          aria-invalid={!!errors.role}
          {...register("role", { required: "Role is required" })}
          required
        />
        {errors.role && (
          <FieldError id="role-error">{errors.role.message}</FieldError>
        )}
      </Field>

      <Field>
        <FieldLabel htmlFor="status" className="text-text-tertiary">
          Status
          <span aria-hidden="true">*</span>
        </FieldLabel>
        <select
          id="status"
          {...register("status", { required: true })}
          className="w-full border rounded-md px-3 py-2 text-body! focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 "
        >
          <option value="WISHLIST">Wishlist</option>
          <option value="APPLIED">Applied</option>
          <option value="INTERVIEWED">Interviewed</option>
          <option value="OFFER">Offer</option>
          <option value="REJECTED">Rejected</option>
        </select>
      </Field>

      <Field>
        <FieldLabel htmlFor="platform" className="text-text-tertiary">
          Platform
        </FieldLabel>
        <Input
          id="platform"
          {...register("platform")}
          className="text-body! px-3 py-2 text-text-secondary"
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="type" className="text-text-tertiary">
          Type
        </FieldLabel>
        <select
          id="type"
          {...register("type")}
          className="w-full border rounded-md px-3 py-2 text-body! focus-visible:outline-none focus-visible:border-ring  focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <option value="">Select type</option>
          <option value="FULL_TIME">Full Time</option>
          <option value="PART_TIME">Part Time</option>
          <option value="CONTRACT">Contract</option>
        </select>
      </Field>

      <Field>
        <FieldLabel htmlFor="location" className="text-text-tertiary">
          Location
        </FieldLabel>
        <Input
          id="location"
          {...register("location")}
          className="text-body! px-3 py-2 text-text-secondary"
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="salary" className="text-text-tertiary">
          Salary
        </FieldLabel>
        <Input
          id="salary"
          {...register("salary")}
          className="text-body! px-3 py-2 text-text-secondary"
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="url" className="text-text-tertiary">
          Job URL
        </FieldLabel>
        <Input
          id="url"
          {...register("url")}
          className="text-body! px-3 py-2 text-text-secondary"
        />
      </Field>

      <Controller
        control={control}
        name="appliedDate"
        render={({ field }) => (
          <Field>
            <FieldLabel htmlFor="appliedDate" className="text-text-tertiary">
              Applied Date
            </FieldLabel>

            <Popover open={openAppliedDate} onOpenChange={setOpenAppliedDate}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="appliedDate"
                  className="justify-start font-normal text-base!"
                >
                  {field.value ?
                    format(field.value, "PPP")
                  : <span className="text-sm">Pick a date</span>}
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
            <FieldLabel htmlFor="followupDate" className="text-text-tertiary">
              Follow Up Date
            </FieldLabel>

            <Popover open={openFollowupDate} onOpenChange={setOpenFollowupDate}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="followupDate"
                  className="justify-start font-normal text-base"
                >
                  {field.value ?
                    format(field.value, "PPP")
                  : <span className="text-sm">Pick a date</span>}
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
          className="flex-1 bg-accent-3 text-background py-2 rounded-lg text-sm hover:cursor-pointer hover:bg-accent-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
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
          className="flex-1 border py-2 rounded-lg text-sm hover:cursor-pointer  focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default FormMode;
