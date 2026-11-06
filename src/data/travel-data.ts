export interface VehicleRate {
  id: string;
  name: string;
  shortName: string;
  category: "urbania" | "tempo" | "minibus" | "luxury-bus" | "suv";
  categoryLabel: string;
  badgeColor: string; // Urbania violet, Tempo blue, Mini Bus teal, Volvo pink, Innova green
  badgeBg: string;
  seatingText: string;
  seatsNum: number;
  submodel: string;
  bestFor: string;
  ratePerKm: number;
  minKmPerDay: number;
  driverAllowancePerDay: number;
  image: string;
  luggage: string;
  amenities: string[];
}

export interface PackageTour {
  id: string;
  anchorId: string;
  title: string;
  subtitle: string;
  category: "pilgrimage" | "hill-station" | "beach" | "corporate" | "wedding";
  categoryLabel: string;
  categoryColor: string;
  categoryBg: string;
  categoryBorder: string;
  duration: string;
  days: number;
  distanceKm: number;
  image: string;
  highlights: string[];
  // Prices generated from vehicle rates
  prices: {
    innova: number;
    tempo17: number;
    urbania: number;
  };
}

export interface RouteItem {
  id: string;
  anchorId: string;
  route: string;
  distanceKm: number;
  duration: string;
  tripType: "One-Way Drop" | "Round-Trip";
  vehicleId: string;
  vehicleModel: string;
  estimatedFare: number;
}

export const SITE_CONFIG = {
  PHONE: "+91 98220 44555",
  PHONE_TEL: "tel:+919822044555",
  PHONE_HINJEWADI: "+91 98220 44556",
  PHONE_CORPORATE: "+91 98220 44557",
  WHATSAPP_NUMBER: "919822044555",
  WHATSAPP_URL: "https://wa.me/919822044555",
  RATING: "4.9",
  REVIEWS_COUNT: "1,420+",
  YEARS: "15+",
  CUSTOMERS: "15,000+",
  TRIPS: "4,800+",
  FLEET_SIZE: "50+",
  ADDRESS: "Shop No. 14, Ground Floor, Pune-Satara Road, Near Swargate Bus Stand, Swargate, Pune, Maharashtra 411042",
  HINJEWADI_ADDRESS: "Plot 42, Rajiv Gandhi Infotech Park, Phase 1, Hinjewadi, Pune 411057",
  GSTIN: "27AABCV1234F1Z8",
  PERMIT: "MH-12-TP-2024-8891",
  MAPS_URL: "https://maps.google.com/?q=Vishal+Travels+Pune+Swargate",
};

