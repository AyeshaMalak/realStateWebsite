import React from "react";
import { Quote } from "lucide-react"; // using lucide-react icons

const TestimonialSection = () => {
  return (
    <section className="bg-white py-16 relative -skew-y-2">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center skew-y-2">
        
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Words From Our Customers
          </h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>

          <Quote className="w-10 h-10 text-blue-600 mb-4" />
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <h4 className="text-xl font-semibold text-gray-800">Author Name</h4>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-7-1.jpg"
            alt="Customer"
            className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-gray-200"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
