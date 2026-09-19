"use client";

import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

import { usePathname } from "next/navigation";

import Link from "next/link";

function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((val) => val);

  return (
    <Breadcrumb className="text-sm">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            {segments.length === 0 ?
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            : <Link href="/">Dashboard</Link>}
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.length > 0 ?
          segments.map((segment, i) => {
            return (
              <React.Fragment key={i}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {i === segments.length - 1 ?
                    <BreadcrumbPage>
                      <span className="capitalize">
                        {segment.replace("_", " ")}
                      </span>
                    </BreadcrumbPage>
                  : <BreadcrumbLink asChild>
                      <Link href={`/${segment}`} className="capitalize">
                        {segment.replace("_", " ")}
                      </Link>
                    </BreadcrumbLink>
                  }
                </BreadcrumbItem>
              </React.Fragment>
            );
          })
        : null}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default Breadcrumbs;

