"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [image, setImage] = useState(null);
    const router = useRouter();
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };
    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));

    return (
        <div className="p-5">
            <div className="login-div">
                <img src="/images/logo_dark.png" alt="logo" className="w-[82pt] h-[27pt]" />
            </div>
            <div className="flex justify-center space-x-6 text-gray-400 font-bold pt-5">
                <div
                    className={`flex flex-col text-center transition-all duration-500 ${step === 1 ? "text-4xl text-black cursor-pointer scale-110" : step === 3 ? "text-base" : "cursor-pointer text-2xl"}`}
                    onClick={() => step > 1 && setStep(1)}
                >
                    <span>paso</span>
                    <span className={`${step === 1 ? "text-5xl" : step === 3 ? "text-xl" : "text-3xl"}`}>1</span>
                </div>
                <div
                    className={`flex flex-col text-center transition-all duration-500 ${step === 2 ? "text-4xl text-black cursor-pointer scale-110" : "cursor-pointer text-2xl"}`}
                    onClick={() => step >= 2 && setStep(2)}
                >
                    <span>paso</span>
                    <span className={`${step === 2 ? "text-5xl" : "text-3xl"}`}>2</span>
                </div>
                <div className={`flex flex-col text-center transition-all duration-500 ${step === 3 ? "text-4xl text-black cursor-pointer scale-110" : step === 1 ? "text-base" : "cursor-pointer text-2xl"}`}>
                    <span>paso</span>
                    <span className={`${step === 3 ? "text-5xl" : step === 1 ? "text-xl" : "text-3xl"}`}>3</span>
                </div>
            </div>

            {
                step === 1 && (
                    <div className="login-form-bg  transition-all duration-500 scale-100">
                        <p className="form-field-title">Elige una contraseña</p>
                        <div className="password-main-div">
                            <input type="password" name="email" placeholder="Escribe tu contraseña" className="relative common-input" />
                            <img src="/images/invisible_icon.svg" className="password-icon-img" alt="password-icon" />
                        </div>
                        <p className="form-field-title">Repite contraseña</p>
                        <div className="password-main-div">

                            <input type="password" name="email" placeholder="Escribe tu contraseña" className="relative common-input" />
                            <img src="/images/invisible_icon.svg" className="password-icon-img" alt="password-icon" />
                        </div>
                    </div>
                )
            }

            {
                step === 2 && (
                    <div className="login-form-bg  transition-all duration-500 scale-100">
                        <p className="form-field-title">¿Cómo te llamamos?</p>
                        <input type="text" name="text" placeholder="Tu nombre" className="my-2.5 common-input" />
                        <p className="form-field-title">Dirección para recibir tokens</p>
                        <input type="text" name="address1" placeholder="Dirección 1" className="my-2.5 common-input" />
                        <input type="text" name="address1" placeholder="Dirección 2" className="common-input" />
                        <input type="text" placeholder="Código postal" className="my-2.5 common-input !w-1/2" />
                        <input type="number" name="text" placeholder="Provincia" className="common-input" />
                    </div>
                )
            }

            {
                step === 3 && (
                    <div className="login-form-bg  transition-all duration-500 scale-100">
                        <div className="flex flex-col items-center">
                            <div className="profile-image-container">
                                {image ? (
                                    <img src={image} alt="Profile" className="profile-img" />
                                ) : (
                                    <span className="text-[68pt] leading-[83px] font-extrabold text-black">SA</span>
                                )}
                            </div>
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
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                )
            }

            <button
                className="main-button"
                onClick={step === 3 ? () => router.push("/profile") : nextStep}
            >
                {step === 3 ? "Hecho" : "Siguiente"}
            </button>
        </div >
    );
};

export default MultiStepForm;
