import { Button } from "./button";

export const Herosection = () => {
  return (
    <div
      id="hero-section"
      className=" flex justify-start items-center w-screen bg-linear-65 from-green-500 to-green-800  p-8 h-screen"
    >
      {/* Hero section content */}
      <div className=" p-8 ">
        <h1 className="text-6xl font-bold text-amber-100">
          The<br></br> <span className=" text-amber-500">comrade</span> Sacco
        </h1>
        <p className="mt-3.5 mb-3.5 font-bold text-gray-900 text-2xl">
          Welcome to the <br></br>affordable and{" "}
          <span className="text-white">Enriching</span>
          <br></br>comarade sacco{" "}
          <span className="text-blue-900 bg-amber-500"> for students</span>
        </p>
        <div className="flex gap-2">
          <Button variant="secondary">Register</Button>
          <Button variant="default">Explore</Button>
        </div>
      </div>
    </div>
  );
};
