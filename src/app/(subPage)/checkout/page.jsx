"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Checkout() {
    const router = useRouter();
    const [isOpenConfirmModel, setIsOpenConfirmModel] = useState(false);
    return (
        <div>
            <div className="app-header">
                <button onClick={() => router.back()}>
                    <img src="/images/Back_Arrow_Icon.svg" alt="Back" />
                </button>
                <h1 className="app-title">Checkout</h1>
                <button onClick={() => router.push("/store")} className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="Close_Icon" transform="translate(9245 2840)">
                        <path id="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24_1_" data-name="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 (1)" d="M87.68-862,92-866.32,96.32-862,98-863.68,93.68-868,98-872.32,96.32-874,92-869.68,87.68-874,86-872.32,90.32-868,86-863.68ZM92-856a11.685,11.685,0,0,1-4.68-.945,12.118,12.118,0,0,1-3.81-2.565,12.119,12.119,0,0,1-2.565-3.81A11.685,11.685,0,0,1,80-868a11.685,11.685,0,0,1,.945-4.68,12.119,12.119,0,0,1,2.565-3.81,12.118,12.118,0,0,1,3.81-2.565A11.685,11.685,0,0,1,92-880a11.685,11.685,0,0,1,4.68.945,12.118,12.118,0,0,1,3.81,2.565,12.119,12.119,0,0,1,2.565,3.81A11.685,11.685,0,0,1,104-868a11.685,11.685,0,0,1-.945,4.68,12.119,12.119,0,0,1-2.565,3.81,12.118,12.118,0,0,1-3.81,2.565A11.685,11.685,0,0,1,92-856Z" transform="translate(-9325 -1960)" fill="#78757E" opacity="0.38" />
                        <path id="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24_1_2" data-name="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 (1)" d="M281.723-668.306l4.43-4.21,4.43,4.21,1.723-1.637-4.43-4.21,4.43-4.21L290.583-680l-4.43,4.21-4.43-4.21L280-678.363l4.43,4.21-4.43,4.21Z" transform="translate(-9519.153 -2153.847)" fill="#1c1c1c" />
                    </g>
                </svg></button>
            </div>
            <div className="pb-[190px] px-4">
                <div class="space-y-4">
                    <h2 class="text-base font-semibold text-black">Entregar a</h2>
                    <div class="bg-light-gray p-4 rounded-lg">
                        <p class="font-semibold text-black">Sarah Stewart</p>
                        <p class="text-sm text-black">123 Paseo de Calle, Madrid, 12345</p>
                        <button class="text-sm text-magenta font-medium mt-1 hover:underline">Editar dirección</button>
                    </div>
                </div>
                <h2 class="text-base mt-4 font-semibold text-gray-800">Método de pago</h2>
                <div class="space-y-4 mt-4">
                    <div class="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <label class="flex items-center border border-gray-300 rounded-lg p-3 cursor-pointer">
                                <img src="/images/google_icon.svg" alt="Google Pay" class="h-6" />
                            </label>
                            <span class="text-sm font-semibold text-black">Google Pay</span>
                        </div>
                        <input type="radio" name="payment" class="form-radio text-black mr-5" />
                    </div>
                    <div class="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <label class="flex items-center border border-gray-300 rounded-lg p-3 cursor-pointer">
                                <svg id="Apple_Icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 17.027 21.403">
                                    <path id="Path_2" data-name="Path 2" d="M14.725,11.866a4.481,4.481,0,0,1,2.259-4.075,4.945,4.945,0,0,0-3.828-2.123,5.471,5.471,0,0,0-2.3.429,11.282,11.282,0,0,1-1.695.557,5.088,5.088,0,0,1-1.528-.472,5.168,5.168,0,0,0-1.924-.472,4.767,4.767,0,0,0-2.489.74,5.3,5.3,0,0,0-1.84,1.962A7.336,7.336,0,0,0,.5,12.1a12.064,12.064,0,0,0,.648,3.86A13.027,13.027,0,0,0,2.7,19.2,10.425,10.425,0,0,0,4.16,21.044,2.455,2.455,0,0,0,6,21.9a4.659,4.659,0,0,0,1.589-.451,4.534,4.534,0,0,1,1.841-.406,4.394,4.394,0,0,1,1.778.406,4.574,4.574,0,0,0,1.673.429,2.77,2.77,0,0,0,1.8-.835,5.081,5.081,0,0,0,.637-.708q.4-.524.764-1.072.3-.472.575-.965a9.7,9.7,0,0,0,.512-1.094q.1-.236.188-.482c.056-.164.111-.332.167-.5a4.758,4.758,0,0,1-2.8-4.353ZM12.088,3.931a4.731,4.731,0,0,0,1.109-3V.715A1.132,1.132,0,0,0,13.177.5a4.09,4.09,0,0,0-1.643.493A4.556,4.556,0,0,0,10.1,2.13a4.44,4.44,0,0,0-1.13,2.9v.2a1.09,1.09,0,0,0,.021.2,3.462,3.462,0,0,0,3.1-1.5Z" transform="translate(-0.5 -0.5)" fill="#000" />
                                </svg>
                            </label>
                            <span class="text-sm font-semibold text-black">Apple Pay</span>
                        </div>
                        <input type="radio" name="payment" class="form-radio text-black mr-5" />
                    </div>
                    <div class="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <label class="flex items-center border border-gray-300 rounded-lg p-3 cursor-pointer">
                                <svg class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 6h18M3 14h6m6 0h6M3 18h18" />
                                </svg>
                            </label>
                            <span class="text-sm font-semibold text-black">Tarjeta de crédito</span>
                        </div>
                        <input type="radio" name="payment" class="form-radio text-black mr-5" />
                    </div>
                </div>

                <div class="space-y-4 mt-4">
                    <div>
                        <label class="block text-sm text-primary-black mb-1">Titular</label>
                        <input
                            type="text"
                            placeholder="Titular de la tarjeta"
                            class="w-full border border-light-gray rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-light-gray"
                        />
                    </div>
                    <div>
                        <label class="block text-sm text-primary-black mb-1">Tarjeta de crédito</label>
                        <input
                            type="text"
                            placeholder="xxxx - xxxx - xxxx - xxxx"
                            class="w-full border border-light-gray rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-light-gray"
                        />
                    </div>

                    <div class="flex gap-4">
                        <div class="w-1/2">
                            <label class="block text-sm text-primary-black mb-1">Fecha de vencimiento</label>
                            <input
                                type="text"
                                placeholder="DD - MM - AAAA"
                                class="w-full border border-light-gray rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-light-gray"
                            />
                        </div>
                        <div class="w-24">
                            <label class="block text-sm text-primary-black mb-1">CVV</label>
                            <input
                                type="text"
                                placeholder="xxx"
                                class="w-full border border-light-gray rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-light-gray"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 max-w-[393pt] mx-auto" style={{ boxShadow: "0pt -3pt 6pt #00000029" }}>
                <div class="text-sm text-gray-700 space-y-2">
                    <div class="flex justify-between">
                        <span>Envío</span>
                        <span>€10.00</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Total de artículos (1)</span>
                        <span>€38.00</span>
                    </div>
                    <div class="flex justify-between font-bold text-lg text-black border-t border-light-gray">
                        <span>Total</span>
                        <span>€48.00</span>
                    </div>
                </div>
                <button class="main-button">
                    Confirmar y pagar
                </button>
            </div>
        </div>

    );
}