// Rate card & vehicle catalog
export const VEHICLES: VehicleRate[] = [
  {
    id: "urbania-17",
    name: "Force Urbania VIP Lounge (17 Seater)",
    shortName: "Urbania VIP",
    category: "urbania",
    categoryLabel: "Force Urbania",
    badgeColor: "#6D28D9", // violet
    badgeBg: "#F5F3FF",
    seatingText: "13 & 17 Seater Maharaja AC",
    seatsNum: 17,
    submodel: "High-Roof Executive Cabin • Ultra-Quiet Air Suspension",
    bestFor: "Corporate delegations, VIP client airport escorts & wedding bride/groom families",
    ratePerKm: 38,
    minKmPerDay: 300,
    driverAllowancePerDay: 500,
    image: "/images/urbania_vip.jpg",
    luggage: "20 Large Bags + Boot",
    amenities: ["Maharaja Leather Captain Seats", "Independent AC Vents", "Panoramic UV Windows", "USB Fast Chargers"]
  },
  {
    id: "tempo-17",
    name: "Force Tempo Traveller AC (17 Seater)",
    shortName: "17-Str Tempo",
    category: "tempo",
    categoryLabel: "Tempo Traveller",
    badgeColor: "#1E3A8A", // blue
    badgeBg: "#EFF6FF",
    seatingText: "17 Seater Push-back AC",
    seatsNum: 17,
    submodel: "Force Motors Deluxe 2x1 Reclining Configuration",
    bestFor: "Ashtavinayak Darshan, Mahabaleshwar family trips & Shirdi pilgrimages",
    ratePerKm: 28,
    minKmPerDay: 300,
    driverAllowancePerDay: 500,
    image: "/images/tempo_traveller.jpg",
    luggage: "18 Suitcases + Top Carrier",
    amenities: ["Push-back Plush Velvet Seats", "Chilled Dual Evaporator AC", "JBL Sound & Tour Mic", "Ghat-Tested Chauffeur"]
  },
  {
    id: "tempo-20",
    name: "Force Tempo Traveller AC (20 Seater)",
    shortName: "20-Str Tempo",
    category: "tempo",
    categoryLabel: "Tempo Traveller",
    badgeColor: "#1E3A8A", // blue
    badgeBg: "#EFF6FF",
    seatingText: "20 Seater Push-back AC",
    seatsNum: 20,
    submodel: "Extended Wheelbase 2x1 Configuration • Large Boot",
    bestFor: "Medium family groups (18–20 pax) needing extra legroom without hiring a large bus",
    ratePerKm: 31,
    minKmPerDay: 300,
    driverAllowancePerDay: 550,
    image: "/images/tempo_traveller.jpg",
    luggage: "20+ Suitcases + Carrier",
    amenities: ["2x1 Reclining Seats", "Central Climate AC", "Overhead Reading Lamps", "Speed Governor Monitored"]
  },
  {
    id: "tempo-26",
    name: "Force Tempo Traveller AC (26 Seater)",
    shortName: "26-Str Tempo",
    category: "tempo",
    categoryLabel: "Tempo Traveller",
    badgeColor: "#1E3A8A", // blue
    badgeBg: "#EFF6FF",
    seatingText: "26 Seater Push-back AC",
    seatsNum: 26,
    submodel: "Extra Long Wheelbase • 2x2 Reclining Configuration",
    bestFor: "Large wedding guest transfers & Hinjewadi IT company quarterly offsites",
    ratePerKm: 34,
    minKmPerDay: 300,
    driverAllowancePerDay: 600,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
    luggage: "25+ Suitcases Boot",
    amenities: ["Individual AC Air Louvers", "LED Entertainment Display", "Rear Comfort Suspension", "Safety Emergency Kit"]
  },
  {
    id: "minibus-32",
    name: "Executive Mini Bus (32 Seater AC)",
    shortName: "32-Str Mini Bus",
    category: "minibus",
    categoryLabel: "Mini Bus",
    badgeColor: "#0E7490", // teal
    badgeBg: "#ECFEFF",
    seatingText: "32 Seater Reclining High-Back",
    seatsNum: 32,
    submodel: "Tata Starbus / Eicher Executive Luxury Coach",
    bestFor: "College industrial tours, corporate shifts & Pune wedding guest convoys",
    ratePerKm: 42,
    minKmPerDay: 300,
    driverAllowancePerDay: 700,
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&auto=format&fit=crop&q=80",
    luggage: "35 Large Suitcases Boot",
    amenities: ["High-Back Reclining Seats", "Ducted Climate AC", "PA Tour Guide Mic", "Curtained Windows"]
  },
  {
    id: "volvo-49",
    name: "Volvo B11R Multi-Axle Luxury Coach",
    shortName: "Volvo 49 Coach",
    category: "luxury-bus",
    categoryLabel: "Volvo Coach",
    badgeColor: "#BE185D", // pink
    badgeBg: "#FDF2F8",
    seatingText: "49 Seater Push-back Semi-Sleeper",
    seatsNum: 49,
    submodel: "Volvo B11R Electronically Controlled Air Suspension",
    bestFor: "5 Jyotirlinga, Char Dham pilgrimages & Goa destination wedding groups",
    ratePerKm: 60,
    minKmPerDay: 350,
    driverAllowancePerDay: 900,
    image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=800&auto=format&fit=crop&q=80",
    luggage: "60+ Large Suitcases Under-floor",
    amenities: ["Full Air Suspension Glide", "Personal USB & Reading Lights", "Dual Highway Drivers", "Live GPS Telemetry"]
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta & Ertiga",
    shortName: "Innova Crysta",
    category: "suv",
    categoryLabel: "Chauffeur SUV",
    badgeColor: "#047857", // green
    badgeBg: "#ECFDF5",
    seatingText: "6 - 7 Seater Captain Seats",
    seatsNum: 7,
    submodel: "Innova Crysta 2.4 ZX / Ertiga ZXi+ Chauffeur Driven",
    bestFor: "Pune-Mumbai airport drop/pick, executive client visits & small family hill station tours",
    ratePerKm: 18,
    minKmPerDay: 250,
    driverAllowancePerDay: 400,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80",
    luggage: "5 Large Suitcases",
    amenities: ["Leather Captain Seats", "Automatic Multi-Zone AC", "Fastag Enabled", "Professional Chauffeur"]
  }
];

// Fare Calculation Formula (Strict Single Source of Truth)
export function calculateFare(
  enteredKm: number,
  days: number,
  ratePerKm: number,
  minKmPerDay: number,
  driverAllowancePerDay: number,
  gstRate = 0.05
) {
  const minBillableKm = minKmPerDay * days;
  const billableKm = Math.max(enteredKm, minBillableKm);
  const baseFare = billableKm * ratePerKm;
  const driverAllowance = driverAllowancePerDay * days;
  const subtotal = baseFare + driverAllowance;
  const gst = Math.round(subtotal * gstRate);
  const total = subtotal + gst;

  return {
    billableKm,
    baseFare,
    driverAllowance,
    subtotal,
    gst,
    total,
    isMinKmApplied: enteredKm < minBillableKm,
    minBillableKm,
  };
}

