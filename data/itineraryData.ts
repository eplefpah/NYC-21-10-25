
// FIX: Corrected import path
import type { ItineraryData } from '../types';

const linkify = (text: string, url: string) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:underline">${text}</a>`;

export const itineraryData: ItineraryData = {
  transportStrategy: [
    `OMNY avec plafonnement 7 jours : base 3 $/trajet, cap ≈ 35 $ après 12 validations sur 7 jours → le plus simple et souvent le moins cher pour 5 jours. ${linkify('MTA', 'https://omny.info/')}`,
    `JFK → Manhattan : AirTrain JFK (8,50 $), puis LIRR (Jamaica → Penn) le plus rapide; alternative métro E. ${linkify('JFK Airport', 'https://www.jfkairport.com/')}`,
    `Citi Bike en appoint quand plus rapide/agréable. Day Pass 25 $ / 24 h (classiques : 30 min par course, e-bike 0,38 $/min). ${linkify('Citi Bike NYC', 'https://citibikenyc.com/')}`,
    'Marche courte (≤ 15 min) priorisée pour les liaisons intra-quartier.',
    `Vérifier travaux MTA la veille (Weekender + app MTA). ${linkify('MTA Info', 'https://new.mta.info/')}`,
  ],
  ticketChecklist: [
    `Top of the Rock (créneau « golden hour », 16 h 30–17 h 00) : réservez en ligne. Ouvert 8h-0h, dernière entrée 23h10. ${linkify('rockefellercenter.com', 'https://www.rockefellercenter.com/buy-tickets/')}`,
    `The Rink - Rockefeller Center (patinage 60 min) : ouvert tous les jours. Réservez un créneau du soir. ${linkify('rockefellercenter.com', 'https://www.rockefellercenter.com/attractions/the-rink-at-rockefeller-center/')}`,
    `Statue of Liberty & Ellis Island (ferry officiel Statue City Cruises) : prenez le 1er créneau ~9h00. ${linkify('City Experiences™', 'https://www.cityexperiences.com/new-york/city-cruises/statue-city-cruises/')}`,
    `9/11 Museum (si vous visitez l'intérieur) : mer–lun 9h–19h. Réservez un créneau 15 h 30. ${linkify('Mémorial du 11 septembre', 'https://www.911memorial.org/')}`,
    `Aladdin (New Amsterdam Theatre) : réservez mer. 23/10 à 19h OU sam. 25/10 à 14h. ${linkify('aladdinthemusical.com', 'https://aladdinthemusical.com/')}`,
    `Empire State Building (ven. matin) : billet daté à l'avance recommandé. ${linkify('esbnyc.com', 'https://www.esbnyc.com/')}`,
    `The Crown Rooftop (50 Bowery) : réservez une table vers 18 h 30–19 h. ${linkify('thecrownnyc.com', 'https://www.thecrownnyc.com/')}`,
  ],
  days: [
    {
      date: '2025-10-21',
      dayName: 'Mardi',
      title: 'Arrivée, Flatiron, Top of the Rock + patinoire',
      activities: [
        { startTime: '10:30', endTime: '12:00', title: 'Arrivée JFK + immigration/bagages', address: 'JFK Airport', duration: '30-45 min', lat: 40.6413, lng: -73.7781 },
        { startTime: '12:00', endTime: '12:50', title: 'JFK → Madison Sq Park (hébergement)', address: 'E 26th & Madison', transport: 'AirTrain (terminal→Jamaica), LIRR Jamaica→Penn, marche 18 min', duration: '~50 min', buffer: '10 min', lat: 40.7424, lng: -73.9882, notes: `Cartes : transit → ${linkify('Google Maps', 'https://maps.google.com/?saddr=JFK%20Terminal&daddr=Madison%20Square%20Park,%20NYC&dirflg=r')}. AirTrain 8,50 $; LIRR ~20 min. (${linkify('jfkairport.com', 'https://www.jfkairport.com/')})` },
        { startTime: '12:50', endTime: '13:30', title: 'Installation rapide + marche Flatiron', address: 'autour du parc', transport: 'à pied', lat: 40.7411, lng: -73.9897, notes: 'Admirez Flatiron Building, Met Life Tower.' },
        { startTime: '13:30', endTime: '14:30', title: 'Déj. Shake Shack (Madison Sq Park)', address: '23rd & Madison', transport: 'à pied', duration: '2-5 min', lat: 40.7408, lng: -73.9880, notes: `Heures 10:30-23:00. ${linkify('Google Maps', 'https://maps.google.com/?q=Shake%20Shack%20Madison%20Square%20Park')}. (${linkify('Shake Shack', 'https://www.shakeshack.com/')})` },
        { startTime: '14:30', endTime: '15:30', title: 'Sieste courte / balade parc', address: 'Madison Sq Park', lat: 40.7424, lng: -73.9882, notes: 'Aire de jeux/écureuils ; bon pour le grand-parent.' },
        { startTime: '15:30', endTime: '16:00', title: 'Vers Top of the Rock', address: '30 Rockefeller Plaza', transport: 'R/W 23 St → 49 St (2 stops) puis 6-8 min à pied', duration: '~20 min', buffer: '15 min', lat: 40.7587, lng: -73.9787, notes: `Maps (métro) : ${linkify('Google Maps', 'https://maps.google.com/?saddr=23%20St%20Station%20(R/W)&daddr=Top%20of%20the%20Rock&dirflg=r')}. Billets créneau 16:30–17:00. (${linkify('rockefellercenter.com', 'https://www.rockefellercenter.com/buy-tickets/')})` },
        { startTime: '16:00', endTime: '17:30', title: 'Top of the Rock', address: '30 Rockefeller Plaza', buffer: '15 min', lat: 40.7587, lng: -73.9787, notes: `Profitez golden hour + vue Central Park. (${linkify('rockefellercenter.com', 'https://www.rockefellercenter.com/')})` },
        { startTime: '17:30', endTime: '19:00', title: 'Patinoire Rockefeller', address: 'Rockefeller Plaza', transport: 'à pied (2 min)', buffer: '15 min', lat: 40.7587, lng: -73.9787, notes: `Session 60 min sur la glace. Billets en ligne. (${linkify('rockefellercenter.com', 'https://www.rockefellercenter.com/attractions/the-rink-at-rockefeller-center/')})` },
        { startTime: '19:10', endTime: '19:30', title: 'Vers dîner', transport: 'à pied (Times Sq/ Bryant Pk)', duration: '15-20 min', notes: `Maps : ${linkify('Google Maps', 'https://maps.google.com/?saddr=Rockefeller%20Center&daddr=110%20W%2040th%20St%2010018&dirflg=w')}` },
        { startTime: '19:30', endTime: '20:45', title: 'Dîner – Handcraft Burgers & Brew', address: '110 W 40th St', lat: 40.7533, lng: -73.9862, notes: `Heures sur site / résa en ligne. (${linkify('handcraftburgers.com', 'https://handcraftburgers.com/')})` },
        { startTime: '21:00', endTime: '21:25', title: 'Retour hébergement', address: 'Madison Sq Park', transport: 'à pied / B/D/F/M Bryant Pk → 34 St-Herald Sq (1 stop) + marche', duration: '20-25 min', lat: 40.7424, lng: -73.9882 },
      ],
    },
    {
        date: '2025-10-22',
        dayName: 'Mercredi',
        title: 'Statue of Liberty & Ellis, Battery, 9/11, Chinatown',
        activities: [
            { startTime: '07:45', endTime: '08:15', title: 'Hébergement → Battery Park', address: 'State St & Battery Pl (Castle Clinton)', transport: 'R/W 23 St → Whitehall St, 4 stops', duration: '~20 min', buffer: '20 min sécu', lat: 40.7033, lng: -74.0170, notes: `Maps (métro) : ${linkify('Google Maps', 'https://maps.google.com/?saddr=23%20St%20Station%20(R/W)&daddr=Castle%20Clinton&dirflg=r')}`},
            { startTime: '08:30', endTime: '12:30', title: 'Statue of Liberty & Ellis Island', address: 'Embarquement Battery Park', lat: 40.7013, lng: -74.0169, notes: `Uniquement Statue City Cruises. Arrivez 30–45 min avant l'heure. (${linkify('City Experiences™', 'https://www.cityexperiences.com/new-york/city-cruises/statue-city-cruises/')})`},
            { startTime: '12:35', endTime: '13:30', title: 'Pique-nique à The Battery (pelouses)', address: 'The Battery (Woodland/Lawns)', transport: 'à pied', lat: 40.7032, lng: -74.0158, notes: `Pelouses ouvertes en journée (rotation). (${linkify('The Battery', 'https://www.thebattery.org/')})`},
            { startTime: '13:30', endTime: '14:00', title: 'Battery → 9/11 Memorial', address: '180 Greenwich St', transport: 'à pied (15–20 min)', duration: '15-20 min', lat: 40.7114, lng: -74.0125, notes: `Maps (marche) : ${linkify('Google Maps', 'https://maps.google.com/?saddr=The%20Battery&daddr=9%2F11%20Memorial%20Plaza&dirflg=w')}`},
            { startTime: '14:00', endTime: '17:15', title: '9/11 Memorial & Museum (extérieur/intérieur)', address: 'Memorial Plaza', lat: 40.7127, lng: -74.0134, notes: `Musée si envie 15 h 30–17 h (billet horodaté). (${linkify('Mémorial du 11 septembre', 'https://www.911memorial.org/')})`},
            { startTime: '17:15', endTime: '18:00', title: 'Ground Zero → Chinatown', address: 'Bowery', transport: 'A/C Chambers → Canal St ou marche 25 min', duration: '10-20 min', lat: 40.7178, lng: -73.9954},
            { startTime: '18:00', endTime: '19:15', title: 'Dîner – Joe\'s Shanghai (Chinatown)', address: '46 Bowery', lat: 40.7144, lng: -73.9982, notes: `Connu pour les soup dumplings (attente possible). (${linkify('Joe\'s Shanghai', 'https://www.joeshanghairestaurants.com/')})`},
            { startTime: '19:15', endTime: '19:45', title: 'Retour', address: 'Madison Sq Park', transport: 'R Canal St → 23 St', duration: '~15 min', lat: 40.7424, lng: -73.9882},
        ]
    },
    {
        date: '2025-10-23',
        dayName: 'Jeudi',
        title: 'Central Park & vélos, Brooklyn Bridge à pied, Broadway (option)',
        activities: [
            { startTime: '08:30', endTime: '08:55', title: 'Vers location vélos', address: '56 W 56th St (Unlimited Biking)', transport: 'R/W 23 St → 57 St-7 Av + 5 min à pied', duration: '~20 min', lat: 40.7629, lng: -73.9784, notes: `Boutique 8h-20h (saison). Pièce d'identité + CB. (${linkify('Unlimited Biking', 'https://www.unlimitedbiking.com/')})`},
            { startTime: '09:00', endTime: '11:30', title: 'Boucle Central Park à vélo', address: 'Parc', lat: 40.7711, lng: -73.9742, notes: `Suivez les boucles sens anti-horaire; casques pour < 14 ans. (${linkify('Central Park Conservancy', 'https://www.centralparknyc.org/')})`},
            { startTime: '11:30', endTime: '12:00', title: 'Restitution vélos', address: '56 W 56th St', lat: 40.7629, lng: -73.9784, notes: `Si vous préférez Citi Bike (Day Pass 25 $), docks partout. (${linkify('citibikenyc.com', 'https://citibikenyc.com/')})`},
            { startTime: '12:00', endTime: '12:30', title: 'Midtown → City Hall (départ pont)', address: 'City Hall Park', transport: 'R/W 57 St → City Hall', duration: '~20 min', lat: 40.7128, lng: -74.0060},
            { startTime: '12:30', endTime: '13:45', title: 'Pique-nique Chinatown', address: 'Columbus Park / Mott St', transport: 'à pied 10 min', duration: '10 min', lat: 40.7155, lng: -73.9995, notes: 'À emporter : boules de sésame, bao, etc.'},
            { startTime: '14:00', endTime: '15:00', title: 'Brooklyn Bridge (à pied)', address: 'Promenade piétonne', transport: 'à pied', lat: 40.7061, lng: -73.9969, notes: 'Entrée côté Centre St près de City Hall, sortie DUMBO/Pier 1.'},
            { startTime: '15:00', endTime: '16:30', title: 'Brooklyn Bridge Park / DUMBO', address: 'Pier 1', transport: 'à pied', lat: 40.7022, lng: -73.9961, notes: 'Photos skyline/ glace chez Ample Hills.'},
            { startTime: '16:30', endTime: '17:15', title: 'Retour Midtown', address: 'Times Sq', transport: 'F York St → 42 St-Bryant Pk ou A/C High St → 42 St-Port', duration: '25-35', lat: 40.7580, lng: -73.9855},
            { startTime: '19:00', endTime: '21:30', title: 'Aladdin (option jeudi)', address: 'New Amsterdam Theatre', transport: 'à pied/ métro', lat: 40.7565, lng: -73.9861, notes: `Billets officiels Disney. (${linkify('aladdinthemusical.com', 'https://aladdinthemusical.com/')})`},
            { startTime: '21:35', endTime: '22:15', title: 'Joe\'s Pizza (Times Sq)', address: '1435 Broadway', transport: 'à pied 8 min', duration: '8 min', lat: 40.7548, lng: -73.9868, notes: `Ouvert tard. (${linkify('Joe\'s Pizza', 'https://www.joespizzanyc.com/')})`},
        ]
    },
    {
        date: '2025-10-24',
        dayName: 'Vendredi',
        title: 'Empire State, High Line, Rooftop',
        activities: [
            { startTime: '08:15', endTime: '08:25', title: 'Hébergement → Empire State Building', address: '20 W 34th St', transport: 'à pied (10–12 min)', duration: '10-12 min', buffer: '10 min', lat: 40.7484, lng: -73.9857, notes: `Billets datés (moins d'affluence tôt). (${linkify('esbnyc.com', 'https://www.esbnyc.com/')})`},
            { startTime: '08:30', endTime: '10:00', title: 'Visite observatoire', address: 'ESB', lat: 40.7484, lng: -73.9857},
            { startTime: '10:15', endTime: '11:00', title: 'Pause / marché', address: 'Eataly Flatiron / parc', transport: 'à pied', lat: 40.7420, lng: -73.9896, notes: 'Option pique-nique pour l\'aprèm.'},
            { startTime: '11:00', endTime: '11:25', title: 'Vers Hudson Yards', address: '30th St & 10th Ave', transport: '1 arrêt en M (34 St-Herald Sq → 34 St-Hudson Yards), plus simple bus M34-SBS ou marche 25 min', duration: '20-25', lat: 40.7528, lng: -74.0017},
            { startTime: '11:30', endTime: '14:30', title: 'High Line (nord → sud)', address: '34th → Gansevoort', transport: 'à pied (parc)', lat: 40.7470, lng: -74.0062, notes: `Ouvert 7h–22h en octobre. (${linkify('Wikipédia', 'https://en.wikipedia.org/wiki/High_Line')})`},
            { startTime: '14:30', endTime: '15:30', title: 'Chelsea Market / pause', address: '75 9th Ave', lat: 40.7424, lng: -74.0062, notes: 'Collations & toilettes pratiques.'},
            { startTime: '17:45', endTime: '18:15', title: 'Vers The Crown Rooftop', address: '50 Bowery', transport: 'F/M 14 St → East Broadway, 8 min à pied', duration: '~25 min', lat: 40.7149, lng: -73.9972, notes: `Résa 18 h 30. (${linkify('thecrownnyc.com', 'https://www.thecrownnyc.com/')})`},
            { startTime: '18:30', endTime: '19:30', title: 'Rooftop – The Crown', address: '50 Bowery', lat: 40.7149, lng: -73.9972, notes: 'Vue sur Midtown & ponts.'},
            { startTime: '19:40', endTime: '20:40', title: 'Dîner – Joe\'s Shanghai (si 2e passage)', address: '46 Bowery', transport: 'à pied 5 min', duration: '5 min', lat: 40.7144, lng: -73.9982},
            { startTime: '20:45', endTime: '21:15', title: 'Retour', address: 'Madison Sq Park', transport: 'R Canal/Prince → 23 St', duration: '20-25 min', lat: 40.7424, lng: -73.9882},
        ]
    },
    {
        date: '2025-10-25',
        dayName: 'Samedi',
        title: 'Shopping/Libre, Aladdin (mat.), départ',
        activities: [
            { startTime: '09:00', endTime: '12:00', title: 'Shopping (au choix)', address: 'SoHo (Broadway/Prince), 5th Ave (50–59 St)', transport: 'métro selon choix', duration: 'variable', lat: 40.7246, lng: -73.9972, notes: 'Regroupez par zone pour limiter trajets.'},
            { startTime: '12:00', endTime: '13:30', title: 'Déj. rapide proche théâtre', address: 'Times Sq / 42 St', transport: 'à pied', lat: 40.7580, lng: -73.9855, notes: `Ex. Joe's Pizza (rapide), ou patties chez UrbanSpace. (${linkify('Joe\'s Pizza', 'https://www.joespizzanyc.com/')})`},
            { startTime: '14:00', endTime: '16:30', title: 'Aladdin (si vous choisissez samedi)', address: 'New Amsterdam Theatre', lat: 40.7565, lng: -73.9861, notes: `Sortie ~16 h 30 → direct JFK ? mieux partir 16 h pour marge. (${linkify('aladdinthemusical.com', 'https://aladdinthemusical.com/')})`},
            { startTime: '16:00', endTime: '17:10', title: 'Manhattan → JFK', address: 'Terminal', transport: 'E (34 St-Penn / 23 St → Sutphin Blvd-Archer) + AirTrain', duration: '~70 min', buffer: '20-30 min', lat: 40.6446, lng: -73.7797, notes: `Maps transit : ${linkify('Google Maps', 'https://maps.google.com/?saddr=23%20St%20Station%20(E)&daddr=JFK%20Terminal%204&dirflg=r')}. AirTrain 8,50 $. (${linkify('MTA', 'https://new.mta.info/')})`},
            { startTime: '17:10', endTime: '21:00', title: 'Enregistrement/sûreté/embarquement', address: 'JFK', lat: 40.6413, lng: -73.7781, notes: 'Recommandé 3 h avant vol intl.'},
        ]
    }
  ],
  restoOptions: [
    { title: 'Rockefeller/Top of the Rock', items: [
      'Black Seed Bagels (snack) – 1–5 min, attente 5–10 min, sans résa.',
      `The Weather Room Café & Bar (Top of the Rock) – sur place, vues; réservation conseillée aux pics. ${linkify('rockefellercenter.com', 'https://www.rockefellercenter.com/')}`
    ]},
    { title: 'Battery/9-11', items: [
      'Leo\'s Bagels (Hanover Sq) – déj. rapide abordable.',
      'Eataly Downtown – food court, places assises, bon en cas de pluie.'
    ]},
    { title: 'Times Sq/Broadway', items: [
      `Joe's Pizza (1435 Broadway) – service comptoir, très rapide. ${linkify('Joe\'s Pizza', 'https://www.joespizzanyc.com/')}`,
      `Handcraft Burgers & Brew – burgers « gastro », attente 10–20 min, pas de résa. ${linkify('handcraftburgers.com', 'https://handcraftburgers.com/')}`
    ]},
    { title: 'Chinatown', items: [
      `Joe's Shanghai (46 Bowery) – $$, file probable, résa parfois possible par téléphone. ${linkify('Joe S Shanghai', 'https://www.joeshanghairestaurants.com/')}`,
      'Great NY Noodletown – $, ouvert tard/nuit (plan B budget). (À confirmer horaires exacts sur place.)'
    ]},
  ],
  contingencyPlans: [
    { title: 'Si retard ≥ 15 min', items: [
      'Ferry Statue saturé : Staten Island Ferry (gratuit) + balade Esplanade → 9/11 comme prévu.',
      `Mauvais temps / visibilité : swap Top of the Rock ↔ musée 9/11 ou MoMA; patinoire couverte par réservation un autre soir. ${linkify('Mémorial du 11 septembre', 'https://www.911memorial.org/')}`,
      `Ligne métro perturbée : consulter MTA Weekender/MTA app et basculer sur lignes parallèles (ex. R/W ↔ N/Q, E ↔ LIRR pour JFK). ${linkify('MTA', 'https://new.mta.info/')}`,
      'Affluence Broadway : dîner debout Joe\'s Pizza avant/après; ou UrbanSpace (food hall) près de Bryant Park.'
    ]},
    { title: 'Détails pratiques & contrôles', items: [
      `Top of the Rock : entrée flexible à l'heure choisie; restez tant que vous voulez; contrôles sécurité standards. ${linkify('rockefellercenter.com', 'https://www.rockefellercenter.com/')}`,
      `The Rink : session de 60 min; location patins possible; saison ouverte dès 11 oct. 2025. ${linkify('rockefellercenter.com', 'https://www.rockefellercenter.com/attractions/the-rink-at-rockefeller-center/')}`,
      `Statue/Ellis : contrôle type aéroport, temps total ~4 h si Ellis incluse. ${linkify('City Experiences™', 'https://www.cityexperiences.com/new-york/city-cruises/statue-city-cruises/')}`,
      `Empire State Building : réservation en ligne recommandée; les prix sont dynamiques selon l'horaire. ${linkify('esbnyc.com', 'https://www.esbnyc.com/')}`,
      `High Line : gratuit, 7h-22h en octobre; entrées/ascenseurs 14th/16th/23rd/30th St. ${linkify('Wikipédia', 'https://en.wikipedia.org/wiki/High_Line')}`,
      `Citi Bike : Day Pass 25 $; redockez chaque ≤ 30 min (sinon 0,38 $/min). ${linkify('Carte des stations', 'https://citibikenyc.com/map')}`
    ]}
  ]
};
