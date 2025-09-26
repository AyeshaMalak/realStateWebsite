import React, { useState, useEffect } from "react";
import { Bed, Bath, Ruler, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

function Hero() {
    const images = [
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Bedroom-e1642947949616.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/spacejoy-RqO6kwm4tZY-unsplash-1.jpg",
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Bedroom-e1642947949616.jpg",
    ];

    const [current, setCurrent] = useState(0);
    const [active, setActive] = useState("bed");

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const details = {
        bed: "4 Bedrooms",
        bath: "2 Bathrooms",
        area: "2500 sq.ft Area",
    };

    // Next & Prev controls
    const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + images.length) % images.length);

    return (
        <section className="relative h-[85vh] flex items-center justify-center bg-cover bg-center transition-all duration-700"

            style={{ backgroundImage: `url(${images[current]})` }}
        >
            {/* White Overlay */}
            <div className="absolute inset-0 bg-white/10"></div>
            {/* Main Card */}
            <div
                className="relative flex flex-col md:flex-row
    bg-white shadow-2xl
    w-11/12 max-w-sm
    h-auto md:h-[360px] md:w-[360px]
    p-5
    hidden sm:flex
  "
    
            >
                {/* Left Vertical Icons */}
                <div className="flex md:flex-col items-center justify-center space-x-4 md:space-x-0 md:space-y-4 border-b md:border-b-0 md:border-r pb-3 md:pb-0 md:pr-4">
                    <button
                        onClick={() => setActive("bed")}
                        className={`p-2.5 ${active === "bed" ? "bg-blue-100 text-blue-600" : "bg-gray-100"}`}
                    >
                        <Bed size={20} />
                    </button>
                    <button
                        onClick={() => setActive("bath")}
                        className={`p-2.5 ${active === "bath" ? "bg-blue-100 text-blue-600" : "bg-gray-100"}`}
                    >
                        <Bath size={20} />
                    </button>
                    <button
                        onClick={() => setActive("area")}
                        className={`p-2.5 ${active === "area" ? "bg-blue-100 text-blue-600" : "bg-gray-100"}`}
                    >
                        <Ruler size={20} />
                    </button>
                </div>

                {/* Right Content */}
                <div className="flex-1 flex flex-col justify-between md:pl-4 mt-4 md:mt-0">
                    <div className="text-left text-gray-700 font-medium">{details[active]}</div>

                    <div className="flex items-center text-gray-600 text-sm mt-1.5">
                        <MapPin size={16} className="text-red-500 mr-2" />
                        <span>CocoWalk, 3015 Grand Avenue, Miami, FL 33133, USA</span>
                    </div>

                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mt-1.5">
                        Villa on Grand Avenue
                    </h2>

                    <p className="text-gray-600 text-xs md:text-sm mt-1">
                        Spacious and fabulous home in prime location. This executive style
                        four bed, four bath home designed for luxury living.
                    </p>

                    <div className="flex flex-col md:flex-row items-center md:justify-between mt-3 gap-2">
                        <p className="text-blue-700 font-bold text-lg">$4,750 Monthly</p>
                        <button className="relative overflow-hidden px-4 py-1.5 bg-blue-600 text-white text-sm font-medium shadow hover:shadow-lg transition-all duration-300 group rounded">
                            <span className="relative z-10">Know More</span>
                            <span className="absolute inset-0 bg-blue-800 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                        </button>
                    </div>
                </div>
            </div>




            {/* Slider Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-white/70 p-2 hover:bg-white shadow rounded-full"
            >
                <ChevronLeft size={22} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-white/70 p-2 hover:bg-white shadow rounded-full"
            >
                <ChevronRight size={22} />
            </button>

            {/* Slider Dots */}
            <div className="absolute bottom-6 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === index ? "bg-blue-600" : "bg-gray-400"
                            }`}
                    ></button>
                ))}
            </div>
        </section>
    );
}

export default Hero;
