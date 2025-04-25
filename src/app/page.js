"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const [step, setStep] = useState(false);
  const router = useRouter();
  const userAuth = useSelector((state) => state?.persistedReducer.user.userData);
  console.log("===========>", userAuth);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setStep(true); // Show second splash screen after 3 seconds
    }, 2000);

    const secondTimer = setTimeout(() => {
      if (userAuth?.token) {
        console.log("in if");
        router.push("/profile");
      } else {
        router.push("/intro");
      }
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
      {step && <p className="auth-app-title title-animation ">comparte conexión</p>}
    </div>
  );
}
