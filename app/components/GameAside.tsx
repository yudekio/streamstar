import React from "react"
import Avatar from "./Avatar"
import MarkStar from "./MarkStar"

interface IGameAside {
  title: string
  img: string
}

const GameAside = ({ title, img }: IGameAside) => {
  return (
    <div className="flex items-center justify-around 2xl:justify-between px-[10px] py-[12px]  hover:bg-[#212327] cursor-pointer">
      <div className="flex items-center gap-[8px]">
        <div className="flex items-center gap-2 ">
          <Avatar image={img} />
          <p className="truncate hidden 2xl:block">{title}</p>
        </div>
      </div>
      <MarkStar />
    </div>
  )
}

export default GameAside
