import { Archive, Calendar, Files, Trash } from "lucide-react";

import { useLocation } from "react-router-dom";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";

// Menu items.
const items = [
  {
    title: "Notes",
    url: "/notes",
    icon: Files,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Archive",
    url: "/archive",
    icon: Archive,
  },
  {
    title: "Trash",
    url: "/trash",
    icon: Trash,
  },
];

export function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <NavUser
          user={{
            name: "shadcn",
            email: "m@example.com",
            avatar: "/avatars/shadcn.jpg",
          }}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = location.pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title} isActive={isActive}>
                      <a href={`#${item.url}`} className="w-full">
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
