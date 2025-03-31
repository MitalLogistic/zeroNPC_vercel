"use client";
import { useRouter } from "next/navigation";

const Carousel = () => {
    const router = useRouter();
    return (
        <div className="p-5">
            <div className="login-div">
                <img src="/images/logo_dark.png" alt="logo" className="w-[82pt] h-[27pt]" />
            </div>
            {/* Steps */}
            <div className="pt-[10px] flex justify-end gap-5">
                <div className="text-center">
                    <p className="text-black text-[30pt] leading-[37px] font-bold tracking-[-1.5pt]">paso</p>
                    <p className="text-black text-[70pt] font-extrabold leading-[86px]">1</p>
                </div>
                <div className="text-center">
                    <p className="text-black text-[20pt] leading-6 text-opacity-30 font-bold tracking-[-1pt]">paso</p>
                    <p className="text-black text-[30pt] text-opacity-30 font-extrabold leading-[37px]">2</p>
                </div>
                <div className="text-center">
                    <p className="text-black text-[12pt] text-opacity-30 leading-4 font-bold tracking-[-0.6pt]">paso</p>
                    <p className="text-black text-[20pt] text-opacity-30 font-extrabold leading-6">3</p>
                </div>
            </div>

            <div className="login-form-bg">
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

            <button onClick={() => router.push("/personal-details")} className="main-button">Iniciar sesión</button>

        </div>
    );
};

export default Carousel;
