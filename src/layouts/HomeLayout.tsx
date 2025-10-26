import React from "react"
import { Outlet } from "react-router-dom"
import HomeLayoutHeader from "../components/layouts/HomeLayoutHeader"

const HomeLayout = () => {
  return (
    <div className="
            bg-[radial-gradient(circle_at_center,#131313_20%,#1a1a1a_60%,#0d0d0d_100%),url('/logo-engineering-dark.png')] 
            bg-right bg-no-repeat bg-blend-lighten w-screen min-h-screen ">
    <HomeLayoutHeader/>
    <Outlet/>
    </div>
  )
}

export default HomeLayout