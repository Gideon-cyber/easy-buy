import React from "react";
import { HeroNavigationContainer } from "../components";
import AboutPic from "../images/About-pic.svg";
import ServicesPic from "../images/Services.svg";
import ServicesPic2 from "../images/Services2.svg";
import ServicesPic3 from "../images/Services3.svg";
import Team1 from "../images/Team1.png";
import Team2 from "../images/Team2.png";
import Team3 from "../images/Team3.png";
import AddServices1 from "../images/AddServices1.svg";
import AddServices2 from "../images/AddServices2.svg";
import AddServices3 from "../images/AddServices3.svg";

const AboutPage = () => {
  const navigation = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
  ];

  const statsArray = [
    { icon: ServicesPic, header: "10.5k", text: "Sellers active on our site" },
    {
      icon: ServicesPic2,
      header: "45.5k",
      text: "Customers active on our site",
    },
    {
      icon: ServicesPic3,
      header: "25k",
      text: "Annual gross sales on our site",
    },
  ];

  const teamsArray = [
    {
      img: Team1,
      name: "Tom Cruise",
      position: "Founder & Chairman",
    },
    {
      img: Team2,
      name: "Emma Watson",
      position: "Managing Director",
    },
    {
      img: Team3,
      name: "Will Smith",
      position: "Product Designer",
    },
  ];

  const servicesArray = [
    {
      icon: AddServices1,
      header: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140",
    },
    {
      icon: AddServices2,
      header: "24/7 CUSTOMER SERVICE",
      text: "Friendly 24/7 customer support",
    },
    {
      icon: AddServices3,
      header: "MONEY BACK GUARANTEE",
      text: "We reurn money within 30 days",
    },
  ];
  return (
    <div className="pt-[92px] w-full">
      <HeroNavigationContainer navigation={navigation}>
        <div className="w-full flex items-center my-[80px]">
          {/*Left*/}
          <div className="w-1/2 flex items-start flex-col gap-[40px] text-black pr-[75px]">
            <h1 className="text-justify text-[54px] leading-[64px] font-semibold tracking-[3.24px]">
              Our Story
            </h1>
            <div className="w-full flex flex-col gap-[24px] text-left font-Poppins">
              <span className="text-[16px] leading-[24px] font-normal">
                Launced in 2015, Lumina Gadgets is Nigeria’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </span>

              <span className="text-[16px] leading-[24px] font-normal">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </span>
            </div>
          </div>

          {/*Right*/}
          <div className="w-1/2">
            <img src={AboutPic} alt="About-img" />
          </div>
        </div>

        {/*Stats*/}
        <div className="w-full flex items-center justify-center py-[80px]">
          <div className="w-full flex flex-row gap-[30px] items-center justify-center">
            {statsArray.map((stat, index) => (
              <div
                className="w-[270px] h-[230px] border border-black border-opacity-30 flex items-center justify-center py-[30px]"
                key={index}
              >
                <div className="flex flex-col gap-6 items-center">
                  <div>
                    <img src={stat.icon} alt="icon" />
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-[32px] leading-[30px] tracking-[1.28px] font-bold">
                      {stat.header}
                    </span>
                    <span className="text-[16px] leading-[24px] font-Poppins font-normal">
                      {stat.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*Our Team*/}
        <div className="w-full flex items-center justify-center py-[80px]">
          <div className="w-full flex flex-row gap-[30px] items-center justify-center">
            {teamsArray.map((team, index) => (
              <div className="w-[370px] flex flex-col gap-[32px]" key={index}>
                <div className="w-full bg-secondary h-[430px] flex items-end justify-center">
                  <img src={team.img} alt="team" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="">
                    <h3 className="text-[32px] leading-[30px] font-medium tracking-[1.28px]">
                      {team.name}
                    </h3>
                    <span className="text-[16px] leading-[24px] font-Poppins font-normal">
                      {team.position}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*Our Services*/}
        <div className="w-full flex items-center justify-center pt-[80px]">
          <div className="w-full flex flex-row gap-[88px] items-center justify-center">
            {servicesArray.map((service, index) => (
              <div className="flex flex-col items-center gap-6" key={index}>
                <img src={service.icon} alt="icon" />
                <div className="flex flex-col gap-1 items-center justify-center font-Poppins">
                  <h5 className="text-[20px] leading-[28px] font-semibold">
                    {service.header}
                  </h5>
                  <span className="text-[14px] leading-[21px] font-normal">
                    {service.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </HeroNavigationContainer>
    </div>
  );
};

export default AboutPage;
