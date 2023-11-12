"use client"
import React, { useState } from "react"

interface ChatMessage {
  id: number
  content: string
  date: any
}

const GlobalChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [editingMessageId, setEditingMessageId] = useState<number | null>(null)
  const [editedMessageContent, setEditedMessageContent] = useState("")

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    messageId: number
  ) => {
    if (e.key === "Enter") {
      updateMessageContent(messageId)
    }
  }

  const handleNewMessageKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      addMessage()
    }
  }

  const addMessage = () => {
    if (newMessage.trim() !== "") {
      const currentDate = new Date()
      const hours = currentDate.getHours().toString().padStart(2, "0")
      const minutes = currentDate.getMinutes().toString().padStart(2, "0")
      const formattedTime = `${hours}:${minutes}`

      const newChatMessage: ChatMessage = {
        id: currentDate.getTime(),
        content: newMessage.trim(),
        date: formattedTime,
      }
      setMessages([...messages, newChatMessage])
      setNewMessage("")
    }
  }

  const deleteMessage = (messageId: number) => {
    setMessages(messages.filter((message) => message.id !== messageId))
  }

  const startEditingMessage = (messageId: number, content: string) => {
    setEditingMessageId(messageId)
    setEditedMessageContent(content)
  }

  const finishEditingMessage = () => {
    setEditingMessageId(null)
    setEditedMessageContent("")
  }

  const updateMessageContent = (messageId: number) => {
    setMessages(
      messages.map((message) =>
        message.id === messageId
          ? { ...message, content: editedMessageContent }
          : message
      )
    )
    finishEditingMessage()
  }

  return (
    <div className="flex flex-col justify-center ">
      <div className="flex items-center justify-center ">
        <h1 className="py-[10px]">Global Chat</h1>
      </div>
      <div className="bg-neutral-800 h-[500px] overflow-y-auto">
        <div className="px-[24px] py-[20px] ">
          {messages.map((message) => (
            <div key={message.id}>
              {editingMessageId === message.id ? (
                <div className="py-[12px] h-full">
                  <input
                    type="text"
                    value={editedMessageContent}
                    className=" w-full pl-[16px] rounded-full bg-[#ffffff1a]"
                    onChange={(e) => setEditedMessageContent(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, message.id)}
                  />
                  <div className="flex gap-[10px]">
                    <button
                      className="text-neutral-500"
                      onClick={() => updateMessageContent(message.id)}
                    >
                      Save
                    </button>
                    <button
                      className="text-neutral-500"
                      onClick={finishEditingMessage}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-[12px] h-full">
                  <div className="flex justify-between items-center">
                    <p className="w-[200px] break-words">{message.content}</p>
                    <p className="text-neutral-500">{message.date}</p>
                  </div>
                  <div className="flex gap-[10px]">
                    <button
                      className="text-neutral-500"
                      onClick={() =>
                        startEditingMessage(message.id, message.content)
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="text-neutral-500"
                      onClick={() => deleteMessage(message.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center pt-[20px]">
        <input
          placeholder="Write..."
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleNewMessageKeyDown}
          className="py-[6px] w-[220px] px-[16px] rounded-full bg-[#ffffff1a] overflow-hidden"
        />
        <div onClick={addMessage} className="cursor-pointer">
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
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default GlobalChat
