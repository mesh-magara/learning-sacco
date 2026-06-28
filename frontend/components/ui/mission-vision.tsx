import type { ReactNode } from "react";
import { RocketIcon, EyeIcon, ShieldAlertIcon } from "lucide-react";

type missionVision = {
  title: string;
  description: string;
  image: ReactNode;
};

const misvis: missionVision[] = [
  {
    title: "Our Mission",
    description:
      "To socioeconomically transform the lives of our members via affordable, quality, competitive and market-driven financial solutions.",
    image: <RocketIcon />,
  },
  {
    title: "Our Vision",
    description:
      " To be the preferred provider of transformational, quality and competitive market-driven financial solutions to Kenyans.",
    image: <EyeIcon />,
  },
  {
    title: "Our Core Value",
    description:
      " Teamwork , Equity , Professionalism, Integrity Creativity & Innovation",
    image: <ShieldAlertIcon />,
  },
];

const MissionVision = () => {
  return (
    // ensure this section appears above the footer
    <div id="before-footer" className="max-w-full flex gap-4 -mt-25">
      {misvis.map((slot, index) => {
        return (
          <div
            key={index}
            className="rounded-lg border max-w-75 p-6 shadow-sm bg-linear-to-bl from-[#84cc16] via-[#16a34a] to-[#0f766e]"
          >
            <h3 className="text-xl text-white font-semibold mb-3">
              {slot.title}
            </h3>
            <div className="text-white font-bold p-2.5 border-b-3 w-fit border-b-white inline-block mb-2">
              {slot.image}
            </div>
            <p className=" leading-6 font-bold text-green-200 text-1.5xl whitespace-pre-line">
              {slot.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MissionVision;
