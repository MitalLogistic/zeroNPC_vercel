"use client";
import React from "react";
import { useRouter } from "next/navigation";
import BottomNavbar from "@/components/BottomNavbar";

export default function ProductDetails() {
    const router = useRouter();
    return (
        <div>
            <div className="sticky top-0 bg-white w-full z-10">
                <div className="p-4 flex items-center justify-between">
                    <button onClick={() => router.back()}>
                        <img src="/images/Back_Arrow_Icon.svg" alt="Back" />
                    </button>
                    <h1 className="app-title">Store</h1>
                    <div className="flex items-center gap-3">
                        <button onClick={() => router.push("/addToCart")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.124" height="20.143" viewBox="0 0 20.124 20.143">
                                <path id="Cart_Icon" d="M46.043-859.857a1.94,1.94,0,0,1-1.423-.592,1.94,1.94,0,0,1-.592-1.423,1.94,1.94,0,0,1,.592-1.423,1.94,1.94,0,0,1,1.423-.592,1.94,1.94,0,0,1,1.423.592,1.94,1.94,0,0,1,.592,1.423,1.94,1.94,0,0,1-.592,1.423A1.94,1.94,0,0,1,46.043-859.857Zm10.071,0a1.94,1.94,0,0,1-1.423-.592,1.94,1.94,0,0,1-.592-1.423,1.94,1.94,0,0,1,.592-1.423,1.94,1.94,0,0,1,1.423-.592,1.94,1.94,0,0,1,1.423.592,1.94,1.94,0,0,1,.592,1.423,1.94,1.94,0,0,1-.592,1.423A1.94,1.94,0,0,1,56.114-859.857ZM44.23-877.986H59.085a.964.964,0,0,1,.881.516,1.015,1.015,0,0,1,.025,1.045l-3.575,6.446a2.017,2.017,0,0,1-.743.781,1.959,1.959,0,0,1-1.02.277h-7.5l-1.108,2.014H58.128v2.014H46.043a1.864,1.864,0,0,1-1.712-.995,1.9,1.9,0,0,1-.05-1.977l1.36-2.467-3.626-7.654H40V-880h3.273Z" transform="translate(-40 880)" />
                            </svg></button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 20 20">
                                <path id="Search_Icon" d="M138.444-820l-7-7a6.623,6.623,0,0,1-1.917,1.056,6.773,6.773,0,0,1-2.306.389,6.972,6.972,0,0,1-5.125-2.1,6.972,6.972,0,0,1-2.1-5.125,6.972,6.972,0,0,1,2.1-5.125,6.972,6.972,0,0,1,5.125-2.1,6.971,6.971,0,0,1,5.125,2.1,6.972,6.972,0,0,1,2.1,5.125,6.772,6.772,0,0,1-.389,2.305A6.62,6.62,0,0,1,133-828.556l7,7Zm-11.222-7.778a4.822,4.822,0,0,0,3.542-1.458,4.822,4.822,0,0,0,1.458-3.542,4.822,4.822,0,0,0-1.458-3.542,4.822,4.822,0,0,0-3.542-1.458,4.822,4.822,0,0,0-3.542,1.458,4.822,4.822,0,0,0-1.458,3.542,4.822,4.822,0,0,0,1.458,3.542A4.822,4.822,0,0,0,127.222-827.778Z" transform="translate(-120 840)" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4 pb-28 space-y-3">
                {/* Hoodie Image */}
                <div className="bg-gray-100 rounded-lg p-4 aspect-square">
                    <img
                        src="https://png.pngtree.com/png-vector/20250307/ourmid/pngtree-casual-and-stylish-a-black-t-shirt-hanging-neatly-on-hanger-png-image_15725290.png"
                        alt="Sudadera Classic"
                        className="h-full object-contain mx-auto"
                    />
                </div>

                {/* Title and Price */}
                <div>
                    <h3 className="text-gray-700 text-xl">Sudadera</h3>
                    <h2 className="font-bold text-2xl">Classic</h2>
                    <p className="text-2xl font-bold mt-1">€38.00</p>
                </div>

                {/* Badges */}
                <div className="flex space-x-3">
                    <div className="flex items-center text-xs font-semibold bg-black text-white rounded-full px-2 py-1">
                        <img src="/path-to-physical-icon.svg" alt="físicos" className="w-5 h-5 mr-1" />
                        +2 físicos
                    </div>
                    <div className="flex items-center text-xs font-semibold bg-black text-white rounded-full px-2 py-1">
                        <img src="/path-to-virtual-icon.svg" alt="virtuales" className="w-5 h-5 mr-1" />
                        +1 virtuales
                    </div>
                </div>

                {/* Color Selection */}
                <div className="flex space-x-2">
                    <span className="w-6 h-6 rounded-full bg-gray-400 border-2 border-black" />
                    <span className="w-6 h-6 rounded-full bg-black" />
                    <span className="w-6 h-6 rounded-full bg-white border" />
                    <span className="w-6 h-6 rounded-full bg-pink-300" />
                </div>

                {/* Size Selection */}
                <div className="flex space-x-2">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                        <button
                            key={size}
                            className="border px-2 py-1 w-10 rounded text-sm font-medium hover:bg-gray-100"
                        >
                            {size}
                        </button>
                    ))}
                </div>

                {/* Add to Cart Button */}
                <button className="main-button">
                    Añadir al carrito
                </button>
            </div>
            <BottomNavbar />
        </div>
    );
}
