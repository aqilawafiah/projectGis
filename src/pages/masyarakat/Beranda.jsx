import React from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ TAMBAHKAN
import MasyarakatLayout from "../../layouts/masyarakat/MasyarakatLayout";
import hero from "../../assets/hero.png";
import "../../layouts/masyarakat/masyarakat.css";

const Beranda = () => {
  const navigate = useNavigate(); // ⬅️ INISIALISASI

  return (
    <MasyarakatLayout>
      <section className="hero-wrapper">
        <div className="hero-card">
          {/* KIRI */}
          <div className="hero-content">
            <h1>
              Pemetaan Resiko <br /> Genangan Air
            </h1>

            <p>
              Waspadai genangan air yang ada di sekitar wilayah lingkungan tempat
              tinggal Anda, sebagai langkah awal untuk mengantisipasi potensi
              banjir dan dampak buruk yang dapat ditimbulkannya.
            </p>

            {/* BUTTON MASUK */}
            <button
              className="btn-masuk"
              onClick={() => navigate("/login")} // ⬅️ PINDAH KE LOGIN
            >
              Masuk
            </button>
          </div>

          {/* KANAN */}
          <div className="hero-image">
            <img src={hero} alt="Ilustrasi hujan" />
          </div>
        </div>
      </section>
    </MasyarakatLayout>
  );
};

export default Beranda;
