import React from "react"
import Friend from "./Friend"
import { friendsList } from "../friendsList"

const FriendsList = () => {
  return (
    <div>
      <div className="py-[20px] px-[10px] flex items-center justify-center">
        <input
          type="text"
          placeholder="🔍︎ Search..."
          className="py-[6px] w-[220px] pl-[16px] rounded-full bg-[#ffffff1a]"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col ">
          {friendsList.map((friend) => (
            <Friend
              img={friend.img}
              nick={friend.nick}
              key={friend.nick}
              isOnline={friend.isOnline}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FriendsList
