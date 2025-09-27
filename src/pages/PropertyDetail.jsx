import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { 
  ChevronLeft, ChevronRight, Bed, Bath, Ruler, MapPin, Heart, Share2, Car
} from 'lucide-react';

const PropertyDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();

  const property = {
    id: 1,
    title: "Home in Merrick Way",
    location: "Merrick Way, Miami, FL",
    bedrooms: 4,
    bathrooms: 3,
    area: "3200",
    price: 850000,
    propertyType: "Single Family Home",
    yearBuilt: 2018,
    lotSize: "8,500 sq ft",
    parking: "2 Car Garage",
    propertyId: "RH-2019-04",
    images: [
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg",
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg"
    ],
    description: "Spacious and fabulous home in prime location. Perfect for families looking for comfort and style in one of Miami's most desirable areas.",
    features: ["Central Air Conditioning","Swimming Pool","Hardwood Floors","Fireplace","Walk-in Closets","Security System","High-Speed Internet","Garden"],
    agent: {
      name: "Agent Name David",
      phone: "+1 123 456 7890",
      email: "david@realestate.com",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    }
  };

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{property.title}</h1>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input type="text" placeholder="Any Location" className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900">
                  <option>Any Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Status</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900">
                  <option>Any Status</option>
                  <option>For Sale</option>
                  <option>For Rent</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-1">
          <a href="#" className="hover:text-blue-600">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-blue-600">Properties</a>
          <span>/</span>
          <span className="text-gray-900">{property.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            {/* Property Header */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{property.title}</h2>
                <p className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-1 text-red-500" /> {property.location}
                </p>
              </div>
              <div className="mt-4 sm:mt-0 text-left sm:text-right">
                <div className="text-2xl font-bold text-blue-600">${property.price.toLocaleString()}</div>
                <div className="text-sm text-gray-500">Property ID: {property.propertyId}</div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative w-full h-64 sm:h-96 md:h-[500px]">
                <img src={property.images[currentImageIndex]} alt={property.title} className="w-full h-full object-cover"/>
                <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75">
                  <ChevronLeft className="w-5 h-5"/>
                </button>
                <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75">
                  <ChevronRight className="w-5 h-5"/>
                </button>
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button className="bg-white bg-opacity-90 p-2 rounded hover:bg-opacity-100"><Heart className="w-4 h-4"/></button>
                  <button className="bg-white bg-opacity-90 p-2 rounded hover:bg-opacity-100"><Share2 className="w-4 h-4"/></button>
                </div>
              </div>
              <div className="flex p-2 space-x-2 overflow-x-auto">
                {property.images.map((img, idx) => (
                  <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 ${currentImageIndex===idx ? 'border-blue-500':'border-transparent'}`}>
                    <img src={img} alt={`thumb ${idx}`} className="w-full h-full object-cover"/>
                  </button>
                ))}
              </div>
            </div>

            {/* Property Features */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div><Bed className="w-6 h-6 mx-auto mb-1 text-blue-600"/><div className="font-bold">{property.bedrooms}</div><div className="text-sm text-gray-600">Bedrooms</div></div>
              <div><Bath className="w-6 h-6 mx-auto mb-1 text-blue-600"/><div className="font-bold">{property.bathrooms}</div><div className="text-sm text-gray-600">Bathrooms</div></div>
              <div><Ruler className="w-6 h-6 mx-auto mb-1 text-blue-600"/><div className="font-bold">{property.area}</div><div className="text-sm text-gray-600">Sq Ft</div></div>
              <div><Car className="w-6 h-6 mx-auto mb-1 text-blue-600"/><div className="font-bold">2</div><div className="text-sm text-gray-600">Garage</div></div>
            </div>

            {/* Description + Features */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 space-y-4">
              <h3 className="text-xl font-semibold">Description</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{property.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Property Features</h4>
                  <ul className="space-y-1 text-sm">
                    {property.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Property Details Table */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2">Property Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {[
                  { label: "Property ID", value: property.propertyId },
                  { label: "Property Type", value: property.propertyType },
                  { label: "Property Status", value: "For Sale" },
                  { label: "Property Price", value: `$${property.price.toLocaleString()}` },
                  { label: "Bedrooms", value: property.bedrooms },
                  { label: "Bathrooms", value: property.bathrooms },
                  { label: "Garage", value: "2 Cars" },
                  { label: "Property Size", value: `${property.area} Sq Ft` },
                  { label: "Year Built", value: property.yearBuilt },
                ].map((detail, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded-lg hover:bg-blue-100 transition">
                    <span className="text-gray-600">{detail.label}:</span>
                    <span className="font-semibold text-blue-700">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plans */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h3 className="text-xl font-semibold mb-4">Floor Plans</h3>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtcWYxkVxwr0yM9z3Q&s=0&h=300" alt="Floor Plan" className="w-full h-auto"/>
              </div>
            </div>

            {/* Energy Performance */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h3 className="text-xl font-semibold mb-4">Energy Performance</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-green-500 text-white flex items-center justify-center rounded-lg font-bold">A+</div>
                <p className="text-gray-700 text-sm">This property has excellent energy efficiency, helping you save on utility costs and reduce environmental impact.</p>
              </div>
            </div>

            {/* Mortgage Calculator */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 space-y-3">
              <h3 className="text-xl font-semibold mb-4">Mortgage Calculator</h3>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="number" placeholder="Loan Amount" className="px-3 py-2 border rounded"/>
                <input type="number" placeholder="Interest Rate (%)" className="px-3 py-2 border rounded"/>
                <input type="number" placeholder="Term (years)" className="px-3 py-2 border rounded"/>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Calculate</button>
              </form>
            </div>

            {/* Similar Properties */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h3 className="text-xl font-semibold mb-4">Similar Properties</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[1,2,3].map((p) => (
                  <div key={p} className="border rounded-lg overflow-hidden hover:shadow-md transition">
                    <img src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg" alt="Similar" className="w-full h-40 object-cover"/>
                    <div className="p-3">
                      <h4 className="font-semibold">Property {p}</h4>
                      <p className="text-sm text-gray-600">$750,000</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-80 flex-shrink-0 space-y-6">
            {/* Agent Card */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 text-center">
              <img src={property.agent.image} alt={property.agent.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"/>
              <h4 className="font-semibold">{property.agent.name}</h4>
              <p className="text-sm text-gray-600 mb-2">Real Estate Agent</p>
              <p className="text-sm text-gray-600">{property.agent.phone}</p>
              <p className="text-sm text-gray-600">{property.agent.email}</p>
              <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send Message</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
