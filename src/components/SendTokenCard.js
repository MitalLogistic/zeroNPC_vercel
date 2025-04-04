"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import FriendProfileList from "./FriendList";

export default function SendTokenCard({ setIsOpenSendModel }) {
    const router = useRouter();
    const [isOpenFriendModel, setIsOpenFriendModel] = useState(false);
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* <div className="bg-white w-full max-w-[393pt] flex flex-col min-h-screen"> */}
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white w-full max-w-[393pt] flex flex-col min-h-screen"
            >
                <div className="app-header">
                    <button onClick={() => setIsOpenSendModel(false)}>
                        <img src="/images/Back_Arrow_Icon.svg" alt="Back" />
                    </button>
                    <h1 className="app-title">Enviar</h1>
                    <span className="w-[30px]" />
                </div>

                <div className="px-4">
                    <div className="bg-light-gray bg-opacity-40 p-6 rounded-lg mt-6 text-center">
                        <div className="flex justify-center space-x-2">
                            <button className=" opacity-40"><Image src="/images/Send_token.svg" alt="Token" width={40} height={40} /></button>
                            <button className=" opacity-40"><Image src="/images/Send_token.svg" alt="Token" width={40} height={40} /></button>
                        </div>
                        <p className="mt-2 font-bold text-black">0 token(s) seleccionados</p>
                    </div>

                    {/* Select Friend */}
                    <div className="bg-light-gray bg-opacity-40 p-4 rounded-lg mt-4 flex items-center justify-between cursor-pointer" onClick={() => setIsOpenFriendModel(true)}>
                        <div className="flex items-center">
                            <span className="flex items-center bg-gray-200 rounded-full p-2">
                                <svg viewBox="0.8713692946058091 9.048 11.792531120331951 12.006" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                                    <text font-weight="500" fontFamily="Montserrat-Medium, Montserrat" fontSize="24" transform="translate(0 23)" data-name="+" id="_"><tspan y="0" x="0">+</tspan></text>
                                </svg>
                            </span>
                            <p className="ml-3 text-black">Elige un amigo</p>
                        </div>
                        <button><img src="/images/arrow_right.svg" alt="arrow_right" className="w-[10px]" /></button>
                    </div>

                    {isOpenFriendModel && (
                        <FriendProfileList setIsOpenFriendModel={setIsOpenFriendModel} />
                    )}

                    {/* Message Input */}
                    <textarea
                        className="bg-light-gray bg-opacity-40 p-4 rounded-lg mt-4 w-full h-40 resize-none focus:outline-none"
                        placeholder="Escribe un mensaje"
                        maxLength={140}
                    ></textarea>
                    <p className="text-right text-gray-400 text-sm">0/140</p>
                </div>

                <div className="mb-10 px-4">
                    <button className="main-button">Enviar</button>
                </div>
            </motion.div>
        </div >
    );
}
