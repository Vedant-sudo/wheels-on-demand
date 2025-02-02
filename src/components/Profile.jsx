import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile({ user }) {
  const [userData, setUserData] = useState(user);
  const [editing, setEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({ ...user });

  useEffect(() => {
    setUserData(user);
    setUpdatedData(user);
  }, [user]);

  const handleUpdate = async () => {
    try {
      const response = await axios.put("http://localhost:8080/api/user/update", updatedData);
      setUserData(response.data);
      setEditing(false);
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-2xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {/* Profile Picture */}
        <div className="flex justify-center mb-4">
          <img
            src={userData.profilePic || "../public/images/dummy-profile.webp"}
            alt="Profile"
            className="w-24 h-24 rounded-full border border-gray-300"
          />
        </div>

        {/* Account Details */}
        <h2 className="text-xl font-bold text-center mb-4">Account Details</h2>
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Password:</strong> ******</p>

        {/* Personal Details */}
        <h2 className="text-xl font-bold mt-6">Personal Details</h2>
        {editing ? (
          <input
            type="text"
            value={updatedData.firstname}
            onChange={(e) => setUpdatedData({ ...updatedData, firstname: e.target.value })}
            className="border rounded p-2 w-full mt-2"
          />
        ) : (
          <p><strong>First Name:</strong> {userData.firstname}</p>
        )}
        <p><strong>Middle Name:</strong> {userData.middlename || "N/A"}</p>
        <p><strong>Last Name:</strong> {userData.lastname}</p>

        {/* Address Section */}
        <h2 className="text-xl font-bold mt-6">Address</h2>
        <p><strong>House No:</strong> {userData.address.houseNo}</p>
        <p><strong>Building:</strong> {userData.address.building}</p>
        <p><strong>Street:</strong> {userData.address.street}</p>
        <p><strong>Area:</strong> {userData.address.area}</p>
        <p><strong>City:</strong> {userData.address.city}</p>
        <p><strong>State:</strong> {userData.address.state}</p>
        <p><strong>Zip Code:</strong> {userData.address.zipCode}</p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          {editing ? (
            <button onClick={handleUpdate} className="px-4 py-2 bg-green-600 text-white rounded-lg">Save</button>
          ) : (
            <button onClick={() => setEditing(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Update</button>
          )}

          <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg">Rent Vehicle</button>

          {userData.role === "Owner" && (
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">List Vehicle</button>
          )}
        </div>
      </div>
    </div>
  );
}
