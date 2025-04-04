"use client";
import Image from "next/image";
import SendTokenCard from "./SendTokenCard";
import { useState } from "react";

export default function UserProfile({ setIsUserProfileOpen }) {


    const handleOpenSendModal = () => {
        setIsOpenSendModel(true);

    };
    return (
        <div
            id="popup-modal"
            tabIndex={-1}
            className=" fixed flex inset-0 z-50 justify-center items-center bg-black bg-opacity-50"
        >
            <div className="relative bg-white px-4 flex flex-col justify-center items-center py-7 shadow-lg w-full max-w-[332pt] mx-5">
                <div className="relative w-[80px] h-[80px]">
                    <img src="/images/profile.jpg" alt="profile" className="w-full h-full rounded-full object-cover" />
                    <span className="absolute top-1 right-1 w-4 h-4 bg-cyan border-2 border-white rounded-full"></span>
                </div>
                <h1 className="text-black font-bold text-lg">Juanjo</h1>

                <div className="grid grid-cols-2 gap-3 my-5 w-full">
                    <div className="flex items-center bg-gray-100 p-2 rounded-lg w-full">
                        <img src="/images/send_token.svg" alt="Tokens Sent" />
                        <div className="block mx-3">
                            <p className="font-semibold text-lg">31</p>
                            <p className="text-gray-500 text-sm">Enviados</p>
                        </div>

                    </div>

                    <div className="flex items-center bg-gray-100 p-3 rounded-lg w-full">
                        <div className="relative">
                            <img src="/images/receive_token.svg" alt="Tokens Received" />
                        </div>
                        <div className="block mx-3">
                            <p className="font-semibold text-lg">45</p>
                            <p className="text-gray-500 text-sm">Recibidos</p>
                        </div>
                    </div>
                </div>
                <button className="main-button">Elige este amigo</button>
                <button onClick={() => setIsUserProfileOpen(false)} className="text-magenta font-semibold text-xl leading-6 mt-6">Volver</button>
            </div>
        </div>
    );
}
