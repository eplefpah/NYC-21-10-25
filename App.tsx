import React, { useState } from 'react';
import { itineraryData } from './data/itineraryData';
import ItineraryView from './components/ItineraryView';
import InfoCard from './components/InfoCard';
import RealTimeTracker from './components/RealTimeTracker';
import GlobalMapView from './components/GlobalMapView'; // New Import
import { MapPinIcon, TicketIcon, RocketLaunchIcon, BookOpenIcon, MapIcon } from './components/icons'; // Added MapIcon

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Info');

  const tabs = ['Info', 'Carte Globale', ...itineraryData.days.map(day => day.dayName)];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <header className="bg-slate-800/50 backdrop-blur-lg sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
              Voyage à New York
            </h1>
            <p className="text-center text-slate-400 text-sm md:text-base">21–25 Octobre 2025</p>
          </div>
          <nav className="overflow-x-auto">
            <div className="flex space-x-2 border-b border-slate-700">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-200 flex items-center gap-2 ${
                    activeTab === tab
                      ? 'border-b-2 border-sky-400 text-sky-300'
                      : 'border-b-2 border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  {tab === 'Carte Globale' && <MapIcon />}
                  {tab}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6">
        {activeTab === 'Info' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard title="Stratégie Transports" icon={<RocketLaunchIcon />}>
                 <ul className="list-disc list-inside space-y-3">
                    {itineraryData.transportStrategy.map((item, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                 </ul>
              </InfoCard>
              <InfoCard title="Checklist Billets & Résas" icon={<TicketIcon />}>
                <ul className="list-disc list-inside space-y-3">
                    {itineraryData.ticketChecklist.map((item, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                 </ul>
              </InfoCard>
              <InfoCard title="Restaurants & Options" icon={<MapPinIcon />}>
                <div className="space-y-4">
                    {itineraryData.restoOptions.map((item, index) => (
                        <div key={index}>
                            <h4 className="font-semibold text-sky-300">{item.title}</h4>
                            <ul className="list-disc list-inside pl-2 space-y-2 mt-1">
                                {item.items.map((subItem, subIndex) => (
                                    <li key={subIndex} dangerouslySetInnerHTML={{ __html: subItem}}/>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
              </InfoCard>
               <InfoCard title="Plans & Infos Pratiques" icon={<BookOpenIcon />}>
                <div className="space-y-4">
                    {itineraryData.contingencyPlans.map((item, index) => (
                        <div key={index}>
                            <h4 className="font-semibold text-sky-300">{item.title}</h4>
                            <ul className="list-disc list-inside pl-2 space-y-2 mt-1">
                                {item.items.map((subItem, subIndex) => (
                                    <li key={subIndex} dangerouslySetInnerHTML={{ __html: subItem}}/>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
              </InfoCard>
          </div>
        )}
        
        {activeTab === 'Carte Globale' && <GlobalMapView days={itineraryData.days} />}

        {itineraryData.days.map((day, index) => (
          activeTab === day.dayName && <ItineraryView key={day.date} day={day} dayIndex={index} />
        ))}
      </main>
      
      <RealTimeTracker itinerary={itineraryData.days} />

      <footer className="text-center py-6 text-slate-500 text-sm">
        <p>Bon voyage !</p>
      </footer>
    </div>
  );
};

export default App;