"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import SendTokenCard from "./SendTokenCard";

export default function TokenDetailsCard({ setIsOpen }) {
    const router = useRouter();
    const [isOpenSendModel, setIsOpenSendModel] = useState(false);

    const handleOpenSendModal = () => {
        setIsOpenSendModel(true); // Open send modal
        // setIsOpen(false); // Close current modal
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div
                initial={{ x: "100%", opacity: 0 }}  // Start from the right (off-screen)
                animate={{ x: 0, opacity: 1 }}  // Move to center
                exit={{ x: "100%", opacity: 0 }}  // Exit back to the right
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white py-6 px-4 w-full max-w-[393pt] h-screen"
            >
                {/* <div className="pb-4"> */}
                {/* Image Section */}
                <div className="relative rounded-xl overflow-hidden">
                    <Image
                        src="/images/White_Tee@3x.png" // Replace with actual image path
                        alt="Camiseta Ghost"
                        width={350}
                        height={250}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                    <button className="close-button" onClick={() => setIsOpen(false)}>
                        <img src="/images/close_icon.svg" alt="close" />
                    </button>
                </div >

                {/* Content */}
                < div className="my-4" >
                    <h2 className="sm:text-3xl text-2xl text-gray-700">Camiseta</h2>
                    <p className="sm:text-3xl text-2xl font-bold text-primary-black">Ghost</p>

                    {/* Tokens Section */}
                    <div className="my-4">
                        <p className="text-base sm:text-xl font-bold text-gray-700">Tokens disponibles</p>
                        <div className="mt-2 flex gap-2 items-center bg-light-gray bg-opacity-40 p-3 rounded-lg">
                            <Image src="/images/Receive_token.svg" alt="Token" width={40} height={40} />
                            <Image src="/images/Receive_token.svg" alt="Token" width={40} height={40} />
                        </div>
                    </div>

                    {/* Button */}
                    <button className="main-button" onClick={handleOpenSendModal}>
                        Enviar token
                    </button>
                </div>
                {isOpenSendModel && (
                    <SendTokenCard setIsOpenSendModel={setIsOpenSendModel} />
                )}
            </motion.div>
        </div >
    );
}
