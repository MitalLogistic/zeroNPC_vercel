'use client';
import Image from 'next/image';
import React from 'react';


const ChatList = () => {
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
                <h1 className="app-title">Chat</h1>
            </div>

            {/* Chat Items */}
            <div className="px-4 space-y-4 pb-28">
                <ul className="divide-y divide-gray-200 ">
                    {chatList && chatList.length > 0 ? (
                        chatList.map((chat, index) => (
                            <li key={chat.id} className="py-3">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                    <div className="shrink-0">
                                        <img class="w-11 h-11 rounded-full" src={chat.profileImage || '/default-avatar.png'} alt={chat.username} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                            {chat.username}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate">
                                            {chat.lastMessage}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-xs text-gray-500">
                                        {chat.time}
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No chats available</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ChatList;