// Packages Data generated strictly from rates
export const PACKAGES: PackageTour[] = [
  {
    id: "pkg-ashtavinayak",
    anchorId: "tour-packages",
    title: "Ashtavinayak Darshan Yatra",
    subtitle: "Complete 8 Ganesh Temples sacred pilgrimage in 2 Days",
    category: "pilgrimage",
    categoryLabel: "Pilgrimage Yatra",
    categoryColor: "#C2410C",
    categoryBg: "#FFF7ED",
    categoryBorder: "#FFEDD5",
    duration: "2 Days / 1 Night",
    days: 2,
    distanceKm: 650,
    image: "/images/hero_fleet.jpg",
    highlights: [
      "Mayureshwar (Morgaon) & Siddhivinayak (Siddhatek)",
      "Ballaleshwar (Pali) & Varadvinayak (Mahad)",
      "Chintamani (Theur) & Girijatmaj (Lenyadri)",
      "Vighnahar (Ozar) & Mahaganapati (Ranjangaon)"
    ],
    prices: {
      innova: calculateFare(650, 2, 18, 250, 400).total,
      tempo17: calculateFare(650, 2, 28, 300, 500).total,
      urbania: calculateFare(650, 2, 38, 300, 500).total,
    }
  },
  {
    id: "pkg-jyotirlinga",
    anchorId: "tour-packages",
    title: "5 Jyotirlinga Darshan Circuit",
    subtitle: "All 5 Sacred Maharashtra Shiva Shrines Yatra from Pune",
    category: "pilgrimage",
    categoryLabel: "Sacred Yatra",
    categoryColor: "#C2410C",
    categoryBg: "#FFF7ED",
    categoryBorder: "#FFEDD5",
    duration: "4 Days / 3 Nights",
    days: 4,
    distanceKm: 1450,
    image: "/images/jyotirlinga_temple.jpg",
    highlights: [
      "1. Bhimashankar (Pune)",
      "2. Trimbakeshwar (Nashik)",
      "3. Grishneshwar (Ellora, Chhatrapati Sambhajinagar)",
      "4. Aundha Nagnath (Hingoli)",
      "5. Parli Vaijnath (Beed)"
    ],
    prices: {
      innova: calculateFare(1450, 4, 18, 250, 400).total,
      tempo17: calculateFare(1450, 4, 28, 300, 500).total,
      urbania: calculateFare(1450, 4, 38, 300, 500).total,
    }
  },
  {
    id: "pkg-mahabaleshwar",
    anchorId: "tour-packages",
    title: "Mahabaleshwar & Panchgani",
    subtitle: "Scenic Sahyadri hill station getaway (600 km minimum applied)",
    category: "hill-station",
    categoryLabel: "Hill Station",
    categoryColor: "#047857",
    categoryBg: "#ECFDF5",
    categoryBorder: "#A7F3D0",
    duration: "2 Days / 1 Night",
    days: 2,
    distanceKm: 260,
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&auto=format&fit=crop&q=80",
    highlights: [
      "Arthur Seat & Kate's Point Viewpoints",
      "Venna Lake Boating & Horse Riding",
      "Mapro Garden Strawberry Farms",
      "Table Land & Sydney Point in Panchgani",
      "Old Mahabaleshwar Mandir"
    ],
    prices: {
      innova: calculateFare(260, 2, 18, 250, 400).total,
      tempo17: calculateFare(260, 2, 28, 300, 500).total,
      urbania: calculateFare(260, 2, 38, 300, 500).total,
    }
  },
  {
    id: "pkg-shirdi",
    anchorId: "tour-packages",
    title: "Shirdi & Shani Shingnapur",
    subtitle: "Sai Baba Samadhi Mandir VIP Darshan with Return Drop",
    category: "pilgrimage",
    categoryLabel: "Pilgrimage Yatra",
    categoryColor: "#C2410C",
    categoryBg: "#FFF7ED",
    categoryBorder: "#FFEDD5",
    duration: "2 Days / 1 Night",
    days: 2,
    distanceKm: 450,
    image: "/images/shirdi_temple.jpg",
    highlights: [
      "Sai Baba Samadhi Mandir VIP Darshan",
      "Dwarkamai & Chavadi Sacred Visits",
      "Shani Shingnapur Holy Shrine",
      "Clean Highway Halts with Senior Care",
      "Flexible Aarti & Darshan Timings"
    ],
    prices: {
      innova: calculateFare(450, 2, 18, 250, 400).total,
      tempo17: calculateFare(450, 2, 28, 300, 500).total,
      urbania: calculateFare(450, 2, 38, 300, 500).total,
    }
  },
  {
    id: "pkg-konkan",
    anchorId: "tour-packages",
    title: "Malvan, Sindhudurg & Goa",
    subtitle: "Konkan Coastal Heritage, Watersports & Beach Holiday",
    category: "beach",
    categoryLabel: "Coastal Beach",
    categoryColor: "#0E7490",
    categoryBg: "#ECFEFF",
    categoryBorder: "#A5F3FC",
    duration: "4 Days / 3 Nights",
    days: 4,
    distanceKm: 1200,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&auto=format&fit=crop&q=80",
    highlights: [
      "Historic Sindhudurg Island Fort",
      "Tarkarli Watersports & Scuba Diving",
      "North Goa Beaches & Fort Aguada",
      "Authentic Malvani Cuisine Halts",
      "Safe Coastal Highway Navigation"
    ],
    prices: {
      innova: calculateFare(1200, 4, 18, 250, 400).total,
      tempo17: calculateFare(1200, 4, 28, 300, 500).total,
      urbania: calculateFare(1200, 4, 38, 300, 500).total,
    }
  },
  {
    id: "pkg-shaktipeeth",
    anchorId: "tour-packages",
    title: "Sade Teen Shakti Peeth Yatra",
    subtitle: "All 3.5 Divine Devi Temples including Saptashrungi (Half Peeth)",
    category: "pilgrimage",
    categoryLabel: "Pilgrimage Yatra",
    categoryColor: "#C2410C",
    categoryBg: "#FFF7ED",
    categoryBorder: "#FFEDD5",
    duration: "4 Days / 3 Nights",
    days: 4,
    distanceKm: 1650,
    image: "/images/shaktipeeth_temple.jpg",
    highlights: [
      "1. Mahalakshmi Temple (Kolhapur) - Full Peeth",
      "2. Tulja Bhavani Temple (Tuljapur) - Full Peeth",
      "3. Renuka Devi Temple (Mahur) - Full Peeth",
      "4. Saptashrungi Nivasini (Vani, Nashik) - Sacred 0.5 (Half) Peeth"
    ],
    prices: {
      innova: calculateFare(1650, 4, 18, 250, 400).total,
      tempo17: calculateFare(1650, 4, 28, 300, 500).total,
      urbania: calculateFare(1650, 4, 38, 300, 500).total,
    }
  }
];

