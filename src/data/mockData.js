export const initialResident = {
  name: "Vaivasvat",
  fullTitle: "Vaivasvat Mathur",
  flat: "B-204",
  society: "Green Valley Residency",
  block: "Block B",
  floor: "2nd Floor",
  type: "3 BHK Apartment (1,650 sq. ft.)",
  parkingSlot: "B2-44 (Covered Basement)",
  intercomExt: "204",
  phone: "+91 98765 12345",
  email: "vaivasvat.mathur@gmail.com",
  role: "Resident Owner",
  avatar: "VM",
  memberSince: "January 2023",
  coResidents: [
    { name: "Ananya Mathur", relation: "Spouse", phone: "+91 98765 54321" },
    { name: "Aarav Mathur", relation: "Son", phone: "—" }
  ]
};

export const initialNotices = [
  {
    id: "not-1",
    title: "Water supply maintenance",
    category: "Maintenance",
    isImportant: true,
    date: "18 Sep 2026",
    timestamp: "10:00 AM – 1:00 PM",
    read: false,
    summary: "Water supply will remain unavailable in Block A and B tomorrow due to tank cleaning.",
    content: `Dear Residents,

Water supply maintenance work will be carried out tomorrow. Water supply to Blocks A and B may be affected between 10:00 AM and 1:00 PM.

Residents are requested to store sufficient water in advance. Routine overhead tank cleaning and pressure valve replacements will also take place.

Thank you for your cooperation.

Society Management Committee`
  },
  {
    id: "not-2",
    title: "Monthly Society General Meeting",
    category: "Important",
    isImportant: true,
    date: "20 Sep 2026",
    timestamp: "5:00 PM Onwards",
    read: false,
    summary: "Monthly resident meeting will be held in the community hall this Sunday.",
    content: `Dear Residents,

The monthly resident general body meeting for Green Valley Residency is scheduled for this Sunday.

Key Agenda:
1. Annual maintenance fee audit review
2. EV charging stations rollout in Basement P1
3. Digital security gate pass updates

Venue: Community Hall, Clubhouse 1st Floor
Date: Sunday, 20th September 2026
Time: 5:00 PM`
  },
  {
    id: "not-3",
    title: "Ganesh Chaturthi celebration",
    category: "Events",
    isImportant: false,
    date: "22 Sep 2026",
    timestamp: "6:30 PM",
    read: true,
    summary: "Residents are cordially invited to participate in society Ganesh Utsav.",
    content: `Dear Society Members,

You are cordially invited with your families to join the Ganesh Chaturthi Mahotsav 2026 celebrations at Green Valley Residency central amphitheatre.

Schedule:
- Sthapana & Aarti: 6:30 PM
- Cultural Performances by society kids: 7:30 PM
- Prasadam Distribution: 8:30 PM`
  },
  {
    id: "not-4",
    title: "Basement parking area cleaning",
    category: "Maintenance",
    isImportant: false,
    date: "16 Sep 2026",
    timestamp: "8:00 AM – 2:00 PM",
    read: true,
    summary: "Deep floor pressure scrubbing in Basement Parking P1 & P2 floors.",
    content: `Dear Residents,

Housekeeping teams will carry out deep floor scrubbing and high-pressure water jet cleaning in Basement Parking P1 and P2 floors.

Please relocate any vehicles parked near pillars B-12 to B-30 temporarily between 8:00 AM and 2:00 PM.`
  },
  {
    id: "not-5",
    title: "Routine lift safety inspection",
    category: "Important",
    isImportant: false,
    date: "12 Sep 2026",
    timestamp: "Completed",
    read: true,
    summary: "Annual certified safety audit for Lifts 1 & 2 in Block B completed.",
    content: `Dear Residents,

The annual safety audit for elevator units in Block B was conducted by certified engineers from OTIS. Both elevators have passed inspection with full safety certification.`
  }
];

