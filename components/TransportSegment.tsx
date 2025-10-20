import React from 'react';
import type { RouteSegment } from '../types';
import { WalkIcon, SubwayIcon, ClockIcon } from './icons';

interface TransportSegmentProps {
  route: RouteSegment;
}

const iconMap: Record<'walk' | 'subway', React.ReactNode> = {
  walk: <WalkIcon />,
  subway: <SubwayIcon />,
};

const TransportSegment: React.FC<TransportSegmentProps> = ({ route }) => {
  return (
    <div className="mb-8 pl-8 md:pl-12 relative">
      <div className="absolute -left-[11px] top-1/5 h-5 w-5 rounded-full bg-slate-600 border-4 border-slate-900 flex items-center justify-center">
        <PaperAirplaneIcon className="w-3 h-3 text-slate-300 transform -rotate-45" />
      </div>
      
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 shadow-md">
        <div className="flex items-center gap-2 text-sm text-slate-300 font-semibold mb-3">
          <ClockIcon />
          <span>Trajet total: ~{route.totalDuration}</span>
        </div>
        <div className="space-y-3">
          {route.steps.map((step, index) => (
            <div key={index} className="flex items-start gap-3 text-sm">
              <span className={`mt-0.5 ${step.mode === 'subway' ? 'text-amber-400' : 'text-cyan-400'}`}>
                {iconMap[step.mode]}
              </span>
              <div className="flex-1">
                <p className="text-slate-300">{step.instruction}</p>
                {step.details && (
                  <div className="flex items-center gap-2 mt-1 text-xs bg-slate-700/60 px-2 py-1 rounded-md w-fit">
                    <span className="font-bold" style={{ color: getLineColor(step.details.line) }}>
                      {step.details.line}
                    </span>
                    <span className="text-slate-400">{step.details.direction}</span>
                    {step.details.stops && <span className="text-slate-400">({step.details.stops} arrêts)</span>}
                  </div>
                )}
              </div>
              <span className="text-slate-500 font-medium">{step.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper icon for the timeline dot
const PaperAirplaneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0015.493-1.805.75.75 0 00.002-1.003A60.517 60.517 0 003.478 2.405z" />
    </svg>
);


// Helper function to get NYC subway line colors
const getLineColor = (line: string): string => {
    const colors: Record<string, string> = {
        'R': '#FCCC0A', 'W': '#FCCC0A',
        'B': '#FF6319', 'D': '#FF6319', 'F': '#FF6319', 'M': '#FF6319',
        'A': '#0039A6', 'C': '#0039A6', 'E': '#0039A6',
        'L': '#A7A9AC',
    };
    return colors[line.toUpperCase()] || '#FFFFFF';
}


export default TransportSegment;