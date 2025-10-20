import React, { useEffect, useRef, useState } from 'react';
import type { Day } from '../types';
import { manhattanBikeLanes, bikeLaneColors } from '../data/bikeLanesData';
import { useGeoLocation } from './useGeoLocation';

declare const L: any;

interface GlobalMapViewProps {
  days: Day[];
}

const dayColors = ['#38bdf8', '#34d399', '#f59e0b', '#f472b6', '#8b5cf6'];

const GlobalMapView: React.FC<GlobalMapViewProps> = ({ days }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const bikeLanesLayerRef = useRef<any>(null);
  const userMarkerRef = useRef<any>(null);
  const [showBikeLanes, setShowBikeLanes] = useState(true);
  const [showUserPosition, setShowUserPosition] = useState(true);
  const { position, error } = useGeoLocation();

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

      bikeLanesLayerRef.current = L.layerGroup().addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [days]);

  useEffect(() => {
    if (!mapRef.current || !bikeLanesLayerRef.current) return;

    bikeLanesLayerRef.current.clearLayers();

    if (showBikeLanes) {
      manhattanBikeLanes.forEach(lane => {
        const color = bikeLaneColors[lane.type as keyof typeof bikeLaneColors];
        const polyline = L.polyline(lane.coordinates, {
          color: color,
          weight: 3,
          opacity: 0.7
        }).addTo(bikeLanesLayerRef.current);

        polyline.bindPopup(`
          <div class="font-sans">
            <p class="font-bold">${lane.name}</p>
            <p class="text-sm">Type: ${lane.type === 'protected' ? 'Protégée' : lane.type === 'shared' ? 'Partagée' : 'Récréative'}</p>
          </div>
        `);
      });
    }
  }, [showBikeLanes]);

  useEffect(() => {
    if (!mapRef.current) return;

    if (userMarkerRef.current) {
      mapRef.current.removeLayer(userMarkerRef.current);
      userMarkerRef.current = null;
    }

    if (showUserPosition && position && !error) {
      const userIcon = L.divIcon({
        html: `<div style="width: 20px; height: 20px; background-color: #3b82f6; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);"></div>`,
        className: '',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      userMarkerRef.current = L.marker([position.lat, position.lng], { icon: userIcon })
        .addTo(mapRef.current);

      userMarkerRef.current.bindPopup(`
        <div class="font-sans">
          <p class="font-bold">Votre position</p>
          <p class="text-sm">Précision: ${Math.round(position.accuracy)}m</p>
        </div>
      `);
    }
  }, [position, error, showUserPosition]);

  return (
    <div className="relative animate-fade-in">
        <div ref={mapContainerRef} className="h-[calc(100vh-200px)] w-full rounded-lg shadow-lg z-0" />

        <div className="absolute top-2 left-2 bg-slate-800/90 p-3 rounded-lg shadow-lg z-10 text-xs space-y-3">
            <div>
                <h4 className="font-bold mb-2 text-white text-sm">Contrôles</h4>
                <label className="flex items-center gap-2 cursor-pointer mb-2">
                    <input
                        type="checkbox"
                        checked={showBikeLanes}
                        onChange={(e) => setShowBikeLanes(e.target.checked)}
                        className="w-4 h-4"
                    />
                    <span className="text-white">Pistes cyclables</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={showUserPosition}
                        onChange={(e) => setShowUserPosition(e.target.checked)}
                        className="w-4 h-4"
                    />
                    <span className="text-white">Ma position</span>
                </label>
            </div>

            {showBikeLanes && (
                <div className="border-t border-slate-600 pt-2">
                    <h5 className="font-bold mb-2 text-white">Pistes cyclables</h5>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="w-6 h-0.5" style={{ backgroundColor: bikeLaneColors.protected }}></span>
                        <span>Protégées</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="w-6 h-0.5" style={{ backgroundColor: bikeLaneColors.shared }}></span>
                        <span>Partagées</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-0.5" style={{ backgroundColor: bikeLaneColors.recreational }}></span>
                        <span>Récréatives</span>
                    </div>
                </div>
            )}
        </div>

        <div className="absolute top-2 right-2 bg-slate-800/90 p-3 rounded-lg shadow-lg z-10 text-xs">
            <h4 className="font-bold mb-2 text-white">Itinéraire</h4>
            {days.map((day, index) => (
                <div key={day.date} className="flex items-center gap-2 mb-1">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: dayColors[index % dayColors.length] }}></span>
                    <span>{day.dayName}</span>
                </div>
            ))}
        </div>

        {error && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500/90 text-white px-4 py-2 rounded-lg shadow-lg z-10 text-sm">
                {error}
            </div>
        )}
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
