import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/AppSidebar";

export default function DashboardLayout() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="p-4">
          <SidebarTrigger className="w-8 h-8"/>
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
}
