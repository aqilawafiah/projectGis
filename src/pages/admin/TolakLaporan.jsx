import React from "react";
import { useNavigate } from "react-router-dom";
import "./TolakLaporan.css";
import logo from "../../assets/logo.png";

const TolakLaporan = () => {
  const navigate = useNavigate();

  return (
    <div className="tolak-page">
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo SiGap" className="logo" />
          <span className="brand">SiGap</span>
        </div>

        <div className="nav-right">
          <a>Beranda</a>
          <a>Tentang</a>
          <a>Kontak</a>
        </div>
      </nav>

      {/* ===== JUDUL ===== */}
      <h2 className="page-title">SiGap</h2>

      {/* ===== CONTENT ===== */}
      <div className="tolak-container">
        <div className="card">
          <div className="status-title">Status Laporan</div>

          <div className="success-message">
            Laporan Ditolak
          </div>

          <button
            className="btn-kembali"
            onClick={() => navigate("/laporan")}
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default TolakLaporan;
