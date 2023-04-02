"use client";
import { createBrowserClient } from "@/utils/supabase-browser";

import { useEffect, useState, useRef } from "react";

const Messages = ({ serverMessages }) => {
  const [messages, setMessages] = useState(() =>
    serverMessages.filter((m) => m.speaker == "user")
  );
  const [poliMessages, setPoliMessages] = useState(() =>
    serverMessages.filter((m) => m.speaker == "poli")
  );

  const allMessages = [...messages, ...poliMessages].sort(
    (a, b) => a.id - b.id
  );

  const supabase = createBrowserClient();

  const anchorRef = useRef();
  useEffect(() => {
    const channel = supabase
      .channel("table-db-changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          if (payload.new.speaker == "user") {
            setMessages((current) => [...current, payload.new]);
          }
          if (payload.new.speaker == "poli") {
            setPoliMessages((current) => [...current, payload.new]);
          }
          anchorRef.current.scrollIntoView();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, messages, setMessages]);
  useEffect(() => {
    anchorRef.current.scrollIntoView();
  }, [messages, poliMessages]);
  return (
    <div className="flex-1 overflow-y-auto max-h-[calc(100vh-56px-56px)]  ">
      <ul className=" py-4 px-2 flex flex-col gap-y-2">
        {allMessages.map((message) => {
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
