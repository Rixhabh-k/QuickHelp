// Guide.jsx
import React from 'react';
import guides from '../data/guide'; // adjust path accordingly
import GuideCard from '../components/GuideCard';

const Guide = () => {
  return (
    <div className="min-h-screen px-4 py-8 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-700">Emergency Guides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((item) => (
          <GuideCard
            key={item.id}
            heading={item.heading}
            image={item.image}
            points={item.points}
          />
        ))}
      </div>
    </div>
  );
};

export default Guide;
