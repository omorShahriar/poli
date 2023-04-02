import Link from "next/link";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
const Navigation = () => {
  return (
    <nav className="p-4  w-fit rounded-3xl flex justify-center items-center mb-8 mx-auto gap-x-8 bg-white">
      <Link href="/knowledge-base">
        <FaBook size={24} />
      </Link>
      <Link href="/chat">
        <BsFillChatDotsFill size={24} />
      </Link>
    </nav>
  );
};

export default Navigation;
