"use client";
import BottomNavbar from "@/components/BottomNavbar";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
    return (
        <div className="max-w-md mx-auto p-4">
            {/* Profile Header */}
            <div className="flex flex-col items-center text-center">
                <img src="/images/White_Tee.png" alt="Profile" className="w-20 h-20 rounded-full border-2 border-white shadow-lg" />
                <h2 className="text-lg font-bold mt-2">iamsarah</h2>
                <p className="text-gray-500 text-sm">12 FT • <span className="italic">Novata</span></p>
                <div className="flex items-center gap-1 mt-1">
                    <span className="text-yellow-400">⭐⭐⭐☆☆</span>
                    <p className="text-gray-500 text-xs">(9)</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mt-4">
                <button className="px-3 py-1 text-[14pt] font-medium bg-yellow text-primary-black rounded-md mr-2">General</button>
                <button className="px-3 py-1 text-xs font-medium text-primary-black">Publicaciones</button>
            </div>

            {/* Token Stats */}
            <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-gray-100 p-3 rounded-lg flex flex-col items-center">
                    <img src="/token-sent.png" alt="Tokens Sent" className="w-8 h-8" />
                    <p className="text-lg font-bold">18</p>
                    <p className="text-gray-600 text-xs">Tokens enviados</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg flex flex-col items-center">
                    <img src="/token-received.png" alt="Tokens Received" className="w-8 h-8" />
                    <p className="text-lg font-bold">21</p>
                    <p className="text-gray-600 text-xs">Tokens recibidos</p>
                </div>
            </div>

            {/* Achievements & Friends */}
            <div className="bg-gray-100 p-3 rounded-lg mt-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="/achievement.png" alt="Logros" className="w-6 h-6" />
                        <p className="text-sm font-bold">18</p>
                        <p className="text-gray-600 text-sm">Logros</p>
                    </div>
                    <span className="text-gray-400">➝</span>
                </div>
            </div>

            <div className="bg-gray-100 p-3 rounded-lg mt-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="/images/White_Tee@3x.png" alt="Amigos" className="w-6 h-6 rounded-full" />
                        <p className="text-sm font-bold">19</p>
                        <p className="text-gray-600 text-sm">Amigos</p>
                    </div>
                    <span className="text-gray-400">➝</span>
                </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg mt-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex">
                        <img src="/images/White_Tee@3x.png" alt="Friend 1" className="w-7 h-7 rounded-full border-2 border-white -ml-0" />
                        <img src="/images/White_Tee@3x.png" alt="Friend 2" className="w-7 h-7 rounded-full border-2 border-white -ml-2" />
                        <img src="/images/White_Tee@3x.png" alt="Friend 3" className="w-7 h-7 rounded-full border-2 border-white -ml-2" />
                    </div>
                    <p className="text-sm font-bold">19 <span className="text-gray-600 font-normal">Amigos</span></p>
                </div>
                <span className="text-gray-400 text-lg">➝</span>
            </div>


            {/* Closet Section */}
            <div className="mt-4">
                <h3 className="text-lg font-bold">Armario</h3>
                <p className="text-gray-500 text-sm">5 Prendas</p>

                {/* Clothing Items */}
                <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="text-center">
                        <img src="/shirt1.png" alt="Camiseta Ghost" className="w-full h-20 object-cover rounded-md" />
                        <p className="text-xs mt-1">Camiseta <br /><span className="font-bold">Ghost</span></p>
                    </div>
                    <div className="text-center">
                        <img src="/shirt2.png" alt="Camiseta Demonio" className="w-full h-20 object-cover rounded-md" />
                        <p className="text-xs mt-1">Camiseta <br /><span className="font-bold">Demonio</span></p>
                    </div>
                    <div className="text-center">
                        <img src="/bag.png" alt="Bolsa ZNPC" className="w-full h-20 object-cover rounded-md" />
                        <p className="text-xs mt-1">Bolsa <br /><span className="font-bold">ZNPC</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