// Popular Outstation Routes
export const ROUTES: RouteItem[] = [
  {
    id: "rt-mumbai-airport",
    anchorId: "routes-trips",
    route: "Pune ➔ Mumbai Airport (T1/T2)",
    distanceKm: 150,
    duration: "3.5 hrs",
    tripType: "One-Way Drop",
    vehicleId: "innova-crysta",
    vehicleModel: "Innova Crysta (6-7 Seats)",
    estimatedFare: 3500
  },
  {
    id: "rt-mumbai-tempo",
    anchorId: "routes-trips",
    route: "Pune ➔ Mumbai Group Transfer",
    distanceKm: 150,
    duration: "3.5 hrs",
    tripType: "One-Way Drop",
    vehicleId: "tempo-17",
    vehicleModel: "17-Seater AC Tempo Traveller",
    estimatedFare: 7500
  },
  {
    id: "rt-mahabaleshwar",
    anchorId: "routes-trips",
    route: "Pune ➔ Mahabaleshwar Day Return",
    distanceKm: 300,
    duration: "Same Day Return",
    tripType: "Round-Trip",
    vehicleId: "tempo-17",
    vehicleModel: "17-Seater AC Tempo Traveller",
    estimatedFare: 8900
  },
  {
    id: "rt-shirdi",
    anchorId: "routes-trips",
    route: "Pune ➔ Shirdi Darshan Round Trip",
    distanceKm: 420,
    duration: "Same Day Return",
    tripType: "Round-Trip",
    vehicleId: "tempo-17",
    vehicleModel: "17-Seater AC Tempo Traveller",
    estimatedFare: 12800
  },
  {
    id: "rt-lonavala",
    anchorId: "routes-trips",
    route: "Pune ➔ Lonavala & Khandala Ghat",
    distanceKm: 200,
    duration: "Day Excursion",
    tripType: "Round-Trip",
    vehicleId: "innova-crysta",
    vehicleModel: "Innova Crysta 7-Seater",
    estimatedFare: 4200
  },
  {
    id: "rt-chiplun",
    anchorId: "routes-trips",
    route: "Pune ➔ Chiplun & Konkan Foothills",
    distanceKm: 240,
    duration: "5.5 hrs",
    tripType: "One-Way Drop",
    vehicleId: "tempo-17",
    vehicleModel: "17-Seater AC Tempo Traveller",
    estimatedFare: 8500
  },
  {
    id: "rt-nashik",
    anchorId: "routes-trips",
    route: "Pune ➔ Nashik & Trimbakeshwar",
    distanceKm: 440,
    duration: "Day Return / 1 Night",
    tripType: "Round-Trip",
    vehicleId: "urbania-17",
    vehicleModel: "Force Urbania VIP (17 Seater)",
    estimatedFare: 17800
  },
  {
    id: "rt-goa",
    anchorId: "routes-trips",
    route: "Pune ➔ Goa Coastal Drop",
    distanceKm: 440,
    duration: "8.5 hrs",
    tripType: "One-Way Drop",
    vehicleId: "tempo-17",
    vehicleModel: "17-Seater AC Tempo Traveller",
    estimatedFare: 16500
  }
];

export const REVIEWS = [
  {
    id: "rev-1",
    name: "Rajesh Gaikwad",
    initials: "RG",
    avatarBg: "#1E3A8A", // blue
    role: "Family Coordinator",
    city: "Kothrud, Pune",
    rating: 5,
    text: "Booked a 17-seater Tempo Traveller for our 2-day family Ashtavinayak yatra. Driver Mr. Sachin was at our doorstep 20 minutes prior with a spotless bus and chilled AC. Handled Khandala and Pali ghat curves with immense care. Rate was exactly per the quote.",
    date: "12 Oct 2026",
    tripType: "Ashtavinayak Darshan"
  },
  {
    id: "rev-2",
    name: "Sneha Deshmukh",
    initials: "SD",
    avatarBg: "#6D28D9", // violet
    role: "HR Operations Lead",
    city: "Hinjewadi Phase 3, Pune",
    rating: 5,
    text: "Vishal Travels provided four Force Urbanias for our leadership summit at Mahabaleshwar. Maharaja leather captain seats, individual USB ports, and clean audio systems made the journey remarkably comfortable. GST tax invoice provided promptly.",
    date: "24 Sep 2026",
    tripType: "Corporate Transport"
  },
  {
    id: "rev-3",
    name: "Amitabh Kulkarni",
    initials: "AK",
    avatarBg: "#BE185D", // pink
    role: "Wedding Host",
    city: "Baner, Pune",
    rating: 5,
    text: "Hired a 49-seater Volvo Multi-Axle and two 17-seater Tempo Travellers for guest transport from Pune to Goa. Spotless interiors, prompt driver dispatch, and zero mechanical issues. Made all 80 family members feel pampered.",
    date: "18 Aug 2026",
    tripType: "Destination Wedding"
  },
  {
    id: "rev-4",
    name: "Mahesh Panchal",
    initials: "MP",
    avatarBg: "#047857", // green
    role: "Group Leader",
    city: "Swargate, Pune",
    rating: 5,
    text: "Completed the 4-day 5 Jyotirlinga tour in an Urbania. Visited all 5 shrines: Bhimashankar, Trimbakeshwar, Grishneshwar, Aundha Nagnath, and Parli Vaijnath. Driver was deeply courteous to our senior citizen parents.",
    date: "04 Jul 2026",
    tripType: "5 Jyotirlinga Sacred Circuit"
  }
];

