// HomePage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ setIsUserAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: 'Male',
    prescription: '',
    allergies: '',
    address: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const existing = localStorage.getItem('userInfo');
    if (existing) {
      setIsUserAdded(true); // ✅ ensure state is updated if already registered
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.address) {
      alert('Please fill all required fields.');
      return;
    }

    const avatarURL = `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(
      formData.name
    )}`;

    const dataToSave = { ...formData, image: avatarURL };
    localStorage.setItem('userInfo', JSON.stringify(dataToSave));

    setIsUserAdded(true); // ✅ Update state in App.jsx immediately
    navigate('/');
  };

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center p-4 bg-white
    ">
      <h1 className=" text-3xl font-bold mb-6 text-center text-red-600">QuickHelp Registration</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 bg-white shadow-md p-6 rounded-lg"
      >
        <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="w-full border p-2 rounded" required />
        <select name="sex" value={formData.sex} onChange={handleChange} className="w-full border p-2 rounded">
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <textarea name="prescription" placeholder="Medical Prescription" value={formData.prescription} onChange={handleChange} className="w-full border p-2 rounded" />
        <textarea name="allergies" placeholder="Allergies (if any)" value={formData.allergies} onChange={handleChange} className="w-full border p-2 rounded" />
        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full border p-2 rounded" required />
        <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded w-full">Add Me</button>
      </form>
    </div>
  );
};

export default HomePage;
