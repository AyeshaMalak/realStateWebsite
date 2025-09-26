import React from "react";

const PartnersSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Partners</h2>
        <p className="text-gray-500 mb-10">
          We honoured to have these amazing partners.
        </p>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/one.png"
            alt="Partner 1"
            className="h-12 mx-auto grayscale"
          />
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/two-150x47.png"
            alt="Partner 2"
            className="h-12 mx-auto grayscale"
          />
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/three.png"
            alt="Partner 3"
            className="h-12 mx-auto grayscale"
          />
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/four.png"
            alt="Partner 4"
            className="h-12 mx-auto grayscale"
          />
          <img
            src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/five-150x61.png"
            alt="Partner 5"
            className="h-12 mx-auto grayscale"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
