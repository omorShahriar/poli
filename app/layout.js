import "server-only";

import SupabaseListener from "../components/supabase-listener";
import SupabaseProvider from "../components/supabase-provider";

import "./globals.css";
import { createServerClient } from "../utils/supabase-server";

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className=" bg-[#f2f1f7] ">
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />

          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
