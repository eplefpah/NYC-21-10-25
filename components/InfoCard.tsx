
import React from 'react';

interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-slate-800 p-5 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
        <span className="text-sky-400">{icon}</span>
        {title}
      </h3>
      <div className="text-slate-300 text-sm space-y-2">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
