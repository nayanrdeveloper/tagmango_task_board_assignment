import Image from "next/image";
import React from "react";
import TeamMemberCard from "../../MainSection/TeamMember/TeamMemberCard";

function HireSection() {
  const currentUser = {
    name: "Ali Ahmad",
    image: "/user_2.svg",
    role: "UI Designer",
  };
  return (
    <div className="bg-[#F5F2FF] flex flex-col gap-2 p-4 justify-center rounded-md">
      <TeamMemberCard {...currentUser} />
      <div>
        <Image
          src={"/design_community_pana_1.svg"}
          alt={"design community"}
          height={250}
          width={250}
        />
      </div>
      <h4 className="font-semibold text-dark-blue">
        We are design agency work with you
      </h4>
      <span className="text-dark-blue">
        Bringing well crafted design and scalable infrastructure
      </span>
      <button className="p-2 bg-pink-main text-white rounded-md w-32">Hire us</button>
    </div>
  );
}

export default HireSection;
