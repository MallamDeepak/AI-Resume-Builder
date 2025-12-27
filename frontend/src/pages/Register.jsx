import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import images from '../assets'

export default function Register() {
  const [usernametext, setUserNameText] = useState('');
  const [emailtext, setEmailText] = useState('');
  const [passwordtext, setPasswordText] = useState('');
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const validate = () => {
    if (!usernametext.trim()) { toast.error('Please enter a username'); return false }
    if (!emailtext.trim()) { toast.error('Please enter an email'); return false }
    if (!passwordtext) { toast.error('Please enter a password'); return false }
    if (passwordtext.length < 6) { toast.error('Password must be at least 6 characters'); return false }
    if (passwordtext !== confirmpassword) { toast.error('Passwords do not match'); return false }
    return true
  }

  const handleRegister = async () => {
    if (!validate()) return
    setLoading(true)
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username: usernametext.trim(),
        email: emailtext.trim(),
        password: passwordtext,
      });

      console.log('Registration successful:', response.data);
      toast.success(`Registration Successful ${usernametext}! Redirecting to login...`);
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Registration failed. Please try again.');
      console.error(
        'Registration error:',
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="flex w-full h-screen p-10 bg-blue-950">
      <div className="w-1/2 flex flex-col items-center justify-center bg-slate-100 rounded-l-3xl px-20">
        <h1 className="font-semibold text-center text-gray-800">
          Welcome to <span className="text-xl font-bold ">AI Resume Builder</span>
        </h1>
        <p className="text-sm text-center text-gray-600">by</p>
        <img src={images.logo || '/logo.png'} alt="Logo" className="w-50 mx-auto mb-2" />
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={(e) => { e.preventDefault(); handleRegister() }} className="space-y-5 w-full max-w-md">
          <div>
            <label className="block text-sm text-left font-medium text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={usernametext}
              onChange={(e) => { setUserNameText(e.target.value) }}
            />
          </div>
          <div>
            <label className="block text-sm text-left font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={emailtext}
              onChange={(e) => { setEmailText(e.target.value) }}
            />
          </div>
          <div>
            <label className="block text-sm text-left font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={passwordtext}
              onChange={(e) => { setPasswordText(e.target.value) }}
            />
          </div>
          <div>
            <label className="block text-sm text-left font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter your Confirm password"
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmpassword}
              onChange={(e) => { setConfirmPassword(e.target.value) }}
            />
          </div>
          <button
            type="submit"
            className={`w-full ${loading ? 'bg-blue-400' : 'bg-blue-600'} text-white py-1 rounded-lg hover:${loading ? '' : 'bg-blue-700'} transition cursor-pointer`}
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'SignUp'}
          </button>
        </form>
        <div className="flex items-center my-6 w-full max-w-md">
          <div className="grow h-px bg-gray-300"></div>
          <span className="px-4 text-xs uppercase tracking-widest text-gray-400">
            or
          </span>
          <div className="grow h-px bg-gray-300"></div>
        </div>
        <div className="flex bg-gray-100 items-center justify-center space-x-2 py-1 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 mb-6 w-full max-w-md">
          <img className="w-6 h-6" src={images.google || '/google.png'} alt="google" />
          <span className="ml-2">Signup with Google</span>
        </div>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Signin
          </Link>
        </p>
      </div>
      <div className="overflow-hidden w-1/2">
        <img
          src={images.signup || '/signup.png'}
          alt="registerpage"
          className="object-cover h-full rounded-r-2xl"
        />
      </div>
    </div>
  );
}
