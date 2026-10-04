/**
 * OPTIFIT 3D - Centralized Project Data & Architecture Store
 * AI-Powered Custom Eyewear Ergonomics and 3D Facial Mesh Fitting Engine
 */

export const PROJECT_INFO = {
  name: "OPTIFIT 3D",
  fullTitle: "AI-Powered Custom Eyewear Ergonomics and 3D Facial Mesh Fitting Engine",
  descriptor: "Eyewear Fitting Intelligence",
  eyebrow: "AI-POWERED EYEWEAR FITTING",
  heroHeadline: "Beyond Virtual Try-On Understand Your Fit",
  heroSupporting: "OPTIFIT 3D combines facial geometry, computer vision and 3D eyewear fitting to analyze how a frame works with your face — not just how it looks.",
  institution: "GLA UNIVERSITY",
  domain: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "3D Visualization"],
  disclaimer: "Measurements and comfort indicators are approximate project-level estimates. OPTIFIT 3D is not a medical device, prescription system, clinical facial measurement tool, or substitute for professional optometrist care."
};

export const NAV_LINKS = [
  { name: "Overview", path: "/" },
  { name: "Architecture & Pipeline", path: "/pipeline" },
  { name: "3D Fitting Studio", path: "/fitting" },
  { name: "Frame Comparison", path: "/comparison" },
  { name: "Fitting Report", path: "/report" },
  { name: "Privacy", path: "/privacy" }
];

export const SNAPSHOT_CARDS = [
  {
    num: "01",
    title: "FACIAL GEOMETRY",
    desc: "Extracts dense facial landmarks using computer vision to approximate critical ergonomic proportions.",
    icon: "ScanFace",
    badge: "Computer Vision"
  },
  {
    num: "02",
    title: "3D FACE REFERENCE",
    desc: "Builds a lightweight 3D anatomical reference twin from detected 2D landmarks with zero cloud image storage.",
    icon: "Boxes",
    badge: "Spatial Mesh"
  },
  {
    num: "03",
    title: "AUTOMATIC FRAME FITTING",
    desc: "Algorithmic alignment engine scales, positions, and anchors 3D eyewear models to the nasal bridge plane.",
    icon: "Glasses",
    badge: "Auto Anchor"
  },
  {
    num: "04",
    title: "FIT & COMFORT INTELLIGENCE",
    desc: "Evaluates geometric contact points to compute an interpretable 0–100 fit score and comfort risk vectors.",
    icon: "ShieldCheck",
    badge: "Ergonomics"
  },
  {
    num: "05",
    title: "FRAME COMPARISON",
    desc: "Compares multiple candidate frames side-by-side using actual dimensional tolerances and fit confidence.",
    icon: "Layers",
    badge: "Multi-Frame"
  },
  {
    num: "06",
    title: "SMART RECOMMENDATIONS",
    desc: "Curates frame geometries and lens treatments tailored to facial proportions and specific use cases.",
    icon: "Sparkles",
    badge: "AI Matching"
  }
];

export const SOLUTION_PIPELINE = [
  { step: "01", title: "FACE CAPTURE", desc: "Standard optical input", icon: "Camera" },
  { step: "02", title: "FACIAL LANDMARKS", desc: "468 dense points", icon: "Cpu" },
  { step: "03", title: "GEOMETRY ANALYSIS", desc: "Facial contour vectors", icon: "Activity" },
  { step: "04", title: "ESTIMATED MEASUREMENTS", desc: "Approximate mm metrics", icon: "Ruler" },
  { step: "05", title: "3D FACIAL REFERENCE", desc: "Privacy-safe mesh", icon: "Boxes" },
  { step: "06", title: "3D FRAME FITTING", desc: "Parametric alignment", icon: "Glasses" },
  { step: "07", title: "FIT ANALYSIS", desc: "0–100 geometric score", icon: "Award" },
  { step: "08", title: "COMFORT INDICATORS", desc: "Bridge & slip risk", icon: "ShieldCheck" },
  { step: "09", title: "RECOMMENDATIONS", desc: "Context-aware matches", icon: "Sparkles" }
];

