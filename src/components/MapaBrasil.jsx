import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapaBrasil = () => {
  useEffect(() => {
    const map = L.map('map').setView([-15.788, -47.875], 4); // Centro do Brasil

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    fetch('https://raw.githubusercontent.com/tbrugz/geodata-br/master/geojson/geojs-13-mun.json ')
      .then(res => res.json())
      .then(data => {
        L.geoJSON(data).addTo(map);
      });

    return () => map.remove();
  }, []);

  return <div id="map" style