export interface AruthraRoute {
  id: string;
  source: string;
  destination: string;
  distanceKm: number;
  duration: string;
  durationFormatted: string;
  busOptionsText: string;
  busType: string;
  firstBus: string;
  lastBus: string;
  departureWindow: string;
  startingPrice: number;
  startingPriceFormatted: string;
  boardingPoints: string[];
  droppingPoints: string[];
  redBusUrl: string;
  category: "coimbatore" | "tirupur" | "return";
}

export const ARUTHRA_OPERATOR_DATA = {
  name: "Aruthra Tours and Travels",
  slug: "aruthra-tours-and-travels",
  redBusUrl: "https://www.redbus.in/travels/aruthra-tours-and-travels",
  rating: 4.2,
  reviewsCount: "350+",
  minPrice: 280,
  maxPrice: 750,
  priceRangeFormatted: "₹280 Onwards",
  description: "Official redBus partner operator running high-frequency daily intercity scheduled buses across Tamil Nadu. Connecting textile and industrial corridors (Coimbatore & Tirupur) with Madurai, Sivagangai, Ramanathapuram, Paramakudi, and Kalayarkoil.",
  amenities: [
    "A/C Sleeper (2+1) & NON A/C Seater/Sleeper",
    "Live GPS Bus Tracking via redBus",
    "Mobile & USB Fast Charging Ports",
    "Reading Lamps & Chilled AC Climate Control",
    "Emergency Exit & Fire Safety Kit",
    "Fresh Pillows & Clean Blankets"
  ],
  hubLocations: [
    "Coimbatore (Omni Bus Stand, Gandhipuram, Singanallur, Hope College)",
    "Tirupur (Old Bus Stand, Avinashi Road, Kangeyam Road)",
    "Madurai (Mattuthavani Integrated Bus Terminus, Arappalayam, Periyar)",
    "Ramanathapuram (Old & New Bus Stands, Bharathi Nagar)",
    "Sivagangai, Paramakudi & Kalayarkoil"
  ]
};

