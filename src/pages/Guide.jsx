import React, { useState } from 'react';
import guides from '../data/guide';
import GuideCard from '../components/GuideCard';

const Guide = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter logic
  const filteredGuides = guides.filter((item) => {
    const lowerSearch = searchTerm.toLowerCase();
    const inHeading = item.heading.toLowerCase().includes(lowerSearch);
    const inPoints = item.points.some(point => point.toLowerCase().includes(lowerSearch));
    return inHeading || inPoints;
  });

  return (
    <div className="min-h-screen px-4 py-8 bg-white">
      <h2 className="text-3xl font-bold mb-4 text-center text-[#ff2525]">Emergency Guides</h2>

      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search guides..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.length > 0 ? (
          filteredGuides.map((item) => (
            <GuideCard
              key={item.id}
              heading={item.heading}
              image={item.image}
              points={item.points}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No guides found.</p>
        )}
      </div>
    </div>
  );
};

export default Guide;
