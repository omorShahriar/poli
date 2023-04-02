import { createServerClient } from "@/utils/supabase-server";
import ChatInput from "@/components/ChatInput";
import Messages from "@/components/Messages";
import Container from "@/components/Container";
export const revalidate = 0;
const page = async () => {
  const supabase = createServerClient();
  const { data } = await supabase.from("messages").select("*");

  return (
    <>
      <Container>
        <div className="flex flex-col h-full">
          <Messages serverMessages={data ?? []} />
          <ChatInput />
        </div>
      </Container>
    </>
  );
};

export default page;
