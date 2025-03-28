"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Carousel = () => {
    const [isShow, setIsShow] = useState(false);
    const router = useRouter();
    return (
        <>
            <div className="login-div">
                <img src="/images/logo_dark.png" alt="logo" />
                <h1 className="welcome-auth-title">bienvenido</h1>
                <button className="google-login-btn">
                    <img src="/images/google_icon.svg" className="mr-2" alt="google-login" />
                    Continuar con Google
                </button>
                <button className="apple-login-btn">
                    <img src="/images/apple_icon.svg" className="mr-2" alt="google-login" />
                    Continuar con Apple
                </button>
                <button className="google-login-btn" onClick={() => setIsShow(!isShow)}>
                    Continuar con correo electrónico
                </button>
                <div className="signup-form">
                    {isShow && (
                        <>
                            <h6 className="form-field-title">Correo electrónico</h6>
                            <input type="email" name="email" placeholder="myemail@gmail.com" className="mt-2.5 mb-6 common-input" />

                            <button className="main-button" onClick={() => router.push("/password-details")}>Ponerse en marcha</button>
                        </>
                    )}
                </div>

                <p className="login-text">¿Ya tienes una cuenta? <Link href="/login" className="login-signup-link">Inciar sesión</Link></p>
            </div>
        </>
    );
};

export default Carousel;
