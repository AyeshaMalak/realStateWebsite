import React from "react";

function BuySellSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat bg-fixed min-h-[400px] text-white clip-diagonal"
      style={{
        backgroundImage:
          "url('https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2022/01/living-room-gbb61c6983_1920.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/80 clip-diagonal"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Buy or Sell</h2>
        <p className="text-sm md:text-base text-gray-200 mb-8">
          Looking to Buy a new property or Sell an existing one? <br />
          RealHomes provides an easy solution!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
            Submit Property
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-md shadow-md transition">
            Browse Properties
          </button>
        </div>
      </div>
    </section>
  );
}

export default BuySellSection;
