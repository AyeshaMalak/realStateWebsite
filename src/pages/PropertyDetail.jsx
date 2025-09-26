import React, { useState } from 'react';
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Bed,
  Bath,
  Ruler,
  MapPin,
  Heart,
  Share2,
  Phone,
  Mail,
  User,
  Calendar,
  Car,
  Home,
  Zap,
  Wifi,
  Shield,
  Camera,
  Star,
  MessageCircle,
  Search,
  Menu,
  ChevronDown,
  Play,
  Download,
  Eye,
  BarChart3
} from 'lucide-react';

const PropertyDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
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
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    description: "Spacious and fabulous home in prime location. This executive style four bed, four bath home designed for luxury living. The property features modern amenities, beautiful landscaping, and is located in a quiet neighborhood with easy access to shopping and dining. Perfect for families looking for comfort and style in one of Miami's most desirable areas.",
    features: [
      "Central Air Conditioning",
      "Swimming Pool",
      "Hardwood Floors",
      "Fireplace",
      "Walk-in Closets",
      "Security System",
      "High-Speed Internet",
      "Garden"
    ],
    agent: {
      name: "Agent Name David",
      phone: "+1 123 456 7890",
      email: "david@realestate.com",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1"
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (


    <div>
      <header>
        <Navbar />
      </header>



      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{property.title}</h1>

          {/* Search Bar */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="Any Location"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900">
                  <option>Any Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Status</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900">
                  <option>Any Status</option>
                  <option>For Sale</option>
                  <option>For Rent</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <a href="#" className="hover:text-blue-600">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-blue-600">Properties</a>
          <span>/</span>
          <span className="text-gray-900">{property.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h2>
                  <p className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-red-500" />
                    {property.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    ${property.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">Property ID: {property.propertyId}</div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white bg-opacity-90 p-2 rounded hover:bg-opacity-100">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="bg-white bg-opacity-90 p-2 rounded hover:bg-opacity-100">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Image Thumbnails */}
              <div className="flex p-4 space-x-2 overflow-x-auto">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 ${index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
                      }`}
                  >
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Features */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <Bed className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold">{property.bedrooms}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <Bath className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold">{property.bathrooms}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <Ruler className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold">{property.area}</div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
                <div className="text-center">
                  <Car className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-gray-600">Garage</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{property.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Property Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Air Conditioning
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Swimming Pool
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Laundry Room
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Window Coverings
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Other Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Lawn
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Garden
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Garage
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Balcony
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Property Details Table */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-blue-700 border-b pb-2">Property Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
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
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-blue-50 px-4 py-3 rounded-lg hover:bg-blue-100 transition"
                  >
                    <span className="text-gray-600">{detail.label}:</span>
                    <span className="font-semibold text-blue-700">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plans */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Floor Plans</h3>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7n0w3Cd8r00aCNxuqdS-nalzpum2SjbKQmyWiyzIYiy06wTazXR15owWKy61yel7lp8&usqp=CAU"
                  alt="Floor Plan"
                  className="w-full h-64 object-contain"
                />
              </div>
            </div>

            {/* Energy Performance */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Energy Performance</h3>
              <div className="space-y-6">
                {/* Rating Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="text-center sm:text-left">Energy Efficiency Rating</span>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((letter, index) => (
                      <div
                        key={letter}
                        className={`w-8 h-8 flex items-center justify-center text-white text-sm font-bold rounded ${index < 3
                            ? 'bg-green-500'
                            : index < 5
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                          }`}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Score Circle */}
                <div className="flex justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full text-2xl font-bold">
                      92
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Energy Efficiency Score</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Similar Properties */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Similar Properties</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((item) => (
                  <div key={item} className="border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
                      alt="Similar Property"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">Villa on Grand Avenue</h4>
                      <p className="text-sm text-gray-600 mb-2">Miami, FL</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-600">$750,000</span>
                        <div className="flex space-x-2 text-sm text-gray-600">
                          <span>3 Bed</span>
                          <span>2 Bath</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-lg font-semibold">Agent Details</span>
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>

              <div className="text-center mb-4">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                />
                <h4 className="font-semibold">{property.agent.name}</h4>
                <p className="text-sm text-gray-600">Real Estate Agent</p>
              </div>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>Office: +1 123 456 7890</p>
                <p>Mobile: +1 123 456 7890</p>
                <p>Fax: +1 123 456 7890</p>
                <p>Email: {property.agent.email}</p>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 mb-2">
                Send Message
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 text-sm">
                  Call
                </button>
                <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 text-sm">
                  WhatsApp
                </button>
              </div>
            </div>

            {/* Mortgage Calculator */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Mortgage Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sale Price</label>
                  <input
                    type="text"
                    defaultValue={`$${property.price.toLocaleString()}`}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Down Payment</label>
                  <input
                    type="text"
                    defaultValue="$170,000"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
                  <input
                    type="text"
                    defaultValue="3.5"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Terms (Years)</label>
                  <input
                    type="text"
                    defaultValue="30"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Calculate
                </button>
                <div className="bg-gray-50 p-4 rounded text-center">
                  <p className="text-2xl font-bold text-blue-600">$3,034</p>
                  <p className="text-sm text-gray-600">Monthly Payment</p>
                </div>
              </div>
            </div>

            {/* Featured Properties */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-blue-700">Featured Properties</h3>
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  Featured
                </span>
              </div>

              <div className="space-y-5">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300"
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                        alt="Featured Property"
                        className="w-full h-40 object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                        For Sale
                      </span>
                    </div>

                    {/* Details */}
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Villa on Hollywood Boulevard
                      </h4>
                      <p className="text-sm text-gray-500 mb-3 flex items-center">
                        <span className="mr-1">📍</span> Miami, FL
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-blue-600">$825,000</span>
                        <div className="flex items-center space-x-4 text-gray-600 text-sm">
                          <span>🛏 4</span>
                          <span>🛁 3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetail;