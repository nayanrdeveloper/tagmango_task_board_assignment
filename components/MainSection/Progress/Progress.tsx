import React from "react";
import ProgressCard from "./ProgressCard";

function Progress() {
  interface progressCardStruct{
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
  const progressCardList : progressCardStruct[] = [
    {
      title: "Web Dashboard",
      category: "Designing",
      percentage: 75,
      date: "Nov 2, 2022",
      daysLeft: 3,
      users: ["user_1.svg", "user_1.svg"],
      progressColor: "bg-[#64379F]",
      buttonBackground: "bg-[rgba(221, 172, 245, 0.4)]",
      buttonText: "text-[#64379F]"
    },
    {
      title: "Mobile App",
      category: "Shopping",
      percentage: 30,
      date: "Nov 26, 2022",
      daysLeft: 25,
      users: ["/user_1.svg", "/user_1.svg"],
      progressColor: "bg-[#7581E8]",
      buttonBackground: "bg-[#DCDFF9]",
      buttonText: "text-[#7581E8]"
    },
    {
      title: "Animate Illustration",
      category: "Designing",
      percentage: 90,
      date: "Nov 7, 2022",
      daysLeft: 7,
      users: ["/user_1.svg", "/user_1.svg"],
      progressColor: "bg-[#FCA465]",
      buttonBackground: "bg-[#FDD3B4]",
      buttonText: "text-[#E26001]"
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {progressCardList.map((progressData) => {
          return (
            <div key={progressData.title}>
              <ProgressCard key={progressData.title} {...progressData} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Progress;
