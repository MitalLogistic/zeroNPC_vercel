"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePost() {
    const router = useRouter();
    const [isOpenConfirmModel, setIsOpenConfirmModel] = useState(false);
    return (
        <div className="flex flex-col min-h-screen">
            <div className="sticky top-0 bg-white w-full z-10 shadow-[0px_4px_8px_#00000029] pb-6">
                <div className="p-4 text-center relative">
                    <h1 className="app-title">Nueva publicación</h1>
                    <button onClick={() => router.back()} className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g id="Close_Icon" transform="translate(9245 2840)">
                            <path id="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24_1_" data-name="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 (1)" d="M87.68-862,92-866.32,96.32-862,98-863.68,93.68-868,98-872.32,96.32-874,92-869.68,87.68-874,86-872.32,90.32-868,86-863.68ZM92-856a11.685,11.685,0,0,1-4.68-.945,12.118,12.118,0,0,1-3.81-2.565,12.119,12.119,0,0,1-2.565-3.81A11.685,11.685,0,0,1,80-868a11.685,11.685,0,0,1,.945-4.68,12.119,12.119,0,0,1,2.565-3.81,12.118,12.118,0,0,1,3.81-2.565A11.685,11.685,0,0,1,92-880a11.685,11.685,0,0,1,4.68.945,12.118,12.118,0,0,1,3.81,2.565,12.119,12.119,0,0,1,2.565,3.81A11.685,11.685,0,0,1,104-868a11.685,11.685,0,0,1-.945,4.68,12.119,12.119,0,0,1-2.565,3.81,12.118,12.118,0,0,1-3.81,2.565A11.685,11.685,0,0,1,92-856Z" transform="translate(-9325 -1960)" fill="#78757E" opacity="0.38" />
                            <path id="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24_1_2" data-name="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 (1)" d="M281.723-668.306l4.43-4.21,4.43,4.21,1.723-1.637-4.43-4.21,4.43-4.21L290.583-680l-4.43,4.21-4.43-4.21L280-678.363l4.43,4.21-4.43,4.21Z" transform="translate(-9519.153 -2153.847)" fill="#1c1c1c" />
                        </g>
                    </svg></button>
                </div>
            </div>
            <div className="px-4 flex-1">
                <div className="relative z-10 pb-5 -mt-7">
                    <textarea
                        rows="7"
                        maxLength="140"
                        className="w-full border-2 border-black rounded-md p-3 text-sm resize-none focus:outline-none "
                        placeholder="¿Sobre qué quieres publicar?"

                    ></textarea>
                    <span className="absolute bottom-1 right-2 text-xs text-gray-400">0/140</span>
                </div>

                <div className="flex items-center gap-3 bg-gray-100 rounded-md p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                        <path id="Add_Photo" d="M122.111-821a2.033,2.033,0,0,1-1.491-.62,2.033,2.033,0,0,1-.62-1.491v-14.778a2.033,2.033,0,0,1,.62-1.491,2.033,2.033,0,0,1,1.491-.62h9.5a4.933,4.933,0,0,0-.792,1.5,5.384,5.384,0,0,0-.264,1.662A5.087,5.087,0,0,0,132.1-833.1a5.087,5.087,0,0,0,3.734,1.544,5.385,5.385,0,0,0,1.662-.264,4.935,4.935,0,0,0,1.5-.792v9.5a2.033,2.033,0,0,1-.62,1.491,2.033,2.033,0,0,1-1.491.62Zm1.056-4.222h12.667l-3.958-5.278-3.167,4.222-2.375-3.167Zm11.611-8.444v-2.111h-2.111v-2.111h2.111V-840h2.111v2.111H139v2.111h-2.111v2.111Z" transform="translate(-120 840)" fill="#5f6368" />
                    </svg>
                    <span className="text-sm">Añadir una foto</span>
                    <button className="ml-auto">
                        <img src="/images/delete-icon.svg" alt="delete-icon" />
                    </button>
                </div>

                {/* Publish button */}
            </div>
            <div className="pb-16 px-4 mt-auto">
                <button className="main-button" onClick={() => setIsOpenConfirmModel(true)}>
                    Hacer publicación
                </button>
            </div>
            {isOpenConfirmModel && (
                <div
                    id="popup-modal"
                    tabIndex={-1}
                    className=" fixed flex inset-0 z-50 justify-center items-center bg-black bg-opacity-50"
                >
                    <div className="relative bg-white px-4 flex flex-col justify-center items-center py-7 shadow-lg w-full max-w-[302pt] mx-5">

                        <h1 className="text-3xl font-bold mb-5">¡Genial!</h1>

                        <div className="flex justify-center gap-6 mb-9">
                            <div className="flex flex-col items-center max-w-16">
                                <img src="/images/Receive_token.svg" alt="token" className="w-10 h-10" />
                            </div>
                        </div>
                        <button className="main-button" onClick={() => router.push("/createPost")}>Enviar más</button>
                        <button onClick={() => router.push("/profile")} className="text-magenta font-semibold text-xl leading-6 mt-6">Hazlo más tarde</button>
                    </div>
                </div>
            )}
        </div >
    );
}