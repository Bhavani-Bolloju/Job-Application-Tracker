"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell
} from "@/components/ui/table";

import { Skeleton } from "@/components/ui/skeleton";

function ApplicationTableSkeleton() {
  return (
    <div className="rounded-md shadow-sm shadow-gray-200 border border-border">
      <Table>
        <TableHeader>
          <TableRow className="font-medium text-base capitalize">
            <TableHead className="p-5 text-text-tertiary">Company</TableHead>
            <TableHead className="p-5 text-text-tertiary">Role</TableHead>
            <TableHead className="p-5 text-text-tertiary">Status</TableHead>
            <TableHead className="text-zinc-500">Platform</TableHead>
            <TableHead className="text-zinc-500">Applied</TableHead>
            <TableHead className="text-zinc-500">Follow up</TableHead>
            <TableHead className="text-right text-text-tertiary">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="py-5 bg-bg--1">
          <TableRow>
            <TableCell>
              <Skeleton className="px-3 py-5" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="px-3 py-5" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="px-3 py-5" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="px-3 py-5" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="px-3 py-5" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
            <TableCell>
              <Skeleton className="px-5 py-4" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default ApplicationTableSkeleton;
