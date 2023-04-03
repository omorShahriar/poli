"use client";

import { useEffect, useRef } from "react";
import PoliThinking from "./PoliThinking";

const Messages = ({ messages, poliThinking }) => {
  const anchorRef = useRef();

  useEffect(() => {
    anchorRef.current.scrollIntoView();
  }, [messages]);
  return (
    <div className="flex- overflow-x-hidden overflow-y-auto max-h-[calc(100vh-56px-56px)]  ">
      <ul className=" py-4 px-2 flex flex-col gap-y-2">
        {messages.map((message) => {
          const isUser = message.speaker === "user";
          return (
            <li
              key={message.id}
              className={`${
                isUser ? "self-end bg-white" : "text-left"
              } p-2 text-[#01034b] font-medium whitespace-pre-line`}
            >
              {message.content}
            </li>
          );
        })}
      </ul>
      <ul className=" px-2 flex flex-col gap-y-2">
        {poliThinking && (
          <li className="p-2 flex gap-x-1 items-center">
            <PoliThinking />

            <span className=" font-medium ">poli is thinking...</span>
          </li>
        )}
        <li ref={anchorRef} className="anchor h-1 w-full" />
      </ul>
    </div>
  );
};

export default Messages;
