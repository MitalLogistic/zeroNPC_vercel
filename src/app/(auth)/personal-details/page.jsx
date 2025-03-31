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
            <div className="pt-[10px] flex justify-center gap-5">
                <div className="text-center">
                    <p className="text-black text-[20pt] leading-6 text-opacity-30 font-bold tracking-[-1pt]">paso</p>
                    <p className="text-black text-[30pt] text-opacity-30 font-extrabold leading-[37px]">1</p>
                </div>
                <div className="text-center">
                    <p className="text-black text-[30pt] leading-[37px] font-bold tracking-[-1.5pt]">paso</p>
                    <p className="text-black text-[70pt] font-extrabold leading-[86px]">2</p>
                </div>
                <div className="text-center">
                    <p className="text-black text-[20pt] leading-6 text-opacity-30 font-bold tracking-[-1pt]">paso</p>
                    <p className="text-black text-[30pt] text-opacity-30 font-extrabold leading-[37px]">3</p>
                </div>
            </div>

            <div className="login-form-bg">
                <p className="form-field-title">¿Cómo te llamamos?</p>
                <input type="text" name="text" placeholder="Tu nombre" className="my-2.5 common-input" />
                <p className="form-field-title">Dirección para recibir tokens</p>
                <input type="text" name="address1" placeholder="Dirección 1" className="my-2.5 common-input" />
                <input type="text" name="address1" placeholder="Dirección 2" className="common-input" />
                <input type="text" placeholder="Código postal" className="my-2.5 common-input !w-1/2" />
                <input type="number" name="text" placeholder="Provincia" className="common-input" />
            </div>
            <button onClick={() => router.push("/add-profile")} className=" main-button">Siguiente</button>

        </div>
    );
};

export default Carousel;
