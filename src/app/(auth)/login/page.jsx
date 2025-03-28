"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Carousel = () => {
    const router = useRouter();
    return (
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

            <form className="login-form">
                <h6 className="form-field-title">Correo electrónico</h6>
                <input type="email" name="email" placeholder="myemail@gmail.com" className="my-2.5 common-input" />
                <h6 className="form-field-title">Contraseña</h6>
                <div className="password-main-div">
                    <input type="password" name="email" placeholder="Escribe tu contraseña" className="relative common-input" />
                    <img src="/images/invisible_icon.svg" className="password-icon-img" alt="password-icon" />
                </div>
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        value="remember"
                        className="checkbox-input"
                    />
                    <label htmlFor="remember" className="">
                        Recuérdame
                    </label>
                </div>
                <button className="main-button">Iniciar sesión</button>
            </form>
            <Link href="" className="forgot-pwd-link">¿Olvidaste tu contraseña?</Link>
            <p className="login-text">¿No tienes una cuenta? <Link href="/signup" className="login-signup-link">Crear una ahora</Link></p>
        </div>
    );
};

export default Carousel;
