import React, { useState } from "react";

function SearchBar() {
  const [price, setPrice] = useState([2500, 6950000]);

  return (
    <div className="w-11/12 max-w-6xl mx-auto bg-white shadow-md rounded-md p-6 mt-8">
      {/* Row 1 - Main Dropdowns + Search */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <select className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 w-full">
          <option>All Main Locations</option>
          <option>Miami</option>
          <option>New York</option>
          <option>Los Angeles</option>
        </select>

        <select className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 w-full">
          <option>All Status</option>
          <option>For Sale</option>
          <option>For Rent</option>
        </select>

        <select className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 w-full">
          <option>All Types</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>House</option>
        </select>

        <button className="bg-blue-600 text-white rounded px-4 py-2 text-sm hover:bg-blue-700 transition w-full">
          🔍 Search
        </button>
      </div>

      {/* Row 2 - Price Range + Beds/Baths/Garages */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Price Range */}
        <div>
          <p className="text-sm text-gray-700">
            From{" "}
            <span className="text-blue-600 font-semibold">
              ${price[0].toLocaleString()}
            </span>{" "}
            To{" "}
            <span className="text-blue-600 font-semibold">
              ${price[1].toLocaleString()}
            </span>
          </p>
          <div className="flex flex-col space-y-2 mt-2">
            <input
              type="range"
              min="2500"
              max="6950000"
              step="1000"
              value={price[0]}
              onChange={(e) => setPrice([+e.target.value, price[1]])}
              className="w-full accent-blue-600"
            />
            <input
              type="range"
              min="2500"
              max="6950000"
              step="1000"
              value={price[1]}
              onChange={(e) => setPrice([price[0], +e.target.value])}
              className="w-full accent-blue-600"
            />
          </div>
        </div>

        {/* Beds / Baths / Garages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <select className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 w-full">
            <option>All Beds</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
          </select>

          <select className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 w-full">
            <option>All Baths</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
          </select>

          <select className="border border-gray-200 rounded px-3 py-2 text-sm text-gray-600 w-full">
            <option>All Garages</option>
            <option>1+</option>
            <option>2+</option>
          </select>
        </div>
      </div>

      {/* Extra features */}
      <p className="text-blue-600 text-sm mt-4 cursor-pointer hover:underline">
        + Looking for certain features
      </p>
    </div>
  );
}

export default SearchBar;
