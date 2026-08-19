export const SITE = {
  name: "Team Vikram",
  tagline: "Rocketry, Drone Technology & CanSat Satellite Systems",
  email: "teamvikram@rajalakshmi.edu.in",
  phone: "+91 63749 82997",
  college: "Rajalakshmi Engineering College",
  location: "Vellore Chennai Rd, Rajalakshmi Nagar, Thandalam, Tamil Nadu 602105",
  competition: "IN-SPACe Rocketry, Drone and CanSat & Aerospace Championships",
  socials: {
    instagram: "https://www.instagram.com/teamvikramrec/",
    linkedin: "https://www.linkedin.com/company/team-vikram-rec/",
    github: "https://github.com/teamvikram",
  },
  /** Set to your Formspree form ID, e.g. "xyzabcde" */
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || "",
  /**
   * Google Apps Script web app endpoint for contact submissions.
   * Deploy as "Anyone" / execute as you POST accepts JSON or form fields.
   */
  appsScriptUrl:
    process.env.APPS_SCRIPT_URL ||
    "https://script.google.com/macros/s/AKfycbwvLKKVLKCuyap2xa-scdvJ4JRjTsv91dljjN3HWsWD9sY0jbC9t3KNzspjIRTGWVyk/exec",
  /** Countdown target */
  countdownTarget: "2026-06-15T09:00:00+05:30",
  countdownLabel: "Flight Test Window",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/team", label: "TEAM" },
  { href: "/sponsorship", label: "SPONSORSHIP" },
  { href: "/project", label: "PROJECT" },
  { href: "/contact", label: "CONTACT" },
] as const;

export const FEATURE_TILES = [
  {
    id: "rocketry",
    title: "ROCKETRY",
    subtitle: "Sounding Rockets & Propulsion",
    description:
      "High-power sounding rockets engineered with custom fiberglass airframes, OpenRocket simulations, static motor tests, and dual-stage recovery.",
  },
  {
    id: "drone",
    title: "DRONE TECH",
    subtitle: "Autonomous UAV Systems",
    description:
      "Custom multirotor frames, PX4/ArduPilot autonomous navigation, GPS/IMU sensor fusion, computer vision, and precision payload release.",
  },
  {
    id: "cansat",
    title: "CANSAT",
    subtitle: "330 ml Satellite · IN-SPACe 2026",
    description:
      "Flight-ready CanSat with LoRa long-range telemetry link, 7-state flight FSM, parachute descent, and real-time ground station dashboard.",
  },
] as const;

export const WHY_STATS = [
  { label: "Rocket & Flight Tests", value: "UPCOMING", suffix: "" },
  { label: "Active Divisions", value: "UPCOMING", suffix: "" },
  { label: "Telemetry Range", value: "UPCOMING", suffix: "" },
  { label: "Engineers & Crew", value: "UPCOMING", suffix: "" },
] as const;

export const IMPACT_STATS = [
  { label: "Design Reviews Passed", value: 6, suffix: "" },
  { label: "Aerospace Mentors", value: 4, suffix: "" },
  { label: "Ground Station Uptime", value: 99, suffix: "%" },
] as const;

export const MISSION_HIGHLIGHTS = [
  {
    title: "Sounding Rocket Static Test",
    meta: "DIVISION 01 · ROCKETRY",
    body: "Static thrust test and composite airframe simulation completed for Vikram-1, validating stability and dual-deployment parachute recovery.",
  },
  {
    title: "Autonomous Drone Payload Flight",
    meta: "DIVISION 02 · DRONE TECH",
    body: "PX4 autonomous waypoint navigation and precision payload release system successfully field-tested under simulated mission constraints.",
  },
  {
    title: "IN-SPACe CanSat Satellite Milestone",
    meta: "DIVISION 01 · ROCKETRY",
    body: "Built with full 7-state flight FSM, LoRa telemetry backend, and Flask + SQLite ground station stack.",
  },
] as const;

export type TeamMember = {
  name: string;
  role: string;
  subsystem: string;
  group: "Rocketry" | "Drone Tech" | "CanSat & Hardware" | "Software & Ground Station" | "Outreach";
  linkedin?: string;
  github?: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Simran Yadav",
    role: "CanSat Lead (Founder)",
    subsystem: "CanSat Satellite Systems & Payload Architecture",
    group: "CanSat & Hardware",
    linkedin: "#",
  },
  {
    name: "Vijay Raghavendar",
    role: "Model Rocketry Lead (Founder)",
    subsystem: "Sounding Rocketry, Propulsion & Aerodynamics",
    group: "Rocketry",
    linkedin: "#",
  },
  {
    name: "Sanjay C",
    role: "Drone Lead (Founder)",
    subsystem: "Autonomous UAV Platforms & Autonomous Avionics",
    group: "Drone Tech",
    linkedin: "#",
  },
];

