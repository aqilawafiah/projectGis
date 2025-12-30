import React from "react";
import MasyarakatLayout from "../../layouts/masyarakat/MasyarakatLayout";
import lokasi from "../../assets/icon-lokasi.png";
import email from "../../assets/icon-email.png";
import telepon from "../../assets/icon-telepon.png";
import "../../layouts/masyarakat/masyarakat.css";

const Kontak = () => {
    return (
        <MasyarakatLayout>
            {/* HEADER */}
            <section className="kontak-header">
                <h1>Kontak Kami</h1>
            </section>

            {/* INFO CARD */}
            <section className="kontak-wrapper">
                <div className="kontak-card-container">
                    <div className="kontak-card">
                        <img src={lokasi} alt="Alamat" />
                        <h3>Alamat</h3>
                        <p>
                            Jl. Yos Sudarso No.88, Rumbai,<br />
                            Pekanbaru, Riau, 28265
                        </p>
                    </div>

                    <div className="kontak-card">
                        <img src={email} alt="Email" />
                        <h3>Email</h3>
                        <p>
                            sigap.rumbai@gmail.com<br />
                            info@sigap.id
                        </p>
                    </div>

                    <div className="kontak-card">
                        <img src={telepon} alt="Telepon" />
                        <h3>Telepon</h3>
                        <p>
                            +62 761 123 456<br />
                            +62 813 6543 7890
                        </p>
                    </div>
                </div>
            </section>

            {/* FORM KONTAK */}
            <section className="kontak-form-section">
                <p className="kontak-desc">
                    SiGap membantu masyarakat untuk memperoleh informasi yang jelas,
                    terstruktur, dan mudah diakses mengenai risiko banjir dan genangan air
                    di lingkungan sekitarnya. Melalui penyajian data berbasis lokasi dan
                    visualisasi yang informatif, SiGap berperan dalam meningkatkan
                    kesadaran masyarakat terhadap potensi risiko bencana serta mendukung
                    upaya mitigasi dan kesiapsiagaan secara berkelanjutan.
                </p>

                <form className="kontak-form">
                    <div className="form-row">
                        <input type="text" placeholder="Nama" />
                        <input type="email" placeholder="Email" />
                    </div>

                    <div className="form-row">
                        <input type="text" placeholder="Nomor Telepon" />
                        <input type="text" placeholder="Subjek" />
                    </div>

                    <textarea placeholder="Pesan"></textarea>

                    <button type="submit">Kirim</button>
                </form>
            </section>

            {/* MAP */}
            <section className="kontak-map">
                <iframe
                    title="Peta Pekanbaru"
                    src="https://www.google.com/maps?q=Pekanbaru,Riau&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            {/* NEWSLETTER */}
            <section className="newsletter-section">
                <h2>Wilayah Rawan Genangan Air</h2>
                <p>
                    Ingin tetap mendapatkan informasi terbaru tentang peta risiko banjir,
                    peringatan penting, dan fitur terbaru dari SiGap? Daftarkan email Anda
                    sekarang untuk menerima notifikasi secara langsung.
                </p>

                <div className="newsletter-form">
                    <input type="email" placeholder="Masukkan Email Kamu" />
                    <button>Kirim</button>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-brand">
                        <h3>SiGap</h3>
                        <p>
                            SiGap menyediakan akses mudah ke peta risiko banjir yang akurat,
                            laporan masyarakat, dan informasi penting berbasis lokasi untuk
                            mendukung kesadaran serta kesiapsiagaan masyarakat.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4>LAYANAN</h4>
                        <ul>
                            <li>Pemetaan Risiko Genangan Air</li>
                            <li>Titik Rawan Genangan Air</li>
                            <li>Tingkat Risiko Genangan Air</li>
                            <li>Peta Berbasis Lokasi</li>
                            <li>Laporan dan Aduan Masyarakat</li>
                            
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>LINK PENTING</h4>
                        <ul>
                            <li>About Us</li>
                            <li>FAQ</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>KONTAK</h4>
                        <ul className="footer-contact">
                            <li>Jl. Yos Sudarso No.88, Rumbai, Pekanbaru</li>
                            <li>+62 761 123 456</li>
                            <li>+62 813 6543 7890</li>
                            <li>sigap.rumbai@gmail.com</li>
                            <li>info@sigap.id</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </MasyarakatLayout>
    );
};

export default Kontak;
