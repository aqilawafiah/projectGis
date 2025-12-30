import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/masyarakat/Beranda";
import Tentang from "./pages/masyarakat/Tentang";
import Kontak from "./pages/masyarakat/Kontak";
import Lapor from "./pages/masyarakat/Lapor";
import StatusLaporan from "./pages/masyarakat/StatusLaporan";
import Peta from "./pages/masyarakat/Peta";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/lapor" element={<Lapor />} />
        <Route path="/status-laporan" element={<StatusLaporan />} />
        <Route path="/peta" element={<Peta />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
