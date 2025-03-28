"use client";
import BottomNavbar from "@/components/BottomNavbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Wardrobe() {
    const router = useRouter();
    const items = [
        { name: "Camiseta", type: "Ghost", image: "/images/White_Tee@3x.png" },
        { name: "Camiseta", type: "Demonio", image: "/images/White_Tee@3x.png" },
        { name: "Bolsa", type: "ZNPC", image: "/images/White_Tee@3x.png" },
        { name: "Bolsa", type: "ZNPC", image: "/images/White_Tee@3x.png" },
        { name: "Camiseta", type: "Demonio", image: "/images/White_Tee@3x.png" },
        { name: "Bolsa", type: "ZNPC", image: "/images/White_Tee@3x.png" },
        { name: "Bolsa", type: "ZNPC", image: "/images/White_Tee@3x.png" },
        { name: "Bolsa", type: "ZNPC", image: "/images/White_Tee@3x.png" },
        { name: "Bolsa", type: "ZNPC", image: "/images/White_Tee@3x.png" },
        { name: "Camiseta", type: "Demonio", image: "/images/White_Tee@3x.png" },
    ];

    return (
        <div>
            {/* Header */}
            <div className="sticky top-0 bg-white w-full z-10 py-4 flex items-center">
                <button onClick={() => router.back()}>
                    <img src="/images/Back_Arrow_Icon.svg" alt="Back" />
                </button>
                <h1 className="mx-auto text-3xl font-bold">Armario</h1>
            </div>

            {/* Grid Items */}
            <div className="wardrobe-items">
                {items.map((item, index) => (
                    <div key={index} >
                        <Image src={item.image} width={150} height={150} alt={item.type} className="wardrobe-item-card" />
                        <p className="wardabe-item-name">{item.name}</p>
                        <span className="font-bold">{item.type}</span>
                    </div>
                ))}
            </div>
            <div id="popup-modal" tabIndex={-1} className="popup-modal">
                <div className="popup-content">
                    <h1 className="popup-title">¡Vas a tope!</h1>
                    <p className="popup-text">Has ganado las siguientes recompensas</p>

                    <div className="reward-container">
                        <div className="reward-item">
                            <img src="/images/bronce.svg" alt="bronce" />
                            <p className="reward-text">Insignia de bronce</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/token.svg" alt="token" />
                        </div>
                    </div>
                    <button className="main-button">Escanear otra</button>
                    <button className="go-to-wardrobe">Ir a mi armario</button>
                </div>
            </div>
            <BottomNavbar />
        </div>
    );
}

{/* <div
                id="popup-modal"
                tabIndex={-1}
                className=" hidden fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50"
            >
                <div className="relative bg-white px-7 text-center py-10 shadow-lg w-full max-w-[332pt]">
                    <h1 className="text-[30pt] font-bold mb-5">¡Vas a tope!</h1>
                    <p className="text-xl leading-6 text-primary-gray font-normal mb-8">Has ganado las siguientes recompensas</p>

                    <div className="flex justify-center gap-6 mb-9">
                        <div className="flex flex-col items-center max-w-16">
                            <img src="/images/bronce.svg" alt="bronce" />
                            <p className="text-[11pt] text-black leading-4 mt-1">Insignia de bronce</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/images/token.svg" alt="token" />
                        </div>
                    </div>
                    <button className="main-button">Escanear otra</button>
                    <button className="text-magenta font-semibold text-xl leading-6 mt-6">Ir a mi armario</button>
                </div>
            </div> */}