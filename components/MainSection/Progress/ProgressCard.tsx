import Image from "next/image";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import ProgressBar from "../../ProgressBar/ProgressBar";

interface progressCardStruct {
  title: string;
  category: string;
  percentage: number;
  date: string;
  daysLeft: number;
  users: Array<string>;
  progressColor: string;
  buttonBackground: string;
  buttonText: string;
}

function ProgressCard(progressData: progressCardStruct) {
  const data = {
    bgcolor: progressData.progressColor,
    completed: `w-[${progressData.percentage}%]`,
  };
  return (
    <div className="p-2 bg-white rounded-md">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div>
            <span className="text-[#D9D9D9]">{progressData.date}</span>
          </div>
          <div>
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="px-2 flex flex-col gap-1">
          <h3 className="text-2xl font-semibold text-dark-blue">
            {progressData.title}
          </h3>
          <span>{progressData.category}</span>
          <ProgressBar {...data} />
          <div className="flex justify-between">
            <span>Progress</span>
            <span>{progressData.percentage}%</span>
          </div>
        </div>
        <div className="flex justify-between border-t-2 border-card-border">
          <div className="flex gap-3 mt-3">
            <div className="flex gap-3 py-5 z-10 relative">
              <Image
                src={"/user_1.svg"}
                alt={"user"}
                width={40}
                height={40}
                className="rounded-full z-20 left-2 top-1 absolute"
              />
              <Image
                src={"/user_1.svg"}
                alt={"user"}
                width={40}
                height={40}
                className="rounded-full z-20 left-6 top-1 absolute"
              />
            </div>
            <button className={`p-2 ml-16 `}>
              <FiPlus
                className={`${progressData.progressColor} rounded-full text-white text-3xl`}
              />
            </button>
          </div>
          <div className="mt-3">
            <div
              className={`px-2 py-1 ${progressData.buttonBackground} ${progressData.buttonText} rounded-2xl`}
            >
              {progressData.daysLeft} Days left
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressCard;
