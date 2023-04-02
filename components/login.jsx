"use client";
import { useState } from "react";
import { useSupabase } from "./supabase-provider";
import Image from "next/image";
import Container from "./Container";
// Supabase auth needs to be triggered client-side

export const SignIn = () => {
  const { supabase } = useSupabase();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  async function signIn(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        // emailRedirectTo: "http://localhost:3000",
        emailRedirectTo: "https://poli.vercel.app",
      },
    });
    if (error) {
      console.log({ error });
    } else {
      setSubmitted(true);
    }
  }
  if (submitted) {
    return (
      <div className="">
        <h1>Please check your email to sign in</h1>
      </div>
    );
  }
  return (
    <>
      <div className=" h-screen flex items-center justify-center ">
        {" "}
        <Container>
          <div className=" mx-auto w-fit">
            <Image
              src="/logo.png"
              width={250}
              height={100}
              className=" w-28 h-auto "
            />
          </div>
          <div className=" my-8 ">
            <h1 className=" font-serif text-2xl font-bold text-center ">
              Knowledge . AI . Education <br />
              <span className="text-xl italic "> made . made . made</span>{" "}
              <br />
              accessible . simple
            </h1>
          </div>
          <form
            onSubmit={signIn}
            className="flex flex-col gap-y-4 justify-center items-center max-w-xs mx-auto "
          >
            {" "}
            <input
              className=" w-full rounded-md py-2 "
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className=" w-full bg-[#1d2333] rounded-md text-white py-2  "
              type="submit"
            >
              Sign In
            </button>
          </form>
        </Container>
      </div>
    </>
  );
};
