import React from "react";
import MasyarakatLayout from "../../layouts/masyarakat/MasyarakatLayout";
import tentangImg from "../../assets/tentang.png"; // ilustrasi
import "../../layouts/masyarakat/masyarakat.css";

const Tentang = () => {
  return (
    <MasyarakatLayout>
      {/* HEADER */}
      <section className="tentang-header">
        <h1>Tentang Kami</h1>
      </section>

      {/* CONTENT */}
      <section className="tentang-wrapper">
        <div className="tentang-card">

          {/* KIRI */}
          <div className="tentang-image">
            <img src={tentangImg} alt="Ilustrasi Pemetaan" />
          </div>

          {/* KANAN */}
          <div className="tentang-content">
            <h2>
              Sistem Informasi Pemetaan Risiko <br />
              Genangan Air di Permukiman
            </h2>

            <p>
              SiGap merupakan website yang dirancang untuk memetakan risiko genangan 
              air di kawasan permukiman berdasarkan hasil survei lapangan dan persepsi 
              masyarakat. Aplikasi ini mengintegrasikan data faktual kondisi lingkungan 
              dengan pandangan masyarakat setempat melalui pemanfaatan Sistem Informasi 
              Geografis (SIG), sehingga menghasilkan peta risiko genangan air yang akurat, 
              informatif, dan mudah dipahami. Informasi yang disajikan diharapkan dapat 
              membantu masyarakat serta pihak terkait dalam mengidentifikasi wilayah rawan 
              genangan, meningkatkan kesiapsiagaan terhadap potensi banjir, serta mendukung 
              perencanaan penanganan dan mitigasi bencana secara efektif dan berkelanjutan.
            </p>
          </div>

        </div>
      </section>
    </MasyarakatLayout>
  );
};

export default Tentang;
