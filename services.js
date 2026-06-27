// Service definitions used by the home teaser and the services page.
export const services = [
  {
    id: 'drain',
    icon: 'drain',
    title: 'Drain & sewer',
    blurb:
      "Cabling, hydro-jetting, and camera inspection to clear clogs and find what's really going on underground.",
    detail:
      "Slow drains and recurring clogs are usually a sign of something deeper. We clear the line and use a camera to find the real cause, so the same problem doesn't come back next month.",
    items: ['Drain cabling & snaking', 'High-pressure hydro-jetting', 'Camera line inspection', 'Sewer repair & replacement'],
    urgent: false,
  },
  {
    id: 'water-heaters',
    icon: 'heater',
    title: 'Water heaters',
    blurb:
      "Repair, replacement, and tankless upgrades — sized for your home and Phoenix's hard water.",
    detail:
      "No hot water, rusty water, or a tank that's seen better days? We repair what's worth repairing and replace what isn't — including tankless upgrades sized for your household and Phoenix's hard water.",
    items: ['Repair & element replacement', 'Tank replacement', 'Tankless installation', 'Flushing & maintenance'],
    urgent: false,
  },
  {
    id: 'leaks',
    icon: 'drop',
    title: 'Leak repair',
    blurb:
      'Slab leaks, dripping fixtures, and hidden pipe leaks located and fixed before they damage your home.',
    detail:
      'A small leak wastes water and quietly damages your home. We locate hidden and slab leaks precisely — minimizing the digging — and seal them before they turn into a big repair.',
    items: ['Slab leak detection', 'Pipe & fixture repair', 'Repipe & reroute', 'Running toilets & faucets'],
    urgent: false,
  },
  {
    id: 'emergency',
    icon: 'clock',
    title: '24/7 emergency',
    blurb:
      'Burst pipes, sewage backups, no hot water — a real plumber answers and is on the way, any hour.',
    detail:
      "Burst pipe, sewage backup, no hot water in the dead of summer — these don't wait for business hours, and neither do we. A real plumber answers and is on the way, any hour, any day.",
    items: ['Burst & frozen pipes', 'Sewage backups', 'Major leaks & shutoffs', 'Same-day, no surcharge games'],
    urgent: true,
  },
];
