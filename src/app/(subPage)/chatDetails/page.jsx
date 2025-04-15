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
        { id: 6, type: 'sender', text: '¡Hola! ¿Te envío mi dirección ahora?', time: '2025-04-13T17:50' },
        { id: 7, type: 'receiver', text: '¡OK!', time: '2025-04-13T17:50' },
        { id: 8, type: 'receiver', text: 'Lo enviaré en 3 días.', time: '2025-04-13T17:51' },
        { id: 9, type: 'sender', text: 'Perfecto, gracias', time: '2025-04-12T17:45' },
        { id: 10, type: 'receiver', text: 'Nada', time: '2025-04-12T17:52' },
        { id: 11, type: 'sender', text: '¡Hola! ¿Te envío mi dirección ahora?', time: '2025-04-13T17:50' },
        { id: 12, type: 'receiver', text: '¡OK!', time: '2025-04-13T17:50' },
        { id: 13, type: 'receiver', text: 'Lo enviaré en 3 días.', time: '2025-04-13T17:51' },
        { id: 14, type: 'sender', text: 'Perfecto, gracias', time: '2025-04-12T17:45' },
        { id: 15, type: 'receiver', text: 'Nada', time: '2025-04-12T17:52' },
    ];

    const chatContainerRef = useRef(null); // Ref to the chat container
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    // Function to extract the date part (YYYY-MM-DD)
    const getDateString = (dateTime) => {
        const date = new Date(dateTime);
        return date.toISOString().split('T')[0]; // Return YYYY-MM-DD
    };
    return (
        <div className="chat-wrapper">
            <div className="chat-header">
                <button onClick={() => router.back()}>  <img src="/images/Back_Arrow_Icon.svg" alt="Back" className="w-7 h-7" /></button>
                <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg" alt="User" className="chat-avatar" />
                <div>
                    <p className="chat-user-name">[User]</p>
                    <p className="chat-user-meta">2 FT • <em>Principiante</em></p>
                </div>
            </div>

            <div ref={chatContainerRef} className="chat-body">
                <div className="space-y-2">
                    {messages.map((msg, index) => {
                        const previousMessage = messages[index - 1];
                        const isNewDate = previousMessage ? getDateString(previousMessage.time) !== getDateString(msg.time) : true;

                        return (
                            <React.Fragment key={msg.id}>
                                {isNewDate && (
                                    <div className="chat-date">
                                        <span className="chat-date-label">
                                            {new Date(msg.time).toLocaleDateString('es-ES', { weekday: 'long' })}
                                        </span>
                                    </div>
                                )}

                                {/* Chat Bubble */}
                                <div className={msg.type === 'sender' ? 'chat-bubble-wrapper-sender' : 'chat-bubble-wrapper-receiver'}>
                                    <div className={`chat-bubble ${msg.type === 'sender'
                                        ? 'chat-sender'
                                        : 'chat-receiver'
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>

                                {/* Time of message */}
                                <div className={msg.type === 'sender' ? 'chat-time-sender' : 'chat-time-receiver'}>
                                    <span className="chat-time-text">
                                        {`Leído ${new Date(msg.time).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`}
                                    </span>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
            <div className="chat-address-wrapper">
                {/* Address Card */}
                <div className="chat-address-card">
                    <p className="chat-address-name">Sarah Stewart</p>
                    <p className="chat-address-detail">123 Paseo de Calle, Madrid, 12345</p>
                    <p className="chat-address-edit">Editar dirección</p>
                    <div className="chat-address-icon-wrapper">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25.041" height="23.954" viewBox="0 0 25.041 23.954">
                                <path id="Send_Message_Icon" d="M3.4,20.4l17.45-7.48a1,1,0,0,0,0-1.84L3.4,3.6a.993.993,0,0,0-1.39.91L2,9.12a.994.994,0,0,0,.87.99L17,12,2.87,13.88a1.012,1.012,0,0,0-.87,1l.01,4.61A.993.993,0,0,0,3.4,20.4Z" transform="matrix(0.891, -0.454, 0.454, 0.891, -3.378, 6.609)" fill="#ff00f2" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="px-4">
                    <button className="main-button">Cerrar trato</button>
                </div>

                <div className="chat-input-wrapper">
                    <input
                        type="text"
                        placeholder="Respondiendo a iamsarah"
                        className="chat-input"
                    />
                    <div className="chat-send-btn">
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
