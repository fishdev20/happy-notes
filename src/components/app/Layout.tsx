import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { AppSidebar } from "../ui/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppMenu from "./AppMenu";

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="h-screen w-screen flex flex-col">
      <AppMenu />

      {/* Main Layout */}
      <div className="flex flex-1 h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="flex-1">
            {/* Content Header */}
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {pathnames.map((name, index) => {
                    const routeTo = `#${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                      <BreadcrumbItem key={routeTo}>
                        {!isLast ? (
                          <>
                            <BreadcrumbLink href={routeTo} className="capitalize">
                              {decodeURIComponent(name)}
                            </BreadcrumbLink>
                            <BreadcrumbSeparator />
                          </>
                        ) : (
                          <BreadcrumbLink
                            // href={routeTo}
                            className="text-muted-foreground capitalize"
                          >
                            {decodeURIComponent(name)}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </header>

            {/* Scrollable Content Area */}
            <ScrollArea className="h-[calc(100vh-4rem-4rem)] p-4">{children}</ScrollArea>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
