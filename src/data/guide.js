// guide.js
import cprImg from '../assets/cpr.png';
import electricShockImg from '../assets/electric-shock.png';
import roadAccidentImg from '../assets/electric-shock.png'

const guides = [
  {
    id: 1,
    heading: 'How to Perform CPR',
    image: cprImg,
    points: [
      'Check responsiveness and breathing',
      'Call emergency services immediately',
      'Start chest compressions – 100 to 120 per minute',
      'Give rescue breaths after every 30 compressions',
      'Continue until help arrives or the person recovers'
    ]
  },
  {
    id: 2,
    heading: 'If Someone Gets an Electric Shock',
    image: electricShockImg,
    points: [
      'Do NOT touch the person with bare hands',
      'Turn off the power source if possible',
      'Use a wooden or plastic stick to separate the person',
      'Call emergency services immediately',
      'Check for breathing and pulse, begin CPR if needed'
    ]
  },
  {
    id: 3,
    heading: "What to Do in Case of a Road Accident",
    image: roadAccidentImg,
    points: [
      "Ensure your own safety first before approaching the accident site.",
      "Call emergency services immediately and provide accurate location details.",
      "If safe, check for injuries and provide basic first aid without moving the victim unnecessarily.",
      "Do not remove helmets from motorcyclists unless necessary for CPR.",
      "Wait with the injured until help arrives and provide clear information to responders."
    ]
  }
];

export default guides;
