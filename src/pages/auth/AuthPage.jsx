import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Leaf, ArrowLeft, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate a backend authentication process
    const userData = {
      name: isLogin ? "Koustav" : formData.name, // Using form data or mock name for login
      email: formData.email,
    };
    
    login(userData);
    navigate('/'); // Redirect to home after successful auth
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans selection:bg-[#85B060] selection:text-white">
      
      {/* Left Side: Cinematic Botanical Image (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 relative isolate overflow-hidden bg-[#0a1508]">
        <img 
          src="https://images.unsplash.com/photo-1604762524889-3e2fcc145683?q=80&w=1200&auto=format&fit=crop" 
          alt="Lush Monstera" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1508] via-transparent to-transparent z-10"></div>
        
        <div className="relative z-20 flex flex-col justify-between p-16 h-full">
          <Link to="/" className="flex items-center gap-2 w-fit group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 text-white group-hover:bg-[#85B060] transition-colors">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-white font-bold text-sm tracking-widest uppercase opacity-80 group-hover:opacity-100">Back</span>
          </Link>

          <div>
            <Leaf className="text-[#85B060] w-12 h-12 mb-6" fill="#85B060" />
            <h1 className="text-5xl font-black text-white tracking-tight leading-[1.1] mb-4">
              Join the <br /> <span className="text-[#85B060]">GreenNest</span> Society.
            </h1>
            <p className="text-white/70 text-lg font-medium max-w-md">
              Unlock exclusive botanical collections, expert care guides, and seamless priority booking.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Authentication Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-20 relative">
        
        {/* Mobile Back Button */}
        <Link to="/" className="lg:hidden absolute top-6 left-6 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 text-[#1a1f16]">
          <ArrowLeft size={18} />
        </Link>

        <div className="w-full max-w-md flex flex-col">
          
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-[#1a1f16] mb-2 tracking-tight">
              {isLogin ? 'Welcome Back' : 'Create an Account'}
            </h2>
            <p className="text-gray-500 font-medium text-sm">
              {isLogin ? 'Enter your details to access your dashboard.' : 'Start your botanical journey with us today.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Name Field (Only visible on Sign Up) */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isLogin ? 'max-h-0 opacity-0' : 'max-h-24 opacity-100'}`}>
              <div className="relative flex items-center">
                <User size={18} className="absolute left-4 text-gray-400 pointer-events-none" />
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name"
                  required={!isLogin}
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 bg-[#F8F9F5] border border-gray-200 rounded-2xl text-sm font-medium text-[#1a1f16] focus:outline-none focus:border-[#85B060] focus:ring-1 focus:ring-[#85B060] transition-all"
                />
              </div>
            </div>

            <div className="relative flex items-center">
              <Mail size={18} className="absolute left-4 text-gray-400 pointer-events-none" />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-4 bg-[#F8F9F5] border border-gray-200 rounded-2xl text-sm font-medium text-[#1a1f16] focus:outline-none focus:border-[#85B060] focus:ring-1 focus:ring-[#85B060] transition-all"
              />
            </div>

            <div className="relative flex items-center">
              <Lock size={18} className="absolute left-4 text-gray-400 pointer-events-none" />
              <input 
                type="password" 
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-4 bg-[#F8F9F5] border border-gray-200 rounded-2xl text-sm font-medium text-[#1a1f16] focus:outline-none focus:border-[#85B060] focus:ring-1 focus:ring-[#85B060] transition-all"
              />
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button type="button" className="text-xs font-bold text-[#85B060] hover:text-[#4A6731]">Forgot Password?</button>
              </div>
            )}

            <button 
              type="submit" 
              className="w-full mt-2 flex items-center justify-center gap-2 py-4 bg-[#1a1f16] hover:bg-[#2c3326] text-white rounded-2xl font-bold text-sm transition-all shadow-lg group"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center flex items-center justify-center gap-2">
            <span className="text-gray-500 text-sm font-medium">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#1a1f16] font-bold text-sm border-b-2 border-[#85B060] hover:text-[#85B060] transition-colors pb-0.5"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthPage;