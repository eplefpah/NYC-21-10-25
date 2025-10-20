import type { RouteSegment } from '../types';

export const routingData: Record<string, RouteSegment> = {
  // --- JOUR 1: MARDI ---
  '0-4': {
    totalDuration: '22 min',
    steps: [
      { mode: 'walk', duration: '6 min', instruction: 'Marcher vers 23rd St Station' },
      { mode: 'subway', duration: '8 min', instruction: 'Prendre le métro', details: { line: 'R', direction: 'Uptown', stops: 2 }},
      { mode: 'walk', duration: '8 min', instruction: 'Marcher vers Top of the Rock' },
    ],
  },
  '0-9': {
    totalDuration: '24 min',
    steps: [
      { mode: 'walk', duration: '5 min', instruction: 'Marcher vers Bryant Pk Station' },
      { mode: 'subway', duration: '4 min', instruction: 'Prendre le métro', details: { line: 'F', direction: 'Downtown', stops: 1 }},
      { mode: 'walk', duration: '15 min', instruction: 'Marcher vers l\'hébergement' },
    ],
  },
  // --- JOUR 2: MERCREDI ---
  '1-0': {
    totalDuration: '18 min',
    steps: [
      { mode: 'walk', duration: '4 min', instruction: 'Marcher vers 23rd St Station' },
      { mode: 'subway', duration: '10 min', instruction: 'Prendre le métro', details: { line: 'R', direction: 'Downtown', stops: 4 }},
      { mode: 'walk', duration: '4 min', instruction: 'Marcher vers Battery Park' },
    ],
  },
  '1-4': {
    totalDuration: '18 min',
    steps: [
      { mode: 'walk', duration: '12 min', instruction: 'Marcher vers Fulton St Station' },
      { mode: 'subway', duration: '3 min', instruction: 'Prendre le métro', details: { line: 'A', direction: 'Uptown', stops: 1 }},
      { mode: 'walk', duration: '3 min', instruction: 'Marcher vers Chinatown' },
    ],
  },
  '1-6': {
    totalDuration: '15 min',
    steps: [
      { mode: 'walk', duration: '4 min', instruction: 'Marcher vers Canal St Station' },
      { mode: 'subway', duration: '7 min', instruction: 'Prendre le métro', details: { line: 'R', direction: 'Uptown', stops: 3 }},
      { mode: 'walk', duration: '4 min', instruction: 'Marcher vers l\'hébergement' },
    ],
  },
  // --- JOUR 3: JEUDI ---
  '2-0': {
    totalDuration: '17 min',
    steps: [
        { mode: 'walk', duration: '4 min', instruction: 'Marcher vers 23rd St Station' },
        { mode: 'subway', duration: '8 min', instruction: 'Prendre le métro', details: { line: 'R', direction: 'Uptown', stops: 3 }},
        { mode: 'walk', duration: '5 min', instruction: 'Marcher vers Unlimited Biking' },
    ],
  },
  '2-3': {
    totalDuration: '21 min',
    steps: [
        { mode: 'walk', duration: '4 min', instruction: 'Marcher vers 57 St-7 Av Station' },
        { mode: 'subway', duration: '12 min', instruction: 'Prendre le métro', details: { line: 'R', direction: 'Downtown', stops: 6 }},
        { mode: 'walk', duration: '5 min', instruction: 'Marcher vers City Hall Park' },
    ],
  },
  '2-6': {
    totalDuration: '28 min',
    steps: [
        { mode: 'walk', duration: '8 min', instruction: 'Marcher vers York St Station' },
        { mode: 'subway', duration: '15 min', instruction: 'Prendre le métro', details: { line: 'F', direction: 'Uptown', stops: 6 }},
        { mode: 'walk', duration: '5 min', instruction: 'Marcher vers Times Square' },
    ],
  },
  // --- JOUR 4: VENDREDI ---
  '3-3': {
    totalDuration: '25 min',
    steps: [
        { mode: 'walk', duration: '25 min', instruction: 'Marcher le long de la 26th St et 10th Ave vers Hudson Yards' },
    ],
  },
  '3-6': {
    totalDuration: '22 min',
    steps: [
        { mode: 'walk', duration: '8 min', instruction: 'Marcher vers 14 St / 6 Av Station' },
        { mode: 'subway', duration: '6 min', instruction: 'Prendre le métro', details: { line: 'F', direction: 'Downtown', stops: 3 }},
        { mode: 'walk', duration: '8 min', instruction: 'Marcher vers The Crown Rooftop' },
    ],
  },
  '3-8': {
    totalDuration: '20 min',
    steps: [
        { mode: 'walk', duration: '5 min', instruction: 'Marcher vers Canal St Station' },
        { mode: 'subway', duration: '11 min', instruction: 'Prendre le métro', details: { line: 'R', direction: 'Uptown', stops: 5 }},
        { mode: 'walk', duration: '4 min', instruction: 'Marcher vers l\'hébergement' },
    ],
  },
};
