"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Notification = () => {

    const notifications = [
        { id: 1, user: "Juan Pérez", message: "Has enviado un token a", time: "Hoy, 22:35", icon: "/images/send_token.svg" },
        { id: 2, user: "María López", message: "[User] te ha enviado un token", time: "Ayer, 10:04", icon: "/images/receive_token.svg" },
        { id: 3, user: "Carlos Mendoza", message: "Has rechazado un token de [User]", time: "Lunes, 17:51", icon: "/images/rejected_icon.svg" },
        { id: 4, user: "Ana Rodríguez", message: "Has aceptado un token de [User]", time: "Lunes, 17:51", icon: "/images/accepted_icon.svg" },
        { id: 5, user: "Luis Gómez", message: "Has recibido un mensaje de [usuario]", time: "Lunes, 17:50", icon: "/images/accepted_icon.svg" },
        { id: 6, user: "Elena Ruiz", message: "[User] quiere enviarte un efhef ehfkeufdj fuheriu token", time: "Lunes, 17:45", icon: "/images/send_token.svg" },
        { id: 7, user: "Pedro Silva", message: "[User] ha rechazado un token tuyo", time: "Lunes, 17:51", icon: "/images/rejected_icon.svg" },
    ];

    const router = useRouter();
    return (
        <div>
            <div className="sticky top-0 bg-white w-full z-10 py-4 flex items-center">
                <button onClick={() => router.back()}>
                    <img src="/images/Back_Arrow_Icon.svg" alt="Back" />
                </button>
                <h1 className="mx-auto text-3xl font-bold">Notificaciones</h1>
            </div>
            {notifications.map((notif) => (
                <div key={notif.id} className="flex justify-between items-center p-3 border-b border-gray-300">
                    <div className="flex items-center gap-4">
                        <img src={notif.icon} alt="icon" className="w-8 h-8" />
                        <p className="text-primary-black text-[14pt] font-normal line-clamp-2">{notif.message}</p>
                    </div>
                    <span className="text-primary-gray text-[12pt] font-normal">{notif.time}</span>
                </div>
            ))}
        </div>
    );
};

export default Notification;
