import React from "react";
import { useNavigate } from "react-router-dom";
import "./Laporan.css";

const Laporan = () => {
  const navigate = useNavigate(); // ✅ BENAR (di dalam component)

  return (
    <div className="laporan-page">
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

      <div className="laporan-container">
        <h3>Laporan</h3>

        <div className="laporan-item">
          <strong>Yusuf Prasetyo</strong>
          <span>Jl. Melati No.10, RT/RW 01/02</span>
        </div>

        <div className="laporan-item">
          <strong>Rina Sari</strong>
          <span>Jl. Kenanga No.5, RT/RW 01/03</span>
        </div>

          <div className="laporan-item">
          <strong>Rina Sari</strong>
          <span>Jl. Kenanga No.5, RT/RW 01/03</span>
        </div>

          <div className="laporan-item">
          <strong>Rina Sari</strong>
          <span>Jl. Kenanga No.5, RT/RW 01/03</span>
        </div>

        <div className="laporan-item">
          <strong>Rina Sari</strong>
          <span>Jl. Kenanga No.5, RT/RW 01/03</span>
        </div>

        <div className="laporan-item">
          <strong>Rina Sari</strong>
          <span>Jl. Kenanga No.5, RT/RW 01/03</span>
        </div>

        <button
          className="btn-edit"
          onClick={() => navigate("/edit-laporan")} // ✅ BENAR
        >
          Edit
        </button>
       
      </div>
    </div>
  );
};

export default Laporan;