export const SYSTEM_WORKFLOW = [
  {
    step: "01",
    name: "CAPTURE",
    desc: "Capture the user's face using a webcam or supported optical image snapshot without specialized hardware.",
    techDetail: "Client-side image buffer ingestion"
  },
  {
    step: "02",
    name: "LANDMARK DETECTION",
    desc: "Detect relevant facial landmarks across eye orbits, nasal ridge, cheekbones, and jawline using computer vision.",
    techDetail: "468 Facial landmark mesh mapping"
  },
  {
    step: "03",
    name: "FACIAL MEASUREMENT",
    desc: "Estimate useful geometric relationships such as Face Width, Face Height, Eye Distance, and Bridge Width.",
    techDetail: "Interpupillary and zygomatic ratio estimation"
  },
  {
    step: "04",
    name: "3D FACIAL REFERENCE",
    desc: "Create a lightweight 3D facial representation based on detected geometry for 6-DoF spatial inspection.",
    techDetail: "Low-latency parametric mesh model"
  },
  {
    step: "05",
    name: "FRAME FITTING",
    desc: "Load a 3D eyewear model and automatically position, scale and align it onto the 3D bridge plane.",
    techDetail: "Parametric geometric anchoring"
  },
  {
    step: "06",
    name: "FIT ANALYSIS",
    desc: "Evaluate geometric compatibility between the facial contours and eyewear frame dimensions.",
    techDetail: "Dimensional tolerance verification"
  },
  {
    step: "07",
    name: "COMFORT INTELLIGENCE",
    desc: "Generate interpretable indicators such as Bridge Pressure Risk, Slipping Risk, and Optical Alignment.",
    techDetail: "Multi-parameter pressure & slippage vectors"
  },
  {
    step: "08",
    name: "RECOMMENDATION",
    desc: "Recommend suitable frames based on facial geometry, fit score, comfort metrics, style, and use case.",
    techDetail: "Explainable lifestyle & ergonomic matching"
  }
];

export const MEASUREMENT_METRICS = [
  {
    title: "Face Width",
    type: "Estimated Ratio",
    desc: "Approximate horizontal distance between zygomatic cheekbone arches to determine frame width compatibility.",
    sample: "~138.5 mm (Est.)"
  },
  {
    title: "Face Height",
    type: "Estimated Ratio",
    desc: "Vertical distance from hairline plane to menton (chin) to identify optimal vertical lens depth.",
    sample: "~182.0 mm (Est.)"
  },
  {
    title: "Eye Distance (PD)",
    type: "Estimated Ratio",
    desc: "Interpupillary distance between pupil centers to verify optical centration through lens sweet spots.",
    sample: "~64.2 mm (Est.)"
  },
  {
    title: "Bridge Width",
    type: "Estimated Ratio",
    desc: "Nasal bone crest span to ensure nose pads rest securely without excessive clamping pressure.",
    sample: "~18.0 mm (Est.)"
  },
  {
    title: "Facial Proportions",
    type: "Geometric Harmony",
    desc: "Golden ratio approximations between upper, middle, and lower facial thirds.",
    sample: "Balanced 1:1.618"
  },
  {
    title: "Frame-to-Face Relationship",
    type: "Fit Clearance",
    desc: "Lateral clearance preventing frame edges from extending excessively past temporal bones.",
    sample: "Neutral (+1.2mm)"
  }
];

