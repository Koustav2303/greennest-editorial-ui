import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { 
  User, Package, Calendar, Settings, LogOut, 
  ChevronRight, Leaf, Clock, CheckCircle2, MapPin
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer/Footer';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Route Protection: If no user is logged in, instantly bounce them to the auth page
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // --- Mock Data for the Dashboard ---
  const recentOrders = [
    { id: '#GN-8472', date: 'June 10, 2026', total: '$145.00', status: 'Processing', items: 'Monstera Deliciosa, Ceramic Pot' },
    { id: '#GN-8391', date: 'May 28, 2026', total: '$85.00', status: 'Delivered', items: 'Snake Plant, Premium Soil Mix' }
  ];

  const upcomingConsultations = [
    { id: 1, expert: 'Dr. Aris Thorne', type: 'Space Consultation', date: 'June 15, 2026', time: '10:00 AM EST', status: 'Confirmed' }
  ];

  // --- Tab Render Functions ---
  const renderOverview = () => (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Welcome Banner */}
      <div className="bg-[#1a1f16] rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden isolate shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#85B060]/20 rounded-full blur-[80px] pointer-events-none"></div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">Welcome back, {user.name.split(' ')[0]}!</h2>
        <p className="text-white/70 font-medium">Your botanical sanctuary is looking great. Here is what's happening today.</p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white border border-gray-100 rounded-[1.5rem] p-6 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-full bg-[#EAF0E3] text-[#4A6731] flex items-center justify-center mb-4">
            <Package size={20} />
          </div>
          <span className="text-3xl font-black text-[#1a1f16] leading-none mb-1">2</span>
          <span className="text-gray-500 font-medium text-sm">Active Orders</span>
        </div>
        <div className="bg-white border border-gray-100 rounded-[1.5rem] p-6 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-full bg-[#EAF0E3] text-[#4A6731] flex items-center justify-center mb-4">
            <Calendar size={20} />
          </div>
          <span className="text-3xl font-black text-[#1a1f16] leading-none mb-1">1</span>
          <span className="text-gray-500 font-medium text-sm">Upcoming Booking</span>
        </div>
        <div className="bg-white border border-gray-100 rounded-[1.5rem] p-6 shadow-sm flex flex-col items-start hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-full bg-[#EAF0E3] text-[#4A6731] flex items-center justify-center mb-4">
            <Leaf size={20} />
          </div>
          <span className="text-3xl font-black text-[#1a1f16] leading-none mb-1">14</span>
          <span className="text-gray-500 font-medium text-sm">Plants Owned</span>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h3 className="text-2xl font-extrabold text-[#1a1f16] mb-6">Order History</h3>
      <div className="flex flex-col gap-4">
        {recentOrders.map((order) => (
          <div key={order.id} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#F8F9F5] rounded-2xl border border-gray-100 gap-4 group hover:border-[#85B060]/30 transition-colors">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="font-extrabold text-[#1a1f16] text-lg">{order.id}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  order.status === 'Delivered' ? 'bg-[#EAF0E3] text-[#4A6731]' : 'bg-orange-100 text-orange-700'
                }`}>
                  {order.status}
                </span>
              </div>
              <span className="text-gray-500 text-sm font-medium">{order.items}</span>
            </div>
            <div className="flex items-center justify-between md:flex-col md:items-end gap-1">
              <span className="font-bold text-[#1a1f16]">{order.total}</span>
              <span className="text-gray-400 text-sm font-medium">{order.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderConsultations = () => (
    <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h3 className="text-2xl font-extrabold text-[#1a1f16] mb-6">Upcoming Sessions</h3>
      <div className="flex flex-col gap-4">
        {upcomingConsultations.map((session) => (
          <div key={session.id} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#F8F9F5] rounded-2xl border border-gray-100 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-full border border-gray-200 flex items-center justify-center text-[#4A6731] shadow-sm">
                <Calendar size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-[#1a1f16] text-lg">{session.expert}</span>
                <span className="text-[#85B060] font-bold text-sm uppercase tracking-wider">{session.type}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                <Clock size={16} /> {session.date} at {session.time}
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                <MapPin size={16} /> Online Video Link
              </div>
            </div>

            <button className="px-6 py-3 bg-[#1a1f16] text-white rounded-xl font-bold text-sm hover:bg-[#2c3326] transition-colors">
              Join Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'consultations', label: 'Consultations', icon: Calendar },
    { id: 'settings', label: 'Account Settings', icon: Settings },
  ];

  return (
    <div className="font-sans antialiased text-neutral-900 bg-[#FAFBFA] min-h-screen flex flex-col">
      <Navbar />
      
      {/* Spacer for fixed Navbar */}
      <div className="pt-[100px] md:pt-[120px]"></div>

      <main className="max-w-[1400px] w-full mx-auto px-4 md:px-8 py-8 md:py-12 flex-1 flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Navigation Sidebar */}
        <aside className="w-full lg:w-72 shrink-0">
          
          {/* User Profile Snippet */}
          <div className="bg-white border border-gray-100 rounded-[2rem] p-6 flex items-center gap-4 mb-6 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#85B060] flex items-center justify-center text-[#1a1f16] font-black text-xl border-2 border-[#1a1f16] shadow-md">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-lg font-extrabold text-[#1a1f16] truncate">{user.name}</span>
              <span className="text-gray-400 text-sm font-medium truncate">{user.email}</span>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="bg-white border border-gray-100 rounded-[2rem] p-3 shadow-sm flex flex-col gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-between w-full p-4 rounded-xl font-bold text-sm transition-all ${
                  activeTab === tab.id 
                    ? 'bg-[#EAF0E3] text-[#4A6731]' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-[#1a1f16]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <tab.icon size={18} />
                  {tab.label}
                </div>
                {activeTab === tab.id && <ChevronRight size={16} />}
              </button>
            ))}
            
            <div className="my-2 border-t border-gray-100 mx-4"></div>
            
            <button 
              onClick={logout}
              className="flex items-center gap-3 w-full p-4 rounded-xl font-bold text-sm text-red-500 hover:bg-red-50 transition-colors"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </nav>
        </aside>

        {/* Dynamic Content Area */}
        <section className="flex-1 w-full min-h-[500px]">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'orders' && renderOrders()}
          {activeTab === 'consultations' && renderConsultations()}
          {activeTab === 'settings' && (
             <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm">
                <h3 className="text-2xl font-extrabold text-[#1a1f16] mb-2">Account Settings</h3>
                <p className="text-gray-500 font-medium mb-8">Update your personal information and preferences.</p>
                <p className="text-sm font-medium text-gray-400 italic">Form UI placeholder - ready for inputs!</p>
             </div>
          )}
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default DashboardPage;