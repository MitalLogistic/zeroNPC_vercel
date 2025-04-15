'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from "next/navigation";


const ChatList = () => {
    const router = useRouter();
    const chatList = [
        {
            id: 1,
            username: '[User]',
            profileImage: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg',
            lastMessage: 'Nada',
            time: 'Lunes, 17:50',
        },
        {
            id: 2,
            username: '[User]',
            profileImage: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg',
            lastMessage: 'Nada fvgjb tgjh girgj rgjj igoijg hjt gkg gfj',
            time: 'Lunes, 17:50',
        },
    ];
    return (
        <div>
            <div className="app-header">
                <button onClick={() => router.back()}>
                    <img src="/images/Back_Arrow_Icon.svg" alt="Back" />
                </button>
                <h1 className="app-title">Chat</h1>
                <span className="w-[30px]" />
            </div>
            {/* Chat Items */}

            <ul className="chat-container">
                {chatList && chatList.length > 0 ? (
                    chatList.map((chat, index) => (
                        <li key={chat.id} className="chat-item" onClick={() => router.push("/chatDetails")}>
                            <div className="friend-avatar-wrapper">
                                <img class=" friend-avatar-img" src={chat.profileImage || '/default-avatar.png'} alt={chat.username} />
                            </div>
                            <div className="chat-info">
                                <p className="chat-username ">
                                    {chat.username}
                                </p>
                                <p className="chat-last-message ">
                                    {chat.lastMessage}
                                </p>
                            </div>
                            <div className="chat-time ">
                                {chat.time}
                            </div>

                        </li>
                    ))
                ) : (
                    <p className="no-chats-message ">No chats available</p>
                )}
            </ul>

        </div >
    );
};

export default ChatList;
