"use client";
import React, { useState, useEffect } from "react";

interface ITournament {
  title: string;
  prize: string;
  maxTeams: number;
  enrolled: number;
  img: string;
}

const Tournament = ({ title, prize, maxTeams, enrolled, img }: ITournament) => {
  const [timer, setTimer] = useState<number>(4 * 60 * 60); // 4 hours in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time: number): string => {
    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);

    return `${Math.max(0, days)}d ${Math.max(0, hours)}h ${Math.max(
      0,
      minutes
    )}m`;
  };
  return (
    <div className=" lg:w-1/3 w-full bg-[#18181B] rounded-xl cursor-pointer hover:-translate-y-1 transition-transform truncate">
      <div className="flex gap-[20px] py-[20px] px-[26px]">
        <img
          src={img}
          width={200}
          height={200}
          alt={title}
          className="w-1/4 h-auto rounded-xl"
        />
        <div className="bg-neutral-800 w-full rounded-xl flex flex-col justify-center items-center">
          <p className="text-[16px]">PRIZE</p>
          <p className="text-[18px] text-green-500">{prize}</p>
        </div>
      </div>
      <div className="pb-[20px] px-[26px]">
        <p className="text-[18px]">{title}</p>
        <ul className="flex justify-between items-center gap-[12px] mt-[12px]">
          <li className="bg-neutral-800 py-2 px-4 rounded-lg flex flex-col justify-center w-full items-center truncate">
            <p>Start in</p>
            <p className="text-green-500 ">{formatTime(timer)}</p>
          </li>
          <li className="bg-neutral-800 py-2 px-4 rounded-lg flex flex-col justify-center items-center w-full truncate">
            <p>Enrolled</p>
            <p>{enrolled}</p>
          </li>
          <li className="bg-neutral-800 py-2 px-4 rounded-lg flex flex-col justify-center items-center w-full truncate">
            <p>Max teams</p>
            <p>{maxTeams}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tournament;
