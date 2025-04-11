"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePost() {
    const router = useRouter();
    const [isOpenConfirmModel, setIsOpenConfirmModel] = useState(false);
    return (
        <div className="flex flex-col min-h-screen">
            <div className="app-header1  pb-6">
                <div className="app-header-inner">
                    <h1 className="app-title">Nueva publicación</h1>
                    <button onClick={() => router.back()} className="back-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g id="Close_Icon" transform="translate(9245 2840)">
                            <path id="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24_1_" data-name="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 (1)" d="M87.68-862,92-866.32,96.32-862,98-863.68,93.68-868,98-872.32,96.32-874,92-869.68,87.68-874,86-872.32,90.32-868,86-863.68ZM92-856a11.685,11.685,0,0,1-4.68-.945,12.118,12.118,0,0,1-3.81-2.565,12.119,12.119,0,0,1-2.565-3.81A11.685,11.685,0,0,1,80-868a11.685,11.685,0,0,1,.945-4.68,12.119,12.119,0,0,1,2.565-3.81,12.118,12.118,0,0,1,3.81-2.565A11.685,11.685,0,0,1,92-880a11.685,11.685,0,0,1,4.68.945,12.118,12.118,0,0,1,3.81,2.565,12.119,12.119,0,0,1,2.565,3.81A11.685,11.685,0,0,1,104-868a11.685,11.685,0,0,1-.945,4.68,12.119,12.119,0,0,1-2.565,3.81,12.118,12.118,0,0,1-3.81,2.565A11.685,11.685,0,0,1,92-856Z" transform="translate(-9325 -1960)" fill="#78757E" opacity="0.38" />
                            <path id="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24_1_2" data-name="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 (1)" d="M281.723-668.306l4.43-4.21,4.43,4.21,1.723-1.637-4.43-4.21,4.43-4.21L290.583-680l-4.43,4.21-4.43-4.21L280-678.363l4.43,4.21-4.43,4.21Z" transform="translate(-9519.153 -2153.847)" fill="#1c1c1c" />
                        </g>
                    </svg></button>
                </div>
            </div>
            <div className="px-4 flex-1">
                <div className="post-textarea-wrapper">
                    <textarea
                        rows="7"
                        maxLength="140"
                        className="post-textarea"
                        placeholder="¿Sobre qué quieres publicar?"

                    ></textarea>
                    <span className="char-counter">0/140</span>
                </div>

                <div className="add-user-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
                        <path id="Add_Photo" d="M122.111-821a2.033,2.033,0,0,1-1.491-.62,2.033,2.033,0,0,1-.62-1.491v-14.778a2.033,2.033,0,0,1,.62-1.491,2.033,2.033,0,0,1,1.491-.62h9.5a4.933,4.933,0,0,0-.792,1.5,5.384,5.384,0,0,0-.264,1.662A5.087,5.087,0,0,0,132.1-833.1a5.087,5.087,0,0,0,3.734,1.544,5.385,5.385,0,0,0,1.662-.264,4.935,4.935,0,0,0,1.5-.792v9.5a2.033,2.033,0,0,1-.62,1.491,2.033,2.033,0,0,1-1.491.62Zm1.056-4.222h12.667l-3.958-5.278-3.167,4.222-2.375-3.167Zm11.611-8.444v-2.111h-2.111v-2.111h2.111V-840h2.111v2.111H139v2.111h-2.111v2.111Z" transform="translate(-120 840)" fill="#5f6368" />
                    </svg>
                    <span >Añadir una foto</span>
                    <button className="ml-auto">
                        <img src="/images/delete-icon.svg" alt="delete-icon" />
                    </button>
                </div>

                {/* Publish button */}
            </div>
            <div className="confirm-button-container">
                <button className="main-button" onClick={() => setIsOpenConfirmModel(true)}>
                    Hacer publicación
                </button>
            </div>
            {isOpenConfirmModel && (
                <div
                    id="popup-modal"
                    tabIndex={-1}
                    className="modal-overlay "
                >
                    <div className="modal-box ">

                        <h1 className="modal-heading">¡Genial!</h1>

                        <div className="modal-icon-wrapper">
                            <div className="modal-icon-inner ">
                                <img src="/images/Receive_token.svg" alt="token" className="w-10 h-10" />
                            </div>
                        </div>
                        <button className="main-button" onClick={() => router.push("/createPost")}>Enviar más</button>
                        <button onClick={() => router.push("/profile")} className="modal-later-button">Hazlo más tarde</button>
                    </div>
                </div>
            )}
        </div >
    );
}