export const CORE_FEATURES_LIST = [
  {
    id: "01",
    title: "Facial Measurement Intelligence",
    desc: "Approximates essential facial dimensions and geometric proportions for frame selection.",
    icon: "Ruler"
  },
  {
    id: "02",
    title: "3D Facial Representation",
    desc: "Constructs a privacy-safe 3D reference mesh from detected 2D landmark coordinates.",
    icon: "Boxes"
  },
  {
    id: "03",
    title: "Automatic 3D Frame Alignment",
    desc: "Algorithmic alignment engine positions and scales eyewear CAD models onto facial planes.",
    icon: "Glasses"
  },
  {
    id: "04",
    title: "Fit Score (0–100)",
    desc: "Composite geometric compatibility score explaining how well a frame fits your unique face.",
    icon: "Award"
  },
  {
    id: "05",
    title: "Comfort Intelligence",
    desc: "Calculates predictive indicators for nasal bridge pressure, slippage risk, and optical centration.",
    icon: "ShieldCheck"
  },
  {
    id: "06",
    title: "Frame Comparison",
    desc: "Side-by-side dimensional matrix comparing physical frame metrics and ergonomic confidence.",
    icon: "Layers"
  },
  {
    id: "07",
    title: "Personalized Virtual Frame Variant",
    desc: "Allows virtual simulation of adjusted width, bridge, and temple lengths to preview fit changes.",
    icon: "Sliders"
  },
  {
    id: "08",
    title: "Occasion-Based Recommendations",
    desc: "Curates frame styles based on lifestyle requirements: daily wear, computer work, driving, and sports.",
    icon: "Sparkles"
  },
  {
    id: "09",
    title: "Lens Intelligence",
    desc: "Informational guidance on lens coatings and treatments suited to specific visual environments.",
    icon: "Eye"
  },
  {
    id: "10",
    title: "Fitting Report",
    desc: "Exportable summary combining facial proportions, fit ratings, and tailored frame selections.",
    icon: "FileText"
  }
];

export const COMPARISON_DEMO_FRAMES = [
  {
    id: "frame-1",
    name: "Alpha Modern Square",
    shape: "Square Acetate",
    frameWidth: "138 mm",
    bridgeWidth: "18 mm",
    lensWidth: "52 mm",
    lensHeight: "41 mm",
    templeLength: "142 mm",
    fitScore: 94,
    bridgePressure: "Low (Optimal)",
    slippingRisk: "Minimal",
    faceCompatibility: "High (Oval / Round)",
    badgeColor: "text-[#3E4D2A] bg-[#CAD8C5]/40 border-[#7E8F6A]/40"
  },
  {
    id: "frame-2",
    name: "Classic Geometric Round",
    shape: "Round Titanium",
    frameWidth: "134 mm",
    bridgeWidth: "21 mm",
    lensWidth: "48 mm",
    lensHeight: "46 mm",
    templeLength: "140 mm",
    fitScore: 82,
    bridgePressure: "Medium",
    slippingRisk: "Low",
    faceCompatibility: "Moderate (Square)",
    badgeColor: "text-[#607742] bg-[#E9E4CF]/60 border-[#CAD8C5]"
  },
  {
    id: "frame-3",
    name: "Contour Slim Navigator",
    shape: "Aviator Alloy",
    frameWidth: "142 mm",
    bridgeWidth: "16 mm",
    lensWidth: "56 mm",
    lensHeight: "44 mm",
    templeLength: "145 mm",
    fitScore: 74,
    bridgePressure: "High (Narrow)",
    slippingRisk: "Moderate",
    faceCompatibility: "Wide Faces Only",
    badgeColor: "text-[#7E8F6A] bg-[#CAD8C5]/20 border-[#CAD8C5]"
  }
];

export const LENS_CATEGORIES = [
  {
    name: "Anti-Reflective",
    tag: "Clarity",
    desc: "Minimizes surface glare and reflections from artificial lights and digital screens.",
    useCase: "Night driving, studio work, presentations"
  },
  {
    name: "UV Protection (UV400)",
    tag: "Health",
    desc: "Blocks 99–100% of harmful UVA and UVB radiation to safeguard ocular structures.",
    useCase: "Outdoor daily commute, daylight travel"
  },
  {
    name: "Polarized",
    tag: "Contrast",
    desc: "Filters intense horizontal light reflections bouncing off water, asphalt, and snow.",
    useCase: "Driving, water sports, bright sunlight"
  },
  {
    name: "Photochromic",
    tag: "Adaptive",
    desc: "Lenses transition from clear indoors to shaded tints upon exposure to natural UV rays.",
    useCase: "All-day indoor-to-outdoor versatility"
  },
  {
    name: "Blue-Light Filtering",
    tag: "Digital Comfort",
    desc: "Attenuates high-energy blue light bands emitted by monitors, laptops, and mobile devices.",
    useCase: "Programmers, designers, digital professionals"
  },
  {
    name: "Impact-Resistant",
    tag: "Durability",
    desc: "Polycarbonate or Trivex material engineered to withstand physical shocks and impacts.",
    useCase: "Sports, physical activities, active lifestyles"
  }
];

