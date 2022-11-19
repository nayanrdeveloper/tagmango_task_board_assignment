import Image from "next/image";
import React from "react";

interface teamMemberStruct {
  name: string;
  image: string;
  role: string;
}

function TeamMemberCard(memberData: teamMemberStruct) {
  return (
    <div className="px-10 shadow-light rounded-lg">
      <div className="flex gap-5">
        <div>
          <Image
            src={memberData.image}
            alt={memberData.name}
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="text-dark-blue font-medium">{memberData.name}</h4>
          <span className="text-light-blue-2 drop-shadow-[0px 4px 4px rgba(152, 84, 203, 0.1)]">
            {memberData.role}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
