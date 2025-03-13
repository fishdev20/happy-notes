import { Archive, Calendar, NotepadText, Trash } from "lucide-react"

import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from "./sidebar"

// Menu items.
const items = [
  {
    title: "Notes",
    url: "#",
    icon: NotepadText,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Archive",
    url: "#",
    icon: Archive,
  },
  {
    title: "Trash",
    url: "#",
    icon: Trash,
  },
]

export function AppSidebar() {
  return (
    <Sidebar side="left" collapsible="icon" className="sticky">
      <SidebarHeader>
      <NavUser user={{
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  }} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
