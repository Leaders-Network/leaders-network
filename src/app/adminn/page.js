'use client'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useState, useEffect } from 'react'

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'admin123') {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div className='text-black'>
      <Navbar/>
      <div className="min-h-screen p-8 bg-gray-100">
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter admin password"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Login
              </button>
            </form>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Create New Blog Post</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter blog title"
                  />
                </div>
            
                <div>
                  <label className="block text-sm font-medium mb-2">Content</label>
                  <textarea 
                    className="w-full p-2 border rounded-md h-40"
                    placeholder="Write your blog content here..."
                  />
                </div>
            
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Images</label>
                  <div className="border-2 border-dashed rounded-md p-4">
                    <input 
                      type="file" 
                      accept="image/*"
                      multiple
                      className="w-full"
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Drag and drop images or click to select files
                    </p>
                  </div>
                </div>
            
                <div>
                  <label className="block text-sm font-medium mb-2">Categories</label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="">Select category</option>
                    <option value="technology">Technology</option>
                    <option value="business">Business</option>
                    <option value="lifestyle">Lifestyle</option>
                  </select>
                </div>
            
                <div className="flex items-center space-x-4">
                  <button 
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                  >
                    Publish Post
                  </button>
                  <button 
                    type="button"
                    className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300"
                  >
                    Save Draft
                  </button>
                </div>
              </form>
            </div>
        
            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium">Sample Blog Post Title</h3>
                  <p className="text-sm text-gray-500">Published on: 2023-10-20</p>
                  <div className="flex space-x-2 mt-2">
                    <button className="text-blue-600 text-sm">Edit</button>
                    <button className="text-red-600 text-sm">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  )
}