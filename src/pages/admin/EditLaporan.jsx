import React from "react";
import { useNavigate } from "react-router-dom";
import "./EditLaporan.css";

const EditLaporan = () => {
  const navigate = useNavigate();

  return (
    <div className="edit-page">
      {/* NAVBAR */}
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

      {/* JUDUL */}
      <h2 className="page-title">SiGap</h2>

      {/* CARD */}
      <div className="edit-container">
        <h3>Status Laporan</h3>

        <table>
          <thead>
            <tr>
              <th>Pelapor</th>
              <th>Alamat</th>
              <th>RT/RW</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Yusuf Prasetyo</td>
              <td>Jl. Melati No. 10</td>
              <td>01/02</td>
              <td>
                <button
                  className="btn-accept"
                  onClick={() => navigate("/terima-laporan")}
                >
                  Terima
                </button>
                <button
                  className="btn-reject"
                  onClick={() => navigate("/tolak-laporan")}
                >
                  Tolak
                </button>
              </td>
            </tr>

            <tr>
              <td>Rina Sari</td>
              <td>Jl. Kenanga No. 5</td>
              <td>01/03</td>
              <td>
                <button
                  className="btn-accept"
                  onClick={() => navigate("/terima-laporan")}
                >
                  Terima
                </button>
                <button
                  className="btn-reject"
                  onClick={() => navigate("/tolak-laporan")}
                >
                  Tolak
                </button>
              </td>
            </tr>

            <tr>
              <td>Budi Santoso</td>
              <td>Jl. Raya No. 20</td>
              <td>02/04</td>
              <td>
                <button
                  className="btn-accept"
                  onClick={() => navigate("/terima-laporan")}
                >
                  Terima
                </button>
                <button
                  className="btn-reject"
                  onClick={() => navigate("/tolak-laporan")}
                >
                  Tolak
                </button>
              </td>
            </tr>

            <tr>
              <td>Siti Nurhaliza</td>
              <td>Jl. Sudirman No. 1</td>
              <td>01/01</td>
              <td>
                <button
                  className="btn-accept"
                  onClick={() => navigate("/terima-laporan")}
                >
                  Terima
                </button>
                <button
                  className="btn-reject"
                  onClick={() => navigate("/tolak-laporan")}
                >
                  Tolak
                </button>
              </td>
            </tr>

            <tr>
              <td>Iskandar Muda</td>
              <td>Jl. Yos Sudarso No. 11</td>
              <td>01/05</td>
              <td>
                <button
                  className="btn-accept"
                  onClick={() => navigate("/terima-laporan")}
                >
                  Terima
                </button>
                <button
                  className="btn-reject"
                  onClick={() => navigate("/tolak-laporan")}
                >
                  Tolak
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <button
          className="btn-logout"
          onClick={() => navigate("/")}
        >
          Keluar
        </button>
      </div>
    </div>
  );
};

export default EditLaporan;
