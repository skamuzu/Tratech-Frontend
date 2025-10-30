import {
  UserButton,
  SignedOut,
  SignInButton,
  SignedIn,
} from "@clerk/clerk-react";
import { Link } from "react-router";
import { SidebarTrigger } from "../ui/sidebar";
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

const HomeLayoutHeader = () => {
  return (
    <header className="flex justify-around p-4">
      <img src="/logo-tratech1.png" alt="" className="w-1/3 md:w-1/8 " />
      <ul className="text-background hidden md:flex items-center gap-4 2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl">
        {Links.map((item) => (
          <Link key={item.title} to={item.url}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
      <div className="text-background flex items-center text-lg md:text-xl gap-4">
        <SignedOut>
          <button className="bg-main p-2 rounded-md text-black">Sign In</button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SidebarTrigger className="md:hidden" variant={"default"}/>
      </div>
    </header>
  );
};

export default HomeLayoutHeader;
