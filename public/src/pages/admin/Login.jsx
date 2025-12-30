import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Hardcoded admin credentials (ganti sesuai kebutuhan)
  const ADMIN_CREDENTIALS = {
    email: 'admin@sigap.com',
    password: 'admin123'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validasi input
    if (!formData.email || !formData.password) {
      setError('Email dan password harus diisi');
      setLoading(false);
      return;
    }

    // Simulasi delay loading
    await new Promise(resolve => setTimeout(resolve, 800));

    // Cek credentials
    if (
      formData.email === ADMIN_CREDENTIALS.email &&
      formData.password === ADMIN_CREDENTIALS.password
    ) {
      // Simpan session admin ke localStorage
      const adminSession = {
        isLoggedIn: true,
        role: 'admin',
        email: formData.email,
        loginTime: new Date().toISOString()
      };
      
      localStorage.setItem('adminSession', JSON.stringify(adminSession));
      
      // Redirect ke dashboard admin
      navigate('/admin/dashboard');
    } else {
      setError('Email atau password salah');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navbar */}
      <nav className="bg-[#5B9FA7] py-4 px-8 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">👤</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">
            SiGap
          </h1>
        </div>
        <div className="space-x-8 font-semibold text-white text-base">
          <button 
            onClick={() => navigate('/')}
            className="hover:text-gray-200 transition"
          >
            Beranda
          </button>
          <button className="hover:text-gray-200 transition">Tentang</button>
          <button className="hover:text-gray-200 transition">Kontak</button>
          <button className="text-gray-200">Masuk</button>
        </div>
      </nav>

      {/* Login Form Container */}
      <div className="container mx-auto px-8 py-16 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-2xl">
          <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-purple-50 rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Wave Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
              <svg viewBox="0 0 1200 800" className="w-full h-full">
                <path
                  d="M0,400 Q300,200 600,400 T1200,400 L1200,0 L0,0 Z"
                  fill="#5B9FA7"
                  opacity="0.1"
                />
                <path
                  d="M0,500 Q300,300 600,500 T1200,500 L1200,800 L0,800 Z"
                  fill="#5B9FA7"
                  opacity="0.15"
                />
              </svg>
            </div>

            {/* Form Content */}
            <div className="relative z-10 p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-2">
                  <span className="text-gray-700">Si</span>
                  <span className="text-[#5B9FA7]">Gap</span>
                </h2>
                <p className="text-gray-600 text-sm">Admin Login</p>
              </div>

              {/* Demo Credentials Info */}
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700 text-center">
                  <span className="font-semibold">Demo Credentials:</span><br />
                  Email: admin@sigap.com<br />
                  Password: admin123
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9FA7] focus:border-transparent transition-all"
                    placeholder="Masukkan email admin"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9FA7] focus:border-transparent transition-all"
                    placeholder="Masukkan password"
                    disabled={loading}
                  />
                </div>

                <div className="text-right">
                  <button
                    type="button"
                    className="text-[#5B9FA7] hover:text-[#4A8A92] text-sm font-medium transition-colors"
                  >
                    Lupa password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#5B9FA7] hover:bg-[#4A8A92] text-white font-semibold py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Memproses...
                    </span>
                  ) : (
                    'Masuk'
                  )}
                </button>
              </form>

              <div className="mt-8 mb-6 flex items-center">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm">atau</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  Belum punya akun admin?{' '}
                  <button
                    type="button"
                    className="text-[#5B9FA7] hover:text-[#4A8A92] font-semibold transition-colors"
                  >
                    Hubungi Administrator
                  </button>
                </p>
              </div>

              <div className="text-center mt-6">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
                >
                  ← Kembali ke Beranda
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 text-center">
              <span className="font-semibold">Info:</span> Halaman ini khusus untuk admin. 
              Untuk login sebagai masyarakat, silakan klik{' '}
              <button
                onClick={() => navigate('/masyarakat/login')}
                className="text-[#5B9FA7] hover:text-[#4A8A92] font-semibold underline"
              >
                di sini
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;