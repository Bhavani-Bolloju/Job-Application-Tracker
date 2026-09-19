"use client";

import { AppSidebar } from "@/components/ui/app-sidebar";


import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";

import type { Session } from "next-auth";

import Breadcrumbs from "./Breadcrumbs";

type Props = {
  children: React.ReactNode;
  user: Session["user"] | undefined;
};

export default function ApplicationSidebar({ children, user }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12  relative">
          <div className="fixed h-12 w-full top-0 z-50">
            <div className="flex items-center gap-2 h-12 bg-bg--1 w-full px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="h-5 data-vertical:self-center!"
              />
              <Breadcrumbs />
            </div>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}












