import { createServerClient } from "@/utils/supabase-server";

import Container from "@/components/Container";
import ChatContainer from "@/components/ChatContainer";
export const revalidate = 0;
const page = async () => {
  const supabase = createServerClient();
  const { data } = await supabase.from("messages").select("*");

  return (
    <>
      <Container>
        <ChatContainer serverMessages={data ?? []} />
      </Container>
    </>
  );
};

export default page;
