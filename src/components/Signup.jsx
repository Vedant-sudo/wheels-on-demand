import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    houseNo: "",
    building: "",
    street: "",
    area: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", formData);

      if (response.data) {
        console.log("Signup Successful:", response.data);
        navigate("/profile"); // Redirect to Profile page
      }
    } catch (error) {
      setError("Signup failed! Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Sign Up</h2>

        {error && <div className="text-red-600 text-center">{error}</div>}

        <form className="mt-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 mt-1 border rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div className="mt-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div className="mt-4">
            <label className="block text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg dark:bg-gray-700 dark:text-white"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Address Section */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Address Details</h3>

            <div className="mt-2">
              <label className="block text-gray-700 dark:text-gray-300">House No</label>
              <input
                type="text"
                name="houseNo"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="House No"
                value={formData.houseNo}
                onChange={handleChange}
              />
            </div>

            <div className="mt-2">
              <label className="block text-gray-700 dark:text-gray-300">Building</label>
              <input
                type="text"
                name="building"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="Building"
                value={formData.building}
                onChange={handleChange}
              />
            </div>

            <div className="mt-2">
              <label className="block text-gray-700 dark:text-gray-300">Street</label>
              <input
                type="text"
                name="street"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="Street"
                value={formData.street}
                onChange={handleChange}
              />
            </div>

            <div className="mt-2">
              <label className="block text-gray-700 dark:text-gray-300">Area</label>
              <input
                type="text"
                name="area"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="Area"
                value={formData.area}
                onChange={handleChange}
              />
            </div>

            <div className="mt-2">
              <label className="block text-gray-700 dark:text-gray-300">City</label>
              <input
                type="text"
                name="city"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="mt-2">
              <label className="block text-gray-700 dark:text-gray-300">State</label>
              <input
                type="text"
                name="state"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
              />
            </div>

            <div className="mt-2">
              <label className="block text-gray-700 dark:text-gray-300">Zip Code</label>
              <input
                type="text"
                name="zipCode"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-gray-600 dark:hover:bg-gray-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