export const initialComplaints = [
  {
    id: "CMP001",
    title: "Water leakage in Block B corridor",
    category: "Plumbing",
    date: "16 Sep 2026",
    location: "Block B · 2nd Floor Near B-204",
    priority: "High",
    status: "In Progress",
    description: "Continuous slow water seepage near the main pipeline audit panel outside Flat B-204. Needs urgent valve replacement.",
    hasAttachment: true
  },
  {
    id: "CMP002",
    title: "Lift 2 motor noise during descent",
    category: "Maintenance",
    date: "14 Sep 2026",
    location: "Block B · Elevator #2",
    priority: "Medium",
    status: "Resolved",
    description: "Lift 2 made grinding vibration noise while stopping at the 4th floor. Technician inspected and greased guide rails on 15 Sep.",
    hasAttachment: false
  },
  {
    id: "CMP003",
    title: "Corridor light fixture flickering",
    category: "Electrical",
    date: "10 Sep 2026",
    location: "Block B · 2nd Floor Passage",
    priority: "Low",
    status: "Open",
    description: "The LED fixture between flat B-203 and B-204 blinks intermittently during evening hours.",
    hasAttachment: false
  }
];

export const initialVisitors = [
  {
    id: "VIS-101",
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    date: "Today",
    time: "7:30 PM",
    purpose: "Guest",
    status: "Expected",
    passCode: "PASS-7892",
    createdAt: "17 Sep 2026"
  },
  {
    id: "VIS-102",
    name: "Ananya Singh",
    phone: "+91 91234 56789",
    date: "Yesterday",
    time: "6:20 PM",
    purpose: "Delivery",
    company: "Amazon Express",
    status: "Completed",
    passCode: "PASS-4102",
    createdAt: "16 Sep 2026"
  },
  {
    id: "VIS-103",
    name: "Amit Kumar",
    phone: "+91 99887 76655",
    date: "15 Sep 2026",
    time: "8:00 PM",
    purpose: "Guest",
    status: "Completed",
    passCode: "PASS-1923",
    createdAt: "15 Sep 2026"
  },
  {
    id: "VIS-104",
    name: "Ramesh Servicing (AC)",
    phone: "+91 94567 11223",
    date: "12 Sep 2026",
    time: "11:30 AM",
    purpose: "Service",
    status: "Completed",
    passCode: "PASS-0041",
    createdAt: "12 Sep 2026"
  }
];

export const quickUpdates = [
  {
    id: 1,
    title: "Parking area cleaning scheduled",
    time: "2 hours ago",
    type: "maintenance"
  },
  {
    id: 2,
    title: "Society meeting this Sunday",
    time: "Yesterday",
    type: "event"
  },
  {
    id: 3,
    title: "Lift maintenance completed",
    time: "3 days ago",
    type: "check"
  }
];

export const initialPayments = [
  {
    id: "PAY-SEP-2026",
    month: "September 2026",
    amount: 3250,
    dueDate: "20 Sep 2026",
    status: "Pending",
    paidDate: null,
    invoiceNumber: "INV-2026-09-0204",
    breakdown: [
      { item: "Society Maintenance & Housekeeping", amount: 2200 },
      { item: "Water & Borewell Charges", amount: 450 },
      { item: "Covered Parking Maintenance", amount: 300 },
      { item: "Sinking & Development Fund", amount: 200 },
      { item: "Clubhouse & Gym Access", amount: 100 }
    ]
  },
  {
    id: "PAY-AUG-2026",
    month: "August 2026",
    amount: 3250,
    dueDate: "20 Aug 2026",
    status: "Paid",
    paidDate: "12 Aug 2026",
    paymentMethod: "UPI (HDFC Bank)",
    invoiceNumber: "INV-2026-08-0204",
    transactionId: "TXN8912049812",
    breakdown: [
      { item: "Society Maintenance & Housekeeping", amount: 2200 },
      { item: "Water & Borewell Charges", amount: 450 },
      { item: "Covered Parking Maintenance", amount: 300 },
      { item: "Sinking & Development Fund", amount: 200 },
      { item: "Clubhouse & Gym Access", amount: 100 }
    ]
  },
  {
    id: "PAY-JUL-2026",
    month: "July 2026",
    amount: 3100,
    dueDate: "20 Jul 2026",
    status: "Paid",
    paidDate: "05 Jul 2026",
    paymentMethod: "Net Banking",
    invoiceNumber: "INV-2026-07-0204",
    transactionId: "TXN7721839102",
    breakdown: [
      { item: "Society Maintenance & Housekeeping", amount: 2150 },
      { item: "Water & Borewell Charges", amount: 450 },
      { item: "Covered Parking Maintenance", amount: 300 },
      { item: "Sinking & Development Fund", amount: 200 }
    ]
  },
  {
    id: "PAY-JUN-2026",
    month: "June 2026",
    amount: 3100,
    dueDate: "20 Jun 2026",
    status: "Paid",
    paidDate: "10 Jun 2026",
    paymentMethod: "UPI (Google Pay)",
    invoiceNumber: "INV-2026-06-0204",
    transactionId: "TXN6549102834",
    breakdown: [
      { item: "Society Maintenance & Housekeeping", amount: 2150 },
      { item: "Water & Borewell Charges", amount: 450 },
      { item: "Covered Parking Maintenance", amount: 300 },
      { item: "Sinking & Development Fund", amount: 200 }
    ]
  }
];

