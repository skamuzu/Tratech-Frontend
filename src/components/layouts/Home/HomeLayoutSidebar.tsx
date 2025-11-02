import { X } from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarGroupContent,
  SidebarMenuItem,
} from "../../ui/sidebar";
import { Link } from "react-router-dom";
import { useSidebar } from "../../ui/sidebar";

const Links = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "About",
    url: "#",
  },
  {
    title: "Courses",
    url: "#",
  },
  {
    title: "Dashboard",
    url: "#",
  },
];

const HomeLayoutSidebar = () => {
  const { isMobile, toggleSidebar } = useSidebar();
  return (
    <div className="">
      <Sidebar
        side="right"
        className="variant-blue outline-none group @_[data-slot='sidebar']:bg-black md:hidden border-0"
      >
        <SidebarHeader className="flex justify-start p-4">
          <X onClick={() => toggleSidebar()} className="text-main" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>

            <SidebarGroupContent>
              <SidebarMenu>
                {Links.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="hover:bg-main hover:text-background"
                    >
                      <Link to={item.url}>
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};

export default HomeLayoutSidebar;
