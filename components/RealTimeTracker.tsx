
import React, { useState } from 'react';
// FIX: Corrected import path
import type { Day, Activity } from '../types';
// FIX: Corrected import path and added missing import
import { useRealTimeItinerary } from './useRealTimeItinerary';
// FIX: Corrected import path
import { LocationMarkerIcon, ClockIcon, MapPinIcon, XMarkIcon, ChevronDoubleRightIcon } from './icons';

interface RealTimeTrackerProps {
  itinerary: Day[];
}

const RealTimeTracker: React.FC<RealTimeTrackerProps> = ({ itinerary }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    currentActivity, 
    nextActivity, 
    activityProgress, 
    timeToNext,
    isTripActive
  } = useRealTimeItinerary(itinerary);

  const renderCurrentActivity = () => {
    if (!currentActivity) {
      return (
        <div>
          <p className="font-semibold text-white">Activité en cours</p>
          <p className="text-sm text-slate-400 mt-1">
            Aucune activité en cours. Profitez de votre temps libre !
          </p>
        </div>
      );
    }
    return (
      <div>
        <p className="font-semibold text-white">Activité en cours</p>
        <p className="text-lg text-sky-300 font-bold truncate mt-1">{currentActivity.title}</p>
        <div className="mt-2">
            <div className="w-full bg-slate-600 rounded-full h-2.5">
                <div className="bg-sky-400 h-2.5 rounded-full" style={{ width: `${activityProgress}%` }}></div>
            </div>
            <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>{currentActivity.startTime}</span>
                <span>{Math.round(activityProgress)}%</span>
                <span>{currentActivity.endTime}</span>
            </div>
        </div>
      </div>
    );
  };

  const renderNextActivity = () => {
    if (!nextActivity) {
      return (
        <div>
          <p className="font-semibold text-white">Prochaine étape</p>
          <p className="text-sm text-slate-400 mt-1">Fin du voyage !</p>
        </div>
      );
    }
    return (
      <div>
        <p className="font-semibold text-white">Prochaine étape</p>
        <p className="text-lg text-sky-300 font-bold truncate mt-1">{nextActivity.title}</p>
        <div className="space-y-1.5 mt-2 text-sm text-slate-300">
            <div className="flex items-center gap-2">
                <ClockIcon />
                <span className="font-medium">{timeToNext}</span>
            </div>
            {nextActivity.address && (
                <div className="flex items-center gap-2">
                    <MapPinIcon />
                    <span>{nextActivity.address}</span>
                </div>
            )}
        </div>
      </div>
    );
  };

  if (!isTripActive) {
    return null; 
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-sky-500 text-white rounded-full p-4 shadow-lg hover:bg-sky-600 transition-transform transform hover:scale-110 z-30"
        aria-label="Toggle real-time tracker"
      >
        {isOpen ? <XMarkIcon /> : <LocationMarkerIcon />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 max-w-[calc(100vw-3rem)] bg-slate-800 border border-slate-700 rounded-lg shadow-2xl p-4 z-30 animate-fade-in-up">
            <h4 className="font-bold text-lg text-white mb-3 border-b border-slate-700 pb-2 flex items-center gap-2">
                <ChevronDoubleRightIcon/> Suivi en direct
            </h4>
            <div className="space-y-4">
                {renderCurrentActivity()}
                <div className="border-t border-slate-700/50"></div>
                {renderNextActivity()}
            </div>
        </div>
      )}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default RealTimeTracker;
