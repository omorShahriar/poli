"use client";

import { useEffect, useRef } from "react";

const Messages = ({ messages }) => {
  const anchorRef = useRef();

  useEffect(() => {
    anchorRef.current.scrollIntoView();
  }, [messages]);
  return (
    <div className="flex-1 overflow-y-auto max-h-[calc(100vh-56px-56px)]  ">
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
        <li ref={anchorRef} className="anchor h-1 w-full" />
      </ul>
    </div>
  );
};

export default Messages;
