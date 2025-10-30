import React from "react"
import { Outlet } from "react-router-dom"
import HomeLayoutHeader from "../components/layouts/HomeLayoutHeader"
import HomeLayoutFooter from "@/components/layouts/HomeLayoutFooter"
import { SidebarProvider } from "@/components/ui/sidebar"
import HomeLayoutSidebar from "@/components/layouts/HomeLayoutSidebar"

const HomeLayout = () => {
  return (
    <SidebarProvider defaultOpen={false} className="">

    <div className="
    relative flex flex-col justify-between w-screen h-220 md:min-h-screen overflow-x-hidden 
     bg-[radial-gradient(circle_at_center,#131313_20%,#1a1a1a_60%,#0d0d0d_100%),url('/logo-engineering-dark.png')] 
     bg-bottom md:bg-bottom-right bg-contain bg-no-repeat bg-blend-lighten 
     lg:bg-[length:auto,80%] xl:bg-[length:auto,80%]">
    <HomeLayoutHeader/>
    <div className="absolute top-20 md:top-24 lg:top-50 xl:top-36 xl:left-10 2xl:left-32">
    <HomeLayoutSidebar/>
    <Outlet />
    </div>
    <HomeLayoutFooter/>
    </div>
    </SidebarProvider>
  )
}

export default HomeLayout