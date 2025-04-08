"use client";
import BottomNavbar from "@/components/BottomNavbar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function communityPage() {
    const router = useRouter();
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    return (
        <div>
            <div className="sticky top-0 bg-white w-full z-10 shadow-[0px_4px_8px_#00000029] pb-6">
                <div className="p-4 flex items-center justify-between">
                    <button onClick={() => router.push("/explorePeople")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32.237" height="23.445" viewBox="0 0 32.237 23.445">
                            <path id="People_Icon" d="M40-776.555v-4.1a4.293,4.293,0,0,1,.641-2.29,4.273,4.273,0,0,1,1.7-1.593,21.751,21.751,0,0,1,4.616-1.7,20.16,20.16,0,0,1,4.762-.568,20.16,20.16,0,0,1,4.762.568,21.751,21.751,0,0,1,4.616,1.7,4.273,4.273,0,0,1,1.7,1.593,4.293,4.293,0,0,1,.641,2.29v4.1Zm26.375,0v-4.4a5.9,5.9,0,0,0-.9-3.1,7.917,7.917,0,0,0-2.546-2.546,18.488,18.488,0,0,1,3.517.751,18.333,18.333,0,0,1,3.077,1.3,6.49,6.49,0,0,1,2.015,1.63,3.129,3.129,0,0,1,.7,1.96v4.4ZM51.722-788.278A5.644,5.644,0,0,1,47.583-790a5.644,5.644,0,0,1-1.722-4.139,5.644,5.644,0,0,1,1.722-4.14A5.644,5.644,0,0,1,51.722-800a5.644,5.644,0,0,1,4.139,1.722,5.644,5.644,0,0,1,1.722,4.14A5.644,5.644,0,0,1,55.862-790,5.644,5.644,0,0,1,51.722-788.278Zm14.653-5.861A5.644,5.644,0,0,1,64.654-790a5.644,5.644,0,0,1-4.139,1.722,7.312,7.312,0,0,1-1.026-.092,8.957,8.957,0,0,1-1.026-.2,8.714,8.714,0,0,0,1.52-2.6,8.447,8.447,0,0,0,.531-2.967,8.447,8.447,0,0,0-.531-2.967,8.714,8.714,0,0,0-1.52-2.6,4.455,4.455,0,0,1,1.026-.238A9.624,9.624,0,0,1,60.514-800a5.644,5.644,0,0,1,4.139,1.722A5.644,5.644,0,0,1,66.375-794.139Z" transform="translate(-40 800)" />
                        </svg>
                    </button>
                    <h1 className="app-title">Comunidad</h1>
                    <div className="flex items-center gap-3">
                        {/* <button onClick={() => router.push("/notification")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="56.29 91.06 399.43 398.94"><path fill="#000" d="M71.3456 91.0552C65.5504 91.0552 60.2694 94.3807 57.7653 99.6069C55.2611 104.833 55.9781 111.033 59.6091 115.549L200.493 290.795V450.827C200.493 470 213.977 490 230.611 490H276.7C293.333 490 306.818 470 306.818 450.827V294.365L452.333 115.621C456.002 111.114 456.75 104.898 454.255 99.6487C451.76 94.3997 446.467 91.0552 440.655 91.0552H71.3456Z"></path></svg> </button> */}
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 20 20">
                                <path id="Search_Icon" d="M138.444-820l-7-7a6.623,6.623,0,0,1-1.917,1.056,6.773,6.773,0,0,1-2.306.389,6.972,6.972,0,0,1-5.125-2.1,6.972,6.972,0,0,1-2.1-5.125,6.972,6.972,0,0,1,2.1-5.125,6.972,6.972,0,0,1,5.125-2.1,6.971,6.971,0,0,1,5.125,2.1,6.972,6.972,0,0,1,2.1,5.125,6.772,6.772,0,0,1-.389,2.305A6.62,6.62,0,0,1,133-828.556l7,7Zm-11.222-7.778a4.822,4.822,0,0,0,3.542-1.458,4.822,4.822,0,0,0,1.458-3.542,4.822,4.822,0,0,0-1.458-3.542,4.822,4.822,0,0,0-3.542-1.458,4.822,4.822,0,0,0-3.542,1.458,4.822,4.822,0,0,0-1.458,3.542,4.822,4.822,0,0,0,1.458,3.542A4.822,4.822,0,0,0,127.222-827.778Z" transform="translate(-120 840)" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="relative ">
                    <input
                        type="text"
                        placeholder="¿Sobre qué quieres publicar?"
                        className="absolute left-1/2 z-30 -translate-x-1/2  w-11/12 px-4 py-3 rounded-full border border-gray-300 bg-white shadow-md focus:outline-none"
                    />
                </div>
            </div>
            <div className="pb-28 mt-10 px-4">
                <div className="publications-container" onClick={() => router.push("/postDetails")}>
                    <div className="flex justify-between p-3">
                        <div className="publications-profile ">
                            <img src="/images/profile.jpg" alt="User Avatar" className="publications-avatar" />
                            <div>
                                <p className="publications-info">iamsarah <span className="publications-time">2 days ago</span></p>
                                <p className="publications-role"> • Novata</p>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 17.1">
                            <path id="Favourites_Icon_Off" d="M86.165-866.657,89-868.367l2.835,1.732-.743-3.24,2.5-2.16-3.285-.293L89-875.388l-1.305,3.037-3.285.293,2.5,2.182ZM83.443-862.9l1.462-6.323L80-873.475l6.48-.562L89-880l2.52,5.962,6.48.563-4.9,4.253,1.462,6.323L89-866.253ZM89-870.775Z" transform="translate(-80 880)" fill="#78757e" />
                        </svg>
                    </div>
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
                            <img src="/images/unlike_icon.svg" alt="like_icon" className="w-6 h-6" /> <span>Me Gusta</span>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 17.699 17.699"><g id="Comment_Icon" transform="translate(-78 -615)"><path id="maps_ugc_24dp_5F6368_FILL1_wght400_GRAD0_opsz24" d="M40-862.3l1.643-5.647a8.626,8.626,0,0,1-.6-1.77,8.568,8.568,0,0,1-.2-1.854,8.207,8.207,0,0,1,.664-3.287,8.511,8.511,0,0,1,1.8-2.676,8.511,8.511,0,0,1,2.676-1.8A8.209,8.209,0,0,1,49.271-880a8.209,8.209,0,0,1,3.287.664,8.512,8.512,0,0,1,2.676,1.8,8.511,8.511,0,0,1,1.8,2.676,8.207,8.207,0,0,1,.664,3.287,8.207,8.207,0,0,1-.664,3.287,8.512,8.512,0,0,1-1.8,2.676,8.512,8.512,0,0,1-2.676,1.8,8.209,8.209,0,0,1-3.287.664,8.571,8.571,0,0,1-1.854-.2,8.627,8.627,0,0,1-1.77-.6Z" transform="translate(38 1495)" fill="#C0BDC8" /><g id="Group_28" data-name="Group 28"><circle id="Ellipse_15" data-name="Ellipse 15" cx="1.5" cy="1.5" r="1.5" transform="translate(82 622)" fill="#fff" /><circle id="Ellipse_16" data-name="Ellipse 16" cx="1.5" cy="1.5" r="1.5" transform="translate(86 622)" fill="#fff" /><circle id="Ellipse_17" data-name="Ellipse 17" cx="1.5" cy="1.5" r="1.5" transform="translate(90 622)" fill="#fff" /></g></g></svg><span>Comentar</span>
                        </button>
                    </div>
                </div>
                <div className="publications-container">
                    <div className="flex justify-between p-3">
                        <div className="publications-profile ">
                            <img src="/images/profile.jpg" alt="User Avatar" className="publications-avatar" />
                            <div>
                                <p className="publications-info">User <span className="publications-time">2 days ago</span></p>
                                <p className="publications-role"> • Principiante</p>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 17.1">
                            <path id="Favourites_Icon_Off" d="M86.165-866.657,89-868.367l2.835,1.732-.743-3.24,2.5-2.16-3.285-.293L89-875.388l-1.305,3.037-3.285.293,2.5,2.182ZM83.443-862.9l1.462-6.323L80-873.475l6.48-.562L89-880l2.52,5.962,6.48.563-4.9,4.253,1.462,6.323L89-866.253ZM89-870.775Z" transform="translate(-80 880)" fill="#78757e" />
                        </svg>
                    </div>
                    <p className="publications-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada euismod finibus. Nullam ex nibh, tincidunt eget urna eu, tempus varius nunc.
                    </p>
                    <div className="p-3">
                        <div className="publications-actions">
                            <button className="publications-action-button">
                                <img src="/images/unlike_icon.svg" alt="like_icon" /> <span>0</span>
                            </button>
                            <button className="publications-action-button">
                                <img src="/images/comment_icon.svg" alt="like_icon" /> <span>0</span>
                            </button>
                        </div>
                    </div>
                    <div className="publications-button">
                        <button >
                            <img src="/images/unlike_icon.svg" alt="like_icon" className="w-6 h-6" /> <span>Me Gusta</span>
                        </button>
                        <button >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 17.699 17.699"><g id="Comment_Icon" transform="translate(-78 -615)"><path id="maps_ugc_24dp_5F6368_FILL1_wght400_GRAD0_opsz24" d="M40-862.3l1.643-5.647a8.626,8.626,0,0,1-.6-1.77,8.568,8.568,0,0,1-.2-1.854,8.207,8.207,0,0,1,.664-3.287,8.511,8.511,0,0,1,1.8-2.676,8.511,8.511,0,0,1,2.676-1.8A8.209,8.209,0,0,1,49.271-880a8.209,8.209,0,0,1,3.287.664,8.512,8.512,0,0,1,2.676,1.8,8.511,8.511,0,0,1,1.8,2.676,8.207,8.207,0,0,1,.664,3.287,8.207,8.207,0,0,1-.664,3.287,8.512,8.512,0,0,1-1.8,2.676,8.512,8.512,0,0,1-2.676,1.8,8.209,8.209,0,0,1-3.287.664,8.571,8.571,0,0,1-1.854-.2,8.627,8.627,0,0,1-1.77-.6Z" transform="translate(38 1495)" fill="#C0BDC8" /><g id="Group_28" data-name="Group 28"><circle id="Ellipse_15" data-name="Ellipse 15" cx="1.5" cy="1.5" r="1.5" transform="translate(82 622)" fill="#fff" /><circle id="Ellipse_16" data-name="Ellipse 16" cx="1.5" cy="1.5" r="1.5" transform="translate(86 622)" fill="#fff" /><circle id="Ellipse_17" data-name="Ellipse 17" cx="1.5" cy="1.5" r="1.5" transform="translate(90 622)" fill="#fff" /></g></g></svg><span>Comentar</span>
                        </button>
                    </div>
                </div>
            </div>
            <BottomNavbar />
        </div >
    );
}