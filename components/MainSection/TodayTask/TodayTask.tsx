import Image from "next/image";
import React from "react";

function TodayTask() {
  return (
    <div className="relative">
      <div className="py-8 px-6 bg-white rounded-md">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-3xl text-dark-blue">
              Today Task
            </h2>
            <p className="text-dark-blue">
              Check your daily tasks and schedules
            </p>
            <button className="p-2 rounded-md bg-pink-main text-white">
              Today's Schedule
            </button>
          </div>
          <div className="absolute z-10 top-[-4rem] right-10">
            <Image
              src={"/time_management_amico.svg"}
              alt={"time management"}
              width={180}
              height={180}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayTask;
