"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCard() {
    const router = useRouter();
    return (
        <div className="py-4">
            {/* Image Section */}
            <div className="relative rounded-xl overflow-hidden">
                <Image
                    src="/images/White_Tee@3x.png" // Replace with actual image path
                    alt="Camiseta Ghost"
                    width={350}
                    height={250}
                    className="w-full h-auto object-cover rounded-lg"
                />
                <button className="close-button" onClick={() => router.push("/login")}>
                    <img src="/images/close_icon.svg" alt="close" />
                </button>
            </div >

            {/* Content */}
            < div className="mt-4" >
                <h2 className="text-lg text-gray-700">Camiseta</h2>
                <p className="text-2xl font-bold text-black">Ghost</p>

                {/* Tokens Section */}
                <div className="mt-4">
                    <p className="text-sm font-bold text-gray-700">Tokens disponibles</p>
                    <div className="mt-2 flex gap-2 items-center bg-gray-100 p-3 rounded-lg">
                        <Image
                            src="/images/token-icon.png" // Replace with actual token icon
                            alt="Token"
                            width={30}
                            height={30}
                        />
                        <Image
                            src="/images/token-icon.png"
                            alt="Token"
                            width={30}
                            height={30}
                        />
                    </div>
                </div>

                {/* Button */}
                <button className="mt-5 w-full bg-yellow-400 text-black font-semibold text-lg py-3 rounded-full shadow-md">
                    Enviar token
                </button>
            </div >
        </div >
    );
}
