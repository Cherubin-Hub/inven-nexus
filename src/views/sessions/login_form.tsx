"use client";

import { useState } from "react";
import { AuthCredentials } from "@/models/session";

export default function LoginForm() {
  // Local state representing Model
  const [credentials, setCredentials] = useState<AuthCredentials>({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Connect this to the Controller API
    console.log("Sending to Controller:", credentials);
    
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800">IMS Login</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input 
            type="text" 
            name="username"
            value={credentials.username} 
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input 
            type="password" 
            name="password"
            value={credentials.password} 
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required 
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isLoading ? "Authenticating..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
