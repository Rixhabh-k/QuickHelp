import React, { useEffect, useState } from 'react';

const Location = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    address: '',
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await res.json();

      setLocation({
        latitude,
        longitude,
        address: data.display_name || 'Address not found',
      });
    });
  }, []);

  const formatCoords = (coord, type) => {
    const abs = Math.abs(coord).toFixed(4);
    const dir = type === 'lat' ? (coord >= 0 ? 'N' : 'S') : coord >= 0 ? 'E' : 'W';
    return `${abs}° ${dir}`;
  };

  const handleShare = () => {
    const locationText = `I'm here.: ${location.address} (${location.latitude}, ${location.longitude})`;

    if (navigator.share) {
      navigator
        .share({
          title: 'My Location',
          text: locationText,
        })
        .catch((err) => console.error('Share failed:', err));
    } else {
      // fallback: copy to clipboard
      navigator.clipboard.writeText(locationText);
      alert('Location copied to clipboard!');
    }
  };

  return (
    <div className="location-container">
      <div className="location-box bg-white  relative p-4 rounded-md">
        <h1 className="location-heading text-xl font-semibold mb-2">Your Location</h1>

        {/* Share Location Button */}
        <button
          onClick={handleShare}
          className="absolute top-4 right-4 bg-[#ff2525] text-white px-3 py-2 rounded text-sm shadow font-bold"
        >
          Share Location
        </button>

        <div className="location-details">
          {location.latitude && location.longitude ? (
            <>
              <p className="location-coords">
                {formatCoords(location.latitude, 'lat')}, {formatCoords(location.longitude, 'lon')}
              </p>
              <p className="location-address">{location.address}</p>
            </>
          ) : (
            <p className="location-loading">Fetching location...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;
