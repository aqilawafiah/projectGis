import React, { useEffect, useRef } from "react";
import MasyarakatLayout from "../../layouts/masyarakat/MasyarakatLayout";
import "ol/ol.css";
import "../../layouts/masyarakat/map.css";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import { Vector as VectorSource } from "ol/source";
import GeoJSON from "ol/format/GeoJSON";
import { fromLonLat } from "ol/proj";
import { Style, Fill, Stroke, Text, Icon } from "ol/style";
import Overlay from "ol/Overlay";

const Peta = () => {
  const mapInstance = useRef(null);

  const popupRef = useRef(null);
  const popupContentRef = useRef(null);
  const popupCloserRef = useRef(null);
  const mapTargetRef = useRef(null);

  useEffect(() => {
    // Prevent double initialization in React Strict Mode
    if (mapInstance.current) return;

    // --- PASTE MAIN.JS LOGIC HERE ---

    // 1. Data Sources & Layers
    const riau = new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: "data/polygon_riau.json",
      }),
    });

    const pekanbaru = new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: "data/pekanbaru.json",
      }),
      visible: false,
    });

    // Style function for Rumbai
    const rumbaiStyle = function (feature) {
      const name = feature.get("nm_kecamatan");
      let color = "rgba(128, 128, 128, 0.5)";

      switch (name) {
        case "Rumbai":
          color = "rgba(255, 0, 0, 0.5)"; break;
        case "Rumbai Barat":
          color = "rgba(0, 255, 0, 0.5)"; break;
        case "Rumbai Timur":
          color = "rgba(0, 0, 255, 0.5)"; break;
      }

      return new Style({
        fill: new Fill({ color }),
        stroke: new Stroke({ color: "blue", width: 1 }),
        text: new Text({
          text: name,
          font: "bold 12px Calibri,sans-serif",
          fill: new Fill({ color: "#000" }),
          stroke: new Stroke({ color: "#fff", width: 3 }),
        }),
      });
    };

    const rumbai = new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: "data/kecamatan_rumbai.geojson",
      }),
      style: rumbaiStyle,
      visible: false,
    });

    // Style function for Kelurahan Rumbai
    const kelurahanRumbaiStyle = function (feature) {
      const name = feature.get("nm_kelurahan") || feature.get("NAMOBJ") || "Unknown";
      let hash = 0;
      for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }
      const hue = Math.abs(hash % 360);
      const color = `hsla(${hue}, 70%, 50%, 0.6)`;

      return new Style({
        fill: new Fill({ color }),
        stroke: new Stroke({ color: "white", width: 2 }),
        text: new Text({
          text: name,
          font: "bold 12px Calibri,sans-serif",
          fill: new Fill({ color: "#000" }),
          stroke: new Stroke({ color: "#fff", width: 3 }),
          overflow: true,
        }),
      });
    };

    const kelurahanRumbai = new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: "data/kelurahan_rumbai.geojson",
      }),
      style: kelurahanRumbaiStyle,
      visible: false,
    });

    // Banjir Layer
    const banjir = new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: "data/genangan_banjir_geojson.json",
      }),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 46],
          anchorXUnits: "flaticon",
          anchorYUnits: "pixels",
          src: "icon/flood_1.png",
          width: 20,
          height: 20,
        }),
      }),
    });

    // 2. Popup Overlay
    // Using refs ensures elements exist even if DOM isn't fully repainted by browser selector engine yet
    const overlay = new Overlay({
      element: popupRef.current,
      autoPan: {
        animation: { duration: 250 },
      },
    });

    // 3. Map Initialization
    const map = new Map({
      target: mapTargetRef.current,
      layers: [
        new TileLayer({ source: new OSM() }),
        riau, pekanbaru, rumbai, kelurahanRumbai, banjir
      ],
      overlays: [overlay],
      view: new View({
        center: fromLonLat([101.7068, 0.5071]),
        zoom: 7,
      }),
    });

    mapInstance.current = map;

    // 4. Button Logic (Direct DOM manipulation as per main.js)
    const btnRiau = document.getElementById('btn-riau');
    const btnPekanbaru = document.getElementById('btn-pekanbaru');
    const btnRumbai = document.getElementById('btn-rumbai');
    const btnKelurahanRumbai = document.getElementById('btn-kelurahan-rumbai');

    // Helper functions to manage classes (optional if CSS handles styles)
    const setBtnActive = (activeBtn) => {
      [btnRiau, btnPekanbaru, btnRumbai, btnKelurahanRumbai].forEach(btn => {
        if (btn) {
          btn.classList.remove('btn-primary');
          btn.classList.add('btn-secondary');
        }
      });
      if (activeBtn) {
        activeBtn.classList.remove('btn-secondary');
        activeBtn.classList.add('btn-primary');
      }
    };

    if (btnRiau) {
      btnRiau.onclick = function () {
        riau.setVisible(true);
        pekanbaru.setVisible(false);
        rumbai.setVisible(false);
        kelurahanRumbai.setVisible(false);
        map.getView().animate({ center: fromLonLat([101.7068, 0.5071]), zoom: 7, duration: 1000 });
        setBtnActive(btnRiau);
      };
    }

    if (btnPekanbaru) {
      btnPekanbaru.onclick = function () {
        riau.setVisible(false);
        pekanbaru.setVisible(true);
        rumbai.setVisible(false);
        kelurahanRumbai.setVisible(false);
        map.getView().animate({ center: fromLonLat([101.4478, 0.5081]), zoom: 11, duration: 1000 });
        setBtnActive(btnPekanbaru);
      };
    }

    if (btnRumbai) {
      btnRumbai.onclick = function () {
        riau.setVisible(false);
        pekanbaru.setVisible(false);
        rumbai.setVisible(true);
        kelurahanRumbai.setVisible(false);
        map.getView().animate({ center: fromLonLat([101.45, 0.610]), zoom: 12, duration: 1000 });
        setBtnActive(btnRumbai);
      };
    }

    if (btnKelurahanRumbai) {
      btnKelurahanRumbai.onclick = function () {
        riau.setVisible(false);
        pekanbaru.setVisible(false);
        rumbai.setVisible(false);
        kelurahanRumbai.setVisible(true);
        map.getView().animate({ center: fromLonLat([101.45, 0.615]), zoom: 12.5, duration: 1000 });
        setBtnActive(btnKelurahanRumbai);
      };
    }

    // 5. Popup Logic
    map.on('singleclick', function (evt) {
      const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
        if (layer === banjir) return feature;
      });

      if (!feature) {
        overlay.setPosition(undefined);
        if (popupCloserRef.current) popupCloserRef.current.blur();
        return;
      }

      const coordinate = evt.coordinate;
      const content = `
        <h3>${feature.get("Alamat_Dom")}</h3>
        <p><b>Kecamatan:</b> ${feature.get("Kecamatan")}</p>
        <p><b>Frekuensi Genangan:</b> ${feature.get("Frekuensi")}</p>
        <p><b>Ketinggian Air:</b> ${feature.get("Ketinggian")}</p>
        <p><b>Durasi Surut:</b> ${feature.get("Durasi_Sur")}</p>
        <p><b>Faktor Penyebab:</b> ${feature.get("Faktor_Pen")}</p>
        <p><b>Skor Total:</b> ${feature.get("Skor_Total")}</p>
        <p><b>Status Kerawanan:</b> <span style='color: red; font-weight: bold;'>${feature.get("Status_Tot")}</span></p>
      `;

      if (popupContentRef.current) popupContentRef.current.innerHTML = content;
      overlay.setPosition(coordinate);
    });

    if (popupCloserRef.current) {
      popupCloserRef.current.onclick = function () {
        overlay.setPosition(undefined);
        popupCloserRef.current.blur();
        return false;
      };
    }

    // Capture button styles initially
    setBtnActive(btnRiau);

    return () => {
      map.setTarget(null);
      mapInstance.current = null;
    }
  }, []);

  return (
    <MasyarakatLayout>
      <div
        ref={mapTargetRef}
        id="map"
        style={{
          width: "100%",
          height: "calc(100vh - 72px)", // Adjust for navbar
          backgroundColor: "#f0f0f0",
          position: "relative"
        }}
      ></div>

      {/* Restore Buttons so main.js logic can find them by ID */}
      <div className="map-controls">
        <button id="btn-riau" className="btn btn-primary">Provinsi Riau</button>
        <button id="btn-pekanbaru" className="btn btn-secondary">Kota Pekanbaru</button>
        <button id="btn-rumbai" className="btn btn-secondary">Kecamatan Rumbai</button>
        <button id="btn-kelurahan-rumbai" className="btn btn-secondary">Kelurahan Rumbai</button>
      </div>

      <div ref={popupRef} id="popup" className="ol-popup">
        <a href="#" ref={popupCloserRef} id="popup-closer" className="ol-popup-closer"></a>
        <div ref={popupContentRef} id="popup-content"></div>
      </div>
    </MasyarakatLayout>
  );
};

export default Peta;
