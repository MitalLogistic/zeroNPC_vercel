import React from "react";
import BottomNavbar from "@/components/BottomNavbar";

const Userlayout = ({ children }) => {
    return (
        <div className="max-w-[393pt] h-screen m-auto w-full bg-white ">
            {children}
            <BottomNavbar />
        </div>
    );
};

export default Userlayout;
