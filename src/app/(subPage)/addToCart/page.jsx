"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const price = 38.00;

    return (
        <div>
            <div className="app-header">
                <div className="w-10"></div>
                <h1 className="app-title">Carrito</h1>
                <div className="app-header-btn-div">
                    <button >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.124" height="20.143" viewBox="0 0 20.124 20.143">
                            <path id="Cart_Icon" d="M46.043-859.857a1.94,1.94,0,0,1-1.423-.592,1.94,1.94,0,0,1-.592-1.423,1.94,1.94,0,0,1,.592-1.423,1.94,1.94,0,0,1,1.423-.592,1.94,1.94,0,0,1,1.423.592,1.94,1.94,0,0,1,.592,1.423,1.94,1.94,0,0,1-.592,1.423A1.94,1.94,0,0,1,46.043-859.857Zm10.071,0a1.94,1.94,0,0,1-1.423-.592,1.94,1.94,0,0,1-.592-1.423,1.94,1.94,0,0,1,.592-1.423,1.94,1.94,0,0,1,1.423-.592,1.94,1.94,0,0,1,1.423.592,1.94,1.94,0,0,1,.592,1.423,1.94,1.94,0,0,1-.592,1.423A1.94,1.94,0,0,1,56.114-859.857ZM44.23-877.986H59.085a.964.964,0,0,1,.881.516,1.015,1.015,0,0,1,.025,1.045l-3.575,6.446a2.017,2.017,0,0,1-.743.781,1.959,1.959,0,0,1-1.02.277h-7.5l-1.108,2.014H58.128v2.014H46.043a1.864,1.864,0,0,1-1.712-.995,1.9,1.9,0,0,1-.05-1.977l1.36-2.467-3.626-7.654H40V-880h3.273Z" transform="translate(-40 880)" />
                        </svg></button>
                    <button onClick={() => router.back()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g id="Close_Icon" transform="translate(9245 2840)">
                            <path id="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24_1_" data-name="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 (1)" d="M87.68-862,92-866.32,96.32-862,98-863.68,93.68-868,98-872.32,96.32-874,92-869.68,87.68-874,86-872.32,90.32-868,86-863.68ZM92-856a11.685,11.685,0,0,1-4.68-.945,12.118,12.118,0,0,1-3.81-2.565,12.119,12.119,0,0,1-2.565-3.81A11.685,11.685,0,0,1,80-868a11.685,11.685,0,0,1,.945-4.68,12.119,12.119,0,0,1,2.565-3.81,12.118,12.118,0,0,1,3.81-2.565A11.685,11.685,0,0,1,92-880a11.685,11.685,0,0,1,4.68.945,12.118,12.118,0,0,1,3.81,2.565,12.119,12.119,0,0,1,2.565,3.81A11.685,11.685,0,0,1,104-868a11.685,11.685,0,0,1-.945,4.68,12.119,12.119,0,0,1-2.565,3.81,12.118,12.118,0,0,1-3.81,2.565A11.685,11.685,0,0,1,92-856Z" transform="translate(-9325 -1960)" fill="#78757E" opacity="0.38" />
                            <path id="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24_1_2" data-name="cancel_24dp_5F6368_FILL1_wght400_GRAD0_opsz24 (1)" d="M281.723-668.306l4.43-4.21,4.43,4.21,1.723-1.637-4.43-4.21,4.43-4.21L290.583-680l-4.43,4.21-4.43-4.21L280-678.363l4.43,4.21-4.43,4.21Z" transform="translate(-9519.153 -2153.847)" fill="#1c1c1c" />
                        </g>
                    </svg></button>
                </div>
            </div>

            <div className="pb-28">
                {/* Remove all */}
                <button className="remove-all-btn">Eliminar todo</button>
                {/* Product Item */}
                <div className="product-item">
                    <div className="product-details">
                        <img src="https://png.pngtree.com/png-vector/20250307/ourmid/pngtree-casual-and-stylish-a-black-t-shirt-hanging-neatly-on-hanger-png-image_15725290.png" alt="Sudadera" className="product-img " />
                        <div>
                            <p className="product-name">Sudadera Classic</p>
                            {/* Quantity Controls */}
                            <div className="quantity-control">
                                <button
                                    onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                                    className="quantity-btn"
                                >
                                    –
                                </button>
                                <span className="quantity-value">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="quantity-btn"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Price */}
                    <p className="product-price">€{(quantity * price).toFixed(2)}</p>
                </div>
            </div>
            <div className="bottombar">
                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Total de artículos ({quantity})</span>
                        <span className="cart-total-price">€{(quantity * price).toFixed(2)}</span>
                    </div>
                    <button className="main-button" onClick={() => router.push("/checkout")}>
                        Realizar pago ahora
                    </button>
                </div>
            </div>
        </div>
    );
}