export const initialAmenities = [
  {
    id: "amenity-hall",
    name: "Community Hall",
    category: "Events & Gatherings",
    capacity: "80 people",
    location: "Clubhouse · 1st Floor",
    timings: "10:00 AM – 10:00 PM",
    bookingFee: "₹1,500 / slot",
    description: "Spacious air-conditioned banquet hall with podium, sound system, and pantry area. Ideal for family gatherings, birthday celebrations, and community workshops.",
    rules: [
      "No loud music after 10:00 PM as per society noise guidelines.",
      "Catering cleanup is the resident's responsibility.",
      "Cancellation allowed up to 24 hours in advance."
    ],
    availableSlots: ["10:00 AM – 1:00 PM", "2:00 PM – 5:00 PM", "6:00 PM – 9:00 PM"],
    imageType: "hall"
  },
  {
    id: "amenity-badminton",
    name: "Badminton Court",
    category: "Sports",
    capacity: "4 players",
    location: "Block C Ground Level",
    timings: "6:00 AM – 10:00 PM",
    bookingFee: "Free for Residents",
    description: "Indoor synthetic wooden court with professional LED floodlights. Non-marking shoes compulsory.",
    rules: [
      "Only non-marking sports shoes allowed inside court.",
      "Maximum 1 hour booking per flat per day during peak hours.",
      "Please switch off court lights when leaving."
    ],
    availableSlots: ["6:00 AM – 7:00 AM", "7:00 AM – 8:00 AM", "6:00 PM – 7:00 PM", "7:00 PM – 8:00 PM", "8:00 PM – 9:00 PM"],
    imageType: "badminton"
  },
  {
    id: "amenity-clubhouse",
    name: "Clubhouse Lounge",
    category: "Recreation",
    capacity: "35 people",
    location: "Central Clubhouse Ground Floor",
    timings: "8:00 AM – 10:00 PM",
    bookingFee: "Free for Residents",
    description: "Air-conditioned recreational lounge equipped with billiards table, carrom boards, chess tables, and high-speed society Wi-Fi.",
    rules: [
      "Maintain cleanliness and return sports equipment after use.",
      "Children below 12 must be accompanied by a guardian.",
      "Food and sugary beverages prohibited on game tables."
    ],
    availableSlots: ["10:00 AM – 1:00 PM", "3:00 PM – 6:00 PM", "6:00 PM – 9:00 PM"],
    imageType: "clubhouse"
  },
  {
    id: "amenity-gym",
    name: "Fitness Gymnasium",
    category: "Health & Fitness",
    capacity: "25 people",
    location: "Clubhouse · 2nd Floor",
    timings: "6:00 AM – 11:00 AM & 5:00 PM – 10:00 PM",
    bookingFee: "Included in Maintenance",
    description: "Fully equipped gym with treadmills, elliptical trainers, multi-station cable machines, free weights, and dedicated stretching yoga area.",
    rules: [
      "Clean workout towel and clean sports footwear required.",
      "Sanitize weights and cardio machines after each workout.",
      "Certified society trainer available from 6:30 AM to 9:30 AM."
    ],
    availableSlots: ["Open Access during gym operating hours"],
    imageType: "gym"
  },
  {
    id: "amenity-pool",
    name: "Swimming Pool",
    category: "Sports & Leisure",
    capacity: "30 swimmers",
    location: "Clubhouse Courtyard",
    timings: "6:30 AM – 10:30 AM & 4:30 PM – 8:30 PM",
    bookingFee: "Included in Maintenance",
    description: "25-meter semi-Olympic outdoor pool with dedicated shallow kids wading pool and certified lifeguard on duty during operating hours.",
    rules: [
      "Shower before entering the pool. Proper synthetic swimsuits mandatory.",
      "No food or glassware within 5 meters of pool deck.",
      "Pool remains closed on Mondays for chemical shock treatment."
    ],
    availableSlots: ["Morning Slot (6:30 AM – 10:30 AM)", "Evening Slot (4:30 PM – 8:30 PM)"],
    imageType: "pool"
  },
  {
    id: "amenity-lawn",
    name: "Party Lawn & Gazebo",
    category: "Outdoors & Events",
    capacity: "120 people",
    location: "Behind Block D Courtyard",
    timings: "4:00 PM – 10:30 PM",
    bookingFee: "₹2,500 / slot",
    description: "Manicured lush open lawn with decorative evening fairy lighting, power backup for catering, and garden seating gazebo.",
    rules: [
      "Sound restrictions apply after 10:00 PM.",
      "Green lawns must be kept free of plastic waste.",
      "Security deposit of ₹2,000 required at society office."
    ],
    availableSlots: ["4:00 PM – 7:00 PM", "7:00 PM – 10:30 PM"],
    imageType: "lawn"
  }
];

