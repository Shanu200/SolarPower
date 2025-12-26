import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/AppSidebar";

export default function DashboardLayout() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="p-4 w-full bg-gray-100">
          <SidebarTrigger className="w-8 h-8 block" size={32}/>
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
}
