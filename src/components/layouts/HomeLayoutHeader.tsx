import { UserButton, SignedOut, SignInButton, SignedIn } from "@clerk/clerk-react";

const HomeLayoutHeader = () => {
  return (
   <header className="flex justify-around ">
    <img src="/logo-tratech1.png" alt="" className="w-1/8" />
    <ul className="text-background flex items-center gap-4 text-3xl">
      <li>Home</li>
      <li>About</li>
      <li>Courses</li>
      <li>Dashboard</li>
    </ul>
    <div className="text-background flex items-center text-2xl">
       <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

    </div>
   </header>
  )
}

export default HomeLayoutHeader;