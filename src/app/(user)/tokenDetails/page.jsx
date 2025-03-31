"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCard() {
    const router = useRouter();
    return (
        <div className="pb-4">
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
            < div className="my-4" >
                <h2 className="sm:text-4xl text-3xl text-gray-700">Camiseta</h2>
                <p className="sm:text-4xl text-3xl font-bold text-primary-black">Ghost</p>

                {/* Tokens Section */}
                <div className="my-4">
                    <p className="text-base sm:text-xl font-bold text-gray-700">Tokens disponibles</p>
                    <div className="mt-2 flex gap-2 items-center bg-gray-100 p-3 rounded-lg">
                        <Image
                            src="/images/Receive_token .svg" // Replace with actual token icon
                            alt="Token"
                            width={40}
                            height={40}
                        />
                        <Image
                            src="/images/Receive_token .svg"
                            alt="Token"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>

                {/* Button */}
                <button className="main-button">
                    Enviar token
                </button>
            </div >
        </div >
    );
}
