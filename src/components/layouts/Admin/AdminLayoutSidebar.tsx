import {
  SidebarContent,
  SidebarHeader,
  SidebarMenuItem,
  Sidebar,
  SidebarMenu,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  LayoutDashboardIcon,
  GraduationCapIcon,
  Users,
  LibraryBig,
  Settings,
} from "lucide-react";
import { Link } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/clerk-react";

const Links = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboardIcon },
  {
    name: "Courses",
    path: "/admin/courses",
    icon: GraduationCapIcon,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    name: "Enrollments",
    path: "/admin/enrollments",
    icon: LibraryBig,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

const AdminLayoutSidebar = () => {
  const { user } = useUser();
  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <img src="/logo-tratech1.png" alt="" />
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {Links.map((item) => (
            <SidebarMenuItem key={item.name} className="">
              <SidebarMenuButton asChild className="hover:bg-main hover:text-background">
                <a href={item.path} className="text-xl font-semibold p-6  ">
                  <item.icon className="w-8! h-8!" />
                  <span>{item.name}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-3 flex flex-col gap-4">
        <div className="flex gap-2">
          <img
            src={user?.imageUrl}
            alt="User image"
            className="w-12 aspect-square rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="font-semibold">
              {user?.firstName} {user?.lastName}
            </h2>
            <h3>{user?.primaryEmailAddress?.emailAddress}</h3>
          </div>
        </div>
        <SignOutButton>
          <button className="bg-main p-3 text-xl text-background rounded-md">Log Out</button>
        </SignOutButton>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminLayoutSidebar;
