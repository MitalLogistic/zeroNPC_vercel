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
                <button onClick={() => router.push("/store")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="Close_Icon" transform="translate(9245 2840)">
                        <path id="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24_1_" data-name="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 (1)" d="M87.68-862,92-866.32,96.32-862,98-863.68,93.68-868,98-872.32,96.32-874,92-869.68,87.68-874,86-872.32,90.32-868,86-863.68ZM92-856a11.685,11.685,0,0,1-4.68-.945,12.118,12.118,0,0,1-3.81-2.565,12.119,12.119,0,0,1-2.565-3.81A11.685,11.685,0,0,1,80-868a11.685,11.685,0,0,1,.945-4.68,12.119,12.119,0,0,1,2.565-3.81,12.118,12.118,0,0,1,3.81-2.565A11.685,11.685,0,0,1,92-880a11.685,11.685,0,0,1,4.68.945,12.118,12.118,0,0,1,3.81,2.565,12.119,12.119,0,0,1,2.565,3.81A11.685,11.685,0,0,1,104-868a11.685,11.685,0,0,1-.945,4.68,12.119,12.119,0,0,1-2.565,3.81,12.118,12.118,0,0,1-3.81,2.565A11.685,11.685,0,0,1,92-856Z" transform="translate(-9325 -1960)" fill="#78757E" opacity="0.38" />
                        <path id="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24_1_2" data-name="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 (1)" d="M281.723-668.306l4.43-4.21,4.43,4.21,1.723-1.637-4.43-4.21,4.43-4.21L290.583-680l-4.43,4.21-4.43-4.21L280-678.363l4.43,4.21-4.43,4.21Z" transform="translate(-9519.153 -2153.847)" fill="#1c1c1c" />
                    </g>
                </svg></button>
            </div>
            <div className="checkout-section">
                <div className="checkout-block">
                    <h2 className="checkout-heading">Entregar a</h2>
                    <div className="delivery-address">
                        <p className="delivery-name">Sarah Stewart</p>
                        <p className="delivery-text">123 Paseo de Calle, Madrid, 12345</p>
                        <button className="edit-address-btn">Editar dirección</button>
                    </div>
                </div>
                <h2 className="payment-heading">Método de pago</h2>
                <div className="payment-method">
                    <div className="payment-option">
                        <div className="payment-inner">
                            <label className="payment-label">
                                <img src="/images/google_icon.svg" alt="Google Pay" className="h-6" />
                            </label>
                            <span>Google Pay</span>
                        </div>
                        <input type="radio" name="payment" className="text-black mr-5" />
                    </div>
                    <div className="payment-option">
                        <div className="payment-inner">
                            <label className="payment-label">
                                <svg id="Apple_Icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 17.027 21.403">
                                    <path id="Path_2" data-name="Path 2" d="M14.725,11.866a4.481,4.481,0,0,1,2.259-4.075,4.945,4.945,0,0,0-3.828-2.123,5.471,5.471,0,0,0-2.3.429,11.282,11.282,0,0,1-1.695.557,5.088,5.088,0,0,1-1.528-.472,5.168,5.168,0,0,0-1.924-.472,4.767,4.767,0,0,0-2.489.74,5.3,5.3,0,0,0-1.84,1.962A7.336,7.336,0,0,0,.5,12.1a12.064,12.064,0,0,0,.648,3.86A13.027,13.027,0,0,0,2.7,19.2,10.425,10.425,0,0,0,4.16,21.044,2.455,2.455,0,0,0,6,21.9a4.659,4.659,0,0,0,1.589-.451,4.534,4.534,0,0,1,1.841-.406,4.394,4.394,0,0,1,1.778.406,4.574,4.574,0,0,0,1.673.429,2.77,2.77,0,0,0,1.8-.835,5.081,5.081,0,0,0,.637-.708q.4-.524.764-1.072.3-.472.575-.965a9.7,9.7,0,0,0,.512-1.094q.1-.236.188-.482c.056-.164.111-.332.167-.5a4.758,4.758,0,0,1-2.8-4.353ZM12.088,3.931a4.731,4.731,0,0,0,1.109-3V.715A1.132,1.132,0,0,0,13.177.5a4.09,4.09,0,0,0-1.643.493A4.556,4.556,0,0,0,10.1,2.13a4.44,4.44,0,0,0-1.13,2.9v.2a1.09,1.09,0,0,0,.021.2,3.462,3.462,0,0,0,3.1-1.5Z" transform="translate(-0.5 -0.5)" fill="#000" />
                                </svg>
                            </label>
                            <span>Apple Pay</span>
                        </div>
                        <input type="radio" name="payment" />
                    </div>
                    <div className="payment-option">
                        <div className="payment-inner">
                            <label className="payment-label">
                                <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 6h18M3 14h6m6 0h6M3 18h18" />
                                </svg>
                            </label>
                            <span>Tarjeta de crédito</span>
                        </div>
                        <input type="radio" name="payment" />
                    </div>
                </div>

                <div className="payment-method">
                    <div>
                        <label className="input-label">Titular</label>
                        <input
                            type="text"
                            placeholder="Titular de la tarjeta"
                            className="input-wrapper"
                        />
                    </div>
                    <div>
                        <label className="input-label">Tarjeta de crédito</label>
                        <input
                            type="text"
                            placeholder="xxxx - xxxx - xxxx - xxxx"
                            className="input-wrapper"
                        />
                    </div>

                    <div className="expiry-cvv-group">
                        <div className="w-1/2">
                            <label className="input-label">Fecha de vencimiento</label>
                            <input
                                type="text"
                                placeholder="DD - MM - AAAA"
                                className="input-wrapper"
                            />
                        </div>
                        <div className="w-24">
                            <label className="input-label">CVV</label>
                            <input
                                type="text"
                                placeholder="xxx"
                                className="input-wrapper"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="payment-summary-container">
                <div className="payment-summary-details">
                    <div className="payment-summary-row ">
                        <span>Envío</span>
                        <span>€10.00</span>
                    </div>
                    <div className="payment-summary-row ">
                        <span>Total de artículos (1)</span>
                        <span>€38.00</span>
                    </div>
                    <div className="payment-summary-total">
                        <span>Total</span>
                        <span>€48.00</span>
                    </div>
                </div>
                <button className="main-button">
                    Confirmar y pagar
                </button>
            </div>
        </div>

    );
}