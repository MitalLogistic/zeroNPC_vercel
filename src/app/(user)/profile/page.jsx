"use client";
import BottomNavbar from "@/components/BottomNavbar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("general");
    return (
        <div className="">
            {/* Header */}
            <div className="app-header">
                <button>
                    <img src="/images/menu_icon.svg" alt="menu" />
                </button>
                <img src="/images/logo_dark.png" alt="logo" className="app-logo" />
                <button onClick={() => router.push("/notification")}><img src="/images/notification_icon.svg" alt="Notification" /> </button>
            </div>

            {/* Profile Details */}
            <div className="p-4 flex flex-col gap-4 items-center justify-center">
                <div className="profile-container">
                    <img src="/images/profile.jpg" alt="profile" className="object-cover" />
                    <span className="profile-online-dot"></span>
                </div>
                <h2 className="profile-username">iamsarah</h2>
                <p className="profile-address">12FT. Navata</p>
            </div>

            {/* Tabs */}
            <div className="tabs-container">
                <button
                    className={`tab-button ${activeTab === "general" ? "active" : ""}`}
                    onClick={() => setActiveTab("general")}
                >
                    General
                </button>

                <button
                    className={`tab-button ${activeTab === "publicaciones" ? "active" : ""}`}
                    onClick={() => setActiveTab("publicaciones")}
                >Publicaciones</button>
            </div>

            {activeTab === "general" && (
                <div className="token-status-container">
                    {/* Token Stats */}
                    <div className="token-grid">
                        <div className="token-card">
                            <img src="/images/send_token.svg" alt="Tokens Sent" />
                            <p>18</p>
                            <span>Tokens enviados</span>
                        </div>
                        <div className="token-card">
                            <img src="/images/receive_token.svg" alt="Tokens Received" />
                            <p>21</p>
                            <span>Tokens recibidos</span>
                        </div>
                    </div>

                    <div className="friend-container" onClick={() => router.push("/friends")}>
                        <div className="friend-list">
                            <div className="friend-images">
                                <img src="/images/profile.jpg" alt="Friend 1" />
                                <img src="/images/profile.jpg" alt="Friend 2" />
                                <img src="/images/profile.jpg" alt="Friend 3" />
                            </div>
                            <p className="friend-count">19 <span>Amigos</span></p>
                        </div>
                        <button><img src="/images/arrow_right.svg" alt="arrow_right" className="w-[10px]" /></button>
                    </div>

                    <h3 className="wardrobe-title ">Armario</h3>
                    <div className="wardrobe-container" onClick={() => router.push("/wardrobe")}>
                        <p className="wardrobe-text">5 Prendas</p>
                        <div className="flex justify-between">
                            <div className="wardrobe-grid">
                                <div className="wardrobe-item">
                                    <div className="shadow-md">
                                        <img
                                            src="/images/White_Tee@3x.png"
                                            alt="Camiseta Ghost"
                                        // className="w-full max-w-[100pt] xs:h-[100pt] h-[70pt] object-cover"
                                        />
                                    </div>
                                    <p> Camiseta <br /><span>Ghost</span>
                                    </p>
                                </div>
                                <div className="wardrobe-item">
                                    <div className="shadow-md">
                                        <img
                                            src="/images/White_Tee@3x.png"
                                            alt="Camiseta Demonio"
                                        // className="w-full max-w-[100pt] xs:h-[100pt] h-[70pt] object-cover"
                                        />
                                    </div>
                                    <p>Camiseta <br /><span>Demonio</span>
                                    </p>
                                </div>
                                <div className="wardrobe-item">
                                    <div className="shadow-md">
                                        <img
                                            src="/images/White_Tee@3x.png"
                                            alt="Bolsa ZNPC"
                                        // className="w-full max-w-[100pt] xs:h-[100pt] h-[70pt] object-cover"
                                        />
                                    </div>
                                    <p>Bolsa <br /><span>ZNPC</span>
                                    </p>
                                </div>
                            </div>
                            <button className="arrow-button"><img src="/images/arrow_right.svg" alt="arrow_right" className="w-[10px]" /></button>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === "publicaciones" && (
                <div className="token-status-container">
                    <div className="publications-container">
                        <div className="publications-profile ">
                            <img src="/images/White_Tee.png" alt="User Avatar" className="publications-avatar" />
                            <div>
                                <p className="publications-info">iamsarah <span className="publications-time">2 days ago</span></p>
                                <p className="publications-role"> • Novata</p>
                            </div>
                        </div>
                        <p className="publications-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada euismod finibus. Nullam ex nibh, tincidunt eget urna eu, tempus varius nunc. Nunc congue neque nunc, id mattis diam tincidunt vel. Praesent et libero at metus bibendum tincidunt. Proin consequat augue eget tempus faucibus. Aenean vitae neque sit amet eros varius finibus. Nam eu magna posuere, molestie risus id, fringilla diam. Vivamus viverra, massa a convallis suscipit, arcu nisl laoreet mi, vel accumsan orci quam et augue. Suspendisse nisl sem, congue non bibendum id, egestas efficitur nulla. Sed porta convallis justo ac convallis. Curabitur posuere nisi varius fringilla ultricies. Vivamus posuere eu justo ut consequat. Nunc euismod ligula quis metus facilisis hendrerit.
                        </p>
                        <div className="publications-actions">
                            <button className="publications-action-button">
                                <img src="/images/unlike_icon.svg" alt="like_icon" /> <span>12</span>
                            </button>
                            <button className="publications-action-button">
                                <img src="/images/comment_icon.svg" alt="like_icon" /> <span>12</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <BottomNavbar />
        </div>
    );
}