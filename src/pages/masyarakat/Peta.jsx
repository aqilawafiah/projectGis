import React, { useEffect } from "react";
import MasyarakatLayout from "../../layouts/masyarakat/MasyarakatLayout";
import "ol/ol.css";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { fromLonLat } from "ol/proj";
import { Style, Fill, Stroke, Text, Icon } from "ol/style";
import Overlay from "ol/Overlay";

const Peta = () => {
  useEffect(() => {
    /* ================= LAYER ================= */

    const riau = new VectorLayer({
      source: new VectorSource({
        url: "/data/polygon_riau.json",
        format: new GeoJSON(),
      }),
    });

    const banjir = new VectorLayer({
      source: new VectorSource({
        url: "/data/genangan_banjir_geojson.json",
        format: new GeoJSON(),
      }),
      style: new Style({
        image: new Icon({
          src: "/icon/flood_1.png",
          scale: 0.05,
        }),
      }),
    });

    /* ================= POPUP ================= */

    const overlay = new Overlay({
      element: document.getElementById("popup"),
      autoPan: true,
    });

    /* ================= MAP ================= */

    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({ source: new OSM() }),
        riau,
        banjir,
      ],
      overlays: [overlay],
      view: new View({
        center: fromLonLat([101.7068, 0.5071]),
        zoom: 7,
      }),
    });

    map.on("singleclick", (evt) => {
      const feature = map.forEachFeatureAtPixel(
        evt.pixel,
        (feature) => feature
      );

      if (!feature) {
        overlay.setPosition(undefined);
        return;
      }

      const content = `
        <h4>${feature.get("Alamat_Dom")}</h4>
        <p>Kecamatan: ${feature.get("Kecamatan")}</p>
        <p>Ketinggian: ${feature.get("Ketinggian")}</p>
      `;

      document.getElementById("popup-content").innerHTML = content;
      overlay.setPosition(evt.coordinate);
    });

    return () => map.setTarget(null);
  }, []);

  return (
    <MasyarakatLayout>
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>

      <div id="popup" className="ol-popup">
        <a href="#" id="popup-closer" className="ol-popup-closer"></a>
        <div id="popup-content"></div>
      </div>
    </MasyarakatLayout>
  );
};

export default Peta;
