"use client";

import BottomNavbar from "@/components/BottomNavbar";
import TokenDetailsCard from "@/components/TokenDetails";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Drawer from "@/components/Drawer";

const TokenPage = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <div>
            <div className="app-header">
                <button onClick={() => setIsDrawerOpen(true)}>
                    <img src="/images/menu_icon.svg" alt="menu" />
                </button>
                <img src="/images/logo_dark.png" alt="logo" className="app-logo" />
                <button onClick={() => router.push("/notification")}><img src="/images/notification_icon.svg" alt="Notification" /> </button>
            </div>
            {isDrawerOpen && (<Drawer setIsDrawerOpen={setIsDrawerOpen} />)}

            <div className="mt-4 px-4 pb-28">
                <p className="text-lg font-bold">Mis Cargas (2/3)</p>
                <div className="flex space-x-2 mt-1">
                    <span className="w-7 h-1 bg-magenta rounded-full"></span>
                    <span className="w-7 h-1 bg-magenta rounded-full"></span>
                    <span className="w-7 h-1 bg-gray-300 rounded-full"></span>
                </div>

                <div className="mt-6">
                    <p className="text-lg font-bold">Mis Actividades</p>
                    <div className="token-grid">
                        <div className="token-card">
                            <img src="/images/send_token.svg" alt="Tokens Sent" />
                            <p>18</p>
                            <span>Tokens enviados</span>
                        </div>
                        <div className="token-card">
                            <img src="/images/receive_token.svg" alt="Tokens Received" />
                            <p>21</p>
                            <span>Tokens recibidos</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-bold">Mis Tokens</p>
                        <p className="text-gray-500 text-sm">12 FT</p>
                    </div>
                    <div className="mt-1 space-y-2">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="flex items-center bg-gray-100 p-2 rounded-lg cursor-pointer" onClick={() => router.push('/tokenDetails')}>
                                <img src="/images/White_Tee@3x.png" alt="Items" className="w-12 h-12 rounded-lg" />
                                <div className="flex ml-4 space-x-2 text-magenta">
                                    {[1, 2, 3, 4].map((_, j) => (
                                        <img src="/images/Send_token.svg" alt="Token" className="w-6 h-6 rounded-lg" />
                                    ))}
                                </div>
                                <button className="ml-auto"><img src="/images/arrow_right.svg" alt="arrow_right" className="w-[8px]" /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenPage;
