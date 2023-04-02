"use client";
import { useState } from "react";
import { useSupabase } from "@/components/supabase-provider";
import Image from "next/image";
import Container from "@/components/Container";
export default function SignIn() {
  const { supabase } = useSupabase();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  async function signIn() {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "http://localhost:3000",
      },
    });
    if (error) {
      console.log({ error });
    } else {
      setSubmitted(true);
    }
  }

  return (
    <>
      <div className=" h-screen flex items-center justify-center ">
        {" "}
        <Container>
          <div className="flex flex-col items-center justify-center h-full">
            <div>
              {" "}
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
                  <span className="text-xl italic ">
                    {" "}
                    made . made . made
                  </span>{" "}
                  <br />
                  accessible . simple
                </h1>
              </div>
              {submitted ? (
                <div className="text-center">
                  <h1>Please check your email for the magic link!</h1>
                </div>
              ) : (
                <div className="flex flex-col gap-y-4 justify-center items-center max-w-xs mx-auto ">
                  {" "}
                  <input
                    className=" w-full rounded-md p-2 "
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className=" w-full bg-[#1d2333] rounded-md text-white py-2  "
                    onClick={() => signIn()}
                  >
                    Sign In
                  </button>
                </div>
              )}
            </div>{" "}
          </div>
        </Container>
      </div>
    </>
  );
}
