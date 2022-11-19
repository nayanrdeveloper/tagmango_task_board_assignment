import React from "react";
import ReactEcharts from "echarts-for-react";

function AreaChart() {
  const options = {
    title: {
        text: "Tasks Completed",
        top: "5",
        left: "20",
        textStyle: {
            color: "#27104E"
          },
    },
    backgroundColor: "#fff",
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
        smooth: true
      },
    ],
  };
  return (
    <div className="rounded-md p-2">
      <ReactEcharts
        option={options}
        style={{ width: "500px", height: "400px" }}
      ></ReactEcharts>
    </div>
  );
}

export default AreaChart;