export const initialBookings = [
  {
    id: "BK1024",
    amenityId: "amenity-hall",
    amenityName: "Community Hall",
    date: "18 Sep 2026",
    timeSlot: "6:00 PM – 8:00 PM",
    status: "Confirmed",
    bookedFor: "Family Get-together",
    amountPaid: "₹1,500",
    bookingRef: "REF-2026-8910",
    isPast: false
  },
  {
    id: "BK0912",
    amenityId: "amenity-badminton",
    amenityName: "Badminton Court",
    date: "10 Sep 2026",
    timeSlot: "7:00 PM – 8:00 PM",
    status: "Completed",
    bookedFor: "Evening Match",
    amountPaid: "Free",
    bookingRef: "REF-2026-7721",
    isPast: true
  }
];

export const initialEvents = [
  {
    id: "ev-1",
    title: "Ganesh Chaturthi Mahotsav 2026",
    category: "Cultural Celebration",
    date: "22 Sep 2026",
    time: "6:30 PM Onwards",
    venue: "Central Lawn & Amphitheatre",
    description: "Grand Ganesh Sthapana, evening Maha Aarti, traditional dhol tasha, and cultural performances by resident kids followed by Modak prasadam distribution.",
    organizer: "Cultural Committee",
    attendeesCount: 142,
    isRSVPed: true,
    highlights: ["Maha Aarti at 6:30 PM", "Kids Dance & Skit Showcase", "Community Prasad Feast"]
  },
  {
    id: "ev-2",
    title: "Annual Society General Meeting (AGM)",
    category: "Society Governance",
    date: "20 Sep 2026",
    time: "5:00 PM – 7:30 PM",
    venue: "Community Hall, Clubhouse 1st Floor",
    description: "Quarterly review of society finances, maintenance budget allocations, solar panel project approval, and security digital enhancements.",
    organizer: "Managing Committee",
    attendeesCount: 68,
    isRSVPed: false,
    highlights: ["Financial Audit Report", "EV Station Voting", "Open Floor Q&A"]
  },
  {
    id: "ev-3",
    title: "Junior Champions Sports Day",
    category: "Sports & Kids",
    date: "27 Sep 2026",
    time: "8:00 AM – 12:30 PM",
    venue: "Society Central Playground",
    description: "Athletics, lemon-and-spoon races, badminton doubles, and tug-of-war for children aged 5 to 16. Refreshments and medals for all participants.",
    organizer: "Sports Subcommittee",
    attendeesCount: 84,
    isRSVPed: true,
    highlights: ["Sprint Races", "Badminton Doubles", "Medal Ceremony"]
  },
  {
    id: "ev-4",
    title: "Eco Green Clean-up & Tree Plantation",
    category: "Community Welfare",
    date: "04 Oct 2026",
    time: "7:30 AM – 9:30 AM",
    venue: "Green Belt & Boundary Perimeter",
    description: "Volunteer initiative to plant 50 indigenous flowering saplings along the outer driveway and promote zero-waste composting.",
    organizer: "Green Valley Environment Wing",
    attendeesCount: 39,
    isRSVPed: false,
    highlights: ["50 Sapling Plantation", "Compost Workshop", "Morning Tea & Snacks"]
  }
];

