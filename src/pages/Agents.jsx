import { Search, ChevronRight, Star } from 'lucide-react';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Agent = () => {
  const agents = [
    {
      id: 1,
      name: "Nathan James",
      verified: true,
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-1-1-150x150.jpg",
      rating: 4.5,
      listedProperties: 4,
      description:
        "Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes...",
      office: "1-222-333-4444",
      mobile: "1-234-456-7893",
      fax: "1-333-444-5555",
      whatsapp: "1-222-333-4433",
      email: "nathan@propertythemes.com",
    },
    {
      id: 2,
      name: "Mellissa William",
      verified: true,
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      rating: 4.0,
      listedProperties: 4,
      description:
        "Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures...",
      office: "1-222-333-4444",
      mobile: "1-234-456-7892",
      fax: "1-333-444-5555",
      whatsapp: "1-222-333-4432",
      email: "mellissa@propertythemes.com",
    },
    {
      id: 3,
      name: "Alice Brian",
      verified: false,
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      rating: 3.5,
      listedProperties: 3,
      description:
        "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital...",
      office: "1-222-333-4444",
      mobile: "1-234-456-7891",
      fax: "1-333-444-5000",
      whatsapp: "1-234-567-8909",
      email: "alice@propertythemes.com",
    },
    {
      id: 4,
      name: "John David",
      verified: true,
      image:
        "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-2-150x150.jpg",
      rating: 4.8,
      listedProperties: 5,
      description:
        "Holistically network cross-media information without cross-media value. Quickly maximize timely deliverables...",
      office: "1-222-333-4444",
      mobile: "1-234-456-7890",
      fax: "1-333-444-5555",
      whatsapp: "1-234-567-8908",
      email: "john@propertythemes.com",
    },
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
    { name: "Villa", count: 14 },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50"
        />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header>
        <Navbar />
      </header>

      {/* Hero Section */}
      <section
        className="bg-blue-950 text-white py-16"
        style={{
          backgroundImage:
            "url(https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Bedroom-e1642947949616.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Our Agents</h1>

         <div className="bg-white rounded-lg p-6 flex flex-col gap-4 md:flex-row md:flex-wrap md:items-end">
  {/* Location */}
  <div className="flex-1 min-w-[240px]">
    <label className="block text-gray-700 text-sm font-medium mb-2">
      Location
    </label>
    <select className="w-full p-3 border border-gray-300 rounded text-gray-700">
      <option>All Locations</option>
      <option>New York</option>
      <option>Los Angeles</option>
      <option>Miami</option>
    </select>
  </div>

  {/* Property Status */}
  <div className="flex-1 min-w-[240px]">
    <label className="block text-gray-700 text-sm font-medium mb-2">
      Property Status
    </label>
    <select className="w-full p-3 border border-gray-300 rounded text-gray-700">
      <option>Any</option>
      <option>For Sale</option>
      <option>For Rent</option>
      <option>Sold</option>
    </select>
  </div>

  {/* Property Type */}
  <div className="flex-1 min-w-[240px]">
    <label className="block text-gray-700 text-sm font-medium mb-2">
      Property Type
    </label>
    <select className="w-full p-3 border border-gray-300 rounded text-gray-700">
      <option>All Types</option>
      <option>House</option>
      <option>Apartment</option>
      <option>Condo</option>
    </select>
  </div>

  {/* Search Button */}
  <button className="bg-cyan-400 text-blue-900 px-8 py-3 rounded font-semibold hover:bg-cyan-300 flex items-center justify-center space-x-2 w-full md:w-auto">
    <Search className="w-4 h-4" />
    <span>Search</span>
  </button>
</div>
</div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8 flex-1">
        {/* Agents List */}
        <div className="flex-1">
          <div className="space-y-8">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Agent Photo */}
                  <div className="flex-shrink-0 flex justify-center md:justify-start">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-30 h-40 rounded-lg object-cover"
                    />
                  </div>

                  {/* Agent Info */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                          {agent.name}
                        </h3>
                        {agent.verified && (
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>

                      <div className="text-left md:text-right">
                        <div className="text-sm text-gray-600 mb-1">
                          Listed Properties
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-cyan-400">
                          {agent.listedProperties}
                        </div>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">Office:</span>
                          <span className="text-gray-900">{agent.office}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">WhatsApp:</span>
                          <span className="text-gray-900">
                            {agent.whatsapp}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">Mobile:</span>
                          <span className="text-gray-900">{agent.mobile}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">Email:</span>
                          <span className="text-gray-900">{agent.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* View Listings Link */}
                    <div className="mt-4 text-right">
                      <Link
                        to={`/agent/${agent.id}`}
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                      >
                        View My Listings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-80">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Property Types
            </h3>
            <div className="space-y-3">
              {propertyTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  <a
                    href="#"
                    className="text-gray-700 hover:text-blue-600 flex items-center space-x-2"
                  >
                    <ChevronRight className="w-3 h-3" />
                    <span>{type.name}</span>
                  </a>
                  <span className="text-gray-500 text-sm">
                    ({type.count})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default Agent;
