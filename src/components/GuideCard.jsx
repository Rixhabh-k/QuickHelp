// GuideCard.jsx
import React from 'react';

const GuideCard = ({ heading, image, points }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-3">
      <h3 className="text-xl font-semibold text-red-600">{heading}</h3>
      <img src={image} alt={heading} className="w-full h-40 object-cover rounded" />
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuideCard;