export const initialNotifications = [
  {
    id: "notif-1",
    title: "Water Supply Maintenance Tomorrow",
    description: "Water supply to Blocks A and B will be affected from 10:00 AM to 1:00 PM.",
    time: "2 hours ago",
    dateGroup: "Today",
    type: "maintenance",
    read: false,
    link: "/notices/not-1"
  },
  {
    id: "notif-2",
    title: "Visitor Entry Approved",
    description: "Security passed visitor Rahul Sharma for Flat B-204.",
    time: "4 hours ago",
    dateGroup: "Today",
    type: "visitor",
    read: false,
    link: "/visitors"
  },
  {
    id: "notif-3",
    title: "September Maintenance Bill Generated",
    description: "Monthly maintenance bill of ₹3,250 is due on 20 Sep 2026.",
    time: "Yesterday",
    dateGroup: "Yesterday",
    type: "payment",
    read: true,
    link: "/payments"
  },
  {
    id: "notif-4",
    title: "Booking Confirmed: Community Hall",
    description: "Slot reserved for 18 Sep 2026, 6:00 PM – 8:00 PM (Ref: BK1024).",
    time: "2 days ago",
    dateGroup: "Earlier",
    type: "booking",
    read: true,
    link: "/bookings"
  },
  {
    id: "notif-5",
    title: "Complaint CMP002 Marked Resolved",
    description: "Technician finished servicing Lift 2 in Block B.",
    time: "3 days ago",
    dateGroup: "Earlier",
    type: "complaint",
    read: true,
    link: "/complaints"
  }
];

export const societyInformation = {
  name: "Green Valley Residency",
  tagline: "Cooperative Housing Society Ltd.",
  registrationNo: "MAH/MUM/SOC/2019/8912",
  reraNo: "P51800012480",
  address: "Plot 14–18, Alpha-II, Greater Noida, Uttar Pradesh – 201306",
  establishedYear: 2019,
  overview: {
    totalTowers: 4,
    towerNames: ["Tower A (Rosewood)", "Tower B (Oakwood)", "Tower C (Pinecrest)", "Tower D (Maple)"],
    totalFlats: 180,
    totalFloors: "Ground + 14 Floors per Tower",
    campusArea: "4.5 Acres of Landscaped Campus"
  },
  officeTimings: [
    { days: "Monday – Saturday (Morning)", hours: "9:00 AM – 1:00 PM" },
    { days: "Monday – Saturday (Evening)", hours: "5:00 PM – 8:00 PM" },
    { days: "Sunday", hours: "10:00 AM – 1:00 PM (Committee Only)" }
  ],
  committee: [
    { role: "President", name: "Dr. Rajeshwar Patil", flat: "A-1102", phone: "+91 98201 11223" },
    { role: "Secretary", name: "Mr. Hemant Kulkarni", flat: "B-404", phone: "+91 98200 44112" },
    { role: "Treasurer", name: "Mrs. Meenakshi Iyer", flat: "C-601", phone: "+91 98330 55667" },
    { role: "Estate Manager", name: "Mr. Sanjay Deshmukh", flat: "Admin Office", phone: "+91 22 2780 1201" }
  ],
  securityAgency: "EagleEye Integrated Security Systems Ltd. (24x7 Armed & CCTV Surveillance)"
};

export const emergencyContactsList = [
  { id: "em-1", title: "Main Gate Security Desk", number: "+91 22 2780 1200", subtitle: "24x7 Security & Visitor Gate Control", tag: "Security" },
  { id: "em-2", title: "Society Estate Office", number: "+91 22 2780 1201", subtitle: "Mr. Sanjay Deshmukh (Estate Manager)", tag: "Management" },
  { id: "em-3", title: "Maintenance & Electrical Supervisor", number: "+91 98690 11223", subtitle: "Mr. Suresh (On-campus electrician)", tag: "Urgent" },
  { id: "em-4", title: "Plumbing & Borewell Specialist", number: "+91 98690 11224", subtitle: "Mr. Mahendra (On-call plumber)", tag: "Urgent" },
  { id: "em-5", title: "Lift Emergency Breakdown (OTIS)", number: "+91 1800 102 6847", subtitle: "Toll-Free 24x7 Lift Rescue Helpline", tag: "Lift Rescue" },
  { id: "em-6", title: "Greater Noida Fire Brigade (Alpha-II)", number: "101", subtitle: "Station: Sector 17, Alpha-II (1.2 km away)", tag: "Emergency" },
  { id: "em-7", title: "Greater Noida Police Station Control", number: "100", subtitle: "Direct Police Line: +91 22 2782 2222", tag: "Emergency" },
  { id: "em-8", title: "Fortis Hiranandani Hospital Ambulance", number: "102", subtitle: "Emergency Trauma Desk: +91 22 3919 9222", tag: "Medical" }
];
