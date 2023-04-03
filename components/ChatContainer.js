"use client";
import { useState } from "react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
const ChatContainer = ({ serverMessages }) => {
  const [messages, setMessages] = useState(serverMessages);
  const [isThinking, setIsThinking] = useState(false);
  const updateMessages = (msg) => {
    setMessages((current) => [...current, msg]);
  };
  const thinking = (value) => {
    setIsThinking(value);
  };
  return (
    <div className="flex flex-col h-full">
      <Messages messages={messages} poliThinking={isThinking} />
      <ChatInput updateMessages={updateMessages} thinking={thinking} />
    </div>
  );
};

export default ChatContainer;
