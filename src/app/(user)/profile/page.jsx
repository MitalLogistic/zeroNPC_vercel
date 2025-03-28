"use client";
import BottomNavbar from "@/components/BottomNavbar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("general");
    return (
        <div className="">
            {/* Header */}
            <div className="sticky top-0 bg-white w-full z-10 py-4 flex items-center">
                <button>
                    <img src="/images/menu_icon.svg" alt="menu" />
                </button>
                <img src="/images/logo_dark.png" alt="logo" className="mx-auto w-[82pt] h-[27pt]" />
                <button onClick={() => router.push("/notification")}><img src="/images/notification_icon.svg" alt="Notification" className="" /> </button>
            </div>

            {/* Grid Items */}
            <div className="p-4 flex flex-col gap-4 items-center justify-center">
                <div className="relative w-[80pt] h-[80pt]">
                    <img src="/images/White_Tee.png" alt="profile" className="w-full h-full rounded-full object-cover" />
                    <span className="absolute top-2 right-2 w-4 h-4 bg-cyan border-2 border-white rounded-full"></span>
                </div>
                <h2 className="xs:text-[30pt] text-[20pt] font-bold leading-9">iamsarah</h2>
                <p className="text-[14pt] font-medium leading-4">12FT. Navata</p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
                {/* <button className="text-[14pt] leading-4 font-medium  border-b border-black bg-yellow text-primary-black">General</button> */}
                <button
                    className={`text-[14pt] leading-4 font-medium text-primary-black ${activeTab === "general"
                        ? "border-b-2 border-black bg-yellow"
                        : ""
                        }`}
                    onClick={() => setActiveTab("general")}
                >
                    General
                </button>

                <button
                    className={`text-[14pt] leading-4 font-medium text-primary-black ${activeTab === "publicaciones"
                        ? "border-b-2 border-black bg-yellow"
                        : ""
                        }`}
                    onClick={() => setActiveTab("publicaciones")}
                >Publicaciones</button>
            </div>

            {activeTab === "general" && (
                <div>
                    {/* Token Stats */}
                    <div className="grid xs:grid-cols-2 gap-3 mt-4">
                        <div className="bg-light-gray bg-opacity-40 p-4 rounded-2xl flex flex-col items-center">
                            <img src="/images/send_token.svg" alt="Tokens Sent" className="w-14 h-14" />
                            <p className="text-lg font-bold">18</p>
                            <p className="text-gray-600 text-xs">Tokens enviados</p>
                        </div>
                        <div className="bg-light-gray bg-opacity-40 p-4 rounded-2xl flex flex-col items-center">
                            <img src="/images/receive_token.svg" alt="Tokens Received" className="w-16 h-16" />
                            <p className="text-lg font-bold">21</p>
                            <p className="text-gray-600 text-xs">Tokens recibidos</p>
                        </div>
                    </div>

                    <div className="bg-light-gray bg-opacity-40 p-4 rounded-2xl mt-2 flex items-center justify-between">
                        <div className="flex flex-col xs:flex-row xs:items-center gap-3">
                            <div className="flex">
                                <img src="/images/White_Tee@3x.png" alt="Friend 1" className="w-16 h-16 rounded-full border-2 border-white -ml-0" />
                                <img src="/images/White_Tee@3x.png" alt="Friend 2" className="w-16 h-16 rounded-full border-2 border-white -ml-4" />
                                <img src="/images/White_Tee@3x.png" alt="Friend 3" className="w-16 h-16 rounded-full border-2 border-white -ml-4" />
                            </div>
                            <p className="text-[14pt] font-bold xs:w-4">19 <span className="font-normal">Amigos</span></p>
                        </div>
                        <button onClick={() => router.push("/friends")}><img src="/images/arrow_right.svg" alt="arrow_right" className="w-[10px]" /></button>
                    </div>

                    <h3 className="text-[16pt] font-bold mt-4 mb-2">Armario</h3>
                    <div className="bg-light-gray bg-opacity-40 p-4 rounded-2xl">
                        <p className="xs:text-[18pt] text-[16pt] font-medium">5 Prendas</p>
                        <div className="flex justify-between">
                            <div className="grid grid-cols-3 gap-3 mt-3 w-[90%]">
                                <div>
                                    <div className="shadow-md">
                                        <img
                                            src="/images/White_Tee@3x.png"
                                            alt="Camiseta Ghost"
                                        // className="w-full max-w-[100pt] xs:h-[100pt] h-[70pt] object-cover"
                                        />
                                    </div>
                                    <p className="xs:text-[12pt] text-[10pt] mt-1 text-gray-600 leading-tight">
                                        Camiseta <br /><span className="font-bold text-black">Ghost</span>
                                    </p>
                                </div>
                                <div>
                                    <div className="shadow-md">
                                        <img
                                            src="/images/White_Tee@3x.png"
                                            alt="Camiseta Demonio"
                                        // className="w-full max-w-[100pt] xs:h-[100pt] h-[70pt] object-cover"
                                        />
                                    </div>
                                    <p className="xs:text-[12pt] text-[10pt] mt-1 text-gray-600 leading-tight">
                                        Camiseta <br /><span className="font-bold text-black">Demonio</span>
                                    </p>
                                </div>
                                <div>
                                    <div className="shadow-md">
                                        <img
                                            src="/images/White_Tee@3x.png"
                                            alt="Bolsa ZNPC"
                                        // className="w-full max-w-[100pt] xs:h-[100pt] h-[70pt] object-cover"
                                        />
                                    </div>
                                    <p className="xs:text-[12pt] text-[10pt] mt-1 text-gray-600 leading-tight">
                                        Bolsa <br /><span className="font-bold text-black">ZNPC</span>
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => router.push("/wardrobe")}><img src="/images/arrow_right.svg" alt="arrow_right" className="w-[10px]" /></button>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === "publicaciones" && (
                <div>
                    <div className="bg-light-gray bg-opacity-40 rounded-lg p-3 mt-4">
                        <div className="flex items-center space-x-2">
                            <img src="/images/White_Tee.png" alt="User Avatar" className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="font-bold text-[12pt] leading-4 text-primary-black">iamsarah <span className="text-[10pt] font-medium opacity-40">2 days ago</span></p>
                                <p className="text-[10pt] font-medium italic my-0 text-primary-black"> • Novata</p>
                            </div>
                        </div>
                        <p className="text-[12pt] font-medium text-primary-black mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex
                            nibh, tincidunt eget urna eu, tempus varius nunc and Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex
                            nibh, tincidunt eget urna eu, tempus varius nunc
                        </p>
                        <div className="flex w-full bg-light-gray justify-center space-x-2 rounded-2xl mt-5 h-[40pt]">
                            <button className="flex items-center space-x-2">
                                <img src="/images/unlike_icon.svg" alt="like_icon" className="w-5 h-5" /> <span className="font-medium text-sm">12</span>
                            </button>
                            <button className="flex items-center space-x-2">
                                <img src="/images/comment_icon.svg" alt="like_icon" className="w-5 h-5" /> <span className="font-medium text-sm">12</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}