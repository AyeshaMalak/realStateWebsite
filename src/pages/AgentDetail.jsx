import { Search, Phone, Mail, MessageSquare, ChevronRight, Star, User, Home, Building2, ShoppingBag, MapPin, Bed, Bath, Car, Calendar, Send } from 'lucide-react';
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { agents } from "../data/agents";
import { properties, propertyTypes } from "../data/properties";
import Footer from '../components/Footer'




const AgentDetail = () => {
  const { id } = useParams();
  const agent = agents.find((a) => a.id === parseInt(id));

  if (!agent) {
    return <h2 className="text-center text-red-500 mt-20">Agent not found</h2>;
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };


  const DonutChart = ({ title, data, color }) => (
    <div className="text-center">
      <div className="relative w-24 h-24 mx-auto mb-2">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${data.percentage * 2.51} 251`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-gray-900">{data.percentage}%</span>
        </div>
      </div>
      <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{data.label}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <Navbar/>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-16" style={{
        backgroundImage: 'url(https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Bedroom-e1642947949616.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Nathan James</h1>
          
          <div className="bg-white rounded-lg p-6 flex flex-wrap gap-4 items-end">
            <div className="flex-1 min-w-60">
              <label className="block text-gray-700 text-sm font-medium mb-2">Location</label>
              <select className="w-full p-3 border border-gray-300 rounded text-gray-700">
                <option>All Locations</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Miami</option>
              </select>
            </div>
            
            <div className="flex-1 min-w-60">
              <label className="block text-gray-700 text-sm font-medium mb-2">Property Status</label>
              <select className="w-full p-3 border border-gray-300 rounded text-gray-700">
                <option>Any</option>
                <option>For Sale</option>
                <option>For Rent</option>
                <option>Sold</option>
              </select>
            </div>
            
            <div className="flex-1 min-w-60">
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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-8">
          {/* Agent Details */}
          <div className="flex-1">
            {/* Agent Profile Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex gap-6">
                {/* Agent Photo */}
                <div className="flex-shrink-0">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                </div>

                {/* Agent Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
                      {agent.verified && (
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">Listed Properties</div>
                      <div className="text-2xl font-bold text-cyan-400">{agent.listedProperties}</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(agent.rating)}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {agent.description}
                  </p>

                  {/* Contact Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-600">Office:</span>
                        <span className="text-gray-900">{agent.office}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-600">Fax:</span>
                        <span className="text-gray-900">{agent.fax}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-600">Mobile:</span>
                        <span className="text-gray-900">{agent.mobile}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-600">WhatsApp:</span>
                        <span className="text-gray-900">{agent.whatsapp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress & Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Progress & Stats</h3>
              
              <div className="grid grid-cols-3 gap-8">
                <DonutChart 
                  title="Property Completed"
                  data={{ percentage: 85, label: "Property Sold" }}
                  color="#ef4444"
                />
                <DonutChart 
                  title="Property Type"
                  data={{ percentage: 70, label: "Villa Property" }}
                  color="#3b82f6"
                />
                <DonutChart 
                  title="Property Status"
                  data={{ percentage: 60, label: "Rent Property" }}
                  color="#8b5cf6"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-cyan-400 text-blue-900 px-6 py-3 rounded font-semibold hover:bg-cyan-300 flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* My Listings */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">My Listings</h3>
              
              <div className="space-y-6">
                {properties.map((property) => (
                  <div key={property.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-24 h-20 rounded object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                          {property.title}
                        </h4>
                        <div className="text-right">
                          <div className="text-lg font-bold text-cyan-400">{property.price}</div>
                          <div className="text-xs text-gray-500">For Sale</div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">{property.location}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Bed className="w-4 h-4" />
                          <span>{property.beds}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Bath className="w-4 h-4" />
                          <span>{property.baths}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Building2 className="w-4 h-4" />
                          <span>{property.area}</span>
                        </div>
                      </div>
                      
                      <div className="mt-2 text-xs text-gray-500">
                        {property.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-80">
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

    <Footer/>
    </div>
  );
};

export default AgentDetail;