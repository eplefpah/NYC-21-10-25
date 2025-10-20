

import React from 'react';
import { weatherData } from '../data/weatherData';
// FIX: Corrected import path
import { SunIcon, CloudSunIcon, CloudIcon, RainIcon } from './icons';

interface WeatherForecastProps {
  date: string;
}

const iconMap: Record<string, React.ReactNode> = {
  sunny: <SunIcon />,
  'partly-cloudy': <CloudSunIcon />,
  cloudy: <CloudIcon />,
  rainy: <RainIcon />,
};

const WeatherForecast: React.FC<WeatherForecastProps> = ({ date }) => {
  const forecast = weatherData[date];

  if (!forecast) {
    return null;
  }

  // Convert Celsius to Fahrenheit
  const toFahrenheit = (celsius: number) => Math.round(celsius * 9/5 + 32);

  return (
    <div className="bg-slate-700/50 p-3 rounded-md flex items-center justify-center gap-4 border border-slate-600/50">
      <div className="flex-shrink-0">
        {iconMap[forecast.icon]}
      </div>
      <div className="text-left">
        <p className="font-bold text-white text-lg">
          {`${toFahrenheit(forecast.high)}°F / ${toFahrenheit(forecast.low)}°F`}
        </p>
        <p className="text-sm text-slate-300">{forecast.description}</p>
      </div>
    </div>
  );
};

export default WeatherForecast;
