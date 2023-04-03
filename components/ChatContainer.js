"use client";
import { useState } from "react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
const ChatContainer = ({ serverMessages }) => {
  const [messages, setMessages] = useState(serverMessages);
  const updateMessages = (msg) => {
    setMessages((current) => [...current, msg]);
  };
  return (
    <div className="flex flex-col h-full">
      <Messages messages={messages} />
      <ChatInput updateMessages={updateMessages} />
    </div>
  );
};

export default ChatContainer;
