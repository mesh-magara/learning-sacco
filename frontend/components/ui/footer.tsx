type titles = {
  titleName: string;
  data: object;
};

const Footer = () => {
  const titles: titles[] = [
    {
      titleName: "CONTACT US",
      data: {
        item1: "Champion Centre Kasarani, Red Soi",
        item2: "Phone: 0702 77 88 99",
        item3: "Mobile: 0723 291 402",
        item4: "Email: info@saccochampions.co.ke",
        item5: "Web: https://saccochampions.co.ke",
      },
    },
    {
      titleName: "KNOW US",
      data: {
        item1: "Who we are",
        item2: "Mission & Vision",
        item3: "Our Role in Kenya",
        item4: "Our Core Values",
        item5: "Cooperative Societies",
        item6: "Saccos in Kenya",
        item7: "Principle of cooperative society",
        item8: "Career at Sacco Champions",
      },
    },
    {
      titleName: "TRAINING",
      data: {
        item1: "Sacco Staff Trainings",
        item2: "Board and Committee Trainings",
        item3: "Delegate and Member Trainings",
        item4: "Consultancy",
      },
    },
    {
      titleName: "TEAM BUILDING",
      data: {
        item1: "Nairobi Team Building",
        item2: "Naivasha Team Building",
        item3: "Mombasa Beach Team Building",
        item4: "Sagana Team Building",
        item5: "Nakuru Team Building",
        item6: "Kisumu Team Building",
        item7: "Eldoret Team Building",
      },
    },
  ];

  const copyrightYear = new Date().getFullYear();

  return (
    <div id="footer" className="bg-green-950 text-1xl  w-full ">
      {/* footer content */}
      <div className="flex justify-center gap-3 items-start mt-3 mb-3.5  p-3.5">
        {titles?.map((content, index) => {
          return (
            <div key={index} className="flex flex-col gap-2 ml-3">
              <h1 className="font-semibold text-2xl text-lime-400 hover:text-yellow-600">
                {content.titleName}
              </h1>
              <ul>
                {(Object.values(content.data) as string[])?.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm mb-1.5 p-0.5 text-gray-500 hover:text-yellow-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      {/* copyright div */}
      <p className="text-center bg-black text-white text-2xl p-2.5">
        © Copyright {copyrightYear} | Comrade sacco Consultants | All Rights
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
