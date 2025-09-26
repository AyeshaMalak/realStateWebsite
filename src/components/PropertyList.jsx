import React from "react";
import PropertyCard from "./PropertyCard";
import { properties, propertyTypes } from "../data/properties";


function PropertyList() {
  return (
    <section className="py-14 px-4 max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <p className="text-blue-500 font-semibold text-sm uppercase">Recent</p>
        <h2 className="text-4xl font-bold text-gray-800">Properties</h2>
        <p className="text-gray-500 mt-2">
          Check out some of our latest properties.
        </p>
      </div>

      {/* Top Row - 2 wide cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {properties.slice(0, 2).map((property, index) => (
          <div key={index} className="border border-gray-200">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>

      {/* Bottom Row - 3 smaller cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.slice(2, 5).map((property, index) => (
          <div key={index + 2} className="border border-gray-200">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PropertyList;