export const TECH_STACK = {
  frontend: [
    { name: "React", desc: "Component architecture & state management" },
    { name: "Vite", desc: "Ultra-fast build tooling & hot module reloading" },
    { name: "Tailwind CSS", desc: "Modern utility-first styling system" },
    { name: "Three.js", desc: "Core WebGL rendering engine" },
    { name: "React Three Fiber", desc: "Declarative React Three.js integration" },
    { name: "Drei", desc: "Helpers for 3D camera controls and scene lighting" },
    { name: "Framer Motion", desc: "Production-grade UI animation & transitions" }
  ],
  backendCV: [
    { name: "Python", desc: "Core computational & algorithmic runtime" },
    { name: "FastAPI", desc: "High-performance async REST backend" },
    { name: "OpenCV", desc: "Computer vision & optical image processing" },
    { name: "MediaPipe", desc: "Dense 468-point facial landmark topology" },
    { name: "NumPy", desc: "Matrix calculations & geometric vector analysis" }
  ],
  spatial3D: [
    { name: "GLTF / GLB", desc: "Optimized binary 3D eyewear CAD transmission" },
    { name: "OBJ Format", desc: "Anatomical reference mesh compatibility" },
    { name: "Parametric Shaders", desc: "Custom physically based materials & lens glass" }
  ]
};

export const ARCHITECTURE_STAGES = [
  { id: "01", name: "USER", role: "Browser Client Input" },
  { id: "02", name: "REACT FRONTEND", role: "Interactive UI & 3D Viewport" },
  { id: "03", name: "FASTAPI", role: "Async API Orchestrator" },
  { id: "04", name: "COMPUTER VISION", role: "Optical Ingestion & Preprocessing" },
  { id: "05", name: "FACIAL LANDMARKS", role: "Dense Landmark Detection" },
  { id: "06", name: "MEASUREMENT ENGINE", role: "Geometric Proportions & PD Estimation" },
  { id: "07", name: "3D FACIAL REFERENCE", role: "Spatial Mesh Reconstruction" },
  { id: "08", name: "3D EYEWEAR FITTING", role: "Automated Parametric CAD Alignment" },
  { id: "09", name: "FIT / COMFORT ENGINE", role: "Contact Pressure & Slipping Vectors" },
  { id: "10", name: "RECOMMENDATION ENGINE", role: "Context-Aware Lifestyle Matching" },
  { id: "11", name: "REPORT", role: "Comprehensive Ergonomic Summary" }
];

export const INNOVATIONS_LIST = [
  "Goes beyond appearance-focused virtual try-on by analyzing physical contact geometry.",
  "Uses facial geometry and anatomical contours for objective fit analysis.",
  "Provides estimated facial measurements without requiring bulky depth hardware.",
  "Generates a lightweight 3D facial reference for spatial 6-DoF inspection.",
  "Automatically positions, scales, and aligns 3D eyewear models.",
  "Provides an interpretable 0–100 geometric fit score with transparent criteria.",
  "Adds comfort-related indicators including bridge pressure and slippage vectors.",
  "Compares multiple frames using dimensional tolerances and physical parameters.",
  "Supports virtual personalized frame variants to test parametric scale changes.",
  "Provides use-case-based recommendations tailored to lifestyle routines."
];

export const SCOPE_DATA = {
  inScope: [
    "Facial landmark detection using computer vision",
    "Approximate facial geometry & anatomical vectors",
    "Estimated facial measurements (Face width, PD, bridge)",
    "Lightweight 3D facial reference mesh",
    "3D eyewear CAD models & materials",
    "Automatic 3D frame positioning & alignment",
    "0–100 Geometric fit score analysis",
    "Comfort indicators (Bridge pressure, slippage risk)",
    "Multi-frame dimensional comparison matrix",
    "Use-case frame recommendations",
    "Informational lens intelligence categories",
    "Comprehensive fitting summary report"
  ],
  outOfScope: [
    "Medical diagnosis or ophthalmic clinical testing",
    "Prescription power recommendation or correction",
    "Clinical-grade or millimeter-certified medical metrics",
    "Guaranteed real-world physical comfort",
    "Specialized depth cameras or LiDAR hardware requirements",
    "3D-printable custom frame physical manufacturing",
    "Payment processing, checkout, or commercial e-commerce"
  ]
};

