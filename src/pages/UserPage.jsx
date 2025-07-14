// UserPage.jsx
import React, { useEffect, useState } from 'react';

const UserPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('userInfo');
    if (stored) {
      setUserInfo(JSON.parse(stored));
    }
  }, []);

  const handleEditClick = () => {
    setEditedData(userInfo);
    setEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const updatedUser = {
      ...editedData,
      image: `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(editedData.name)}`
    };
    setUserInfo(updatedUser);
    localStorage.setItem('userInfo', JSON.stringify(updatedUser));
    setEditing(false);
  };

  if (!userInfo) {
    return (
      <div className="p-4 text-center text-red-600">
        No user found. Go back to <a href="/" className="underline text-blue-600">Home</a> and fill the form.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Profile</h2>

      <div className="flex flex-col items-center space-y-4">
        <img
          src={userInfo.image}
          alt="User"
          className="w-32 h-32 rounded-full border object-cover"
        />

        <div className="text-left w-full space-y-1 text-gray-800">
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Age:</strong> {userInfo.age}</p>
          <p><strong>Sex:</strong> {userInfo.sex}</p>
          <p><strong>Prescription:</strong> {userInfo.prescription || 'None'}</p>
          <p><strong>Allergies:</strong> {userInfo.allergies || 'None'}</p>
          <p><strong>Address:</strong> {userInfo.address}</p>
        </div>

        <button
          onClick={handleEditClick}
          className="mt-4 bg-[#ff2525] hover:bg-[#ff2525c5] text-white px-4 py-2 rounded"
        >
          Update Info
        </button>
      </div>

      {/* Popup Form */}
      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-[90%] max-w-md">
            <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>

            <input
              name="name"
              value={editedData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              name="age"
              type="number"
              value={editedData.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-full border p-2 mb-3 rounded"
            />
            <select
              name="sex"
              value={editedData.sex}
              onChange={handleChange}
              className="w-full border p-2 mb-3 rounded"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <textarea
              name="prescription"
              value={editedData.prescription}
              onChange={handleChange}
              placeholder="Medical Prescription"
              className="w-full border p-2 mb-3 rounded"
            />
            <textarea
              name="allergies"
              value={editedData.allergies}
              onChange={handleChange}
              placeholder="Allergies (if any)"
              className="w-full border p-2 mb-3 rounded"
            />
            <textarea
              name="address"
              value={editedData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border p-2 mb-3 rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditing(false)}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
