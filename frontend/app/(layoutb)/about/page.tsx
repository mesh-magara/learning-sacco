import MissionVision from "@/components/ui/mission-vision";
import Image from "next/image";

type TeamMember = {
  names: string;
  role: string;
  image: string;
  description?: string;
};
export default function About() {
  const TeamMembers: TeamMember[] = [
    {
      names: "john doe",
      role: "Chief Excecutive Officer",
      image: "/team-member-1.jpg",
      description:
        "john doe is the Chief Executive Officer of our sacco. He has over 10 years of experience in the financial industry and is passionate about helping students achieve their financial goals.",
    },

    {
      names: "jane doe",
      role: "Chief Technology Officer",
      image: "/team-member-2.jpg",
      description:
        "Jane doe is the Chief Technology Officer of our sacco. She has over 8 years of experience in the technology industry and is passionate about using technology to improve financial services for students.",
    },
    {
      names: "jack doe",
      role: "Chief Financial Officer",
      image: "/team-member-3.jpg",
      description:
        "Jack doe is the Chief Financial Officer of our sacco. He has over 15 years of experience in the financial industry and is passionate about helping students manage their finances and achieve their financial goals.",
    },
    {
      names: "jill doe",
      role: "Chief Operations Officer",
      image: "/team-member-4.jpg",
      description:
        "Jill doe is the Chief Operations Officer of our sacco. She has over 12 years of experience in the financial industry and is passionate about ensuring that our sacco runs smoothly and efficiently.",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-4 mt-20 bg-[linear-gradient(135deg,#233200_0%,#00d692_100%)]">
      <p className="text-2xl font-bold text-white p-3.5">About Us</p>
      <p className="text-lg text-gray-400 p-3.5">
        Our sacco is dedicated to providing excellent financial services to our
        student members.
      </p>

      {/* about content */}

      <div className="flex flex-col gap-4 items-center justify-center p-3.5">
        {/* our story and image */}
        <div className="flex md:flex-row w-[75%] gap-4 items-center mb-15 justify-center p-3.5">
          <div className="flex flex-col gap-4 w-full md:w-[50%] items-center justify-center p-3.5">
            <h2 className="text-2xl font-bold bg-linear-to-r from-yellow-800 via-sky-50 to-indigo-100 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-lg text-white p-3.5">
              our sacco was founded with the goal of providing financial
              services to students. We believe that every student deserves
              access to affordable financial services, and we are committed to
              helping our members achieve their financial goals. we also believe
              in the power of community and collaboration, and we strive to
              create a supportive and inclusive environment for our members. We
              are proud of the impact we have made in the lives of our members,
              and we look forward to continuing to serve our community for many
              years to come. come all students and join our sacco to experience
              the benefits of being part of a supportive and inclusive financial
              community.
            </p>
          </div>
          <div className="border-2 bg-blue-600  border-gray-300 rounded-lg w-100 h-100 relative overflow-hidden">
            <Image
              src="/our-story.jpg"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* our mission and values */}
        <h1 className="text-2xl font-bold mb-26 bg-linear-to-r from-sky-50 via-green-300 to-pink-50 bg-clip-text text-transparent">
          OUR MISSION AND VALUES
        </h1>
        <div className="flex flex-col gap-4 items-center justify-center p-3.5">
          <div>
            <MissionVision></MissionVision>
          </div>
        </div>

        {/* our team and image */}
        <div className="grid grid-cols-2 gap-3.5   w-[60%] items-center mt-10 justify-center p-3.5">
          {TeamMembers.map((member, index) => (
            <div
              key={index}
              className="flex rounded-lg hover:bg-[linear-gradient(135deg,#233200_0%,#00d692_100%)] bg-green-800 flex-col  ml-10 items-center justify-center p-3.5"
            >
              <div className="border-2 border-gray-300 rounded-[50%] relative w-37.5 h-37.5 overflow-hidden">
                <Image src={member.image} alt={member.names} fill />
              </div>

              <h3 className="text-lg font-bold mt-5 mb-3">{member.names}</h3>
              <p className="text-yellow-300 text-nowrap mb-4">{member.role}</p>
              <p className="text-gray-300 p-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
