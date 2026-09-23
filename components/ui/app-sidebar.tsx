"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter
} from "@/components/ui/sidebar";

import type { Session } from "next-auth";
// import { NavUser } from "@/components/nav-user"

import { usePathname } from "next/navigation";
import Link from "next/link";

import NavUser from "@/components/ui/nav-user";

import {
  BriefcaseBusiness,
  LayoutDashboard,
  Globe,
  // Form,
  ClipboardMinus
} from "lucide-react";

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  user: Session["user"];
};

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment);

  return (
    <Sidebar {...props} className="p-5">
      <SidebarHeader>
        <p className="font-semibold mb-1 text-text-secondary flex items-center">
          <BriefcaseBusiness className="text-accent-1 size-8" />
          <span className="ml-2 text-2xl">Job</span>
          <span className="text-accent-1 text-2xl">Tracker</span>
        </p>
      </SidebarHeader>
      <SidebarContent className="">
        <SidebarMenu className="gap-y-1 mt-5">
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={segments?.[0] === undefined}
              className=""
            >
              <Link href="/" className="h-auto">
                <LayoutDashboard
                  className="size-5! text-text-tertiary"
                  strokeWidth={1.5}
                />
                <span className="text-base">Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={segments?.[0] === "applications"}
              className="py-6"
            >
              <Link href="/applications">
                <ClipboardMinus
                  className="size-5! text-text-tertiary"
                  strokeWidth={1.5}
                />
                <span className="text-base">Applications</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={segments?.[0] === "job_portals"}
              className="py-6"
            >
              <Link href="/job_portals">
                <Globe
                  className="size-5! text-text-tertiary"
                  strokeWidth={1.5}
                />
                <span className="text-base">Job Portals</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}