export const MENTOR = {
  name: "CHANDRASEKAR P",
  title: "Faculty Advisor & Aerospace Lead",
  dept: "Department of Aeronautical & Aerospace Engineering",
  note: "Guiding Team Vikram across Rocketry propulsion, Autonomous Drone navigation, and CanSat satellite engineering for national aerospace competitions.",
};

export const SPONSOR_TIERS = [
  {
    name: "Subsonic Partner",
    tagline: "Start your journey with us",
    price: "₹20k – ₹50k",
    highlight: false,
    accent: "blue" as const,
    benefits: [
      "Website logo",
      "Social media thank you post",
      "Small logo on team apparel",
      "Logo placement on Rocket & Drone display banners",
      "Logo on CanSat satellite hardware",
    ],
  },
  {
    name: "Transonic Partner",
    tagline: "Breaking the sound barrier of innovation",
    price: "₹50k – ₹1L",
    highlight: true,
    accent: "blue" as const,
    benefits: [
      "Website logo",
      "Social media thank you post",
      "Livestream overlay logo during rocket & drone tests",
      "Blog / Instagram collaboration",
      "Medium logo on team apparel",
      "Medium logo on flight banners",
      "Logo on Sounding Rocket & Autonomous Drone frames",
    ],
  },
  {
    name: "Supersonic Partner",
    tagline: "Accelerating beyond expectations",
    price: "₹1L+",
    highlight: false,
    accent: "blue" as const,
    benefits: [
      "Website logo",
      "Social media thank you post",
      "Livestream overlay logo during flight ops",
      "Blog / Instagram collaboration",
      "LinkedIn mentions",
      "Prominent logo on team apparel",
      "Prominent logo on event banners",
      "Large logo on Sounding Rocket, Drone & CanSat hardware",
      "Featured in flight test documentary videos",
      '"Presented By" tagline',
    ],
  },
  {
    name: "Title Aerospace Partner",
    tagline: "Complete multi-division partnership",
    price: "Custom Package",
    highlight: false,
    accent: "violet" as const,
    benefits: [
      "Title sponsor placement across both divisions",
      "Dedicated social media campaign",
      "Primary logo on Sounding Rockets, Drones & CanSat",
      "Custom blog & video feature stories",
      "Exclusive recruitment access to student engineering team",
      "Primary logo on team apparel and launch gear",
      "Live flight telemetry co-branding",
    ],
  },
] as const;

export const FUND_ALLOCATION = [
  { label: "Rocket Propulsion & Airframe Fabrication", pct: 30 },
  { label: "Drone Frame, Motors & Autonomous Avionics", pct: 25 },
  { label: "CanSat Structure & Payload Sensors", pct: 20 },
  { label: "Travel & Competition Flight Ops", pct: 15 },
  { label: "Ground Station & LoRa Telemetry", pct: 10 },
] as const;

export const SUBSYSTEMS = [
  {
    title: "Rocket Propulsion & Airframes",
    description:
      "High-power solid motor selection, fiberglass composite fin-cans, OpenRocket aerodynamic stability, and dual-stage altimeter recovery.",
  },
  {
    title: "Autonomous Drone Systems",
    description:
      "Multirotor frame design, PX4/ArduPilot flight controllers, GPS/IMU sensor fusion, and computer vision payload release mechanisms.",
  },
  {
    title: "CanSat Satellite Structure",
    description:
      "Layered 330 ml can chassis meeting strict mass/volume constraints, with vibration isolation and modular payload bay.",
  },
  {
    title: "LoRa Telemetry & Communications",
    description:
      "Long-range radio link streaming packetized telemetry to the ground station with link-quality monitoring across 8+ km.",
  },
  {
    title: "Recovery & Parachute Descent",
    description:
      "Altimeter and PWM-triggered descent profiles designed for safe landing and rapid field retrieval for rockets, drones, and CanSats.",
  },
  {
    title: "Ground Station & Flight Dashboard",
    description:
      "Flask API, SQLite storage, live Three.js visualization, and operator tooling for real-time mission management.",
  },
] as const;

export const MISSION_LOG = [
  {
    title: "Concept Freeze",
    date: "Upcoming",
    caption: "Mission requirements locked; subsystem ownership assigned.",
  },
  {
    title: "Structure Prototype",
    date: "Upcoming",
    caption: "First physical stack assembled fit check and mass budget review.",
  },
  {
    title: "FSM Firmware v1",
    date: "Upcoming",
    caption: "Seven-state flight software running on bench with SD logging.",
  },
  {
    title: "Ground Test",
    date: "Upcoming",
    caption: "End-to-end LoRa link verified over field range.",
  },
  {
    title: "Drop Test #1",
    date: "Upcoming",
    caption: "Recovery deployment validated; telemetry continuous through descent.",
  },
  {
    title: "Defense Day Prep",
    date: "Upcoming",
    caption: "Design review materials and demo ground station ready.",
  },
] as const;

