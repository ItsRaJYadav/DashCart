'use client'
import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import Link from 'next/link';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              <span className="flex items-center">
                <FaUser className="mr-2" />
                Username
              </span>
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              <span className="flex items-center">
                <FaLock className="mr-2" />
                Password
              </span>
              
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              required
            />
          </div>

          <button
            type="submit"
            className="block w-full p-3 text-center bg-blue-500 text-white rounded-sm hover:bg-blue-600"
          >
            Sign in
          </button>
        </form>
        <p className="text-xs text-center sm:px-6 mt-5">
          <Link href="/forgot" rel="noopener noreferrer" className="underline">
            Forgot password?
          </Link>
          {'  |  '}
          <Link href="/register" rel="noopener noreferrer" className="underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
