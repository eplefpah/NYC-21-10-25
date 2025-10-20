import React, { useEffect, useRef, useState } from 'react';
import type { Day } from '../types';
import { BicycleIcon } from './icons';

declare const L: any;

interface GlobalMapViewProps {
  days: Day[];
}

const dayColors = ['#38bdf8', '#34d399', '#f59e0b', '#f472b6', '#8b5cf6'];

const GlobalMapView: React.FC<GlobalMapViewProps> = ({ days }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const bikeLayerRef = useRef<any>(null);
  const userMarkerRef = useRef<any>(null);
  const userLocationRef = useRef<[number, number] | null>(null);

  const [showBikeLanes, setShowBikeLanes] = useState(false);

  // Effect to initialize the map and add permanent controls
  useEffect(() => {
    if (typeof L === 'undefined' || !mapContainerRef.current || mapRef.current) {
      return;
    }
    
    // Initialize Map
    mapRef.current = L.map(mapContainerRef.current, { zoomControl: false }).setView([40.7128, -74.0060], 12); // NYC
    L.control.zoom({ position: 'bottomright' }).addTo(mapRef.current);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapRef.current);

    // Initialize Bike Lane Layer (will be added/removed later)
    bikeLayerRef.current = L.tileLayer('https://tile.waymarkedtrails.org/cycling/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://cycling.waymarkedtrails.org">waymarkedtrails.org</a>'
    });

    // Add activity markers
    const markerBounds: [number, number][] = [];
    days.forEach((day, dayIndex) => {
      day.activities.forEach(activity => {
        if (activity.lat && activity.lng) {
          const color = dayColors[dayIndex % dayColors.length];
          const markerHtml = `<div style="background-color: ${color}; width: 1.5rem; height: 1.5rem; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.5);"></div>`;
          const customIcon = L.divIcon({ html: markerHtml, className: '', iconSize: [24, 24], iconAnchor: [12, 12] });
          const marker = L.marker([activity.lat, activity.lng], { icon: customIcon }).addTo(mapRef.current);
          const popupContent = `
            <div class="font-sans">
              <p class="font-bold text-base">${activity.title}</p>
              <p class="text-sm">${day.dayName} ${day.date}</p>
              <p class="text-sm text-gray-500">${activity.startTime} - ${activity.endTime}</p>
            </div>`;
          marker.bindPopup(popupContent);
          markerBounds.push([activity.lat, activity.lng]);
        }
      });
    });
    if (markerBounds.length > 0) {
      mapRef.current.fitBounds(markerBounds, { padding: [50, 50] });
    }

    // Geolocation control
    const LocateControl = L.Control.extend({
        options: { position: 'bottomright' },
        onAdd: function (map: any) {
            const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
            const button = L.DomUtil.create('button', 'flex items-center justify-center w-8 h-8 bg-slate-800 text-white rounded-sm shadow-md hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500', container);
            button.type = 'button';
            button.title = 'Ma position';
            button.setAttribute('role', 'button');
            button.setAttribute('aria-label', 'Show my location');
            button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 5zM10 15a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM14.25 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM7.25 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM10 18a8 8 0 100-16 8 8 0 000 16zM10 16.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" clip-rule="evenodd" /></svg>`;
            button.disabled = true;
            
            L.DomEvent.on(button, 'click', function(e){
                L.DomEvent.stop(e);
                if(userLocationRef.current) {
                    map.flyTo(userLocationRef.current, 16);
                }
            });
            return container;
        }
    });
    mapRef.current.addControl(new LocateControl());

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [days]);

  // Effect to toggle bike lanes
  useEffect(() => {
    if (mapRef.current && bikeLayerRef.current) {
      if (showBikeLanes) {
        bikeLayerRef.current.addTo(mapRef.current);
      } else {
        mapRef.current.removeLayer(bikeLayerRef.current);
      }
    }
  }, [showBikeLanes]);

  // Effect for Geolocation
  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const newLocation: [number, number] = [latitude, longitude];
        userLocationRef.current = newLocation;

        if (mapRef.current) {
          const locateButton = document.querySelector('.leaflet-control-custom button') as HTMLButtonElement;
          if (locateButton) locateButton.disabled = false;

          if (!userMarkerRef.current) {
            const userIcon = L.divIcon({
              html: `<div class="user-location-marker"></div>`,
              className: '',
              iconSize: [24, 24],
              iconAnchor: [12, 12]
            });
            userMarkerRef.current = L.marker(newLocation, { icon: userIcon }).addTo(mapRef.current);
          } else {
            userMarkerRef.current.setLatLng(newLocation);
          }
        }
      },
      (error) => {
        console.error("Error getting user location:", error);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div className="relative animate-fade-in">
        <div ref={mapContainerRef} className="h-[calc(100vh-200px)] w-full rounded-lg shadow-lg z-0" />
        <div className="absolute top-2 right-2 bg-slate-800/80 p-3 rounded-lg shadow-lg z-10 text-sm text-slate-300 backdrop-blur-sm">
            <h4 className="font-bold mb-2 text-white text-base">Légende</h4>
            {days.map((day, index) => (
                <div key={day.date} className="flex items-center gap-2 mb-1">
                    <span className="w-4 h-4 rounded-full" style={{ backgroundColor: dayColors[index % dayColors.length] }}></span>
                    <span>{day.dayName}</span>
                </div>
            ))}
            <div className="border-t border-slate-700/50 my-2"></div>
            <label htmlFor="bike-toggle" className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                 <BicycleIcon className="w-4 h-4" />
                 <span>Pistes cyclables</span>
                 <input 
                    type="checkbox" 
                    id="bike-toggle" 
                    className="ml-auto w-4 h-4 rounded text-sky-500 bg-slate-700 border-slate-600 focus:ring-sky-600"
                    checked={showBikeLanes} 
                    onChange={() => setShowBikeLanes(s => !s)} />
            </label>
        </div>
        <style>{`
        .leaflet-popup-content-wrapper { background: #1e293b; color: #cbd5e1; border-radius: 8px; }
        .leaflet-popup-content { margin: 12px; }
        .leaflet-popup-tip { background: #1e293b; }
        .leaflet-control-attribution a { color: #38bdf8; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        
        .user-location-marker {
            width: 24px;
            height: 24px;
            background-color: #0ea5e9; /* sky-500 */
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 0 2px #0ea5e9;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.7);
            }
            70% {
                transform: scale(1);
                box-shadow: 0 0 0 10px rgba(14, 165, 233, 0);
            }
            100% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 rgba(14, 165, 233, 0);
            }
        }
        .leaflet-control-custom button:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
        `}</style>
    </div>
  );
};

export default GlobalMapView;