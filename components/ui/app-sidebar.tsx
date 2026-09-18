import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail, 
  SidebarFooter,
} from "@/components/ui/sidebar";

import type { Session } from "next-auth";
// import { NavUser } from "@/components/nav-user"

import NavUser from "@/components/ui/nav-user";



type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  user: Session["user"];
};

// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#"
        },
        {
          title: "Project Structure",
          url: "#"
        }
      ]
    },
    {
      title: "Build Your Application",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#"
        },
        {
          title: "Data Fetching",
          url: "#",
          isActive: true
        },
        {
          title: "Rendering",
          url: "#"
        },
        {
          title: "Caching",
          url: "#"
        },
        {
          title: "Styling",
          url: "#"
        },
        {
          title: "Optimizing",
          url: "#"
        },
        {
          title: "Configuring",
          url: "#"
        },
        {
          title: "Testing",
          url: "#"
        },
        {
          title: "Authentication",
          url: "#"
        },
        {
          title: "Deploying",
          url: "#"
        },
        {
          title: "Upgrading",
          url: "#"
        },
        {
          title: "Examples",
          url: "#"
        }
      ]
    },
    {
      title: "API Reference",
      url: "#",
      items: [
        {
          title: "Components",
          url: "#"
        },
        {
          title: "File Conventions",
          url: "#"
        },
        {
          title: "Functions",
          url: "#"
        },
        {
          title: "next.config.js Options",
          url: "#"
        },
        {
          title: "CLI",
          url: "#"
        },
        {
          title: "Edge Runtime",
          url: "#"
        }
      ]
    },
    {
      title: "Architecture",
      url: "#",
      items: [
        {
          title: "Accessibility",
          url: "#"
        },
        {
          title: "Fast Refresh",
          url: "#"
        },
        {
          title: "Next.js Compiler",
          url: "#"
        },
        {
          title: "Supported Browsers",
          url: "#"
        },
        {
          title: "Turbopack",
          url: "#"
        }
      ]
    }
  ]
};
export function AppSidebar({ user, ...props }: AppSidebarProps) {

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div>
          <p className="text-page-title font-bold mb-1 text-text-secondary">
            Hi, {user?.name} 👋
          </p>
          <p>Track your job applications </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={false}>
                    <a href="#">Menu item</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              {/* <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu> */}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
         <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}



