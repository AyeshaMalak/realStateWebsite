import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
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
    description: "Spacious and fabulous home in prime location. This executive style four bed, four bath home designed for luxury living. The property features modern amenities, beautiful landscaping, and is located in a quiet neighborhood with easy access to shopping and dining. Perfect for families looking for comfort and style in one of Miami's most desirable areas.",
    features: [
      "Central Air Conditioning", "Swimming Pool", "Hardwood Floors", "Fireplace",
      "Walk-in Closets", "Security System", "High-Speed Internet", "Garden"
    ],
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
      <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">{property.title}</h1>
          {/* Search Bar */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input type="text" placeholder="Location" className="w-full px-3 py-2 border rounded"/>
              <select className="w-full px-3 py-2 border rounded">
                <option>Any Type</option>
                <option>House</option>
                <option>Apartment</option>
              </select>
              <select className="w-full px-3 py-2 border rounded">
                <option>Any Status</option>
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-600">
        <a href="#" className="hover:text-blue-600">Home</a> / 
        <a href="#" className="hover:text-blue-600"> Properties</a> / 
        <span>{property.title}</span>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          {/* Property Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h2>
              <p className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-red-500"/> {property.location}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">${property.price.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Property ID: {property.propertyId}</div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-64 md:h-[500px]">
              <img src={property.images[currentImageIndex]} alt={property.title} className="w-full h-full object-cover"/>
              <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75">
                <ChevronLeft className="w-6 h-6"/>
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75">
                <ChevronRight className="w-6 h-6"/>
              </button>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-white bg-opacity-90 p-2 rounded hover:bg-opacity-100"><Heart className="w-5 h-5"/></button>
                <button className="bg-white bg-opacity-90 p-2 rounded hover:bg-opacity-100"><Share2 className="w-5 h-5"/></button>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex p-4 space-x-2 overflow-x-auto">
              {property.images.map((img, idx) => (
                <button key={idx} onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 ${idx === currentImageIndex ? 'border-blue-500' : 'border-transparent'}`}>
                  <img src={img} alt={`View ${idx+1}`} className="w-full h-full object-cover"/>
                </button>
              ))}
            </div>
          </div>

          {/* Features & Details */}
          <div className="bg-white rounded-lg shadow-sm p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><Bed className="w-8 h-8 mx-auto mb-2 text-blue-600"/><div className="text-2xl font-bold">{property.bedrooms}</div><div className="text-sm text-gray-600">Bedrooms</div></div>
            <div><Bath className="w-8 h-8 mx-auto mb-2 text-blue-600"/><div className="text-2xl font-bold">{property.bathrooms}</div><div className="text-sm text-gray-600">Bathrooms</div></div>
            <div><Ruler className="w-8 h-8 mx-auto mb-2 text-blue-600"/><div className="text-2xl font-bold">{property.area}</div><div className="text-sm text-gray-600">Sq Ft</div></div>
            <div><Car className="w-8 h-8 mx-auto mb-2 text-blue-600"/><div className="text-2xl font-bold">2</div><div className="text-sm text-gray-600">Garage</div></div>
          </div>

          {/* Description + Features */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Description</h3>
            <p className="text-gray-700 mb-4">{property.description}</p>
            <h4 className="font-semibold mb-2">Property Features</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">{property.features.map((f,i)=><li key={i}>{f}</li>)}</ul>
          </div>

          {/* Floor Plans */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Floor Plans</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7n0w3Cd8r00aCNxuqdS-nalzpum2SjbKQmyWiyzIYiy06wTazXR15owWKy61yel7lp8&usqp=CAU" alt="Floor Plan" className="w-full h-auto"/>
          </div>

          {/* Energy Performance */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="w-20 h-20 bg-green-500 text-white flex items-center justify-center rounded-lg font-bold">A+</div>
            <p className="text-gray-700 text-sm">Excellent energy efficiency to save utility costs and reduce environmental impact.</p>
          </div>

          {/* Mortgage Calculator */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Mortgage Calculator</h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="number" placeholder="Loan Amount" className="px-3 py-2 border rounded"/>
              <input type="number" placeholder="Interest Rate (%)" className="px-3 py-2 border rounded"/>
              <input type="number" placeholder="Term (years)" className="px-3 py-2 border rounded"/>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Calculate</button>
            </form>
          </div>

          {/* Similar Properties */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Similar Properties</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1,2,3].map((p)=>(
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

          {/* Mobile Agent Card */}
          <div className="lg:hidden bg-white rounded-lg shadow-sm p-4 sm:p-6 text-center">
            <img src={property.agent.image} alt={property.agent.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"/>
            <h4 className="font-semibold">{property.agent.name}</h4>
            <p className="text-sm text-gray-600">{property.agent.phone}</p>
            <p className="text-sm text-gray-600">{property.agent.email}</p>
            <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send Message</button>
          </div>
        </div>

        {/* Right Sidebar - Desktop Only */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-24 space-y-6">
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
              
