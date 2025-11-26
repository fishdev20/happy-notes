import useLayoutStore from "@/store/layout/useLayoutStore";
import { ReactNode, useEffect, useRef } from "react";
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

export default function Layout({ children }: { children: ReactNode }) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { setIsScrolled } = useLayoutStore();

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const state = location.state || null;

  useEffect(() => {
    const scrollContainer = scrollAreaRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      setIsScrolled(scrollContainer.scrollTop > 1); // Detect if scrolled down
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex flex-1 h-[calc(100vh-4rem)]">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="flex-1">
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
                          <BreadcrumbLink className="text-muted-foreground capitalize">
                            {state ? state.title : decodeURIComponent(name)}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </header>
            <ScrollArea
              className=" relative h-full min-h-[calc(100svh-4rem-4rem)] p-4 text-left"
              viewportRef={scrollAreaRef}
            >
              {children}
            </ScrollArea>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
