"use client";

import { useSupabase } from "@/components/supabase-provider";
import Link from "next/link";

export default function Home() {
  const { supabase, session } = useSupabase();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }
  };
  return (
    <main>
      <div className="h-screen flex justify-center items-center flex-col">
        <h1 className="text-6xl font-bold mb-12">Welcome to Poli</h1>
        {!session ? (
          <p>
            <Link
              href="/sign-in"
              className=" text-xl font-bold text-purple-700 "
            >
              Get your magic link to sign in
            </Link>
          </p>
        ) : (
          <div>
            <ul className="text-center flx flex-col gap-y-2 text-xl  ">
              <li className=" text-emerald-700 hover:text-emerald-900 ">
                <Link href="/chat">Use Poli Chat</Link>
              </li>
              <li className="text-emerald-700 hover:text-emerald-900">
                <Link href="/knowledge-base">Browse the knowledge base</Link>
              </li>
              <li className="text-fuchsia-700 hover:text-fuchsia-900 mt-12">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
