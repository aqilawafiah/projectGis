import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email dan Password wajib diisi!");
      return;
    }

    setError("");
    navigate("/laporan");
  };

  return (
    <div className="login-page">
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="nav-left">
          <span className="brand">SiGap</span>
        </div>

        <ul className="nav-right">
          <li>Beranda</li>
          <li>Tentang</li>
          <li>Kontak</li>
        </ul>
      </nav>

      {/* ===== CARD LOGIN ===== */}
      <div className="login-container">
        <h2>SiGap</h2>

        {error && <p className="error-text">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Masuk
        </button>
      </div>
    </div>
  );
};

export default Login;
