
// FIX: Corrected import path
import type { WeatherForecastData } from '../types';

export const weatherData: Record<string, WeatherForecastData> = {
  '2025-10-21': {
    high: 16, // Celsius
    low: 9,
    description: "Partiellement nuageux",
    icon: 'partly-cloudy',
  },
  '2025-10-22': {
    high: 18,
    low: 11,
    description: "Ensoleillé",
    icon: 'sunny',
  },
  '2025-10-23': {
    high: 17,
    low: 12,
    description: "Ensoleillé avec passages nuageux",
    icon: 'partly-cloudy',
  },
  '2025-10-24': {
    high: 15,
    low: 10,
    description: "Nuageux avec averses possibles",
    icon: 'rainy',
  },
  '2025-10-25': {
    high: 14,
    low: 8,
    description: "Majoritairement nuageux",
    icon: 'cloudy',
  },
};
