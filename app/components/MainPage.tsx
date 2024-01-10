import React, { useState } from "react";
import SmallStream from "./SmallStream";
import GameCard from "./GameCard";
import { browserGamesList } from "../browserGamesList";
import Tournament from "./Tournament";
import { tournamentsList } from "../tournamentsList";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <main className="w-full overflow-y-auto h-[calc(100vh-56px)] bg-[#0E0E0E] px-[20px] py-[24px] relative z-0">
      <h1>HOT LIVE CHANNELS</h1>
      <div className="  relative transition hover:scale-[100.5%] bg-center rounded-xl cursor-pointer bg-[linear-gradient(to_bottom,rgba(49,84,44,0.0),rgba(0,0,0,1)),url('https://cdn.motor1.com/images/mgl/E6WEQw/s3/img_6131.jpg')]  bg-cover h-[400px] mt-[18px]">
        <p className="py-2 px-4 bg-red-600 w-[68px] text-center absolute top-8 left-8 rounded-lg">
          LIVE
        </p>

        <div className="bottom-8 left-8 absolute ">
          <h1>Watch The Tesla Cybertruck!! #tesla #cybertruck #tech</h1>
          <p className="text-neutral-400">techresearcher34</p>
          <div className="flex gap-[4px] items-center">
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
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p>11.3k</p>
          </div>
        </div>
      </div>
      <div className="flex gap-[18px] flex-col md:flex-row">
        <SmallStream
          img="https://www.worldatlas.com/r/w1200/upload/b1/c0/f6/shutterstock-525120643.jpg"
          title="Help me with my homework = ( #help"
          views="8.7k"
          nick="schoolb0y"
        />
        <SmallStream
          img="https://www.levelpush.com/wp-content/uploads/2020/03/Reveal_Window_VALORANT-1-1-scaled.jpg"
          title="Playing Valorant #lowskill"
          views="6.1k"
          nick="helloworld#1010"
        />
        <SmallStream
          img="https://live.staticflickr.com/65535/52148861121_8d6063846f_h.jpg"
          title="Hi, I'm the problem #overwatch2"
          views="5.8k"
          nick="midnight#1111"
        />
      </div>
      <h1 className="mt-[36px] ">
        BROWSE THE GREATEST SCIENTISTS OF ALL TIME{" "}
        <span className="text-[14px] cursor-pointer text-neutral-400 hover:underline">
          View all
        </span>
      </h1>
      <section className="px-[50px] flex gap-[20px] sm:flex-row flex-col">
        {browserGamesList.map((game, index) => (
          <GameCard img={game.img} key={index} />
        ))}
      </section>
      <h1 className="mt-[36px] ">
        TOURNAMENTS{" "}
        <span className=" text-[14px] cursor-pointer text-neutral-400 hover:underline">
          View all
        </span>
      </h1>
      <section className="flex lg:flex-row flex-col gap-[20px] mt-[20px]">
        {tournamentsList.map((tn, index) => (
          <Tournament
            title={tn.title}
            enrolled={tn.enrolled}
            img={tn.img}
            maxTeams={tn.maxTeams}
            prize={tn.prize}
            key={index}
          />
        ))}
      </section>
      <Footer />
    </main>
  );
};

export default MainPage;
