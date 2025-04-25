"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { setEmail } from "../../../../redux/reducers/slice/authSlice";

const Carousel = () => {
    const [isShow, setIsShow] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const otpLength = 6;
    const otpRefs = Array(otpLength).fill().map(() => useRef(null));
    const [otp, setOtp] = useState(new Array(otpLength).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        const value = element.value;
        setOtp(prevOtp => {
            const newOtp = [...prevOtp];
            newOtp[index] = value;
            if (value !== "" && index < otpLength - 1) {
                otpRefs[index + 1].current.focus();
            }
            return newOtp;
        });
    };

    const handleKeyDown = (element, index) => {
        if (element.key === "Backspace" && index > 0) {
            otpRefs[index - 1].current.focus();
        }
    };

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Correo electrónico no válido")
                .required("El correo electrónico es obligatorio"),
        }),
        onSubmit: (values) => {
            console.log("Form values:", values);
            dispatch(setEmail(values.email));
            router.push("/personal-details");
        },
    });

    return (
        <div className="p-5">
            <div className="login-div">
                <img src="/images/logo_dark.png" alt="logo" />
                <h1 className="forgot-title">Verificar cuenta</h1>
                <div className="signup-form mt-6">
                    <form onSubmit={formik.handleSubmit}>
                        <p className="form-field-title">OTP</p>
                        <div className="otp-input-wrapper">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    ref={otpRefs[index]}
                                    value={data}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyUp={(e) => handleKeyDown(e, index)}
                                />
                            ))}
                        </div>
                        <button className="text-primary-black text-lg font-medium flex ml-auto">Reenviar</button>
                        <button className="main-button my-6" type="submit">Verificar</button>
                    </form>
                    <Link href="/login" className="flex justify-center forgot-pwd-link">Ir a iniciar sesión</Link>
                </div>
                {/* <p className="login-text">¿Ya tienes una cuenta? <Link href="/login" className="login-signup-link">Inciar sesión</Link></p> */}
            </div>
        </div >
    );
};

export default Carousel;
