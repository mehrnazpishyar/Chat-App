import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import RightSide from "../components/RightSide";

const Homepage = () => {

    const [selectedUser, setSelectedUser] = useState(false)

  return (
    <div className="w-full h-screen sm:px-[15%] sm:py-[5%]">
      <div className={`backdrop-blur-xl bg-white/5 border-2 border-gray-600 rounded-2xl overflow-hidden h-full grid grid-cols-1 relative ${selectedUser ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]" : "grid-cols-2"} `}>
        <Sidebar />
        <ChatContainer />
       <RightSide/>
      </div>
    </div>
  );
};

export default Homepage;
