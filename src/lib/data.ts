export const SITE = {
  name: "Team Vikram",
  tagline: "Rocketry, Drone Technology & CanSat Satellite Systems",
  email: "teamvikram@rajalakshmi.edu.in",
  phone: "+91 8610458302 / +91 73586 90685",
  website: "https://teamvikram.in",
  college: "Rajalakshmi Engineering College",
  location: "Vellore Chennai Rd, Rajalakshmi Nagar, Thandalam, Tamil Nadu 602105",
  competition: "IN-SPACe Student Competitions & Spaceport America Cup",
  socials: {
    instagram: "https://www.instagram.com/teamvikramrec/",
    linkedin: "https://www.linkedin.com/company/teamvikramrec/",
    github: "https://github.com/teamvikram",
  },
  handles: {
    instagram: "@teamvikramrec",
    linkedin: "linkedin.com/teamvikramrec",
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

export const ABOUT = {
  eyebrow: "Who We Are",
  title: "Student-led aerospace engineering",
  intro:
    "Team Vikram is a student-led aerospace engineering team from Rajalakshmi Engineering College (REC), Chennai — building flight hardware across rocketry, CanSat, and drone systems.",
  expertise: [
    "Aerodynamics",
    "Structures",
    "Propulsion",
    "Avionics",
    "Simulation",
  ] as const,
  competitions: [
    "IN-SPACe Student Competitions (national)",
    "Spaceport America Cup (international)",
  ] as const,
  mission:
    "Hands-on engineering experience, leadership development, and real-world aerospace exposure for the next generation of engineers.",
} as const;

export const IMPACT_STATS = [
  { label: "National Rank — SIRC 2026", value: 3, suffix: "rd" },
  { label: "Teams Competed Against", value: 25, suffix: "+" },
  { label: "Active Projects", value: 2, suffix: "" },
] as const;

export const MISSION_HIGHLIGHTS = [
  {
    title: "SIRC 2026 — 3rd Rank All India",
    meta: "ACHIEVEMENT · ROCKETRY",
    body: "Competed at Southern India Rocketry Competition by Space Kidz India against 25+ national teams, securing 3rd Rank All India.",
  },
  {
    title: "SMOPS 2026 — ISRO & ASI Conference",
    meta: "ACHIEVEMENT · RESEARCH",
    body: "Presented \"Challenges in Autonomous Satellites\" at the International Conference on Spacecraft Mission Operations, jointly organised by ISRO, ASI & IAA.",
  },
  {
    title: "Project ARYA — InSpace Model Rocketry 2026",
    meta: "CURRENT · ROCKETRY DIVISION",
    body: "Single-stage launch vehicle carrying a 1 kg CAN-7USAT payload to 1000 m. Non-pyrotechnic electromagnetic separation, 3-of-3 apogee detection, custom Yagi telemetry, and reefed single-canopy recovery.",
  },
  {
    title: "Project GARUDA — InSpace CanSat 2026",
    meta: "CURRENT · CANSAT DIVISION",
    body: "Autonomous 1 kg CanSat for environmental monitoring with real-time telemetry. PDR Qualified ✅, CDR Submitted ✅ — advancing to National Stage ⏳.",
  },
] as const;

export type TeamMember = {
  name: string;
  role: string;
  subsystem: string;
  group: "Rocketry" | "Drone Tech" | "CanSat & Hardware" | "Software & Ground Station" | "Outreach";
  photo?: string;
  linkedin?: string;
  github?: string;
};

/** Founding leads shown in the team page carousel */
export const TEAM_CAROUSEL_MEMBERS = [
  "Simran Yadav",
  "Vijay Ragavander B",
  "Sanjay C",
] as const;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Simran Yadav",
    role: "CanSat Lead (Founder)",
    subsystem: "CanSat Satellite Systems & Payload Architecture",
    group: "CanSat & Hardware",
    photo: "/images/team/simran-yadav.png",
  },
  {
    name: "Vijay Ragavander B",
    role: "Model Rocketry Lead (Founder)",
    subsystem: "Sounding Rocketry, Propulsion & Aerodynamics",
    group: "Rocketry",
    photo: "/images/team/vijay-ragavander-b.png",
  },
  {
    name: "Sanjay C",
    role: "Drone Captain & Founder",
    subsystem: "Autonomous UAV Platforms & Autonomous Avionics",
    group: "Drone Tech",
    photo: "/images/team/sanjay-c.png",
  },
  {
    name: "Manjari V",
    role: "Model Rocketry Member",
    subsystem: "Rocketry Division",
    group: "Rocketry",
    photo: "/images/team/manjari-v.png",
  },
  {
    name: "Manick Manoj",
    role: "Model Rocketry Member",
    subsystem: "Rocketry Division",
    group: "Rocketry",
    photo: "/images/team/manick-manoj.png",
  },
  {
    name: "Kiruthika KM",
    role: "Model Rocketry Member",
    subsystem: "Rocketry Division",
    group: "Rocketry",
    photo: "/images/team/kiruthika-km.png",
  },
  {
    name: "Sanjay Kanth",
    role: "Model Rocketry Member",
    subsystem: "Rocketry Division",
    group: "Rocketry",
    photo: "/images/team/sanjay-kanth.png",
  },
  {
    name: "Subash S",
    role: "Model Rocketry Member",
    subsystem: "Rocketry Division",
    group: "Rocketry",
    photo: "/images/team/subash-s.png",
  },
  {
    name: "Aruneshwar R",
    role: "Model Rocketry Member",
    subsystem: "Rocketry Division",
    group: "Rocketry",
    photo: "/images/team/aruneshwar-r.png",
  },
  {
    name: "Johann S",
    role: "Drone Member",
    subsystem: "Drone Technology Division",
    group: "Drone Tech",
    photo: "/images/team/johann-s.png",
  },
  {
    name: "Sakthivel R",
    role: "Drone Member",
    subsystem: "Drone Technology Division",
    group: "Drone Tech",
    photo: "/images/team/sakthivel-r.png",
  },
  {
    name: "Mohith O",
    role: "Drone Maker",
    subsystem: "Drone Technology Division",
    group: "Drone Tech",
    photo: "/images/team/mohith-o.png",
  },
  {
    name: "Janani D",
    role: "Drone Member",
    subsystem: "Drone Technology Division",
    group: "Drone Tech",
    photo: "/images/team/janani-d.png",
  },
  {
    name: "Pranesh G",
    role: "Drone Member",
    subsystem: "Drone Technology Division",
    group: "Drone Tech",
    photo: "/images/team/pranesh-g.png",
  },
  {
    name: "Venkat PV",
    role: "Drone Member",
    subsystem: "Drone Technology Division",
    group: "Drone Tech",
    photo: "/images/team/venkat-pv.png",
  },
  {
    name: "Ahamed Faisal",
    role: "CanSat Member",
    subsystem: "CanSat Satellite Systems",
    group: "CanSat & Hardware",
    photo: "/images/team/ahamed-faisal.png",
  },
  {
    name: "Nithin Krishna R",
    role: "CanSat Member",
    subsystem: "CanSat Satellite Systems",
    group: "CanSat & Hardware",
    photo: "/images/team/nithin-krishna-r.png",
  },
  {
    name: "Ashwinkumaar T",
    role: "CanSat Member",
    subsystem: "CanSat Satellite Systems",
    group: "CanSat & Hardware",
    photo: "/images/team/ashwinkumaar-t.png",
  },
  {
    name: "Sharmila K",
    role: "CanSat Member",
    subsystem: "CanSat Satellite Systems",
    group: "CanSat & Hardware",
    photo: "/images/team/sharmila-k.png",
  },
  {
    name: "Boomika MBG",
    role: "CanSat Member",
    subsystem: "CanSat Satellite Systems",
    group: "CanSat & Hardware",
    photo: "/images/team/boomika-mbg.png",
  },
  {
    name: "Roshin R G",
    role: "CanSat Member",
    subsystem: "CanSat Satellite Systems",
    group: "CanSat & Hardware",
    photo: "/images/team/roshin-r-g.png",
  },
  {
    name: "Tejasri Nanda Kishore",
    role: "CanSat Member",
    subsystem: "CanSat Satellite Systems",
    group: "CanSat & Hardware",
    photo: "/images/team/tejasri-nanda-kishore.png",
  },
  {
    name: "Saktheeshwar T",
    role: "Sponsorship Team Lead",
    subsystem: "Partnerships & Sponsorship Outreach",
    group: "Outreach",
    photo: "/images/team/saktheeshwar-t.png",
  },
  {
    name: "Vishal Khanna",
    role: "Social Media Team Lead",
    subsystem: "Digital Presence & Communications",
    group: "Outreach",
    photo: "/images/team/vishal-khanna.png",
  },
  {
    name: "Shruthi A",
    role: "Core Member",
    subsystem: "Team Operations",
    group: "Software & Ground Station",
    photo: "/images/team/shruthi-a.png",
  },
  {
    name: "Keerthani S",
    role: "Team Member",
    subsystem: "Team Operations",
    group: "Software & Ground Station",
    photo: "/images/team/keerthani-s.png",
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
    price: "₹10K – ₹25K",
    highlight: false,
    accent: "blue" as const,
    benefits: [
      "Sponsorship Brochure",
      "Website Recognition",
      "Social Media Recognition",
      "Standard banner at events & competitions",
      "Sleeve / Side logo on official team T-shirt",
      "Project Showcase / Display",
      "Project Showcase Invitation",
      "Certificate of Appreciation",
      "Team Interaction",
    ],
  },
  {
    name: "Supersonic Partner",
    tagline: "Breaking the sound barrier of innovation",
    price: "₹25K – ₹50K",
    highlight: false,
    accent: "blue" as const,
    benefits: [
      "Sponsorship Brochure",
      "Website Recognition",
      "Social Media Recognition",
      "Project Presentation access",
      "Technical Reports & Publications",
      "Prominent banner at events & competitions",
      "Back logo on official team T-shirt",
      "Project Showcase / Display",
      "Secondary branding on Rocket & CanSat",
      "Dedicated Social Media Post",
      "Project Showcase Invitation",
      "Certificate of Appreciation",
      "Team Interaction",
    ],
  },
  {
    name: "Title Partner",
    tagline: "Premium visibility across all platforms",
    price: "> ₹50K",
    highlight: true,
    accent: "violet" as const,
    benefits: [
      "Sponsorship Brochure",
      "Featured Website Recognition",
      "Featured Social Media Recognition",
      "Project Presentation access",
      "Technical Reports & Publications",
      "Premium banner at events & competitions",
      "Front logo on official team T-shirt",
      "Prominent Project Showcase / Display",
      "Primary branding on Rocket & CanSat",
      "Prominent Mention at all events",
      "Dedicated Social Media Post",
      "Project Showcase Invitation",
      "Certificate of Appreciation",
      "Team Interaction",
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
      title: "SIRC 2026 — 3rd Rank All India",
      tag: "Space Kidz India",
      description:
        "Competed at Southern India Rocketry Competition against 25+ national teams, securing 3rd Rank All India. Successfully designed, fabricated, and launched with dual-deployment parachute recovery.",
      status: "Completed",
    },
    {
      title: "Project ARYA — InSpace Model Rocketry 2026",
      tag: "InSpace MRC 2026",
      description:
        "Single-stage launch vehicle carrying a 1 kg CAN-7USAT payload to 1000 m altitude. Features non-pyrotechnic electromagnetic separation, 3-of-3 apogee detection, custom Yagi telemetry, and a reefed single-canopy recovery system.",
      status: "In Progress",
    },
    {
      title: "Flight Telemetry & Altimeter Module",
      tag: "Avionics",
      description:
        "On-board data logger capturing 3-axis acceleration, barometric altitude, and GPS coordinates at 50 Hz streamed post-flight for trajectory reconstruction.",
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

export const GARUDA_DIVISION = {
  eyebrow: "Division 03",
  heading: "CanSat — Project GARUDA",
  subheading: "Autonomous environmental monitoring from altitude.",
  description:
    "Project GARUDA is Team Vikram's entry for the InSpace CanSat Competition 2026. An autonomous 1 kg CanSat system designed for environmental monitoring and real-time telemetry, featuring a comprehensive sensor suite, LoRa long-range radio, onboard aerial imaging, data logging, and a fully autonomous recovery system.",
  focusAreas: [
    "Altitude, pressure & temperature sensing",
    "Humidity & orientation measurement",
    "GNSS positioning",
    "LoRa long-range telemetry",
    "Onboard aerial imaging",
    "Autonomous recovery system",
  ],
  milestones: [
    { label: "PDR Qualified", status: "Completed" as const },
    { label: "CDR Submitted", status: "Completed" as const },
    { label: "National Stage", status: "In Progress" as const },
  ],
  projects: [
    {
      title: "CanSat Structure & Sensor Payload",
      tag: "Hardware",
      description:
        "1 kg CanSat chassis meeting strict mass and volume constraints, integrating altitude, pressure, temperature, humidity, orientation, and GNSS sensors in a modular payload bay.",
      status: "In Progress",
    },
    {
      title: "LoRa Telemetry & Imaging System",
      tag: "Avionics & Comms",
      description:
        "Long-range LoRa radio link for real-time environmental data telemetry with onboard camera for aerial imaging during descent.",
      status: "In Progress",
    },
    {
      title: "Autonomous Recovery & Ground Station",
      tag: "Recovery & Software",
      description:
        "Autonomous parachute recovery with onboard data logging. Ground station dashboard for real-time monitoring and post-flight data analysis.",
      status: "In Progress",
    },
  ],
} as const;

export const MENTOR_PARTNER = {
  name: "Rocket Factory",
  role: "Mentor Partner",
  note: "Rocket Factory provides expert mentorship to Team Vikram across rocketry propulsion, vehicle design, and competition strategy — helping the team achieve national and international standards.",
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
    a: `Email ${SITE.email} with subject "Media" or use the contact form we typically respond within 2 business days.`,
  },
] as const;
