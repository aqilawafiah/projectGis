import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // sesuaikan path logo Anda

const Navbar = ({ type = 'public' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Fungsi untuk cek active menu
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Navbar untuk halaman publik (landing page)
  if (type === 'public') {
    return (
      <nav className="bg-[#5B9FA7] py-4 px-8 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
            {/* Ganti dengan logo Anda */}
            <span className="text-white text-xl">👤</span>
            {/* Atau gunakan img: <img src={logo} alt="Logo" className="w-8 h-8" /> */}
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">
            SiGap
          </h1>
        </div>
        <div className="space-x-8 font-semibold text-white text-base">
          <button 
            onClick={() => navigate('/')}
            className={`hover:text-gray-200 transition ${isActive('/') ? 'text-gray-200' : ''}`}
          >
            Beranda
          </button>
          <button 
            onClick={() => navigate('/tentang')}
            className={`hover:text-gray-200 transition ${isActive('/tentang') ? 'text-gray-200' : ''}`}
          >
            Tentang
          </button>
          <button 
            onClick={() => navigate('/kontak')}
            className={`hover:text-gray-200 transition ${isActive('/kontak') ? 'text-gray-200' : ''}`}
          >
            Kontak
          </button>
          <button 
            onClick={() => navigate('/admin/login')}
            className={`hover:text-gray-200 transition ${isActive('/admin/login') ? 'text-gray-200' : ''}`}
          >
            Masuk
          </button>
        </div>
      </nav>
    );
  }

  // Navbar untuk Admin
  if (type === 'admin') {
    const handleLogout = () => {
      localStorage.removeItem('adminSession');
      navigate('/admin/login');
    };

    return (
      <nav className="bg-[#5B9FA7] py-4 px-8 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/admin/dashboard')}>
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">👤</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">
            SiGap Admin
          </h1>
        </div>
        <div className="space-x-8 font-semibold text-white text-base flex items-center">
          <button 
            onClick={() => navigate('/admin/dashboard')}
            className={`hover:text-gray-200 transition ${isActive('/admin/dashboard') ? 'text-gray-200 border-b-2 border-white pb-1' : ''}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => navigate('/admin/users')}
            className={`hover:text-gray-200 transition ${isActive('/admin/users') ? 'text-gray-200 border-b-2 border-white pb-1' : ''}`}
          >
            Users
          </button>
          <button 
            onClick={() => navigate('/admin/reports')}
            className={`hover:text-gray-200 transition ${isActive('/admin/reports') ? 'text-gray-200 border-b-2 border-white pb-1' : ''}`}
          >
            Laporan
          </button>
          <button 
            onClick={() => navigate('/admin/settings')}
            className={`hover:text-gray-200 transition ${isActive('/admin/settings') ? 'text-gray-200 border-b-2 border-white pb-1' : ''}`}
          >
            Pengaturan
          </button>
          <div className="border-l border-white h-6 mx-2"></div>
          <button 
            onClick={handleLogout}
            className="hover:text-gray-200 transition bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </nav>
    );
  }

  // Navbar untuk Masyarakat (User)
  if (type === 'masyarakat') {
    const handleLogout = () => {
      localStorage.removeItem('userSession');
      navigate('/masyarakat/login');
    };

    return (
      <nav className="bg-[#5B9FA7] py-4 px-8 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/masyarakat/beranda')}>
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">👤</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">
            SiGap
          </h1>
        </div>
        <div className="space-x-8 font-semibold text-white text-base flex items-center">
          <button 
            onClick={() => navigate('/masyarakat/beranda')}
            className={`hover:text-gray-200 transition ${isActive('/masyarakat/beranda') ? 'text-gray-200' : ''}`}
          >
            Beranda
          </button>
          <button 
            onClick={() => navigate('/masyarakat/tentang')}
            className={`hover:text-gray-200 transition ${isActive('/masyarakat/tentang') ? 'text-gray-200' : ''}`}
          >
            Tentang
          </button>
          <button 
            onClick={() => navigate('/masyarakat/kontak')}
            className={`hover:text-gray-200 transition ${isActive('/masyarakat/kontak') ? 'text-gray-200' : ''}`}
          >
            Kontak
          </button>
          <button 
            onClick={() => navigate('/masyarakat/profile')}
            className={`hover:text-gray-200 transition ${isActive('/masyarakat/profile') ? 'text-gray-200' : ''}`}
          >
            Profile
          </button>
          <div className="border-l border-white h-6 mx-2"></div>
          <button 
            onClick={handleLogout}
            className="hover:text-gray-200 transition bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </nav>
    );
  }

  return null;
};

export default Navbar;