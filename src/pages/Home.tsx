import { SignUpButton } from "@clerk/clerk-react";

const Home = () => {
  return (
    <div className="p-12 flex flex-col gap-8">
      <h1 className=" font-bold text-background text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 
    lg:w-4/5 xl:w-3/5 2xl:w-3xl ">
        Innovate, Design & <span className="text-main  ">Master</span>
        <br />
        in Mechanical Engineering
      </h1>
      <p className="text-xl md:text-2xl text-hero-muted text-background leading-relaxed max-w-2xl w-full md:w-3/5 2xl:w-full">
        Practice CAD design, coding, ANSYS simulations, and robotics. Hands-on
        real projects, industry expertise, and expert mentorship with expert
        instructors.
      </p>
     <SignUpButton>
        <button className="bg-main p-4 rounded-md text-xl w-60">
            Start Your Journey
        </button>
     </SignUpButton>
    </div>
  );
};

export default Home;
