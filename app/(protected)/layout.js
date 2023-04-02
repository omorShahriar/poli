import Navigation from "@/components/Navigation";

const layout = ({ children }) => {
  return (
    <div className="  flex flex-col h-screen">
      <div className=" flex-1 max-h-[calc(100vh-56px-32px)]">{children}</div>
      <Navigation />
    </div>
  );
};

export default layout;