export const TEAM_DATA = {
  institution: "GLA UNIVERSITY",
  projectType: "Academic / AI & Computer Vision Engineering Project",
  domains: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "3D Visualization"],
  members: [
    { role: "Core Developer", name: "TEAM MEMBER 01", focus: "Computer Vision & Architecture" },
    { role: "Core Developer", name: "TEAM MEMBER 02", focus: "3D Geometry & WebGL" },
    { role: "Core Developer", name: "TEAM MEMBER 03", focus: "Machine Learning & Models" },
    { role: "Core Developer", name: "TEAM MEMBER 04", focus: "Frontend & UI/UX Experience" },
    { role: "Core Developer", name: "TEAM MEMBER 05", focus: "Backend APIs & Data Pipeline" },
    { role: "Core Developer", name: "TEAM MEMBER 06", focus: "Quality Assurance & Evaluation" }
  ]
};

export const PRIVACY_PRINCIPLES = [
  {
    title: "Explicit Camera Consent",
    desc: "Camera stream is strictly permission-based and initiated only upon user request.",
    icon: "Lock"
  },
  {
    title: "Minimal Data Retention",
    desc: "Facial analysis runs client-side with zero unnecessary storage of raw face imagery.",
    icon: "Cpu"
  },
  {
    title: "Estimated Approximations",
    desc: "All dimensional measurements are clearly designated as approximate non-medical estimates.",
    icon: "FileText"
  },
  {
    title: "Independent Prototype",
    desc: "Built purely as an academic AI research project with zero third-party data tracking.",
    icon: "ShieldCheck"
  }
];

export const CORE_15_FEATURES = [
  { id: 1, title: "Face Detection", category: "Vision Ingestion", desc: "Real-time client-side face boundary box tracking with optical normalization.", icon: "ScanFace" },
  { id: 2, title: "Facial Landmark Detection", category: "Dense Topology", desc: "468 3D biometric coordinates across ocular orbits, nasal ridge, and zygomatic arches.", icon: "Cpu" },
  { id: 3, title: "Facial Geometry Analysis", category: "Biometrics", desc: "Computes interpupillary distance (PD), facial aspect ratios, and nasal plane slope.", icon: "Ruler" },
  { id: 4, title: "3D Face Representation", category: "Spatial Mesh", desc: "Constructs a lightweight privacy-safe 3D anatomical reference mesh directly in-browser.", icon: "Boxes" },
  { id: 5, title: "3D Eyewear Virtual Try-On", category: "Spatial Viewport", desc: "6-DoF spatial overlay with real-time perspective depth, optical occlusion, and lighting.", icon: "Glasses" },
  { id: 6, title: "Automatic Frame Fitting", category: "Parametric CAD", desc: "Auto-aligns and scales candidate frame geometry to anatomical nasal bridge plane.", icon: "Sliders" },
  { id: 7, title: "Fit / Compatibility Analysis", category: "Ergonomics", desc: "Calculates clearance millimeter tolerances across brow, temples, and cheekbones.", icon: "Activity" },
  { id: 8, title: "Fit Score", category: "Intelligent Scoring", desc: "Interpretable 0–100 geometric fit rating synthesized from physical contact vectors.", icon: "Award" },
  { id: 9, title: "Comfort Estimation", category: "Ergonomics", desc: "Multi-parameter risk vectors detecting bridge pinch, ear bite, and slip probability.", icon: "ShieldCheck" },
  { id: 10, title: "Personalized Recommendation", category: "AI Matching", desc: "Tailors frame silhouettes and bridge widths to individual facial geometry proportions.", icon: "Sparkles" },
  { id: 11, title: "Fitting Report", category: "Consolidated Summary", desc: "Comprehensive report combining measurements, frame specs, fit score, and comfort metrics.", icon: "FileText" },
  { id: 12, title: "Universal Frame → Personalized", category: "Parametric Morphs", desc: "Takes a standard off-the-shelf universal frame CAD and generates tailored bespoke variants.", icon: "Boxes" },
  { id: 13, title: "Automatic Variant Generation", category: "Custom Manufacturing", desc: "Procedural adjustments to bridge splay, temple curve, and pantoscopic angle per user face.", icon: "Sliders" },
  { id: 14, title: "Frame Comparison with 3D Try-On", category: "Multi-Frame Engine", desc: "Side-by-side comparison with real-time 3D model try-on and dimensional tolerance metrics.", icon: "Layers" },
  { id: 15, title: "Lens Intelligence", category: "Optical Science", desc: "Analyzes lens dimensions, optical center alignment, UV400, polarization, and anti-reflective treatments.", icon: "Eye" }
];

