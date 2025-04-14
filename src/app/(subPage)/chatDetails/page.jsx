"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SendTokenCard from "../../../components/SendTokenCard";

export default function TokenDetailsCard() {
    const router = useRouter();
    const messages = [
        { id: 1, type: 'sender', text: '¡Hola! ¿Te envío mi dirección ahora?', time: '2025-04-13T17:50' },
        { id: 2, type: 'receiver', text: '¡OK!', time: '2025-04-13T17:50' },
        { id: 3, type: 'receiver', text: 'Lo enviaré en 3 días.', time: '2025-04-13T17:51' },
        { id: 4, type: 'sender', text: 'Perfecto, gracias', time: '2025-04-12T17:45' },
        { id: 5, type: 'receiver', text: 'Nada', time: '2025-04-12T17:52' },
        { id: 1, type: 'sender', text: '¡Hola! ¿Te envío mi dirección ahora?', time: '2025-04-13T17:50' },
        { id: 2, type: 'receiver', text: '¡OK!', time: '2025-04-13T17:50' },
        { id: 3, type: 'receiver', text: 'Lo enviaré en 3 días.', time: '2025-04-13T17:51' },
        { id: 4, type: 'sender', text: 'Perfecto, gracias', time: '2025-04-12T17:45' },
        { id: 5, type: 'receiver', text: 'Nada', time: '2025-04-12T17:52' },
        { id: 1, type: 'sender', text: '¡Hola! ¿Te envío mi dirección ahora?', time: '2025-04-13T17:50' },
        { id: 2, type: 'receiver', text: '¡OK!', time: '2025-04-13T17:50' },
        { id: 3, type: 'receiver', text: 'Lo enviaré en 3 días.', time: '2025-04-13T17:51' },
        { id: 4, type: 'sender', text: 'Perfecto, gracias', time: '2025-04-12T17:45' },
        { id: 5, type: 'receiver', text: 'Nada', time: '2025-04-12T17:52' },
    ];

    const chatContainerRef = useRef(null); // Ref to the chat container

    // Function to extract the date part (YYYY-MM-DD)
    const getDateString = (dateTime) => {
        const date = new Date(dateTime);
        return date.toISOString().split('T')[0]; // Return YYYY-MM-DD
    };

    // Scroll to bottom when messages change
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);
    return (
        <div className="flex flex-col h-screen">
            <div className="sticky top-0 bg-white w-full z-10  flex items-center space-x-3 p-4 mb-4 shadow-[0px_4px_8px_#00000029]">
                <button>  <img src="/images/Back_Arrow_Icon.svg" alt="Back" className="w-7 h-7" /></button>
                <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg" alt="User" className="w-10 h-10 rounded-full" />
                <div>
                    <p className="font-bold text-black">[User]</p>
                    <p className="text-sm text-gray-500">2 FT • <em>Principiante</em></p>
                </div>
            </div>

            <div ref={chatContainerRef} className="flex-grow overflow-y-auto px-4 py-2">
                <div className="space-y-2">
                    {messages.map((msg, index) => {
                        const previousMessage = messages[index - 1];
                        const isNewDate = previousMessage ? getDateString(previousMessage.time) !== getDateString(msg.time) : true;

                        return (
                            <React.Fragment key={msg.id}>
                                {isNewDate && (
                                    <div className="flex justify-center mb-2">
                                        <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                                            {new Date(msg.time).toLocaleDateString('es-ES', { weekday: 'long' })}
                                        </span>
                                    </div>
                                )}

                                {/* Chat Bubble */}
                                <div className={msg.type === 'sender' ? 'flex justify-end' : 'flex items-start'}>
                                    <div className={`text-sm px-4 py-2 rounded-2xl max-w-[70%] ${msg.type === 'sender'
                                        ? 'bg-black text-white rounded-br-none'
                                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>

                                {/* Time of message */}
                                <div className={msg.type === 'sender' ? 'flex justify-end' : 'flex justify-start'}>
                                    <span className="text-[10px] text-gray-500 pr-2">
                                        {`Leído ${new Date(msg.time).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`}
                                    </span>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

            {/* Address Card
            <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <p className="font-semibold text-black">Sarah Stewart</p>
                <p className="text-sm text-gray-700">123 Paseo de Calle, Madrid, 12345</p>
                <p className="text-pink-500 text-sm underline cursor-pointer mt-1">Editar dirección</p>
                <div className="flex justify-end mt-2">
                    <button className="text-pink-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform rotate-45" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                    </button>
                </div>
            </div>

            
            <div className="flex justify-center mb-4">
                <button className="main-button">Cerrar trato</button>
            </div>

            <div className="flex justify-end">
                <button className="text-pink-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 transform rotate-45" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                </button>
            </div> */}
            <div className="bg-white space-y-4">
                {/* Address Card */}
                <div className="bg-purple-100 p-4 rounded-lg">
                    <p className="font-semibold text-black">Sarah Stewart</p>
                    <p className="text-sm text-gray-700">123 Paseo de Calle, Madrid, 12345</p>
                    <p className="text-pink-500 text-sm underline cursor-pointer mt-1">Editar dirección</p>
                    <div className="flex justify-end mt-2">
                        <button className="text-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25.041" height="23.954" viewBox="0 0 25.041 23.954">
                                <path id="Send_Message_Icon" d="M3.4,20.4l17.45-7.48a1,1,0,0,0,0-1.84L3.4,3.6a.993.993,0,0,0-1.39.91L2,9.12a.994.994,0,0,0,.87.99L17,12,2.87,13.88a1.012,1.012,0,0,0-.87,1l.01,4.61A.993.993,0,0,0,3.4,20.4Z" transform="matrix(0.891, -0.454, 0.454, 0.891, -3.378, 6.609)" fill="#ff00f2" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Close Deal Button */}
                <div className="flex justify-center">
                    <button className="main-button">Cerrar trato</button>
                </div>


                <div className="w-full bottom-0 z-10 bg-white flex  py-3 px-3 relative" style={{ boxShadow: "0pt -1pt 4pt #00000029" }}>
                    <input
                        type="text"
                        placeholder="Respondiendo a iamsarah"
                        className="pl-6 pr-16 placeholder:text-primary-black placeholder:text-opacity-50 placeholder:font-normal border-2 border-[#C0BDC8] rounded-3xl h-12 w-full focus:outline focus:outline-light-blue"
                    />
                    <div className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer">
                        <button className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25.041" height="23.954" viewBox="0 0 25.041 23.954">
                                <path id="Send_Message_Icon" d="M3.4,20.4l17.45-7.48a1,1,0,0,0,0-1.84L3.4,3.6a.993.993,0,0,0-1.39.91L2,9.12a.994.994,0,0,0,.87.99L17,12,2.87,13.88a1.012,1.012,0,0,0-.87,1l.01,4.61A.993.993,0,0,0,3.4,20.4Z" transform="matrix(0.891, -0.454, 0.454, 0.891, -3.378, 6.609)" fill="#ff00f2" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>

    );
}
