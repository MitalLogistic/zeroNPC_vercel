"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const images = [
    "/images/introImage1.png",
    "/images/introImage2.png",
    "/images/introImage3.png",
];

const texts = [
    { title: "Construye tu armario digital", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Envía y recibe tokens de positividad", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Forma parte de la comunidad", description: "Organize your wardrobe in a digital format." },
];
const colorSequence = ["text-blue-600", "text-red-600", "text-green-600"];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const router = useRouter();

    // Function to go to the next slide
    const nextSlide = () => {
        if (currentIndex === images.length - 1) {
            router.push("/login"); // Redirect to the next route
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setColorIndex((prevIndex) => (prevIndex + 1) % colorSequence.length);
        }
    };

    const setSlide = (index) => {
        setCurrentIndex(index);
        setColorIndex(index);
    };

    return (
        <div className="intro-main-div">
            {/* Image Container */}
            <div className="intro-silder-main-div">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className={`silder-images ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                    />
                ))}
                <button className="close-button" onClick={() => router.push("/login")}>
                    <img src="/images/close_icon.svg" alt="close" />
                </button>
            </div>
            {/* Text for current slide */}
            <div className="intro-details">
                <h4 className="intro-title">{texts[currentIndex].title}</h4>
                <p className="intro-description">{texts[currentIndex].description}</p>
            </div>
            <div className="silder-container">
                <div className="silder-dot">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`silder-dot-button ${index === currentIndex ? "bg-white" : "bg-neutral-700"}`}
                            onClick={() => setSlide(index)}
                        ></button>
                    ))}
                </div>

                <div className="next-progess-button" onClick={nextSlide}>
                    <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        {/* Outer Circle */}
                        <circle cx="18" cy="18" r="10" fill="none" className="stroke-current text-neutral-700" strokeWidth="2"></circle>

                        {/* Inner Circle with Dynamic Color */}
                        <circle
                            cx="18"
                            cy="18"
                            r="10"
                            fill="none"
                            className={`stroke-current ${colorSequence[colorIndex]}`} // Change color based on state
                            strokeWidth="2"
                            strokeDasharray="100"
                            strokeDashoffset="59"
                            strokeLinecap="round"
                        />
                    </svg>

                    <div className="progress-arrow-div">
                        <button type="button" className="progess-arrow-btn">
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Carousel;
