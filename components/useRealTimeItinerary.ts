
import { useState, useEffect, useMemo } from 'react';
// FIX: Corrected import path
import type { Day, Activity } from '../types';

interface EnrichedActivity extends Activity {
  day: Day;
  start: Date;
  end: Date;
}

const formatTimeDifference = (from: Date, to: Date): string => {
  const diffMs = to.getTime() - from.getTime();
  const diffMins = Math.round(diffMs / 60000);

  if (diffMins <= 1) return "Dans un instant";
  if (diffMins < 60) return `Dans ${diffMins} min`;
  
  const diffHours = Math.floor(diffMins / 60);
  const remainingMins = diffMins % 60;
  
  // Check if it's still the same day
  const isSameDay = to.getDate() === from.getDate() && to.getMonth() === from.getMonth() && to.getFullYear() === from.getFullYear();

  if (diffHours < 24 && isSameDay) {
    if (remainingMins === 0) return `Dans ${diffHours}h`;
    return `Dans ${diffHours}h ${remainingMins}min`;
  }

  const timeFormat: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
  const timeStr = to.toLocaleTimeString('fr-FR', timeFormat).replace(':', 'h');

  // Check if it's tomorrow
  const tomorrow = new Date(from);
  tomorrow.setDate(from.getDate() + 1);
  const isTomorrow = to.getDate() === tomorrow.getDate() && to.getMonth() === tomorrow.getMonth() && to.getFullYear() === tomorrow.getFullYear();
  
  if (isTomorrow) {
    return `Demain à ${timeStr}`;
  }

  const dateFormat: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
  const dateStr = to.toLocaleDateString('fr-FR', dateFormat);
  return `${dateStr} à ${timeStr}`;
};

export const useRealTimeItinerary = (itinerary: Day[]) => {
    const [now, setNow] = useState(new Date());

    const allActivities = useMemo((): EnrichedActivity[] => {
        return itinerary.flatMap(day => 
            day.activities.map(activity => {
                const start = new Date(`${day.date}T${activity.startTime}:00`);
                const end = new Date(`${day.date}T${activity.endTime}:00`);
                // Handle overnight activities if end time is earlier than start time
                if (end < start) {
                    end.setDate(end.getDate() + 1);
                }
                return { ...activity, day, start, end };
            })
        ).sort((a, b) => a.start.getTime() - b.start.getTime());
    }, [itinerary]);

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 5000); // Update every 5 seconds
        return () => clearInterval(timer);
    }, []);

    const currentActivity = allActivities.find(act => now >= act.start && now <= act.end) || null;
    const nextActivity = allActivities.find(act => act.start > now) || null;

    let activityProgress = 0;
    if (currentActivity) {
        const totalDuration = currentActivity.end.getTime() - currentActivity.start.getTime();
        const elapsed = now.getTime() - currentActivity.start.getTime();
        if (totalDuration > 0) {
            activityProgress = Math.min(100, (elapsed / totalDuration) * 100);
        }
    }
    
    const timeToNext = nextActivity ? formatTimeDifference(now, nextActivity.start) : '';

    const lastActivity = allActivities[allActivities.length - 1];
    const isTripActive = lastActivity ? now < lastActivity.end : false;

    return { 
        currentActivity, 
        nextActivity, 
        activityProgress, 
        timeToNext,
        isTripActive
    };
};