export const ARUTHRA_ROUTES: AruthraRoute[] = [
  {
    id: "ar-mdu-cbe",
    source: "Madurai",
    destination: "Coimbatore",
    distanceKm: 215,
    duration: "4.5 hrs",
    durationFormatted: "04:45 hrs",
    busOptionsText: "5 bus options",
    busType: "A/C Sleeper (2+1)",
    firstBus: "22:00 (10:00 PM)",
    lastBus: "23:15 (11:15 PM)",
    departureWindow: "22:00 - 23:15",
    startingPrice: 280,
    startingPriceFormatted: "₹280",
    boardingPoints: ["Mattuthavani Bus Stand", "Arappalayam", "Periyar Bus Stand"],
    droppingPoints: ["Singanallur", "Gandhipuram", "Omni Bus Stand Coimbatore"],
    redBusUrl: "https://www.redbus.in/bus-tickets/madurai-to-coimbatore",
    category: "return"
  },
  {
    id: "ar-cbe-svg",
    source: "Coimbatore",
    destination: "Sivagangai",
    distanceKm: 260,
    duration: "5.5 hrs",
    durationFormatted: "05:30 hrs",
    busOptionsText: "4 bus options",
    busType: "A/C Sleeper (2+1)",
    firstBus: "21:30 (09:30 PM)",
    lastBus: "22:15 (10:15 PM)",
    departureWindow: "21:30 - 22:15",
    startingPrice: 330,
    startingPriceFormatted: "₹330",
    boardingPoints: ["Gandhipuram", "Singanallur", "Ondipudur", "Palladam"],
    droppingPoints: ["Sivagangai Bus Stand", "Collectorate Junction"],
    redBusUrl: "https://www.redbus.in/bus-tickets/coimbatore-to-sivagangai",
    category: "coimbatore"
  },
  {
    id: "ar-cbe-klk",
    source: "Coimbatore",
    destination: "Kalayarkoil",
    distanceKm: 275,
    duration: "6.0 hrs",
    durationFormatted: "06:00 hrs",
    busOptionsText: "4 bus options",
    busType: "A/C Sleeper (2+1)",
    firstBus: "21:30 (09:30 PM)",
    lastBus: "22:00 (10:00 PM)",
    departureWindow: "21:30 - 22:00",
    startingPrice: 330,
    startingPriceFormatted: "₹330",
    boardingPoints: ["Gandhipuram Omni Stand", "Singanallur"],
    droppingPoints: ["Kalayarkoil Bus Stand", "Temple Junction"],
    redBusUrl: "https://www.redbus.in/bus-tickets/coimbatore-to-kalayarkoil",
    category: "coimbatore"
  },
  {
    id: "ar-klk-cbe",
    source: "Kalayarkoil",
    destination: "Coimbatore",
    distanceKm: 275,
    duration: "6.0 hrs",
    durationFormatted: "06:00 hrs",
    busOptionsText: "4 bus options",
    busType: "A/C Sleeper (2+1)",
    firstBus: "20:30 (08:30 PM)",
    lastBus: "21:15 (09:15 PM)",
    departureWindow: "20:30 - 21:15",
    startingPrice: 350,
    startingPriceFormatted: "₹350",
    boardingPoints: ["Kalayarkoil Bus Stand"],
    droppingPoints: ["Singanallur", "Gandhipuram Omni Stand"],
    redBusUrl: "https://www.redbus.in/bus-tickets/kalayarkoil-to-coimbatore",
    category: "return"
  },
  {
    id: "ar-cbe-mdu",
    source: "Coimbatore",
    destination: "Madurai",
    distanceKm: 215,
    duration: "4.5 hrs",
    durationFormatted: "04:45 hrs",
    busOptionsText: "5 bus options",
    busType: "A/C Sleeper (2+1)",
    firstBus: "21:45 (09:45 PM)",
    lastBus: "22:30 (10:30 PM)",
    departureWindow: "21:45 - 22:30",
    startingPrice: 280,
    startingPriceFormatted: "₹280",
    boardingPoints: ["Gandhipuram Omni Stand", "Singanallur", "Hope College", "Sulur"],
    droppingPoints: ["Mattuthavani Integrated Bus Terminus", "Arappalayam", "Periyar"],
    redBusUrl: "https://www.redbus.in/bus-tickets/coimbatore-to-madurai",
    category: "coimbatore"
  },
  {
    id: "ar-cbe-rmd",
    source: "Coimbatore",
    destination: "Ramanathapuram",
    distanceKm: 330,
    duration: "7.25 hrs",
    durationFormatted: "07:15 hrs",
    busOptionsText: "4 bus options",
    busType: "NON A/C Seater / Sleeper (2+1)",
    firstBus: "21:00 (09:00 PM)",
    lastBus: "21:30 (09:30 PM)",
    departureWindow: "21:00 - 21:30",
    startingPrice: 350,
    startingPriceFormatted: "₹350",
    boardingPoints: ["Gandhipuram", "Singanallur", "Sulur", "Palladam"],
    droppingPoints: ["Ramanathapuram New Bus Stand", "Bharathi Nagar"],
    redBusUrl: "https://www.redbus.in/bus-tickets/coimbatore-to-ramanathapuram",
    category: "coimbatore"
  },
  {
    id: "ar-rmd-cbe",
    source: "Ramanathapuram",
    destination: "Coimbatore",
    distanceKm: 330,
    duration: "7.5 hrs",
    durationFormatted: "07:30 hrs",
    busOptionsText: "4 bus options",
    busType: "NON A/C Seater / Sleeper (2+1)",
    firstBus: "20:30 (08:30 PM)",
    lastBus: "21:00 (09:00 PM)",
    departureWindow: "20:30 - 21:00",
    startingPrice: 350,
    startingPriceFormatted: "₹350",
    boardingPoints: ["Ramanathapuram Bus Stand", "Aruthra Booking Office"],
    droppingPoints: ["Singanallur", "Gandhipuram", "Omni Bus Stand"],
    redBusUrl: "https://www.redbus.in/bus-tickets/ramanathapuram-to-coimbatore",
    category: "return"
  },
  {
    id: "ar-svg-cbe",
    source: "Sivagangai",
    destination: "Coimbatore",
    distanceKm: 260,
    duration: "5.5 hrs",
    durationFormatted: "05:30 hrs",
    busOptionsText: "4 bus options",
    busType: "A/C Sleeper (2+1)",
    firstBus: "21:00 (09:00 PM)",
    lastBus: "21:45 (09:45 PM)",
    departureWindow: "21:00 - 21:45",
    startingPrice: 330,
    startingPriceFormatted: "₹330",
    boardingPoints: ["Sivagangai Bus Stand", "Aruthra Travels Branch"],
    droppingPoints: ["Singanallur", "Hope College", "Gandhipuram Omni Stand"],
    redBusUrl: "https://www.redbus.in/bus-tickets/sivagangai-to-coimbatore",
    category: "return"
  },
  {
    id: "ar-cbe-pmk",
    source: "Coimbatore",
    destination: "Paramakudi",
    distanceKm: 295,
    duration: "6.5 hrs",
    durationFormatted: "06:30 hrs",
    busOptionsText: "4 bus options",
    busType: "NON A/C Seater / Sleeper (2+1)",
    firstBus: "21:15 (09:15 PM)",
    lastBus: "21:45 (09:45 PM)",
    departureWindow: "21:15 - 21:45",
    startingPrice: 340,
    startingPriceFormatted: "₹340",
    boardingPoints: ["Gandhipuram", "Singanallur", "Sulur"],
    droppingPoints: ["Paramakudi Bus Stand", "Five Corner"],
    redBusUrl: "https://www.redbus.in/bus-tickets/coimbatore-to-paramakudi",
    category: "coimbatore"
  },
  {
    id: "ar-pmk-cbe",
    source: "Paramakudi",
    destination: "Coimbatore",
    distanceKm: 295,
    duration: "6.5 hrs",
    durationFormatted: "06:30 hrs",
    busOptionsText: "4 bus options",
    busType: "NON A/C Seater / Sleeper (2+1)",
    firstBus: "20:45 (08:45 PM)",
    lastBus: "21:15 (09:15 PM)",
    departureWindow: "20:45 - 21:15",
    startingPrice: 340,
    startingPriceFormatted: "₹340",
    boardingPoints: ["Paramakudi Bus Stand", "Aruthra Travels Counter"],
    droppingPoints: ["Singanallur", "Hope College", "Gandhipuram"],
    redBusUrl: "https://www.redbus.in/bus-tickets/paramakudi-to-coimbatore",
    category: "return"
  },
  {
    id: "ar-tpr-mdu",
    source: "Tirupur",
    destination: "Madurai",
    distanceKm: 170,
    duration: "3.75 hrs",
    durationFormatted: "03:45 hrs",
    busOptionsText: "4 bus options",
    busType: "A/C Sleeper (2+1)",
    firstBus: "22:30 (10:30 PM)",
    lastBus: "23:15 (11:15 PM)",
    departureWindow: "22:30 - 23:15",
    startingPrice: 260,
    startingPriceFormatted: "₹260",
    boardingPoints: ["Old Bus Stand Tirupur", "Avinashi Road", "Dharapuram Road"],
    droppingPoints: ["Mattuthavani Bus Stand", "Arappalayam"],
    redBusUrl: "https://www.redbus.in/bus-tickets/tirupur-to-madurai",
    category: "tirupur"
  },
  {
    id: "ar-mdu-tpr",
    source: "Madurai",
    destination: "Tirupur",
    distanceKm: 170,
    duration: "3.75 hrs",
    durationFormatted: "03:45 hrs",
    busOptionsText: "4 bus options",
    busType: "A/C Sleeper (2+1)",
    firstBus: "22:00 (10:00 PM)",
    lastBus: "23:00 (11:00 PM)",
    departureWindow: "22:00 - 23:00",
    startingPrice: 260,
    startingPriceFormatted: "₹260",
    boardingPoints: ["Mattuthavani Bus Stand", "Arappalayam"],
    droppingPoints: ["Old Bus Stand Tirupur", "Avinashi Road"],
    redBusUrl: "https://www.redbus.in/bus-tickets/madurai-to-tirupur",
    category: "return"
  },
  {
    id: "ar-tpr-rmd",
    source: "Tirupur",
    destination: "Ramanathapuram",
    distanceKm: 285,
    duration: "6.25 hrs",
    durationFormatted: "06:15 hrs",
    busOptionsText: "4 bus options",
    busType: "NON A/C Seater / Sleeper (2+1)",
    firstBus: "21:45 (09:45 PM)",
    lastBus: "22:15 (10:15 PM)",
    departureWindow: "21:45 - 22:15",
    startingPrice: 330,
    startingPriceFormatted: "₹330",
    boardingPoints: ["Old Bus Stand Tirupur", "Kangeyam Road"],
    droppingPoints: ["Ramanathapuram Bus Stand", "Kenikarai"],
    redBusUrl: "https://www.redbus.in/bus-tickets/tirupur-to-ramanathapuram",
    category: "tirupur"
  },
  {
    id: "ar-rmd-tpr",
    source: "Ramanathapuram",
    destination: "Tirupur",
    distanceKm: 285,
    duration: "6.25 hrs",
    durationFormatted: "06:15 hrs",
    busOptionsText: "4 bus options",
    busType: "NON A/C Seater / Sleeper (2+1)",
    firstBus: "20:30 (08:30 PM)",
    lastBus: "21:00 (09:00 PM)",
    departureWindow: "20:30 - 21:00",
    startingPrice: 330,
    startingPriceFormatted: "₹330",
    boardingPoints: ["Ramanathapuram Bus Stand"],
    droppingPoints: ["Old Bus Stand Tirupur", "Palladam"],
    redBusUrl: "https://www.redbus.in/bus-tickets/ramanathapuram-to-tirupur",
    category: "return"
  },
  {
    id: "ar-tpr-svg",
    source: "Tirupur",
    destination: "Sivagangai",
    distanceKm: 220,
    duration: "4.5 hrs",
    durationFormatted: "04:30 hrs",
    busOptionsText: "4 bus options",
    busType: "A/C Sleeper (2+1)",
    firstBus: "22:15 (10:15 PM)",
    lastBus: "22:45 (10:45 PM)",
    departureWindow: "22:15 - 22:45",
    startingPrice: 310,
    startingPriceFormatted: "₹310",
    boardingPoints: ["Old Bus Stand Tirupur", "Palladam Road"],
    droppingPoints: ["Sivagangai Bus Stand", "Madurai Road Junction"],
    redBusUrl: "https://www.redbus.in/bus-tickets/tirupur-to-sivagangai",
    category: "tirupur"
  },
  {
    id: "ar-svg-tpr",
    source: "Sivagangai",
    destination: "Tirupur",
    distanceKm: 220,
    duration: "4.5 hrs",
    durationFormatted: "04:30 hrs",
    busOptionsText: "4 bus options",
    busType: "A/C Sleeper (2+1)",
    firstBus: "21:00 (09:00 PM)",
    lastBus: "21:30 (09:30 PM)",
    departureWindow: "21:00 - 21:30",
    startingPrice: 310,
    startingPriceFormatted: "₹310",
    boardingPoints: ["Sivagangai Bus Stand"],
    droppingPoints: ["Old Bus Stand Tirupur"],
    redBusUrl: "https://www.redbus.in/bus-tickets/sivagangai-to-tirupur",
    category: "return"
  },
  {
    id: "ar-tpr-pmk",
    source: "Tirupur",
    destination: "Paramakudi",
    distanceKm: 250,
    duration: "5.5 hrs",
    durationFormatted: "05:30 hrs",
    busOptionsText: "4 bus options",
    busType: "NON A/C Seater / Sleeper (2+1)",
    firstBus: "22:00 (10:00 PM)",
    lastBus: "22:30 (10:30 PM)",
    departureWindow: "22:00 - 22:30",
    startingPrice: 320,
    startingPriceFormatted: "₹320",
    boardingPoints: ["Old Bus Stand Tirupur", "Avinashi Road"],
    droppingPoints: ["Paramakudi Bus Stand"],
    redBusUrl: "https://www.redbus.in/bus-tickets/tirupur-to-paramakudi",
    category: "tirupur"
  },
  {
    id: "ar-pmk-tpr",
    source: "Paramakudi",
    destination: "Tirupur",
    distanceKm: 250,
    duration: "5.5 hrs",
    durationFormatted: "05:30 hrs",
    busOptionsText: "4 bus options",
    busType: "NON A/C Seater / Sleeper (2+1)",
    firstBus: "20:45 (08:45 PM)",
    lastBus: "21:15 (09:15 PM)",
    departureWindow: "20:45 - 21:15",
    startingPrice: 320,
    startingPriceFormatted: "₹320",
    boardingPoints: ["Paramakudi Bus Stand"],
    droppingPoints: ["Old Bus Stand Tirupur"],
    redBusUrl: "https://www.redbus.in/bus-tickets/paramakudi-to-tirupur",
    category: "return"
  }
];

