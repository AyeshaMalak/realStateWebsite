import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import { Link } from "react-router-dom";

import {
  Search,
  Bed,
  Bath,
  Ruler,
  MapPin,
  Heart,
  Share2,
  ChevronRight,
  Calendar
} from 'lucide-react';

const PropertiesPage = ({ onPropertySelect }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 1,
      title: "Home in Coral Gables",
      location: "Coconut Grove, Miami, FL",
      price: 540000,
      beds: 4,
      baths: 3,
      area: "4500 sq ft",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      status: "For Sale",
      yearBuilt: 2018,
      description: "Spacious and fabulous home in prime location. This executive style four bed, four bath home designed for luxury living.",
      agent: "Nathan James"
    },
    {
      id: 2,
      title: "Villa in Coral Gables",
      location: "Coconut Grove, Miami, FL",
      price: 825000,
      beds: 5,
      baths: 4,
      area: "5200 sq ft",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      status: "For Sale",
      yearBuilt: 2019,
      description: "Beautiful villa with modern amenities and stunning architecture. Perfect for luxury living with spacious rooms.",
      agent: "Mellissa William"
    },
    {
      id: 3,
      title: "Building Opposite to Doral Academy",
      location: "Doral, Miami, FL",
      price: 1540000,
      beds: 6,
      baths: 5,
      area: "6800 sq ft",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      status: "For Sale",
      yearBuilt: 2020,
      description: "Luxury building with premium finishes and excellent location opposite to Doral Academy. Modern design throughout.",
      agent: "Alice Brian"
    },
    {
      id: 4,
      title: "Single House at Doral & Pinecrest",
      location: "Pinecrest, Miami, FL",
      price: 750000,
      beds: 4,
      baths: 3,
      area: "4200 sq ft",
      image: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      status: "For Sale",
      yearBuilt: 2017,
      description: "Charming single house in prestigious Pinecrest area. Features beautiful landscaping and modern interior design.",
      agent: "John David"
    }
  ];

  const featuredProperties = [
    {
      id: 5,
      title: "Home in Merrick Way",
      location: "Merrick Way, Miami, FL",
      price: 850000,
      beds: 4,
      baths: 3,
      area: "3200 sq ft",
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
      status: "Featured",
    },
    {
      id: 6,
      title: "Villa on Grand Avenue",
      location: "Coconut Grove, Miami, FL",
      price: 1200000,
      beds: 5,
      baths: 4,
      area: "5500 sq ft",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1",
      status: "Featured",
    }
  ];

  const propertyTypes = [
    { name: "Commercial", count: 12 },
    { name: "Office", count: 8 },
    { name: "Shop", count: 15 },
    { name: "Residential", count: 45 },
    { name: "Apartment", count: 23 },
    { name: "Apartment Building", count: 7 },
    { name: "Condominium", count: 18 },
    { name: "Single Family", count: 32 },
    { name: "Villa", count: 14 }
  ];

  const handleReadMore = (property) => {
    onPropertySelect(property);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section with Filters */}
      <section
        className="relative bg-cover bg-center text-white py-8"
        style={{
          backgroundImage:
            "url(https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Bedroom-e1642947949616.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-blue-950 bg-opacity-70"></div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 space-y-3 md:space-y-0">
            <h1 className="text-3xl font-bold">List Layout</h1>
            <div className="flex items-center space-x-2">
              <button className="bg-blue-900 px-3 py-1 rounded text-sm">List</button>
              <button className="bg-blue-900 px-3 py-1 rounded text-sm">Grid</button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row flex-wrap gap-4">
            <div className="flex-1 w-full md:min-w-60">
              <label className="block text-gray-700 text-sm font-medium mb-2">Location</label>
              <select className="w-full p-3 border border-gray-300 rounded text-gray-700">
                <option>All Locations</option>
                <option>Miami</option>
                <option>Coral Gables</option>
                <option>Coconut Grove</option>
              </select>
            </div>
            <div className="flex-1 w-full md:min-w-60">
              <label className="block text-gray-700 text-sm font-medium mb-2">Property Status</label>
              <select className="w-full p-3 border border-gray-300 rounded text-gray-700">
                <option>Any</option>
                <option>For Sale</option>
                <option>For Rent</option>
                <option>Sold</option>
              </select>
            </div>
            <div className="flex-1 w-full md:min-w-60">
              <label className="block text-gray-700 text-sm font-medium mb-2">Property Type</label>
              <select className="w-full p-3 border border-gray-300 rounded text-gray-700">
                <option>All Types</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Condo</option>
              </select>
            </div>
            <button className="bg-cyan-400 text-blue-900 px-8 py-3 rounded font-semibold hover:bg-cyan-300 flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Properties List */}
          <div className="flex-1">
            <p className="text-gray-600 mb-6">Found 4 properties</p>

            <div className="space-y-6">
              {properties.map((property) => (
                <div key={property.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="w-full md:w-64 h-48 relative">
                      <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                      <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                        {property.status}
                      </div>
                      <div className="absolute top-3 right-3 flex space-x-1">
                        <button className="bg-white bg-opacity-80 p-1 rounded hover:bg-opacity-100">
                          <Heart className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="bg-white bg-opacity-80 p-1 rounded hover:bg-opacity-100">
                          <Share2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-1 hover:text-blue-600 cursor-pointer">
                            {property.title}
                          </h3>
                          <p className="text-gray-600 flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {property.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">
                            ${property.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">For Sale</div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{property.description}</p>
                      <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600">
                        <span className="flex items-center space-x-1"><Bed className="w-4 h-4" /> <span>{property.beds}</span></span>
                        <span className="flex items-center space-x-1"><Bath className="w-4 h-4" /> <span>{property.baths}</span></span>
                        <span className="flex items-center space-x-1"><Ruler className="w-4 h-4" /> <span>{property.area}</span></span>
                        <span className="flex items-center space-x-1"><Calendar className="w-4 h-4" /> <span>{property.yearBuilt}</span></span>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="text-sm text-gray-600">
                          <span>Agent: </span>
                          <span className="font-medium text-gray-900">{property.agent}</span>
                        </div>
                        <button onClick={() => handleReadMore(property)} className="text-blue-600 hover:text-blue-800 flex items-center space-x-1 text-sm font-medium">
                          <Link to={`/property/${property.id}`}>
                            <button className="text-blue-600 hover:text-blue-800 flex items-center space-x-1 text-sm font-medium">
                              <span>Read More</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </Link>
                        
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80">
            {/* Featured Properties */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Properties</h3>
              <div className="space-y-4">
                {featuredProperties.map((property) => (
                  <div key={property.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <img src={property.image} alt={property.title} className="w-full h-32 object-cover" />
                    <div className="p-3">
                      <h4 className="font-medium text-gray-900 mb-1 text-sm">{property.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">{property.location}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-blue-600">${property.price.toLocaleString()}</div>
                        <div className="flex items-center space-x-2 text-xs text-gray-600">
                          <span className="flex items-center"><Bed className="w-3 h-3 mr-1" />{property.beds}</span>
                          <span className="flex items-center"><Bath className="w-3 h-3 mr-1" />{property.baths}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Types */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Types</h3>
              <div className="space-y-3">
                {propertyTypes.map((type, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2">
                      <ChevronRight className="w-3 h-3" />
                      <span>{type.name}</span>
                    </a>
                    <span className="text-gray-500 text-sm">({type.count})</span>
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

export default PropertiesPage;
