import React from "react";
import { useNavigate } from "react-router-dom";
import "./TerimaLaporan.css";
import logo from "../../assets/logo.png";

const TerimaLaporan = () => {
  const navigate = useNavigate();

  return (
    <div className="terima-page">
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
          <a>Masuk</a>
        </div>
      </nav>

      {/* ===== JUDUL ===== */}
      <h2 className="page-title">SiGap</h2>

      {/* ===== CONTENT ===== */}
      <div className="terima-container">
        <div className="card">
          <div className="status-title">Status Laporan</div>

          <div className="success-message">
            Laporan Berhasil Diterima
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

export default TerimaLaporan;
