"use client"
import Friend from "./Friend"
import { friendsList } from "../friendsList"
import Button from "./Button"
import ButtonFill from "./ButtonFill"
import { useState } from "react"
import GlobalChat from "./GlobalChat"
import FriendsList from "./FriendsList"
import PMChat from "./PMChat"

const RightBar = () => {
  const [activeBar, setActiveBar] = useState<Number>(3)
  const [openRightBar, setOpenRightBar] = useState<Boolean>(true)

  const handleRightBar = (value: Boolean) => {
    setOpenRightBar(value)
  }

  const handleClickOnBar = (bar: number) => {
    setActiveBar(bar)
  }
  return (
    <>
      {openRightBar && (
        <aside className="w-[20%] hidden xl:flex bg-[#16171B] h-[calc(100vh-56px)] xl:flex-col ">
          <div className="h-full">
            <div className="flex items-center justify-between px-[10px] py-[6px] border-[#4F4F4F] border-b-[1px]">
              <svg
                onClick={() => handleRightBar(!openRightBar)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>

              <p>Chat Box</p>
            </div>

            <ul className="grid grid-cols-3  ">
              <li
                className={`cursor-pointer border-l-[1px] border-[#4F4F4F] py-[10px] pl-[4px] ${
                  activeBar === 1 ? "" : "bg-[#212327]"
                }`}
                onClick={() => handleClickOnBar(1)}
              >
                Global
              </li>
              <li
                className={`cursor-pointer border-l-[1px] border-[#4F4F4F] py-[10px] pl-[4px] ${
                  activeBar === 2 ? "" : "bg-[#212327]"
                }`}
                onClick={() => handleClickOnBar(2)}
              >
                PM
              </li>
              <li
                className={`cursor-pointer border-l-[1px] border-[#4F4F4F] py-[10px] pl-[4px] ${
                  activeBar === 3 ? "" : "bg-[#212327]"
                }`}
                onClick={() => handleClickOnBar(3)}
              >
                Friends
              </li>
            </ul>

            {activeBar === 1 && <GlobalChat />}
            {activeBar === 2 && <PMChat />}
            {activeBar === 3 && <FriendsList />}
          </div>
          <div className="px-[14px] flex flex-col gap-2 mt-auto mb-[20px]">
            <Button text="CONNECT WITH STEAM" />
            <ButtonFill text="INVITE FRIENDS" />
          </div>
        </aside>
      )}

      {openRightBar || (
        <aside className="w-[3%] hidden xl:flex bg-[#16171B] h-[calc(100vh-56px)] xl:flex-col ">
          <div className="h-full">
            <div className="flex items-center justify-center px-[10px] py-[6px] border-[#4F4F4F] border-b-[1px]">
              <svg
                onClick={() => handleRightBar(!openRightBar)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </aside>
      )}
    </>
  )
}

export default RightBar
