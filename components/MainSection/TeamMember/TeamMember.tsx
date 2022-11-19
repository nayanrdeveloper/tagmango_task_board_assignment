import React from "react";
import TeamMemberCard from "./TeamMemberCard";

function TeamMember() {
  interface teamMemberStruct{
    name: string;
    image: string;
    role: string;
  }
  const teamMemberList : teamMemberStruct[] = [
    {
      name: "Ali Ahmad",
      image: "/user_2.svg",
      role: "UI Designer",
    },
    {
      name: "Maria Memon",
      image: "/user_3.svg",
      role: "UI/UX Designer",
    },
    {
      name: "Maria Memon",
      image: "/user_2.svg",
      role: "UI/UX Designer",
    },
  ];
  return (
    <div>
      <div className="p-3 bg-white rounded-md">
        <h4 className="text-center font-semibold text-2xl text-dark-blue">Team Members</h4>
        <div className="flex flex-col gap-8 mt-8 justify-center">
          {teamMemberList.map((memberData: any, index) => {
            return (
              <div key={index}>
                <TeamMemberCard {...memberData} />
              </div>
            );
          })}
          <button className="rounded-md bg-light-pink px-2 py-2 w-28 mx-auto text-[#64379F] font-semibold">See All</button>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
