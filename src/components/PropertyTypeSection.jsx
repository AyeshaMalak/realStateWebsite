import React from 'react';
import TypeCard from './TypeCard';

const types = [
  {
    title: 'Single Family',
    count: 6,
    image: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2022/01/pexels-emre-can-acer-2079249.jpg',
  },
  {
    title: 'Shop',
    count: 1,
    image: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2022/01/pexels-caeli-team-3714960.jpg',
  },
  {
    title: 'Apartment',
    count: 3,
    image: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2022/01/pexels-rachel-claire-4857774.jpg',
  },
  {
    title: 'Villa',
    count: 6,
    image: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2022/01/denys-striyeshyn-wJ7yGwz2-00-unsplash-scaled-1-820x1024.jpg',
  },
];

const PropertyTypeSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-6">
      {types.slice(0, 2).map((item, idx) => (
        <TypeCard key={idx} {...item} />
      ))}

      <div className="flex items-center justify-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Configure and customize stuff around your website{' '}
            <span className="text-blue-600">without going into code</span>.
          </h2>
          <p className="text-sm text-gray-600">
            RealHome theme gracefully facilitates real estate business owners by making property management easier & affordable.
          </p>
        </div>
      </div>

      {types.slice(2).map((item, idx) => (
        <TypeCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default PropertyTypeSection;