export const UNIVERSAL_VARIANTS_DATA = {
  baseFrame: {
    name: "Base Universal Frame 1.0",
    modelCode: "OPT-BASE-UNIV",
    description: "Standard industrial off-the-shelf CAD geometry before facial personalization.",
    specs: {
      frameWidth: "140 mm",
      bridgeWidth: "18 mm",
      pantoscopicAngle: "0° (Standard Flat)",
      templeLength: "142 mm",
      nosePadSplay: "35° (Fixed)"
    },
    fitStatus: "General Population Average (~72% Fit Compatibility)"
  },
  variants: [
    {
      id: "var-narrow-bridge",
      name: "Personalized Variant A: Narrow Bridge & High Cheekbone Fit",
      tag: "Low Bridge / High Cheekbones",
      deltas: [
        { label: "Bridge Width", change: "-2.5 mm", value: "15.5 mm" },
        { label: "Nose Pad Elevation", change: "+4.0 mm", value: "Elevated Pedestal" },
        { label: "Pantoscopic Angle", change: "+3.5°", value: "Cheek Clearance" }
      ],
      description: "Automatically customized for narrow/flat nasal crests and prominent zygomatic cheekbones. Elevates frame 4mm to prevent cheek touching and sliding.",
      fitScore: 96,
      bridgePressure: "Minimal (0.03 N/mm²)",
      slippingRisk: "Negligible",
      visualAccent: "bg-[#CAD8C5]/40 text-[#3E4D2A]"
    },
    {
      id: "var-wide-temple",
      name: "Personalized Variant B: Wide Temporal Clearance Fit",
      tag: "Broad Head / Zygomatic Arch",
      deltas: [
        { label: "Frame Width", change: "+6.0 mm", value: "146.0 mm" },
        { label: "Temple Bow Curve", change: "+5.0° Splay", value: "Zero Head Pinch" },
        { label: "Temple Length", change: "+4.0 mm", value: "146.0 mm" }
      ],
      description: "Expands lateral hinges by 6mm and angles temple stems outwards to eliminate temporal headaches and ear-pressure marks on wider faces.",
      fitScore: 94,
      bridgePressure: "Optimal",
      slippingRisk: "Low",
      visualAccent: "bg-[#C3AF83]/30 text-[#26311A]"
    },
    {
      id: "var-progressive-depth",
      name: "Personalized Variant C: Deep Optical B-Measurement Fit",
      tag: "Progressive & Multifocal",
      deltas: [
        { label: "Lens B-Height", change: "+4.2 mm", value: "45.2 mm" },
        { label: "Pupil Centration", change: "Optical Sweet Spot", value: "99.4%" },
        { label: "Vertex Distance", change: "-1.5 mm", value: "12.0 mm" }
      ],
      description: "Expands the vertical optical reading corridor by 4.2mm. Ensures seamless vision transition between distance driving and near reading zones.",
      fitScore: 97,
      bridgePressure: "Low (Optimal)",
      slippingRisk: "Minimal",
      visualAccent: "bg-[#607742]/20 text-[#3E4D2A]"
    }
  ]
};

