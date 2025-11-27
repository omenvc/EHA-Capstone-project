"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    window.location.href = "/dashboard/home";
  };

  return (
    <div className="w-full max-w-md mx-auto mt-24 px-4 space-y-6">
      <h1 className="text-6xl font-bold text-center leading-tight">
        CareLynk
        {" "}
        <span className="text-blue-600">Care</span>
        <br />
        <span className="text-blue-600">Web</span>
        {" "}
        Platform
      </h1>

      <div className="space-y-4">
        {/* Email / EHR */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">Email or EHR ID</label>
          <input
            id="email"
            type="email"
            placeholder="E.g. ousainoujonga@gmail.com"
            className="w-full rounded-xl bg-[#F2F2F2] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="**********"
            className="w-full rounded-xl bg-[#F2F2F2] px-4 py-3 text-sm pr-10 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Button & Checkbox */}
        <div className="flex items-center justify-between mt-2">
          <button
            type="button"
            onClick={handleLogin}
            className="bg-[#3366FF] hover:bg-[#2a54cc] text-white px-6 py-2 rounded-lg text-sm font-medium"
          >
            Log In
          </button>

          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              className="accent-blue-600 w-4 h-4"
            />
            <span>Keep me signed in</span>
          </label>
        </div>
      </div>
    </div>
  );
}
