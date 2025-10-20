import React from 'react';
import type { Day } from '../types';
import ActivityCard from './ActivityCard';
import WeatherForecast from './WeatherForecast';
import TransportSegment from './TransportSegment';
import { routingData } from '../data/routingData';

interface ItineraryViewProps {
  day: Day;
  dayIndex: number;
}

const ItineraryView: React.FC<ItineraryViewProps> = ({ day, dayIndex }) => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6">
        <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
            {day.dayName} <span className="text-slate-400 font-normal text-xl md:text-2xl">- {day.date}</span>
            </h2>
            <p className="text-slate-400 mt-1">{day.title}</p>
        </div>
        <div className="mt-4 sm:mt-0">
             <WeatherForecast date={day.date} />
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-700/50" style={{ left: '8px' }}></div>
        {day.activities.flatMap((activity, index) => {
          const elements = [<ActivityCard key={`activity-${index}`} activity={activity} />];
          const routeKey = `${dayIndex}-${index}`;
          const route = routingData[routeKey];
          
          if (route && index < day.activities.length - 1) {
            elements.push(<TransportSegment key={`transport-${index}`} route={route} />);
          }
          
          return elements;
        })}
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ItineraryView;