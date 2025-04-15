"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Drawer({ setIsDrawerOpen }) {
    const router = useRouter();

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div
                initial={{ x: "0%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "0%", opacity: 0 }}

                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-black w-full max-w-[393pt] flex flex-col min-h-screen"
            >
                <div className="sticky top-0 w-full z-10 p-4 flex items-center justify-between;">
                    <button onClick={() => setIsDrawerOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20">
                            <path id="Menu_Icon" d="M120-700v-3.333h30V-700Zm0-8.333v-3.333h30v3.333Zm0-8.333V-720h30v3.333Z" transform="translate(-120 720)" fill="white" />
                        </svg>

                    </button>
                    <img src="/images/Logo.png" alt="logo" className="app-logo" />
                    <button onClick={() => router.push("/notification")}><svg xmlns="http://www.w3.org/2000/svg" width="23.667" height="29.584" viewBox="0 0 23.667 29.584">
                        <path id="Notification_Icon" d="M160-854.854v-2.958h2.958v-10.354a8.662,8.662,0,0,1,1.849-5.455,8.532,8.532,0,0,1,4.807-3.125v-1.035a2.14,2.14,0,0,1,.647-1.572,2.14,2.14,0,0,1,1.572-.647,2.14,2.14,0,0,1,1.572.647,2.14,2.14,0,0,1,.647,1.572v1.035a8.531,8.531,0,0,1,4.807,3.125,8.662,8.662,0,0,1,1.849,5.455v10.354h2.958v2.958Zm11.833,4.438a2.849,2.849,0,0,1-2.089-.869,2.849,2.849,0,0,1-.869-2.089h5.917a2.849,2.849,0,0,1-.869,2.089A2.849,2.849,0,0,1,171.833-850.416Z" transform="translate(-160 880)" fill="white" />
                    </svg> </button>
                </div>

                <ul className="text-white font-bold text-center space-y-2 my-4 text-2xl">
                    <Link href={"/chat"}> <li>chat</li> </Link>
                    <Link href={"#"}><li>ayuda y soprte</li></Link>
                    <Link href={"#"}><li>reportar un problema</li></Link>
                    <Link href={"#"}><li>privacidad</li></Link>
                </ul>
                <div className="text-magenta text-2xl font-semibold text-center mt-auto mb-10 cursor-pointer">cerrar sesión</div>
            </motion.div>
        </div >
    );
}
