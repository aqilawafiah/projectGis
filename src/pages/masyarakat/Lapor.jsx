import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MasyarakatLayout from "../../layouts/masyarakat/MasyarakatLayout";
import "../../layouts/masyarakat/masyarakat.css";

const Lapor = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    noHp: "",
    alamat: "",
    rtRw: "",
    kecamatan: "",
    tinggi: "",
    penyebab: "",
    estimasi: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Ambil data lama
    const laporanLama =
      JSON.parse(localStorage.getItem("laporan")) || [];

    // Tambahkan data baru ke array
    const laporanBaru = [...laporanLama, formData];

    // Simpan kembali ke localStorage
    localStorage.setItem(
      "laporan",
      JSON.stringify(laporanBaru)
    );

    // Pindah ke halaman status
    navigate("/status-laporan");
  };

  return (
    <MasyarakatLayout>
      <section className="lapor-wrapper">
        <div className="lapor-card">
          <h2>SiGap</h2>

          <form className="lapor-form">
            <div className="lapor-row">
              <div className="lapor-field">
                <label>Nama</label>
                <input name="nama" onChange={handleChange} />
              </div>

              <div className="lapor-field">
                <label>No HP</label>
                <input name="noHp" onChange={handleChange} />
              </div>
            </div>

            <div className="lapor-row">
              <div className="lapor-field">
                <label>Alamat Kejadian</label>
                <input name="alamat" onChange={handleChange} />
              </div>

              <div className="lapor-field">
                <label>RT/RW</label>
                <input name="rtRw" onChange={handleChange} />
              </div>
            </div>

            <div className="lapor-row">
              <div className="lapor-field">
                <label>Kecamatan</label>
                <input name="kecamatan" onChange={handleChange} />
              </div>

              <div className="lapor-field">
                <label>Tinggi Genangan</label>
                <input name="tinggi" onChange={handleChange} />
              </div>
            </div>

            <div className="lapor-row">
              <div className="lapor-field">
                <label>Penyebab</label>
                <input name="penyebab" onChange={handleChange} />
              </div>

              <div className="lapor-field">
                <label>Estimasi Kedalaman</label>
                <input name="estimasi" onChange={handleChange} />
              </div>
            </div>

            <button
              type="button"
              className="lapor-btn"
              onClick={handleSubmit}
            >
              Kirim
            </button>
          </form>
        </div>
      </section>
    </MasyarakatLayout>
  );
};

export default Lapor;
