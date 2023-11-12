import React from "react"

interface IGameCard {
  img: string
}

const GameCard = ({ img }: IGameCard) => {
  const divStyle = {
    backgroundImage: `url(${img})`,
  }
  return (
    <div
      className=" transition-transform hover:-translate-y-[6px] bg-center rounded-xl cursor-pointer bg-cover sm:h-[360px] h-[90px] w-full mt-[18px] "
      style={divStyle}
    ></div>
  )
}

export default GameCard
