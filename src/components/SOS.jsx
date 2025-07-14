import React from 'react';
import toast from 'react-hot-toast';

const SOS = () => {
  const handleSOSClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const locationLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const message = `🚨 Emergency! My live location: ${locationLink}`;

        // Open WhatsApp to choose contact manually
        const link = `https://wa.me/?text=${encodeURIComponent(message)}`;
        const newTab = window.open(link, '_blank');

        if (!newTab) {
          toast.error("❌ Please enable pop-ups!");
        } else {
          toast.success("📍 WhatsApp opened! Select a contact to send location.");
        }
      },
      (error) => {
        toast.error('❌ Location access denied!');
        console.error(error);
      }
    );
  };

  return (
    <div className='flex items-center justify-center py-20'>
      <button
        className='h-28 w-28 bg-[#ff2525] cursor-pointer text-white text-4xl rounded-full shadow-lg hover:scale-105 transition'
        onClick={handleSOSClick}
      >
        SOS
      </button>
    </div>
  );
};

export default SOS;