export const SAMPLE_FITTING_REPORT = {
  reportId: "OPT-2026-8942",
  timestamp: "2026-09-17",
  clientName: "Alex Mercer",
  faceShape: "Oval / Diamond Proportions",
  measurements: [
    { label: "Interpupillary Distance (PD)", value: "64.2 mm", status: "Optimal Centered", icon: "Eye" },
    { label: "Zygomatic Face Width", value: "138.5 mm", status: "Medium / Standard", icon: "Ruler" },
    { label: "Nasal Bridge Span", value: "18.0 mm", status: "Balanced Crest", icon: "Glasses" },
    { label: "Total Face Height", value: "182.0 mm", status: "Harmonious Ratio", icon: "Activity" },
    { label: "Ear-to-Bridge Temple Run", value: "142.0 mm", status: "Ergonomic Length", icon: "Sliders" }
  ],
  frameDetails: {
    name: "OPTIFIT Aero-Titanium Geometric",
    shape: "Square Rounded Acetate / Titanium Alloy",
    dimensions: "52 [] 18 - 142",
    weight: "14.2 g (Ultra-lightweight)",
    hingeType: "Custom Flex Dampening Hinge",
    colorway: "Olive Summer Matte"
  },
  fitScore: {
    overall: 94,
    rating: "Optimal Ergonomic Fit",
    breakdown: [
      { category: "Pupil Optical Centration", score: 99 },
      { category: "Nasal Bridge Clearance", score: 96 },
      { category: "Temporal Clamp Tolerance", score: 91 },
      { category: "Cheekbone Clearance", score: 95 }
    ]
  },
  comfortEstimation: {
    score: 95,
    bridgePressure: "Minimal (0.04 N/mm²)",
    slippingRisk: "Very Low (Anti-slip anchor)",
    earStemTension: "Comfort Balanced (Zero bite)",
    weightDistribution: "68% Bridge / 32% Ears"
  },
  recommendations: [
    "Select 18mm bridge with adjustable silicone air-pads for 12-hour all-day wear.",
    "Order with Anti-Reflective Blue-Cut coating to protect against display fatigue.",
    "Ensure pantoscopic tilt angle is locked at 7.5° for crisp reading corridor clarity."
  ]
};

export const LENS_INTELLIGENCE_DATA = [
  {
    id: "anti-reflective",
    name: "Anti-Reflective Clarity (AR)",
    tag: "Glare Reduction",
    badgeColor: "bg-[#CAD8C5]/50 text-[#3E4D2A] border-[#7E8F6A]/30",
    transmission: "99.8% Light Ingestion",
    glareCut: "95% Reflection Block",
    desc: "Multi-layer vacuum-deposited hydrophobic coating eliminating reflection halos from oncoming headlights and digital displays.",
    useCase: "Night driving, long screen hours, photography"
  },
  {
    id: "blue-light",
    name: "Blue-Light Guard Pro",
    tag: "Circadian Health",
    badgeColor: "bg-[#C3AF83]/30 text-[#26311A] border-[#C3AF83]/50",
    transmission: "94.5% True Tone",
    glareCut: "420nm High-Energy Cut",
    desc: "Filters high-energy visible (HEV) blue wavelength radiation emitted by LED monitors and smartphones to combat eye strain.",
    useCase: "Software engineers, digital creators, office work"
  },
  {
    id: "uv400",
    name: "UV400 Ocular Shield",
    tag: "Photoprotection",
    badgeColor: "bg-[#607742]/20 text-[#3E4D2A] border-[#607742]/40",
    transmission: "100% UVA / UVB Block",
    glareCut: "Full Solar Spectrum",
    desc: "Blocks 100% of UVA and UVB rays up to 400 nanometers, safeguarding cornea and retina against cumulative phototoxic aging.",
    useCase: "Daytime commute, outdoor sports, high-altitude travel"
  },
  {
    id: "polarized",
    name: "Polarized Micro-Grid",
    tag: "High Contrast",
    badgeColor: "bg-[#CAD8C5]/60 text-[#26311A] border-[#7E8F6A]/40",
    transmission: "Horizontal Wave Cancel",
    glareCut: "99.9% Blinding Glare",
    desc: "Microscopic acoustic alignment filters blinding horizontal surface reflections bouncing off roads, water, and automotive glass.",
    useCase: "Driving, water navigation, skiing, fishing"
  },
  {
    id: "photochromic",
    name: "Photochromic Adaptive",
    tag: "Light Transition",
    badgeColor: "bg-[#E9E4CF] text-[#3E4D2A] border-[#D8D3C3]",
    transmission: "Cat 0 (Indoor) → Cat 3 (Sun)",
    glareCut: "Dynamic Sensor Fade",
    desc: "Molecule-level silver halide crystals darken dynamically when exposed to ambient outdoor UV and clear indoors in 60 seconds.",
    useCase: "Seamless indoor-outdoor lifestyle, active day use"
  }
];
