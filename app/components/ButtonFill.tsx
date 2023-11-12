import React from "react"

interface IButtonFill {
  text: string
}

const ButtonFill = ({ text }: IButtonFill) => {
  return (
    <div className="border-[#f472b6] bg-[#f472b6] text-white border-2 rounded-full pb-[8px] pt-[10px] text-[14px] px-[20px] cursor-pointer active:scale-90 font-semibold leading-none text-center transition-transform select-none">
      {text}
    </div>
  )
}

export default ButtonFill
