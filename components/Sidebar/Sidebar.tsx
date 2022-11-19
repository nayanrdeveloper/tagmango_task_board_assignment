import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";
import { BiFace, BiMessageRounded } from "react-icons/bi";
import { AiOutlineCheckCircle, AiOutlineSetting } from "react-icons/ai";
import { icons } from "react-icons/lib";
import Link from "next/link";

function Sidebar() {
  interface sidebarStruct {
    icon: IconType;
    to: string;
  }
  const sidebarList: sidebarStruct[] = [
    {
      icon: AiOutlineCheckCircle,
      to: "/",
    },
    {
      icon: BiMessageRounded,
      to: "/",
    },
    {
      icon: BiFace,
      to: "/",
    },
    {
      icon: AiOutlineSetting,
      to: "/",
    },
  ];
  return (
    <div className="w-20 bg-sidebar h-screen">
      <div className="flex flex-col px-2 py-4 items-center">
        <Image src={"/fire.svg"} alt={"fire"} height={40} width={40} />
        <Image
          src={"/logo.svg"}
          alt={"logo"}
          height={40}
          width={40}
          className="mt-10"
        />
        <div className="flex flex-col gap-6 mt-10">
          {sidebarList.map((SidebarData: sidebarStruct, index) => {
            return (
              <Link href={SidebarData.to} key={index}>
                <SidebarData.icon className="w-7 h-7 text-icon" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
