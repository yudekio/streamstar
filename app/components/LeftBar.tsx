import React from "react";
import GameAside from "./GameAside";
import { gamesList } from "../gamesList";

const LeftBar = () => {
  return (
    <aside className="w-[13%] bg-[#16171B] h-[calc(100vh-56px)] ">
      <div className="flex items-center lg:justify-between px-[10px] py-[6px] border-[#4F4F4F] border-b-[1px] justify-center hover:bg-[#212327] cursor-pointer">
        <div className="flex items-center gap-[8px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <p className="lg:block hidden">Home</p>
        </div>
      </div>
      <div className="items-center justify-between px-[10px] py-[6px] border-[#4F4F4F] border-b-[1px] hidden lg:flex truncate text-[12px] hover:bg-[#212327] cursor-pointer">
        <p>Popular categories</p>
      </div>
      <div className="flex flex-col">
        {gamesList.map((game, index) => (
          <GameAside img={game.img} title={game.title} key={index} />
        ))}
      </div>
    </aside>
  );
};

export default LeftBar;
