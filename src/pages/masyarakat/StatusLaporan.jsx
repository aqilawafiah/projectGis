import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MasyarakatLayout from "../../layouts/masyarakat/MasyarakatLayout";
import "../../layouts/masyarakat/masyarakat.css";

const StatusLaporan = () => {
  const navigate = useNavigate();
  const [laporan, setLaporan] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("laporan")) || [];
    setLaporan(data);
  }, []);

  return (
    <MasyarakatLayout>
      <section className="status-wrapper">
        <div className="status-card">
          <h2>Status Laporan</h2>

          <table className="status-table">
            <thead>
              <tr>
                <th>Nama Pelapor</th>
                <th>Alamat</th>
                <th>RT / RW</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {laporan.length === 0 ? (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    Belum ada laporan masuk
                  </td>
                </tr>
              ) : (
                laporan.map((item, index) => (
                  <tr key={index}>
                    <td>{item.nama}</td>
                    <td>{item.alamat}</td>
                    <td>{item.rtRw}</td>
                    <td className="aksi-btn">
                      <button className="btn-terima">
                        Terima
                      </button>
                      <button className="btn-tolak">
                        Tolak
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <button
            className="btn-keluar"
            onClick={() => navigate("/")}
          >
            Keluar
          </button>
        </div>
      </section>
    </MasyarakatLayout>
  );
};

export default StatusLaporan;