export async function fetchAruthraLiveRoutes(): Promise<{ isLive: boolean; routes: AruthraRoute[]; lastUpdated?: string }> {
  try {
    const res = await fetch("/api/bus-routes", { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return {
      isLive: Boolean(data.isLive),
      routes: Array.isArray(data.routes) && data.routes.length > 0 ? data.routes : ARUTHRA_ROUTES,
      lastUpdated: data.lastUpdated,
    };
  } catch (err) {
    console.warn("Could not fetch live bus routes:", err);
    return { isLive: false, routes: ARUTHRA_ROUTES };
  }
}

export const FAQS = [
  {
    q: "What vehicle types and seating capacities are available for hire in Pune?",
    a: "Vishal Travels provides a comprehensive executive fleet including Force Urbania VIP (13 & 17 seater), Force Tempo Travellers (17, 20 & 26 seater AC), Executive Mini Buses (32 seater), Luxury Volvo B11R Multi-Axle Coaches (49 seater push-back), BharatBenz AC Sleeper Buses (36 berths), and Toyota Innova Crysta SUVs (6-7 seater). Every vehicle is equipped with dual AC, reclining seats, mobile charging, and commercial RTO passenger permits."
  },
  {
    q: "How is the outstation bus rental tariff calculated (Minimum KM Rule)?",
    a: "Outstation journeys in Pune follow a standard calendar-day minimum average: 300 km per day for Tempo Travellers, Force Urbanias, and Mini Buses (350 km/day for Volvo Multi-Axle; 250 km/day for Innova). For example, a 2-day trip has a minimum billable baseline of 600 km. If you travel 350 km in 2 days, you are billed for 600 km at the agreed per-km rate plus driver allowance and 5% GST. If you travel 720 km in 2 days, you are billed for the actual 720 km."
  },
  {
    q: "What is included in the fare quotation, and what is paid extra?",
    a: "Included in your quote: Complete vehicle rental, commercial driver charges, fuel/diesel, air conditioning, and 5% GST with tax invoice. Paid extra at actuals: Highway Fastag toll plaza charges, parking tickets, and interstate border entry taxes (if crossing into Goa, Gujarat, Karnataka, etc.). There are zero hidden agency commissions or secret fuel surcharges."
  },
  {
    q: "What is your booking advance and cancellation refund policy?",
    a: "You can confirm your trip reservation with a token advance of ₹2,000 for Tempo Travellers and Force Urbanias (₹5,000 for Luxury Volvo Coaches) payable via UPI or bank transfer. Cancellation Schedule: 1) 7+ days prior: 100% refund. 2) 48 hours to 7 days prior: 80% refund. 3) 24 to 48 hours prior: 50% refund or 100% credit towards a rescheduled trip within 6 months. 4) Less than 24 hours prior: Advance token is retained to cover driver schedule blocking and fleet yard preparation."
  },
  {
    q: "Are drivers experienced with steep ghat roads like Khandala, Mahabaleshwar & Konkan?",
    a: "Yes. All our drivers hold commercial transport badge licenses with minimum 8+ years of highway driving experience across steep Western Ghat corridors including Bhor Ghat, Pasarni Ghat, Amba Ghat, and Varandha Ghat. Every vehicle undergoes rigorous brake, tire, and fluid inspections before dispatch."
  }
];
