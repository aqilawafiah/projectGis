import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./masyarakat.css";

const AdminNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="SiGap" className="logo" />
        <span className="brand">SiGap</span>
      </div>

      <div className="navbar-right">
        <Link to="/">Beranda</Link>
        <Link to="/tentang">Tentang</Link>
        <Link to="/kontak">Kontak</Link>
        <Link to="/masuk">Masuk</Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
