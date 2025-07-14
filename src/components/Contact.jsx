import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaTrash } from 'react-icons/fa';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Load from localStorage when component mounts
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('emergencyContacts'));
    if (stored) setContacts(stored);
  }, []);

  // Save to localStorage every time contacts change
  useEffect(() => {
    localStorage.setItem('emergencyContacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAdd = () => {
    if (name.trim() !== '' && number.trim() !== '') {
      setContacts([...contacts, { name: name.trim(), number: number.trim() }]);
      setName('');
      setNumber('');
    }
  };

  const handleRemove = (index) => {
    const updated = [...contacts];
    updated.splice(index, 1);
    setContacts(updated);
  };

  return (
    <div className="emergency-contacts-container bg-white p-4 rounded shadow-md w-full max-w-md">
      <h2 className="text-lg font-bold mb-2">Emergency Contacts</h2>

      {/* Contact List Scrollable */}
      <div className="max-h-60 overflow-y-auto mb-4 pr-2">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b py-2 gap-3"
          >
            <div className="flex items-center gap-3">
              {/* Avatar (Dicebear) */}
              <img
                src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${contact.name}`}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{contact.name}</p>
                <p className="text-sm text-gray-600">{contact.number}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Call Button */}
              <a
                href={`tel:${contact.number}`}
                className="text-gray-600 hover:text-green-500"
                title="Call"
              >
                <FaPhoneAlt />
              </a>

              {/* Delete Button */}
              <button
                onClick={() => handleRemove(index)}
                className="text-gray-600 hover:text-red-500"
                title="Delete"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="flex flex-col md:flex-row items-center gap-2">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1 rounded w-full md:w-1/2"
        />
        <input
          type="number"
          placeholder="Enter phone number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border px-2 py-1 rounded w-full md:w-1/2"
        />
        <button
          onClick={handleAdd}
          className="bg-[#ff2525] text-white font-semibold px-4 py-[6px] rounded hover:bg-red-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Contact;
