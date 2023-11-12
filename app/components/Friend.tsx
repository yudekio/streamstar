import React from "react"
import Avatar from "./Avatar"

interface IFriend {
  img: string
  nick: string
  isOnline: boolean
}

const Friend = ({ img, nick, isOnline }: IFriend) => {
  return (
    <div className="flex justify-between items-center pr-[20px] hover:bg-[#212327] cursor-pointer pl-[20px] py-[10px] ">
      <div className="flex  items-center gap-[10px]">
        <Avatar image={img} />
        <p className="text-[12px]">{nick}</p>
      </div>
      <div
        className={`h-[5px] w-[5px] rounded-full ${
          isOnline ? "bg-green-500" : "bg-neutral-400"
        } `}
      ></div>
    </div>
  )
}

export default Friend
