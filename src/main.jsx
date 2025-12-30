import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/masyarakat/Beranda";
import Tentang from "./pages/masyarakat/Tentang";
import Kontak from "./pages/masyarakat/Kontak";
import Lapor from "./pages/masyarakat/Lapor";
import StatusLaporan from "./pages/masyarakat/StatusLaporan";
import Peta from "./pages/masyarakat/Peta";
import Login from "./pages/admin/Login"; 
import Laporan from "./pages/admin/Laporan";
import EditLaporan from "./pages/admin/EditLaporan";
import TerimaLaporan from "./pages/admin/TerimaLaporan";
import TolakLaporan from "./pages/admin/TolakLaporan";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/lapor" element={<Lapor />} />
        <Route path="/status-laporan" element={<StatusLaporan />} />
        <Route path="/peta" element={<Peta />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/edit-laporan" element={<EditLaporan />} />
        <Route path="/terima-laporan" element={<TerimaLaporan />} />
        <Route path="/tolak-laporan" element={<TolakLaporan />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
