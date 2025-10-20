import React, { useEffect, useRef } from 'react';

// Declare Leaflet global 'L' to satisfy TypeScript without adding @types/leaflet
declare const L: any;

interface MapProps {
  lat: number;
  lng: number;
  zoom?: number;
}

const Map: React.FC<MapProps> = ({ lat, lng, zoom = 15 }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null); // To hold the map instance

  useEffect(() => {
    if (typeof L === 'undefined') {
        return;
    }
      
    if (mapContainerRef.current && !mapRef.current) { // Initialize map only once
      mapRef.current = L.map(mapContainerRef.current).setView([lat, lng], zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      L.marker([lat, lng]).addTo(mapRef.current);
    } else if (mapRef.current) {
        // If map already exists, just update its view
        mapRef.current.setView([lat, lng], zoom);
    }
    
    // Cleanup function to remove map on component unmount
    return () => {
        if (mapRef.current) {
            mapRef.current.remove();
            mapRef.current = null;
        }
    };
  }, [lat, lng, zoom]); 

  return <div ref={mapContainerRef} className="h-48 w-full z-0" />;
};

export default Map;
