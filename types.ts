
export interface Activity {
  startTime: string;
  endTime: string;
  title: string;
  address?: string;
  transport?: string;
  duration?: string;
  buffer?: string;
  notes?: string;
  lat?: number;
  lng?: number;
}

export interface Day {
  date: string;
  dayName: string;
  title: string;
  activities: Activity[];
}

interface InfoSection {
  title: string;
  items: string[];
}

export interface ItineraryData {
  transportStrategy: string[];
  ticketChecklist: string[];
  days: Day[];
  restoOptions: InfoSection[];
  contingencyPlans: InfoSection[];
}

export interface WeatherForecastData {
    high: number;
    low: number;
    description: string;
    icon: 'sunny' | 'partly-cloudy' | 'cloudy' | 'rainy';
}

// --- NEW TYPES FOR ROUTING ---

export interface RouteStep {
  mode: 'walk' | 'subway';
  duration: string;
  instruction: string;
  details?: TransportDetails;
}

export interface TransportDetails {
  line: string;
  direction: string;
  stops?: number;
}

export interface RouteSegment {
  totalDuration: string;
  steps: RouteStep[];
}
