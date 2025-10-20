import React, { useEffect, useRef } from 'react';
import type { Day } from '../types';

declare const L: any;

interface GlobalMapViewProps {
  days: Day[];
}

const dayColors = ['#38bdf8', '#34d399', '#f59e0b', '#f472b6', '#8b5cf6'];

const GlobalMapView: React.FC<GlobalMapViewProps> = ({ days }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (typeof L === 'undefined' || !mapContainerRef.current) {
      return;
    }

    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([40.7128, -74.0060], 12); // NYC coordinates
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      const markerBounds: [number, number][] = [];

      days.forEach((day, dayIndex) => {
        day.activities.forEach(activity => {
          if (activity.lat && activity.lng) {
            const color = dayColors[dayIndex % dayColors.length];
            const markerHtml = `<div style="background-color: ${color}; width: 1.5rem; height: 1.5rem; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.5);"></div>`;
            const customIcon = L.divIcon({
              html: markerHtml,
              className: '',
              iconSize: [24, 24],
              iconAnchor: [12, 12],
            });

            const marker = L.marker([activity.lat, activity.lng], { icon: customIcon }).addTo(mapRef.current);
            
            const popupContent = `
              <div class="font-sans">
                <p class="font-bold text-base">${activity.title}</p>
                <p class="text-sm">${day.dayName} ${day.date}</p>
                <p class="text-sm text-gray-500">${activity.startTime} - ${activity.endTime}</p>
              </div>
            `;
            marker.bindPopup(popupContent);

            markerBounds.push([activity.lat, activity.lng]);
          }
        });
      });
      
      if (markerBounds.length > 0) {
        mapRef.current.fitBounds(markerBounds, { padding: [50, 50] });
      }
    }
    
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [days]);

  return (
    <div className="relative animate-fade-in">
        <div ref={mapContainerRef} className="h-[calc(100vh-200px)] w-full rounded-lg shadow-lg z-0" />
        <div className="absolute top-2 right-2 bg-slate-800/80 p-2 rounded-md shadow-lg z-10 text-xs">
            <h4 className="font-bold mb-1 text-white">Légende</h4>
            {days.map((day, index) => (
                <div key={day.date} className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: dayColors[index % dayColors.length] }}></span>
                    <span>{day.dayName}</span>
                </div>
            ))}
        </div>
        <style>{`
        .leaflet-popup-content-wrapper {
            background: #1e293b; /* slate-800 */
            color: #cbd5e1; /* slate-300 */
            border-radius: 8px;
        }
        .leaflet-popup-content {
          margin: 12px;
        }
        .leaflet-popup-tip {
            background: #1e293b; /* slate-800 */
        }
        .leaflet-control-attribution a {
            color: #38bdf8; /* sky-500 */
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GlobalMapView;
