"use client";
import BottomNavbar from "@/components/BottomNavbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FriendPage = () => {
    const router = useRouter();

    const friends = [
        { id: 1, img: "/images/friend1.jpg", online: true },
        { id: 2, img: "/images/friend2.jpg", online: false },
        { id: 3, img: "/images/friend3.jpg", online: true },
        { id: 4, img: "/images/friend4.jpg", online: true },
        { id: 5, img: "/images/friend5.jpg", online: false },
        { id: 6, img: "/images/friend6.jpg", online: true },
        { id: 7, img: "/images/friend7.jpg", online: true },
        { id: 8, img: "/images/friend8.jpg", online: true },
    ];
    return (
        <div>
            <div className="sticky top-0 bg-white w-full z-10 py-4 flex items-center">
                <button onClick={() => router.back()}>
                    <img src="/images/Back_Arrow_Icon.svg" alt="Back" />
                </button>
                <h1 className="mx-auto text-3xl font-bold">Amigos</h1>
            </div>
            <div>
                <div className="password-main-div">
                    <input type="text" name="search" placeholder="Buscar" className="relative common-input" />
                    <img src="/images/search_icon.svg" className="password-icon-img pr-2" alt="search_icon" />
                </div>
            </div>
            <div className="flex flex-wrap xs:justify-around my-5 h-full overflow-y-auto gap-3">
                {friends.map((friend) => (
                    <div key={friend.id} className="xs:w-[80pt] xs:h-[80pt] w-[50pt] h-[50pt] flex  relative">
                        <img
                            src={friend.img}
                            alt="Friend"
                            className="w-full h-full rounded-full object-cover border-2 border-gray-400"
                        />
                        {friend.online && (
                            <span className="absolute top-2 right-2 w-4 h-4 bg-cyan border-2 rounded-full border-white"></span>
                        )}
                    </div>
                ))}
            </div>
            <BottomNavbar />
        </div>
    );
};

export default FriendPage;
