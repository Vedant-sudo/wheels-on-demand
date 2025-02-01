import { useState } from "react";

export default function LoginOrSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form className="mt-4">
          {!isLogin && (
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Name</label>
              <input type="text" className="w-full px-4 py-2 mt-1 border rounded-lg dark:bg-gray-700 dark:text-white" placeholder="Enter your name" />
            </div>
          )}

          <div className="mt-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input type="email" className="w-full px-4 py-2 mt-1 border rounded-lg dark:bg-gray-700 dark:text-white" placeholder="Enter your email" />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 dark:text-gray-300">Password</label>
            <input type="password" className="w-full px-4 py-2 mt-1 border rounded-lg dark:bg-gray-700 dark:text-white" placeholder="Enter your password" />
          </div>

          <button type="submit" className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-gray-600 dark:hover:bg-gray-700">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
