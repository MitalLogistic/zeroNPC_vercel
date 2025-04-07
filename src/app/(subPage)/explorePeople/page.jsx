"use client";
import BottomNavbar from "@/components/BottomNavbar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ExplorePeople() {
    const router = useRouter();
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const friends = [
        { id: 1, img: "/images/profile.jpg", online: true },
        { id: 2, img: "/images/profile.jpg", online: false },
        { id: 3, img: "/images/profile.jpg", online: true },
        { id: 4, img: "/images/profile.jpg", online: true },
        { id: 5, img: "/images/profile.jpg", online: false },
        { id: 6, img: "/images/profile.jpg", online: true },
        { id: 7, img: "/images/profile.jpg", online: true },
        { id: 8, img: "/images/profile.jpg", online: true },
    ];
    return (
        <div>
            <div className="sticky top-0 bg-white w-full z-10 shadow-[0px_4px_8px_#00000029] pb-6">
                <div className="p-4 flex items-center justify-between">
                    <button onClick={() => router.back()}>
                        <img src="/images/Back_Arrow_Icon.svg" alt="Back" />
                    </button>
                    <h1 className="app-title">Gente</h1>
                    <div className="w-6">
                    </div>
                </div>
                <div className="relative ">
                    <input
                        type="text"
                        placeholder="Buscar a algien"
                        className="absolute left-1/2 z-30 -translate-x-1/2  w-11/12 px-4 py-3 rounded-full border border-gray-300 bg-white shadow-md focus:outline-none"
                    />
                </div>
            </div>
            <div className="my-10 px-4 w-full mx-auto grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-4 gap-3">
                {friends.map((friend) => (
                    <div key={friend.id} className="aspect-square relative">
                        <img
                            src={friend.img}
                            alt="Friend"
                            className="w-full h-full rounded-full object-cover border border-white"
                        />
                        {friend.online && (
                            <span className="absolute top-2 right-2 w-4 h-4 bg-cyan border-2 rounded-full border-white"></span>
                        )}
                    </div>
                ))}
            </div>
        </div >
    );
}