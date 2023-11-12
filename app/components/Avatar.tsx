import React from "react"

interface IAvatar {
  image: string
}

const Avatar = ({ image }: IAvatar) => {
  return (
    <div>
      <img
        src={image}
        alt="avatar"
        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
      />
    </div>
  )
}

export default Avatar
