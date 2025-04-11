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
            <div className="app-header1 pb-6">
                <div className="app-header-inner1">
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
                        className="search-input"
                    />
                </div>
            </div>
            <div className="friends-grid">
                {friends.map((friend) => (
                    <div key={friend.id} className="friend-avatar-wrapper">
                        <img
                            src={friend.img}
                            alt="Friend"
                            className="friend-avatar-img "
                        />
                        {friend.online && (
                            <span className="friend-online-indicator"></span>
                        )}
                    </div>
                ))}
            </div>
        </div >
    );
}