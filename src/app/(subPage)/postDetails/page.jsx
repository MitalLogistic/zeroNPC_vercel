"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CommunityProfileDetails({ }) {
    const router = useRouter();
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
    return (
        <div>
            <div className="app-header1">
                <div className="app-header-inner1">
                    <div className="inline-center-gap">
                        <img src="/images/profile.jpg" alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <p className="font-semibold text-gray-800">iamsarah</p>
                            <div className="flex items-center text-xs text-gray-400 space-x-1">
                                <span className="text-orange-500 font-bold">Novata</span>
                                <span>•</span>
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <button onClick={() => router.back()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g id="Close_Icon" transform="translate(9245 2840)">
                                <path id="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24_1_" data-name="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 (1)" d="M87.68-862,92-866.32,96.32-862,98-863.68,93.68-868,98-872.32,96.32-874,92-869.68,87.68-874,86-872.32,90.32-868,86-863.68ZM92-856a11.685,11.685,0,0,1-4.68-.945,12.118,12.118,0,0,1-3.81-2.565,12.119,12.119,0,0,1-2.565-3.81A11.685,11.685,0,0,1,80-868a11.685,11.685,0,0,1,.945-4.68,12.119,12.119,0,0,1,2.565-3.81,12.118,12.118,0,0,1,3.81-2.565A11.685,11.685,0,0,1,92-880a11.685,11.685,0,0,1,4.68.945,12.118,12.118,0,0,1,3.81,2.565,12.119,12.119,0,0,1,2.565,3.81A11.685,11.685,0,0,1,104-868a11.685,11.685,0,0,1-.945,4.68,12.119,12.119,0,0,1-2.565,3.81,12.118,12.118,0,0,1-3.81,2.565A11.685,11.685,0,0,1,92-856Z" transform="translate(-9325 -1960)" fill="#78757E" opacity="0.38" />
                                <path id="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24_1_2" data-name="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 (1)" d="M281.723-668.306l4.43-4.21,4.43,4.21,1.723-1.637-4.43-4.21,4.43-4.21L290.583-680l-4.43,4.21-4.43-4.21L280-678.363l4.43,4.21-4.43,4.21Z" transform="translate(-9519.153 -2153.847)" fill="#1c1c1c" />
                            </g>
                        </svg></button>
                        <button className="text-yellow-400 text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 17.1">
                            <path id="Favourites_Icon_Off" d="M86.165-866.657,89-868.367l2.835,1.732-.743-3.24,2.5-2.16-3.285-.293L89-875.388l-1.305,3.037-3.285.293,2.5,2.182ZM83.443-862.9l1.462-6.323L80-873.475l6.48-.562L89-880l2.52,5.962,6.48.563-4.9,4.253,1.462,6.323L89-866.253ZM89-870.775Z" transform="translate(-80 880)" fill="#78757e" />
                        </svg></button>
                    </div>
                </div>
            </div>
            <div className="m-4 ">
                <div className="publications-container" onClick={() => router.push("/postDetails")}>
                    <p className="publications-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada euismod finibus. Nullam ex nibh, tincidunt eget urna eu, tempus varius nunc. Nunc congue neque nunc, id mattis diam tincidunt vel. Praesent et libero at metus bibendum tincidunt. Proin consequat augue eget tempus faucibus. Aenean vitae neque sit amet eros varius finibus. Nam eu magna posuere, molestie risus id, fringilla diam. Vivamus viverra, massa a convallis suscipit, arcu nisl laoreet mi, vel accumsan orci quam et augue. Suspendisse nisl sem, congue non bibendum id, egestas efficitur nulla. Sed porta convallis justo ac convallis. Curabitur posuere nisi varius fringilla ultricies. Vivamus posuere eu justo ut consequat. Nunc euismod ligula quis metus facilisis hendrerit.
                    </p>
                    <div className="p-3">
                        <div className="publications-actions">
                            <button className="publications-action-button">
                                <img src="/images/unlike_icon.svg" alt="like_icon" /> <span>12</span>
                            </button>
                            <button className="publications-action-button">
                                <img src="/images/comment_icon.svg" alt="like_icon" /> <span>12</span>
                            </button>
                        </div>
                    </div>
                    <div className="publications-button">
                        <button>
                            <img src="/images/unlike_icon.svg" alt="like_icon" className="w-5 h-5" /> <span>Me Gusta</span>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17.699 17.699"><g id="Comment_Icon" transform="translate(-78 -615)"><path id="maps_ugc_24dp_5F6368_FILL1_wght400_GRAD0_opsz24" d="M40-862.3l1.643-5.647a8.626,8.626,0,0,1-.6-1.77,8.568,8.568,0,0,1-.2-1.854,8.207,8.207,0,0,1,.664-3.287,8.511,8.511,0,0,1,1.8-2.676,8.511,8.511,0,0,1,2.676-1.8A8.209,8.209,0,0,1,49.271-880a8.209,8.209,0,0,1,3.287.664,8.512,8.512,0,0,1,2.676,1.8,8.511,8.511,0,0,1,1.8,2.676,8.207,8.207,0,0,1,.664,3.287,8.207,8.207,0,0,1-.664,3.287,8.512,8.512,0,0,1-1.8,2.676,8.512,8.512,0,0,1-2.676,1.8,8.209,8.209,0,0,1-3.287.664,8.571,8.571,0,0,1-1.854-.2,8.627,8.627,0,0,1-1.77-.6Z" transform="translate(38 1495)" fill="#C0BDC8" /><g id="Group_28" data-name="Group 28"><circle id="Ellipse_15" data-name="Ellipse 15" cx="1.5" cy="1.5" r="1.5" transform="translate(82 622)" fill="#fff" /><circle id="Ellipse_16" data-name="Ellipse 16" cx="1.5" cy="1.5" r="1.5" transform="translate(86 622)" fill="#fff" /><circle id="Ellipse_17" data-name="Ellipse 17" cx="1.5" cy="1.5" r="1.5" transform="translate(90 622)" fill="#fff" /></g></g></svg><span>Comentar</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-full p-3">
                    <div className="flex justify-between items-start">
                        <div className="flex gap-2">
                            <img src="/images/profile.jpg" alt="avatar" className="w-7 h-7 rounded-full object-cover mt-1" />
                            <div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-semibold text-gray-800">User</span>
                                    <span className="text-xs text-gray-400">2 days ago</span>
                                </div>
                                <p className="text-xs italic text-gray-400 mt-0.5">Principiante</p>
                            </div>
                        </div>
                        <svg id="reply-24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path id="Path_2244" data-name="Path 2244" d="M0,0H24V24H0Z" fill="none" />
                            <path id="Path_2245" data-name="Path 2245" d="M10,9V7.41A1,1,0,0,0,8.29,6.7L3.7,11.29a1,1,0,0,0,0,1.41l4.59,4.59a1,1,0,0,0,1.71-.7V14.9c5,0,8.5,1.6,11,5.1C20,15,17,10,10,9Z" fill="#78757e" />
                        </svg>
                    </div>
                    <p className="text-sm font-medium text-primary-black mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc malesuada euismod finibus. Nullam ex nibh, tincidunt
                        eget urna eu, tempus varius nunc.
                    </p>
                    <div className="bg-gray-100 text-sm text-gray-500 rounded-full text-center py-2 mt-3 cursor-pointer">
                        11 Respuestas
                    </div>
                </div>

            </div>
            <div className="bottombar">
                <div className="w-full bottom-0 z-10 bg-white flex  py-3 px-3 relative" style={{ boxShadow: "0pt -1pt 4pt #00000029" }}>
                    <input
                        type="text"
                        placeholder="Respondiendo a iamsarah"
                        className="pl-6 pr-16 placeholder:text-primary-black placeholder:text-opacity-50 placeholder:font-normal border-2 border-[#C0BDC8] rounded-3xl h-12 w-full focus:outline focus:outline-light-blue"
                    />
                    <div className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer">
                        <button>
                            <svg
                                fill="#313131"
                                height="20px"
                                width="20px"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M256,192c-47.061,0-85.333,38.272-85.333,85.333s38.272,85.333,85.333,85.333s85.333-38.272,85.333-85.333S303.061,192,256,192z" />
                                <path d="M449.515,128h-23.083c-2.624,0-4.885-1.771-5.547-4.309l-11.072-44.416c-5.419-21.547-24.704-36.608-46.912-36.608H149.099c-22.208,0-41.493,15.061-46.933,36.629l-11.051,44.373c-0.661,2.56-2.923,4.331-5.547,4.331H62.485C28.011,128,0,156.011,0,190.464v216.405c0,34.453,28.011,62.464,62.485,62.464h387.029c34.475,0,62.485-28.011,62.485-62.464V190.464C512,156.011,483.989,128,449.515,128z M256,405.333c-70.592,0-128-57.408-128-128c0-70.592,57.408-128,128-128s128,57.408,128,128C384,347.925,326.592,405.333,256,405.333z M426.667,234.667c-11.776,0-21.333-9.557-21.333-21.333S414.891,192,426.667,192S448,201.557,448,213.333S438.443,234.667,426.667,234.667z" />
                            </svg>
                        </button>
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
