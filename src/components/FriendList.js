"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import UserProfile from "./UserProfile";

export default function FriendProfileList({ setIsOpenFriendModel }) {
    const router = useRouter();
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);

    const users = [
        { id: 1, img: "/images/profile.jpg", status: true, count: 4 },
        { id: 2, img: "/images/profile.jpg", status: true, count: 0 },
        { id: 3, img: "/images/profile.jpg", status: false, count: 8 },
        { id: 4, img: "/images/profile.jpg", status: false, count: 0 },
        { id: 5, img: "/images/profile.jpg", status: true, count: 3 },
        { id: 6, img: "/images/profile.jpg", status: false, count: 0 },
        { id: 7, img: "/images/profile.jpg", status: false, count: 1 },
        { id: 8, img: "/images/profile.jpg", status: false, count: 0 },
        { id: 9, img: "/images/profile.jpg", status: false, count: 0 },
        { id: 10, img: "/images/profile.jpg", status: false, count: 0 },
        { id: 11, img: "/images/profile.jpg", status: true, count: 9 },

    ];

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white py-6 px-4 w-full max-w-[393pt] h-full min-h-screen"
            >
                <div className="relative w-full px-4 mb-4">
                    <input
                        type="text"
                        placeholder="Buscar"
                        // value={search}
                        // onChange={(e) => setSearch(e.target.value)}
                        className="pl-6 pr-10 placeholder:text-primary-black placeholder:text-opacity-50 placeholder:font-normal border border-light-gray rounded-3xl h-12 w-full focus:outline focus:outline-light-gray"
                    />
                    <img src="/images/search_icon.svg" className="absolute right-8 top-1/2 transform -translate-y-1/2" alt="search_icon" />
                </div>

                {/* User Grid */}
                <div className="friends-grid">
                    {users.map((user) => (
                        <div key={user.id} className="relative text-center" onClick={() => setIsUserProfileOpen(true)}>
                            {/* Profile Image */}
                            <div className="friend-avatar-wrapper">
                                <img
                                    src={user.img}
                                    alt="User"
                                    className="friend-avatar-img"
                                />
                            </div>

                            {/* Online Status Indicator */}
                            {user.status && (
                                <span className="friend-online-indicator"></span>
                            )}

                            <span className="friend-token-count">
                                {user.count}
                            </span>
                        </div>
                    ))}
                </div>
                {isUserProfileOpen && (<UserProfile setIsUserProfileOpen={setIsUserProfileOpen} setIsOpenFriendModel={setIsOpenFriendModel} />)}
            </motion.div>
        </div >
    );
}
