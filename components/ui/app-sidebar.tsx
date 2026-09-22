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

  console.log(segments, "segments", segments[0]);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <p className="text-2xl font-bold mb-1 text-text-secondary flex items-center">
          <BriefcaseBusiness className="w-7 h-auto text-accent-1" />
          <span className="ml-2">Job</span>
          <span className="text-accent-1">Tracker</span>
        </p>
      </SidebarHeader>
      <SidebarContent className="p-5">
        <SidebarMenu className="gap-1">
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={segments?.[0] === undefined}
              className="py-6"
            >
              <Link href="/">
                <LayoutDashboard />
                <span>Dashboard</span>
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
                <ClipboardMinus />
                <span>Applications</span>
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
                <Globe />
                <span>Job Portals</span>
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


