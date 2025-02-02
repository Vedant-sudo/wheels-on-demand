import { useState } from "react";
import axios from "axios";
import Signup from "./Signup"; // Import Signup component

export default function LoginOrSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle Login Submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", { email, password });

      if (response.data) {
        console.log("Login Successful:", response.data);
        // Redirect to profile page or store token in localStorage
      }
    } catch (error) {
      setError("Invalid email or password! Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      {isLogin ? (
        <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Login</h2>

          {error && <div className="text-red-600 text-center">{error}</div>}

          <form className="mt-4" onSubmit={handleLogin}>
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="mt-4">
              <label className="block text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-1 border rounded-lg dark:bg-gray-700 dark:text-white"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-gray-600 dark:hover:bg-gray-700"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <button
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <Signup /> // Show the Signup component when user clicks Sign Up
      )}
    </div>
  );
}
