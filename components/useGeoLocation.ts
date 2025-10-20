import { useState, useEffect } from 'react';

interface GeoPosition {
  lat: number;
  lng: number;
  accuracy: number;
}

interface UseGeoLocationReturn {
  position: GeoPosition | null;
  error: string | null;
  isLoading: boolean;
}

export const useGeoLocation = (): UseGeoLocationReturn => {
  const [position, setPosition] = useState<GeoPosition | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('La géolocalisation n\'est pas supportée par votre navigateur');
      setIsLoading(false);
      return;
    }

    const handleSuccess = (pos: GeolocationPosition) => {
      setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        accuracy: pos.coords.accuracy
      });
      setError(null);
      setIsLoading(false);
    };

    const handleError = (err: GeolocationPositionError) => {
      let errorMessage = 'Erreur de géolocalisation';

      switch (err.code) {
        case err.PERMISSION_DENIED:
          errorMessage = 'Permission de géolocalisation refusée';
          break;
        case err.POSITION_UNAVAILABLE:
          errorMessage = 'Position indisponible';
          break;
        case err.TIMEOUT:
          errorMessage = 'Délai de géolocalisation dépassé';
          break;
      }

      setError(errorMessage);
      setIsLoading(false);
    };

    const watchId = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return { position, error, isLoading };
};
