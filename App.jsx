import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Provide default icon configuration for Leaflet markers
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
L.Icon.Default.mergeOptions({
  iconUrl,
  shadowUrl: iconShadow,
});

function App() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch the locations JSON from the same directory where the built app is hosted.
    fetch('locations.json')
      .then((res) => res.json())
      .then((data) => {
        // Data could be an array or an object with a property; normalise it
        if (Array.isArray(data)) {
          setLocations(data);
        } else if (Array.isArray(data.locations)) {
          setLocations(data.locations);
        }
      })
      .catch((err) => console.error('Failed to fetch locations', err));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Quick Quack Expansion Map</h1>
      <MapContainer
        center={[36.7783, -119.4179]}
        zoom={5}
        style={{ height: '600px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {locations.map((loc) => (
          <Marker key={loc.id} position={[loc.lat, loc.lon]}>
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.state}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;