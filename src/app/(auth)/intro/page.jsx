"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();
    const slides = [
        { image: "/images/introImage1.png", title: "Construye tu armario digital", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", color: "text-[#FF00F2]" },
        { image: "/images/introImage2.png", title: "Envía y recibe tokens de positividad", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", color: "text-[#00FBFB]" },
        { image: "/images/introImage3.png", title: "Forma parte de la comunidad", description: "Organize your wardrobe in a digital format.", color: "text-[#EEFF00]" }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const setSlide = (index) => {
        setCurrentIndex(index);
    };

    const colorSequence = ["text-blue-600", "text-red-600", "text-green-600"];
    return (
        <div className="flex flex-col w-full min-h-screen bg-black">
            <div className="relative overflow-hidden">
                <button className="absolute top-5 right-5 z-10" onClick={() => router.push("/login")}>
                    <img src="/images/close_icon.svg" alt="close" className="w-8 h-8" />
                </button>
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="min-w-full flex flex-col">
                            <div className="h-[300pt]">
                                <img src={slide.image} alt="" className="w-full h-full object-cover" />
                                {/* <button className="close-button" onClick={() => router.push("/login")}>
                                    <img src="/images/close_icon.svg" alt="close" />
                                </button> */}
                            </div>
                            <div className="bg-black text-white p-6 w-full text-center">
                                <h4 className="intro-title">{slide.title}</h4>
                                <p className="intro-description">{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-7 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-neutral-700"}`}
                        onClick={() => setSlide(index)}
                    ></button>
                ))}
            </div>

            <div className="next-progess-button" onClick={nextSlide}>
                <svg className="-rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="10" fill="none" className="stroke-current text-neutral-700" strokeWidth="2"></circle>
                    <circle
                        cx="18"
                        cy="18"
                        r="10"
                        fill="none"
                        className={`stroke-current ${slides[currentIndex].color}`}
                        strokeWidth="2"
                        strokeDasharray="100"
                        strokeDashoffset="59"
                        strokeLinecap="round"
                    />
                </svg>

                <div className="progress-arrow-div">
                    <button type="button" className={`progess-arrow-btn ${slides[currentIndex].color}`}>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                fill="currentColor"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
