import React from "react";
import MasyarakatLayout from "../../layouts/masyarakat/MasyarakatLayout";
import hero from "../../assets/hero.png";
import "../../layouts/masyarakat/masyarakat.css";

const Beranda = () => {
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
              Waspadai genangan air yang ada di sekitar wilayah lingkungan tempat tinggal Anda, sebagai langkah awal untuk mengantisipasi potensi banjir dan dampak buruk yang dapat ditimbulkannya.
            </p>

            <button className="btn-masuk">Masuk</button>
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
