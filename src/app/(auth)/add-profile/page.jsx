"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Carousel = () => {
    const router = useRouter();
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };
    return (
        <div className="p-5">
            <div className="login-div">
                <img src="/images/logo_dark.png" alt="logo" className="w-[82pt] h-[27pt]" />
            </div>
            {/* Steps */}
            <div className=" pt-[10px] flex justify-start gap-5">
                <div className="text-center">
                    <p className="text-black text-[12pt] text-opacity-30 leading-4 font-bold tracking-[-0.6pt]">paso</p>
                    <p className="text-black text-[20pt] text-opacity-30 font-extrabold leading-6">1</p>
                </div>
                <div className="text-center">
                    <p className="text-black text-[20pt] leading-6 text-opacity-30 font-bold tracking-[-1pt]">paso</p>
                    <p className="text-black text-[30pt] text-opacity-30 font-extrabold leading-[37px]">2</p>
                </div>

                <div className="text-center">
                    <p className="text-black text-[30pt] leading-[37px] font-bold tracking-[-1.5pt]">paso</p>
                    <p className="text-black text-[70pt] font-extrabold leading-[86px]">3</p>
                </div>
            </div>

            <div className="login-form-bg flex flex-col items-center">
                {/* Profile Image / Initials */}
                <div className="profile-image-container">
                    {image ? (
                        <img src={image} alt="Profile" className="profile-img" />
                    ) : (
                        <span className="text-[68pt] leading-[83px] font-extrabold text-black">SA</span>
                    )}
                </div>

                {/* Upload Button */}
                <div className="profile-div">
                    {image ? (
                        <>
                            <label htmlFor="fileInput" className="add-profile-text">
                                Cambiar foto
                            </label>
                            <img src="/images/delete-icon.svg" alt="delete-icon" className="delete-icon" />
                        </>
                    ) : (
                        <label htmlFor="fileInput" className="add-profile-text">
                            Añadir una foto
                        </label>
                    )}
                </div>

                {/* Hidden File Input */}
                <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                />
            </div>
            <button onClick={() => router.push("/profile")} className="main-button">Hecho</button>

        </div>
    );
};

export default Carousel;
