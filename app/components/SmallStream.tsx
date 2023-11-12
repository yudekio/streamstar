import React from "react"

interface ISmallStream {
  title: string
  img: string
  nick: string
  views: string
}

const SmallStream = ({ title, img, nick, views }: ISmallStream) => {
  const gradientBackground =
    "linear-gradient(to bottom, rgba(49, 84, 44, 0.0), rgba(0, 0, 0, 1))"
  const backgroundImage = `url(${img})` // Set the img prop value as the background image

  return (
    <div
      className="relative transition hover:-translate-y-[4px] hover:translate-x-[4px] bg-center rounded-xl cursor-pointer bg-cover h-[280px] md:w-1/3 w-full mt-[18px]"
      style={{ backgroundImage: `${gradientBackground}, ${backgroundImage}` }}
    >
      <p className="py-1 px-2 bg-red-600 w-[68px] text-center absolute top-4 left-4 rounded-lg text-[12px]">
        LIVE
      </p>

      <div className="bottom-4 left-4  absolute ">
        <h1 className="text-[16px]">{title}</h1>
        <p className="text-neutral-400 text-[12px]">{nick}</p>
        <div className="flex gap-[4px] items-center text-[12px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
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
          <p>{views}</p>
        </div>
      </div>
    </div>
  )
}

export default SmallStream
