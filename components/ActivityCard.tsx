import React from 'react';
// FIX: Corrected import path
import type { Activity } from '../types';
// FIX: Corrected import path
import { ClockIcon, MapPinIcon, PaperAirplaneIcon, InformationCircleIcon, ClockOutlineIcon } from './icons';
import Map from './Map';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  // The parseAndLink function was removed as all links are now pre-formatted in the data source.
  // This prevents double-processing and fixes rendering issues with links.

  return (
    <div className="mb-8 pl-8 md:pl-12 relative">
      <div className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full bg-sky-400 border-4 border-slate-900"></div>
      <div className="bg-slate-800 rounded-lg p-4 shadow-lg hover:shadow-sky-400/10 transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
          <h3 className="font-bold text-lg text-white">{activity.title}</h3>
          <div className="flex items-center gap-2 text-sm text-slate-300 font-semibold bg-slate-700/50 px-2 py-1 rounded-full mt-2 sm:mt-0">
            <ClockIcon />
            <span>{activity.startTime} - {activity.endTime}</span>
          </div>
        </div>
        
        <div className="space-y-2 mt-3 text-sm text-slate-400">
          {activity.address && (
            <p className="flex items-start gap-2">
                <span className="mt-0.5"><MapPinIcon /></span>
                <span>{activity.address}</span>
            </p>
          )}
          {activity.transport && (
            <p className="flex items-start gap-2">
                <span className="mt-0.5"><PaperAirplaneIcon /></span>
                <span>{activity.transport}</span>
            </p>
          )}
          {activity.duration && (
            <p className="flex items-start gap-2">
                <span className="mt-0.5"><ClockOutlineIcon /></span>
                <span>
                    Durée: {activity.duration}
                    {activity.buffer && ` (Buffer: ${activity.buffer})`}
                </span>
            </p>
          )}
          {activity.notes && (
            <div className="flex items-start gap-2 pt-2 border-t border-slate-700/50 mt-3">
                <span className="mt-0.5 text-slate-300"><InformationCircleIcon /></span>
                <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: activity.notes }} />
            </div>
          )}
        </div>
        
        {activity.lat && activity.lng && (
            <div className="mt-4 rounded-lg overflow-hidden z-0">
                 <Map lat={activity.lat} lng={activity.lng} />
            </div>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;