export const ROCKETRY_DIVISION = {
  eyebrow: "Division 01",
  heading: "Rocketry",
  subheading: "Engineering flight from ignition to apogee.",
  description:
    "Team Vikram's rocketry division designs, builds, and launches high-power sounding rockets covering propulsion selection, airframe design, recovery systems, and flight stability analysis. From CAD modeling and simulation (OpenRocket / RockSim) to static motor testing and full launch operations, the team handles the complete rocket development lifecycle, targeting precision altitude and safe dual-deployment recovery.",
  focusAreas: [
    "Solid propulsion systems",
    "Aerodynamic airframe design",
    "Parachute recovery & deployment electronics",
    "Flight data telemetry",
    "OpenRocket / RockSim simulation",
    "Static motor testing",
  ],
  projects: [
    {
      title: "SIRC Rocket Third Prize Space Kidz India",
      tag: "Space Kidz India",
      description:
        "SIRC Rocket project awarded THIRD PRIZE in Space Kidz India national competition. Successfully designed, fabricated, and launched with dual-deployment parachute recovery.",
      status: "Completed",
    },
    {
      title: "Vikram-1 High-Power Sounding Rocket",
      tag: "Structures & Propulsion",
      description:
        "Fiberglass composite airframe optimised for minimum drag with integrated fin-can, solid motor mount, and dual-stage altimeter ejection bay.",
      status: "Upcoming",
    },
    {
      title: "Flight Telemetry & Altimeter Module",
      tag: "Avionics",
      description:
        "On-board data logger capturing 3-axis acceleration, barometric altitude, and GPS coordinates at 50 Hz streamed post-flight for trajectory reconstruction.",
      status: "Upcoming",
    },
    {
      title: "CanSat Satellite Structure",
      tag: "CanSat",
      description:
        "A satellite-in-a-can mission carrying a sensor payload, LoRa telemetry, and a recovery system within 330 ml constraints.",
      status: "Upcoming",
    },
  ],
} as const;

export const DRONE_DIVISION = {
  eyebrow: "Division 02",
  heading: "Drone Technology",
  subheading: "Autonomous systems built for real-world missions.",
  description:
    "The drone division develops custom UAV platforms for surveillance, payload delivery, and autonomous navigation applications. Work spans frame design, flight controller tuning, sensor fusion (GPS / IMU), and integration of onboard computer vision building drones capable of stable flight, obstacle awareness, and mission-specific payload handling.",
  focusAreas: [
    "Custom frame & motor configuration",
    "Flight controller firmware (PX4 / ArduPilot)",
    "Autonomous waypoint navigation",
    "Payload integration systems",
    "GPS / IMU sensor fusion",
    "Onboard computer vision",
  ],
  projects: [
    {
      title: "Hex-6 Autonomous UAV Platform",
      tag: "Hardware",
      description:
        "Custom hexacopter frame with 650 mm wheelbase, vibration-damped gimbal mount, and carbon-fibre arms rated for payload delivery. Designed for extended mission endurance.",
      status: "Upcoming",
    },
    {
      title: "Autonomous Waypoint Navigator",
      tag: "Firmware",
      description:
        "ArduPilot mission planner integration with geofenced flight corridors, return-to-launch failsafe, and terrain-following altitude hold.",
      status: "Upcoming",
    },
    {
      title: "Simulated Ground Station Readout",
      tag: "Ground Station & Telemetry",
      description:
        "Real-time HUD telemetry readout displaying live altitude (312.4 m), velocity (8.2 m/s), RSSI (-87 dBm), battery (3.71 V), GPS location, and flight state machine (DESCENT).",
      status: "Upcoming",
    },
  ],
} as const;

export const FAQ_ITEMS = [
  {
    q: "What is Rocketry, Drone, and CanSat?",
    a: "Rocketry involves the design and launch of rockets. Drones are unmanned aerial vehicles used for autonomous flight. A CanSat is a simulation of a real satellite in the shape of a soft drink can. We build these systems for educational aerospace competitions.",
  },
  {
    q: "How will sponsor funds be used?",
    a: "Primarily for fabrication, avionics, competition travel, testing, and ground station hardware. We publish an allocation breakdown on our Sponsorship page.",
  },
  {
    q: "Can we get logo placement on the flight hardware?",
    a: "Yes Title and Gold tiers include physical logo placement on the CanSat structure and team materials, subject to size and surface constraints.",
  },
  {
    q: "Who should media inquiries contact?",
    a: `Email ${SITE.email} with subject “Media” or use the contact form we typically respond within 2 business days.`,
  },
] as const;
