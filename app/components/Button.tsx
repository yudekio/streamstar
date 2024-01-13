import React from "react"

interface IButton {
  text: string
}

const Button = ({ text }: IButton) => {
  return (
    <div className="border-[#f472b6] text-[#i] border-2 rounded-full pb-[8px] pt-[10px] text-[14px] px-[20px] cursor-pointer active:scale-90 font-semibold leading-none text-center uppercase transition-transform select-none truncate">
      {text}
    </div>
  )
}

export default Button
