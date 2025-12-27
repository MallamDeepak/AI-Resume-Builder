import React,{ useState} from "react";
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import images from '../assets'


export default function Login(){
  const [emailtext,setEmailText] =useState("");
  const [passwordtext,setPasswordText] =useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const validate = () => {
    if (!emailtext) {
      toast.error('Please enter your email')
      return false
    }
    if (!passwordtext) {
      toast.error('Please enter your password')
      return false
    }
    return true
  }

  const handleLogin=async()=>{
    if (!validate()) return
    setLoading(true)
    try {
      const response = await axios.post('http://localhost:5000/api/login',{
        email:emailtext,
        password:passwordtext
      })
      const username = emailtext.split('@')[0];
      console.log('Login successful:', response.data);
      toast.success(`Login Successful ${username}! Redirecting to home...`);
      setTimeout(() => {
        navigate('/userhome');
      }, 1200);
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Login failed. Please try again.');
      console.error(
        'Login error:',
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex w-full h-screen p-10 bg-blue-950">
      <div className="w-1/2 overflow-hidden rounded-l-3xl">
          <img
            src={images.login || '/login.jpg'}
            alt="loginpage"
            className="object-cover "
          />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center bg-slate-100 rounded-r-3xl px-20">
        <h1 className="font-semibold text-center text-gray-800">
          Welcome to <span className="text-xl font-bold ">AI Resume Builder</span>
        </h1>
        <p className="text-sm text-center text-gray-600">by</p>
        <img src={images.logo || '/logo.png'} alt="Logo" className="w-50 mx-auto mb-2" />
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin() }} className="space-y-5 w-full max-w-md">
          <div>
            <label className="block text-sm text-left font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={emailtext}
              onChange={(event)=>{setEmailText(event.target.value)}}
            />
          </div>
          <div>
            <label className="block text-sm text-left font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={passwordtext}
              onChange={(event)=>{setPasswordText(event.target.value)}}
            />
          </div>
          <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className={`w-full ${loading ? 'bg-blue-400' : 'bg-blue-600'} text-white py-2 rounded-lg hover:${loading ? '' : 'bg-blue-700'} transition cursor-pointer`}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
        <div className="flex items-center my-6 w-full max-w-md">
          <div className="grow h-px bg-gray-300"></div>
          <span className="px-4 text-xs uppercase tracking-widest text-gray-400">
            or
          </span>
          <div className="grow h-px bg-gray-300"></div>
        </div>
        <div className="flex bg-gray-100 items-center justify-center space-x-2 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 mb-6 w-full max-w-md">
          <img className="w-6 h-6" src={images.google || '/google.png'} alt="google" />
          <span className="ml-2">Sign in with Google</span>
        </div>
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
