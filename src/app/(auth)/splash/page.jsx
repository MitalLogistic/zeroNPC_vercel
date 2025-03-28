"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // For navigation
// import "./globals.css";

const SplashScreen = () => {
    const [step, setStep] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const firstTimer = setTimeout(() => {
            setStep(true); // Show second splash screen after 3 seconds
        }, 2000);

        const secondTimer = setTimeout(() => {
            router.push("/intro"); // Redirect after 6 seconds
        }, 4000);

        return () => {
            clearTimeout(firstTimer);
            clearTimeout(secondTimer);
        };
    }, [router]);

    return (
        <div className="main-div">
            <div className="logo-div">
                <img src="/images/Logo.png" alt="logo" />
            </div>
            {step && <p className="app-title title-animation ">comparte conexión</p>}
        </div>
    );
};

export default SplashScreen;
