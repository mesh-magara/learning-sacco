import { Button } from "./button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
const Blog = () => {
  return (
    <div className="w-full p-8 mt-3">
      {/* wrapper div */}

      <div className="w-full max-w-5xl grid mx-auto gap-2.5 grid-cols-2">
        {/* content */}
        <div className="flex flex-col gap-8">
          <h2 className="tracking-wider text-green-500  text-3xl">About Us </h2>
          <p className="tracking-wider text-gray-500 ">
            <span className="text-bold text-2xl text-amber-400 tracking-wider">
              Times Comrade
            </span>{" "}
            Sacco, is a deposit taking Sacco licensed under the societies Act.
            It was registered in 1993 as a rural-based Sacco. In 2009, Uruku
            Rural Society rebranded to Comrade Sacco Limited to encourage and
            open boundaries to other members who aren’t from the Uruku locality.
          </p>
          <Button className="w-fit pt-3 pr-4 pb-3 pl-4">
            Read More <ArrowRightIcon />{" "}
          </Button>
        </div>
        {/* image div */}
        <div className="bg-red-600 ml-3 relative">
          <Image
            className="object-cover"
            src="/savings.jpg"
            fill={true}
            alt="image of money growing"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
