import { SidebarProvider } from "@/components/ui/sidebar"
import AdminLayoutSidebar from "@/components/layouts/Admin/AdminLayoutSidebar"
import { Outlet } from "react-router"

const AdminLayout = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <AdminLayoutSidebar/>
      <Outlet/>
    </SidebarProvider>
  )
}

export default AdminLayout