"use client";
import { useState } from "react";
import { createBrowserClient } from "@/utils/supabase-browser";
import { FaPaperPlane } from "react-icons/fa";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const supabase = createBrowserClient();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { message } = Object.fromEntries(new FormData(e.currentTarget));

    await supabase
      .from("messages")
      .insert({ content: message, speaker: "user" })
      .then(async () => {
        setMessage("");

        await fetch("/api/askQuestion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: message,
          }),
        });
      });
  };
  return (
    <div className="py-4  flex items-center justify-center ">
      <form onSubmit={handleSubmit} className=" flex items-center ">
        <input
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          className="p-2 rounded-tl-3xl rounded-bl-3xl focus:outline-none "
        />
        <button
          disabled={!message}
          type="submit"
          className=" disabled:text-gray-400 text-[#01034b]  bg-white p-2 pr-4 rounded-tr-3xl rounded-br-3xl"
        >
          <FaPaperPlane size={24} className=" " />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
