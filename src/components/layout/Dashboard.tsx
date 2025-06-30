'use client'
import React from "react";
import { FaChartLine, FaDollarSign } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { TfiWallet } from "react-icons/tfi";
import CountUp from 'react-countup';

export default function Dashboard() {
  const dash = [
    {
      name: "Total Funds Raised",
      value: 2.4,
    suffix: 'M',
      duration: "from last month",
      trend: "up",
      tag: "+12.5%",
      svg: <TfiWallet />,
    },
    {
      name: "Total Campaigns",
      value: 1284,
      duration: "from last month",
      trend: "up",
      tag: "+12.5%",
      svg: <FaChartLine />,
    },
    {
      name: "Active Users",
     value: 12245,
      duration: "from last month",
      trend: "down",
      tag: "-12.5%",
      svg: <FaChartLine />,
    },
    {
      name: "Platform Revenue",
   value: 48000,
      duration: "from last month",
      trend: "up",
      tag: "+12.5%",
      svg: <FaDollarSign />,
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-2 pt-4 px-1.5 lg:px-4" >
      {dash.map((item) => (
        <div key={item.name} className="space-y-2.5 max-w-[200px]  border border-[#2A2A2A] p-2.5 rounded-lg">
          <div className="flex text-xs md:text-sm text-white justify-between items-center">
            <p>{item.name}</p>
            <div>{item.svg}</div>
          </div>

 <div className="text-xl md:text-2xl font-normal text-white">
            $
            {item.suffix ? (
              <>
                <CountUp start={0.00} end={item.value} decimals={1} duration={1.5} />
                {item.suffix}
              </>
            ) : (
              <CountUp start={0.00} end={item.value} duration={1.5} separator="," />
            )}
          </div>




          <div className="flex items-center gap-2 text-[10px] md:text-[11px]">
            <div className={`flex items-center gap-1 rounded-full w-max p-1 ${item.trend === 'up'?'bg-green-600 text-green-300':'bg-red-600 text-red-300'}`}>
              <div>
                {item.trend === "up" ? (
                  <FaArrowTrendUp />
                ) : (
                  <FaArrowTrendDown />
                )}
              </div>
              <p >{item.tag}</p>
            </div>

            <p className="text-secondary-text">{item.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
