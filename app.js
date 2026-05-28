const INGREDIENT_SCORE_IDS = {
  ads: "extra_sweetness",
  contacts: "smooth_convenience",
  third_party: "trusted_partners",
  history: "always_fresh",
  cross_site: "perfect_texture",
  dark_pattern: "better_recommendations",
  location: "local_flavour",
  voice: "voice_activated_mix",
  data_sell: "smart_memory",
  camera: "enhanced_experience",
  device_fingerprint: "fast_checkout",
  ai_profile: "ai_profile",
};

const INGREDIENTS = [
  {
    id: "ads",
    name: "Extra Sweetness",
    term: "Personalised ads",
    contains: "personalised ads",
    shapedBy: "personalisation",
    points: { Exposure: 0, Control: 0, Seduction: 2 },
    image: "./assets/ingredients/ingredient-12.png",
    x: 6,
    y: 12,
  },
  {
    id: "cross_site",
    name: "Perfect Texture",
    term: "Behavioural profiling",
    contains: "behavioural profiling",
    shapedBy: "precision profiling",
    points: { Exposure: 1, Control: 1, Seduction: 1 },
    image: "./assets/ingredients/ingredient-11.png",
    x: 10,
    y: 35,
  },
  {
    id: "location",
    name: "Local Flavour",
    term: "Location access",
    contains: "location access",
    shapedBy: "local relevance",
    points: { Exposure: 2, Control: 0, Seduction: 1 },
    image: "./assets/ingredients/ingredient-06.png",
    x: 38,
    y: 12,
  },
  {
    id: "contacts",
    name: "Smooth Convenience",
    term: "Browsing history",
    contains: "browsing history",
    shapedBy: "convenience",
    points: { Exposure: 1, Control: 0, Seduction: 2 },
    image: "./assets/ingredients/ingredient-09.png",
    x: 21,
    y: 13,
  },
  {
    id: "history",
    name: "Always Fresh",
    term: "Cross-device tracking",
    contains: "cross-device tracking",
    shapedBy: "continuous updating",
    points: { Exposure: 1, Control: 2, Seduction: 1 },
    image: "./assets/ingredients/ingredient-08.png",
    x: 28,
    y: 35,
  },
  {
    id: "voice",
    name: "Voice-Activated Mix",
    term: "Microphone access",
    contains: "microphone access",
    shapedBy: "smart convenience",
    points: { Exposure: 2, Control: 1, Seduction: 1 },
    image: "./assets/ingredients/ingredient-05.png",
    x: 47,
    y: 34,
  },
  {
    id: "camera",
    name: "Enhanced Experience",
    term: "Device fingerprint",
    contains: "device fingerprint",
    shapedBy: "enhanced experience",
    points: { Exposure: 1, Control: 2, Seduction: 1 },
    image: "./assets/ingredients/ingredient-03.png",
    x: 6,
    y: 57,
  },
  {
    id: "device_fingerprint",
    name: "Fast Checkout",
    term: "Purchase history",
    contains: "purchase history",
    shapedBy: "efficient checkout",
    points: { Exposure: 2, Control: 0, Seduction: 1 },
    image: "./assets/ingredients/ingredient-02.png",
    x: 23,
    y: 58,
  },
  {
    id: "ai_profile",
    name: "Future Recipe Learning",
    term: "Training AI with user data",
    contains: "AI training data",
    shapedBy: "system learning",
    points: { Exposure: 2, Control: 1, Seduction: 1 },
    image: "./assets/ingredients/ingredient-01.png",
    x: 40,
    y: 58,
  },
  {
    id: "third_party",
    name: "Trusted Partners",
    term: "Third-party sharing",
    contains: "third-party sharing",
    shapedBy: "partner trust",
    points: { Exposure: 1, Control: 2, Seduction: 0 },
    image: "./assets/ingredients/ingredient-10.png",
    x: 11,
    y: 75,
  },
  {
    id: "dark_pattern",
    name: "Better Recommendations",
    term: "Preference prediction",
    contains: "preference prediction",
    shapedBy: "customised recommendations",
    points: { Exposure: 0, Control: 0, Seduction: 2 },
    image: "./assets/ingredients/ingredient-07.png",
    x: 30,
    y: 63,
  },
  {
    id: "data_sell",
    name: "Smart Memory",
    term: "Saved login/activity data",
    contains: "saved login and activity data",
    shapedBy: "remembering you",
    points: { Exposure: 2, Control: 0, Seduction: 1 },
    image: "./assets/ingredients/ingredient-04.png",
    x: 47,
    y: 68,
  },
];

const TOOLTIP_BELOW_IDS = new Set(["ads", "contacts", "location"]);

const INGREDIENT_TOOLTIPS = {
  history: {
    title: "Always Fresh",
    body: [
      "Your data is gently refreshed each time you browse, click, pause, or return.",
      "What feels “fresh” is really constant updating — a profile that grows more detailed over time, so the system can keep serving content that feels perfectly current and perfectly personal.",
    ],
    tagline: "Freshly tailored, every single visit.",
    meaning: "Ongoing tracking and profile updating.",
  },
  dark_pattern: {
    title: "Better Recommendations",
    body: [
      "By collecting what you like, what you skip, and what you linger on, the system learns how to suggest what feels most irresistible.",
      "These “better recommendations” are built from your habits and preferences, turning your behaviour into a recipe for prediction.",
    ],
    tagline: "A little more of what you already love.",
    meaning: "Behaviour-based personalisation.",
  },
  ads: {
    title: "Extra Sweetness",
    body: [
      "Tiny delights — rewards, nudges, and personalised touches — make the experience feel more charming and more inviting.",
      "But sweetness also keeps you engaged longer, helping the system guide your attention while making consent feel effortless and pleasant.",
    ],
    tagline: "Because a softer touch is harder to resist.",
    meaning: "Engagement nudges and persuasive design.",
  },
  cross_site: {
    title: "Perfect Texture",
    body: [
      "The base of every perfect cookie is carefully measured — just like the details collected about your device, behaviour, and browsing patterns.",
      "This “texture” is created through fine-grained profiling, blending small signals together into a smooth, detailed picture of who you are online.",
    ],
    tagline: "Delicately blended into something just right.",
    meaning: "Data profiling and device-level signals.",
  },
  contacts: {
    title: "Smooth Convenience",
    body: [
      "Easy buttons, seamless flows, and frictionless choices make everything feel simple and comforting.",
      "That smoothness often means fewer pauses to question what you’re agreeing to — letting consent slide into place as naturally as cream into batter.",
    ],
    tagline: "Soft, seamless, and ready in a single step.",
    meaning: "Frictionless consent and reduced resistance.",
  },
  third_party: {
    title: "Trusted Partners",
    body: [
      "Some ingredients are shared to make the recipe “work better together.”",
      "In digital terms, that means your information may travel beyond the original site — passed to third parties, advertisers, or analytics partners, all in the name of a more connected experience.",
    ],
    tagline: "Carefully shared with those we trust.",
    meaning: "Third-party data sharing.",
  },
  location: {
    title: "Local Flavour",
    body: [
      "A hint of where you are can make everything feel more relevant — nearby offers, local weather, places you might love.",
      "That “local flavour” often means your location is quietly noted, stored, and used to shape what appears next, even when you are not actively sharing it.",
    ],
    tagline: "Made to feel close to home.",
    meaning: "Location access and geo-tracking.",
  },
  voice: {
    title: "Voice-Activated Mix",
    body: [
      "Hands-free convenience makes the kitchen — and the interface — feel effortless and modern.",
      "Behind the charm, microphone access can mean your voice, commands, and ambient sounds become part of a profile the system learns to recognise.",
    ],
    tagline: "Just say the word, and it listens.",
    meaning: "Microphone access and voice data capture.",
  },
  camera: {
    title: "Enhanced Experience",
    body: [
      "Richer visuals and smoother interactions promise a more immersive, polished experience.",
      "Enhancement often relies on device fingerprinting — subtle technical details that identify your browser, screen, and settings across visits.",
    ],
    tagline: "A richer experience, finely tuned.",
    meaning: "Device fingerprinting and enhanced tracking.",
  },
  device_fingerprint: {
    title: "Fast Checkout",
    body: [
      "Saved details and one-click flows make returning feel instant and familiar.",
      "That speed is powered by purchase history and stored identifiers — a memory of what you bought, when, and how you prefer to pay.",
    ],
    tagline: "Ready before you even reach for your wallet.",
    meaning: "Purchase history and stored payment signals.",
  },
  ai_profile: {
    title: "Future Recipe Learning",
    body: [
      "The system learns from every batch — refining its recipe so the next result feels even more tailored.",
      "In practice, your clicks, choices, and behaviour may be used to train models that predict what you will want next.",
    ],
    tagline: "Every visit teaches the oven something new.",
    meaning: "AI training with user data.",
  },
  data_sell: {
    title: "Smart Memory",
    body: [
      "Remembering your preferences feels thoughtful — like a kitchen that always knows how you take your tea.",
      "Smart memory often means saved logins, activity logs, and identifiers kept long after the moment has passed.",
    ],
    tagline: "It remembers so you don’t have to.",
    meaning: "Saved login and persistent activity data.",
  },
};

const RESULTS = [
  {
    id: "glossy",
    name: "Glossy Perfect Cookie",
    line: "Perfectly personalised.",
    color: "#e8ba8d",
    image: "./assets/results/glossy.png",
    audio: "./assets/audio/results/glossy.wav",
    insideContains: [
      "Personalised ads",
      "browsing history",
      "preference prediction",
      "saved login/activity data",
    ],
    insideMeaning:
      "This cookie looks smooth and harmless because it is built from comfort, memory, and personalisation. However, the platform may use your habits, searches, clicks, and repeated choices to predict what you want before you choose it yourself. Over time, this can shape what you see, what you buy, and what feels “normal” to you online.",
    insideFinalLine: "The sweetest cookie is not always the safest one.",
    shapedBy: ["convenience", "personalisation", "default trust", "hidden tracker icons"],
    sting: "The sweetest cookie is not always the safest one.",
    bg: "linear-gradient(120deg, #9f5665, #6a355a 42%, #201728 100%)",
  },
  {
    id: "burnt",
    name: "Burnt Cookie",
    line: "Overbaked.",
    color: "#503629",
    image: "./assets/results/burnt.png",
    audio: "./assets/audio/results/burnt.wav",
    insideContains: [
      "Location access",
      "microphone access",
      "saved activity data",
      "purchase history",
    ],
    insideMeaning:
      "Your location information could be used to identify where you live, study, work, or frequently visit. If this information is accessed by someone with harmful intentions, it could put your personal safety at risk. Microphone access and activity records may also reveal private habits, conversations, and routines that you never meant to share.",
    insideFinalLine:
      "Too much exposure can burn through the boundary between convenience and danger.",
    shapedBy: ["exposure", "location tracking", "partner access", "rushed consent"],
    sting: "Too much exposure can burn through the boundary between convenience and danger.",
    bg: "linear-gradient(120deg, #5c3427, #2f1f19 48%, #101013 100%)",
  },
  {
    id: "barbed",
    name: "Barbed-Wire Cookie",
    line: "Protected for the system, not for you.",
    color: "#a0a0a0",
    image: "./assets/results/barbed.png",
    audio: "./assets/audio/results/barbed.wav",
    insideContains: [
      "Third-party sharing",
      "cross-device tracking",
      "device fingerprinting",
      "behavioural profiling",
    ],
    insideMeaning:
      "Your data may not stay with one platform. It can be shared across partners, linked across devices, and used to build a profile that follows you from one digital space to another. Even if you clear cookies or change settings, device fingerprinting may still help systems recognise you.",
    insideFinalLine: "This cookie does not just remember you. It builds a fence around you.",
    shapedBy: ["restriction", "enclosure", "data capture", "persistent identifiers"],
    sting: "This cookie does not just remember you. It builds a fence around you.",
    bg: "linear-gradient(130deg, #20334d, #1b1b22 40%, #111014 100%)",
  },
  {
    id: "radioactive",
    name: "Radioactive Cookie",
    line: "Unstable.",
    color: "#97cf40",
    image: "./assets/results/radioactive.png",
    audio: "./assets/audio/results/radioactive.wav",
    insideContains: [
      "Cross-device tracking",
      "device fingerprinting",
      "microphone-related access",
      "AI training with user data",
    ],
    insideMeaning:
      "This cookie represents long-term and less visible risk. Your data may be used not only to track you now, but also to train systems that predict future behaviour. Once personal data enters these learning systems, it may be difficult to know where it goes, how long it stays, or how it will be used later.",
    insideFinalLine: "Some data risks do not explode immediately. They keep glowing in the background.",
    shapedBy: ["predictive modelling", "persistent tracking", "system learning", "cross-device profiling"],
    sting: "Some data risks do not explode immediately. They keep glowing in the background.",
    bg: "linear-gradient(120deg, #395422, #18331a 41%, #0d1410 100%)",
  },
  {
    id: "overloaded",
    name: "Overloaded Cookie",
    line: "Too much to notice.",
    color: "#eda35d",
    image: "./assets/results/overloaded.png",
    audio: "./assets/audio/results/overloaded.wav",
    insideContains: [
      "Browsing history",
      "third-party sharing",
      "microphone access",
      "device fingerprinting",
    ],
    insideMeaning:
      "This cookie is not dangerous because of one single choice. It is dangerous because many small permissions are stacked together. Each one sounds reasonable on its own: smoother browsing, trusted partners, better features, smarter access. But when combined, they create a dense system of tracking that becomes difficult to understand or control.",
    insideFinalLine:
      "The problem is not one ingredient. It is how many hidden layers are baked together.",
    shapedBy: ["enhanced experience", "extras", "unreadable options", "hidden permissions"],
    sting: "The problem is not one ingredient. It is how many hidden layers are baked together.",
    bg: "linear-gradient(120deg, #6a3344, #48224e 44%, #181225 100%)",
  },
  {
    id: "exploded",
    name: "Exploded Cookie",
    line: "Exposed.",
    color: "#ff4f58",
    image: "./assets/results/exploded.png",
    audio: "./assets/audio/results/exploded.wav",
    insideContains: [
      "Location data",
      "third-party sharing",
      "device fingerprinting",
      "AI training data",
      "behavioural tracking",
    ],
    insideMeaning:
      "This is the most severe outcome. Your data is not only collected, but also connected, shared, analysed, and reused across systems. Location data can reveal physical movement, device information can identify you, and behavioural data can be used to build a detailed profile of your life. When these layers combine, privacy does not simply leak — it breaks open.",
    insideFinalLine: "Once the cookie cracks, the data inside is no longer yours alone.",
    shapedBy: ["location data", "ad profiling", "behavioural tracking", "partner access"],
    sting: "Once the cookie cracks, the data inside is no longer yours alone.",
    bg: "linear-gradient(120deg, #5f1f2b, #2a1f47 36%, #111019 100%)",
  },
];

const state = {
  currentView: "cover",
  selected: [],
  hasHoveredTerms: false,
  scores: { Exposure: 0, Control: 0, Seduction: 0 },
  cookieOutputDebug: null,
  unlocked: new Set(),
  currentResult: null,
  dragItemId: null,
  mixingProgress: 0,
  isWhiskDragging: false,
  lastTermFlash: 0,
  bakingAcceptedAll: false,
  bakingResult: null,
};

const el = {
  stage: document.getElementById("stage"),
  tableScene: document.getElementById("table-scene"),
  ingredientLayer: document.getElementById("ingredient-layer"),
  bowlDropzone: document.getElementById("bowl-dropzone"),
  selectedList: document.getElementById("selected-list"),
  microModal: document.getElementById("micro-friction-modal"),
  continueAnywayBtn: document.getElementById("continue-anyway-btn"),
  mixZone: document.getElementById("mix-zone"),
  mixBatter: document.getElementById("mix-batter"),
  mixIngredientLayer: document.getElementById("mix-ingredient-layer"),
  whisk: document.getElementById("whisk"),
  termFlashes: document.getElementById("term-flashes"),
  mixProgress: document.getElementById("mix-progress"),
  bakeMessage: document.getElementById("bake-message"),
  consentOven: document.getElementById("consent-oven"),
  bakeFloatingWords: document.getElementById("bake-floating-words"),
  bakeSoftenLayer: document.getElementById("bake-soften-layer"),
  bakeStepBar: document.getElementById("bake-step-bar"),
  bakeStepProgress: document.getElementById("bake-step-progress"),
  bakePreview: document.getElementById("bake-preview"),
  bakeOvenGlitch: document.getElementById("bake-oven-glitch"),
  acceptAllPopup: document.getElementById("accept-all-popup"),
  acceptAllBtn: document.getElementById("accept-all-btn"),
  acceptAllToast: document.getElementById("accept-all-toast"),
  revealBg: document.getElementById("reveal-bg"),
  glitchLayer: document.getElementById("glitch-layer"),
  resultName: document.getElementById("result-name"),
  resultLine: document.getElementById("result-line"),
  scoreLine: document.getElementById("score-line"),
  resultCookieImg: document.getElementById("result-cookie-img"),
  seeInsideBtn: document.getElementById("see-inside-btn"),
  closeInsideBtn: document.getElementById("close-inside-btn"),
  insideRevealPanel: document.getElementById("inside-reveal-panel"),
  containsList: document.getElementById("contains-list"),
  insideMeaning: document.getElementById("inside-meaning"),
  stingLine: document.getElementById("sting-line"),
  galleryGrid: document.getElementById("gallery-grid"),
  tvTransition: document.getElementById("tv-transition"),
};

const startBtn = document.getElementById("start-btn");
const soundToggleBtn = document.getElementById("sound-toggle-btn");
const toGalleryBtn = document.getElementById("to-gallery-btn");
const retryBtn = document.getElementById("retry-btn");

const TERMS_CARDS = [
  {
    id: "partner-sharing",
    tier: "foreground",
    size: "medium",
    text: `share_with_partner:
  enabled: true
  purpose: "personalised sweetness"
  third_party_access: allowed
  partner_sync: active`,
  },
  {
    id: "device-fingerprint",
    tier: "midground",
    size: "long",
    text: `device_fingerprint:
  status: persistent
  ingredients:
    - browser_type
    - screen_size
    - timezone
    - motion_pattern`,
  },
  {
    id: "location-history",
    tier: "foreground",
    size: "long",
    text: `location_history:
  collection: continuous
  precision: approximate
  retention_period: indefinite
  background_access: enabled`,
  },
  {
    id: "ai-training",
    tier: "foreground",
    size: "long",
    text: `ai_training:
  user_data: included
  behavioural_signals: captured
  preference_model: updating
  consent_source: accept_all`,
  },
  {
    id: "dark-pattern",
    tier: "midground",
    size: "long",
    text: `dark_pattern_accept_all:
  default: true
  decline_visibility: low
  consent_friction: intentional
  button_hierarchy: manipulated`,
  },
  {
    id: "recommendation-engine",
    tier: "midground",
    size: "long",
    text: `recommendation_engine:
  taste_profile: generated
  cravings_predicted: true
  emotional_state: inferred
  next_choice: preselected`,
  },
  {
    id: "retention-period",
    tier: "foreground",
    size: "medium",
    text: `retention_period:
  cookies: "until expired"
  user_profile: "until profitable"
  deletion_request: pending
  archive_status: unresolved`,
  },
  {
    id: "tracking-recipe",
    tier: "background",
    size: "medium",
    text: `tracking_recipe:
  flour: browsing_history
  sugar: preference_data
  butter: device_id
  hidden_spice: consent_fatigue`,
  },
  {
    id: "consent-status",
    tier: "foreground",
    size: "medium",
    text: `consent_status:
  accepted: true
  understood: false
  modified_by_user: unlikely
  withdrawal_path: obscured`,
  },
  {
    id: "real-time-bidding",
    tier: "background",
    size: "long",
    text: `real_time_bidding:
  attention: auctioned
  identity_graph: matched
  partner_sync: active
  value_score: calculated`,
  },
  {
    id: "session-memory",
    tier: "background",
    size: "medium",
    text: `session_memory:
  clicks: recorded
  hesitation: measured
  hover_time: analysed
  scroll_depth: stored`,
  },
  {
    id: "sweet-surveillance",
    tier: "background",
    size: "medium",
    text: `sweet_surveillance:
  comfort_layer: enabled
  risk_notice: softened
  extraction_mode: gentle
  warning_tone: decorative`,
  },
  {
    id: "behavioural-dough",
    tier: "midground",
    size: "long",
    text: `behavioural_dough:
  kneading_pattern: tracked
  pause_duration: logged
  repeated_clicks: weighted
  anxiety_signal: inferred`,
  },
  {
    id: "preference-oven",
    tier: "midground",
    size: "long",
    text: `preference_oven:
  heat_level: adaptive
  taste_memory: saved
  future_cravings: predicted
  recommendation_loop: closed`,
  },
  {
    id: "hidden-ingredients",
    tier: "foreground",
    size: "medium",
    text: `hidden_ingredients:
  personal_data: folded_in
  identifiers: blended
  consent_notice: sprinkled
  opt_out: behind_menu`,
  },
];

const bakeMessages = [
  "Optimising your experience...",
  "Saving your preferences...",
  "Sharing with trusted partners...",
  "Smoothing the terms...",
  "Decorating consent...",
  "Hiding bitter details...",
  "Almost ready to accept.",
];

const BAKE_STEPS = [
  "Softening Terms",
  "Blending Permissions",
  "Adding Sweet Interface",
  "Hiding the Aftertaste",
];

const BAKE_BASE_STEP_MS = 4500;
const BAKE_BASE_PREVIEW_MS = 1200;
const BAKE_BASE_ACCEPT_POPUP_AT = 1400;
const BAKE_EXTRA_DURATION_MS = 10000;
const BAKE_BASE_TOTAL_MS = BAKE_BASE_STEP_MS * 4 + BAKE_BASE_PREVIEW_MS;
const BAKE_DURATION_SCALE = (BAKE_BASE_TOTAL_MS + BAKE_EXTRA_DURATION_MS) / BAKE_BASE_TOTAL_MS;

const BAKE_STEP_MS = Math.round(BAKE_BASE_STEP_MS * BAKE_DURATION_SCALE);
const BAKE_PREVIEW_MS = Math.round(BAKE_BASE_PREVIEW_MS * BAKE_DURATION_SCALE);
const BAKE_ACCEPT_POPUP_AT = Math.round(BAKE_BASE_ACCEPT_POPUP_AT * BAKE_DURATION_SCALE);
const BAKE_MESSAGE_INTERVAL_MS = Math.round(1300 * BAKE_DURATION_SCALE);

function bakeDelay(ms) {
  return Math.round(ms * BAKE_DURATION_SCALE);
}

const BAKE_FLOAT_SLOTS = [
  { x: 11, y: 14 },
  { x: 84, y: 12 },
  { x: 47, y: 8 },
  { x: 7, y: 36 },
  { x: 91, y: 34 },
  { x: 22, y: 54 },
  { x: 78, y: 50 },
  { x: 50, y: 30 },
  { x: 14, y: 72 },
  { x: 86, y: 68 },
  { x: 38, y: 80 },
  { x: 64, y: 20 },
  { x: 28, y: 24 },
  { x: 72, y: 76 },
];

const BAKE_TERM_SLOTS = [
  { x: 13, y: 15, ox: 11, oy: 13 },
  { x: 79, y: 17, ox: -12, oy: 11 },
  { x: 18, y: 43, ox: 13, oy: 10 },
  { x: 75, y: 49, ox: -11, oy: 13 },
  { x: 45, y: 24, ox: 9, oy: 15 },
  { x: 10, y: 73, ox: 12, oy: -9 },
  { x: 85, y: 69, ox: -13, oy: 10 },
  { x: 51, y: 57, ox: 10, oy: 12 },
];

const BAKE_BLEND_PHRASES = [
  "data may be shared",
  "preferences stored",
  "activity analysed",
  "partners may access",
];

const BAKE_SWEET_PHRASES = [
  "Optimising your experience...",
  "Saving your preferences...",
  "Making it personal...",
];

const BAKE_EXTRA_PERMISSIONS = [
  "microphone access",
  "ad profiling",
  "cross-site tracking",
  "device fingerprint",
  "behavioural profile",
];

const BAKE_PREVIEW_CLASS = {
  glossy: "preview-glossy",
  burnt: "preview-burnt",
  barbed: "preview-barbed",
  radioactive: "preview-radioactive",
  exploded: "preview-exploded",
  overloaded: "preview-overloaded",
};

let bakingFrameId = null;
let bakingMessageTimer = null;
let bakingStartedAt = 0;
let bakingTimeBoost = 0;
let bakingFinished = false;
let bakingWordsSpawned = [false, false, false, false];
let bakingPopupShown = false;

const DANGER_KEYWORD_PATTERN =
  /\b(true|allowed|persistent|indefinite|included|captured|updating|auctioned|obscured|enabled|continuous|active|calculated|manipulated|intentional|unlikely|false|pending|unresolved|matched|recorded|stored|inferred|preselected|generated)\b/gi;

const MIXING_REFERENCE_GAIN = 26;
const MIXING_REFERENCE_SECONDS = 15;
const MIXING_EXTRA_SECONDS = 5;
const MIXING_PROGRESS_GAIN =
  MIXING_REFERENCE_GAIN *
  (MIXING_REFERENCE_SECONDS / (MIXING_REFERENCE_SECONDS + MIXING_EXTRA_SECONDS));

const termSlots = [];
for (let row = 0; row < 6; row += 1) {
  termSlots.push({ left: 1 + (row % 2) * 3, top: 3 + row * 14 });
  termSlots.push({ left: 78 + (row % 2) * 4, top: 4 + row * 13.5 });
}
[10, 26, 42, 58, 72].forEach((left, index) => {
  termSlots.push({ left, top: 82 + (index % 2) * 5 });
});
[6, 34, 58, 84].forEach((left, index) => {
  termSlots.push({ left, top: 0.5 + index * 1.2 });
});

const BATTER_BASE_COLOR = "#e9bf86";
const BATTER_COLOR_INFLUENCE = {
  ads: "#f0a85f",
  cross_site: "#b991a2",
  location: "#c77a45",
  contacts: "#df9a8e",
  history: "#c9a35f",
  voice: "#9fb0bf",
  camera: "#8f8b83",
  device_fingerprint: "#b98555",
  ai_profile: "#a7bd70",
  third_party: "#8f6045",
  dark_pattern: "#d88b9b",
  data_sell: "#b2a4c9",
};

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.ambienceGain = null;
    this.systemGain = null;
    this.mixGain = null;
    this.ovenGain = null;
    this.ambientSources = [];
    this.mixingSources = [];
    this.ovenSources = [];
    this.tickTimer = null;
    this.ambienceTimer = null;
    this.lastMixPing = 0;
    this.nextBakeTick = 0;
    this.resultAudio = null;
    this.pendingResultAudioSrc = null;
    this.page1Ambience = null;
    this.page1Hover = null;
    this.page1Click = null;
    this.page2Ambience = null;
    this.page2Hover = null;
    this.page2Drag = null;
    this.page2Drop = null;
    this.page2Warning = null;
    this.page6Music = null;
    this.pendingPage6Music = false;
    this.page5Music = null;
    this.pendingPage5Music = false;
    this.page3MixLoop = null;
    this.pendingPage3MixLoop = false;
    this.page3TermsSfx = null;
    this.page3TermsSfxStarted = false;
    this.pendingPage3TermsSfx = false;
    this.tvGlitchSources = [];
  }

  ensure() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return false;
      this.ctx = new AudioContext();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.55;
      this.master.connect(this.ctx.destination);

      this.ambienceGain = this.ctx.createGain();
      this.systemGain = this.ctx.createGain();
      this.mixGain = this.ctx.createGain();
      this.ovenGain = this.ctx.createGain();
      this.ambienceGain.gain.value = 0;
      this.systemGain.gain.value = 0.42;
      this.mixGain.gain.value = 0;
      this.ovenGain.gain.value = 0;
      this.ambienceGain.connect(this.master);
      this.systemGain.connect(this.master);
      this.mixGain.connect(this.master);
      this.ovenGain.connect(this.master);
      this.initPage1FileAudio();
      this.initPage2FileAudio();
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return true;
  }

  now() {
    return this.ctx?.currentTime || 0;
  }

  createNoiseBuffer(seconds = 1.5) {
    const sampleRate = this.ctx.sampleRate;
    const buffer = this.ctx.createBuffer(1, sampleRate * seconds, sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  fade(gainNode, value, seconds = 0.6) {
    if (!this.ctx || !gainNode) return;
    const t = this.now();
    gainNode.gain.cancelScheduledValues(t);
    gainNode.gain.setTargetAtTime(value, t, seconds / 4);
  }

  stopSources(sources) {
    sources.forEach((source) => {
      try {
        source.stop();
      } catch (_) {
        // Already stopped.
      }
    });
    sources.length = 0;
  }

  stopAmbienceTimer() {
    if (this.ambienceTimer) window.clearInterval(this.ambienceTimer);
    this.ambienceTimer = null;
  }

  initBgMusic() {
    if (this.bgMusic) return;
    this.bgMusic = new Audio("./assets/audio/ui/warm-kitchen-strings.wav");
    this.bgMusic.loop = true;
    this.bgMusic.preload = "auto";
    this.bgMusic.volume = 0.32;
  }

  initPage1FileAudio() {
    this.initBgMusic();
    this.page1Ambience = this.bgMusic;

    this.page1Hover = new Audio("./assets/audio/ui/page1-hover.wav");
    this.page1Hover.preload = "auto";
    this.page1Hover.volume = 0.9;

    this.page1Click = new Audio("./assets/audio/ui/page1-click.wav");
    this.page1Click.preload = "auto";
    this.page1Click.volume = 0.95;
  }

  initPage2FileAudio() {
    this.initBgMusic();
    this.page2Ambience = this.bgMusic;

    this.page2Hover = new Audio("./assets/audio/page2/hover-notification.wav");
    this.page2Hover.preload = "auto";
    this.page2Hover.volume = 0.9;

    this.page2Drag = new Audio("./assets/audio/page2/drag-friction.wav");
    this.page2Drag.preload = "auto";
    this.page2Drag.volume = 0.95;

    this.page2Drop = new Audio("./assets/audio/page2/drop-impact.wav");
    this.page2Drop.preload = "auto";
    this.page2Drop.volume = 1;

    this.page2Warning = new Audio("./assets/audio/page2/warning-tear-error.wav");
    this.page2Warning.preload = "auto";
    this.page2Warning.volume = 1;
  }

  startBgMusic() {
    if (!this.bgMusic) this.initBgMusic();
    if (!this.bgMusic.paused) return;
    this.bgMusic.play().catch(() => {});
  }

  stopBgMusic() {
    if (!this.bgMusic) return;
    this.bgMusic.pause();
    this.bgMusic.currentTime = 0;
  }

  startPage1Ambience() {
    if (!this.page1Ambience) this.initPage1FileAudio();
    this.startBgMusic();
  }

  stopPage1Ambience() {
    // Intentional no-op: stopBgMusic is called by setPage only when
    // leaving both Page1 and Page2, not when switching between them.
  }

  startPage2Ambience() {
    if (!this.page2Ambience) this.initPage2FileAudio();
    this.startBgMusic();
  }

  stopPage2Ambience() {
    // Intentional no-op: same reason as stopPage1Ambience.
  }

  initPage5FileAudio() {
    if (this.page5Music) return;
    this.page5Music = new Audio("./assets/audio/ui/page5-eerie-musicbox-loop.wav");
    this.page5Music.loop = true;
    this.page5Music.preload = "auto";
    this.page5Music.volume = 0.2;
  }

  startPage5Music() {
    this.ensure();
    if (!this.page5Music) this.initPage5FileAudio();
    if (!this.page5Music.paused) return;
    this.page5Music.play().then(() => {
      this.pendingPage5Music = false;
    }).catch(() => {
      this.pendingPage5Music = true;
    });
  }

  stopPage5Music() {
    this.pendingPage5Music = false;
    if (!this.page5Music) return;
    this.page5Music.pause();
    this.page5Music.currentTime = 0;
  }

  retryPage5Music() {
    if (!this.pendingPage5Music) {
      if (this.page5Music?.paused && state.currentView === "reveal") {
        this.page5Music.play().catch(() => {
          this.pendingPage5Music = true;
        });
      }
      return;
    }
    this.startPage5Music();
  }

  initPage3MixLoopAudio() {
    if (this.page3MixLoop) return;
    this.page3MixLoop = new Audio("./assets/audio/ui/clean-mixing-wet-batter-loop.wav");
    this.page3MixLoop.loop = true;
    this.page3MixLoop.preload = "auto";
    this.page3MixLoop.volume = 0.58;
  }

  startPage3MixLoop() {
    this.ensure();
    if (!this.page3MixLoop) this.initPage3MixLoopAudio();
    if (!this.page3MixLoop.paused) return;
    this.page3MixLoop.play().then(() => {
      this.pendingPage3MixLoop = false;
    }).catch(() => {
      this.pendingPage3MixLoop = true;
    });
  }

  stopPage3MixLoop() {
    this.pendingPage3MixLoop = false;
    if (!this.page3MixLoop) return;
    this.page3MixLoop.pause();
    this.page3MixLoop.currentTime = 0;
  }

  retryPage3MixLoop() {
    if (!this.pendingPage3MixLoop) {
      if (this.page3MixLoop?.paused && state.currentView === "mixing" && state.isWhiskDragging) {
        this.page3MixLoop.play().catch(() => {
          this.pendingPage3MixLoop = true;
        });
      }
      return;
    }
    this.startPage3MixLoop();
  }

  initPage3TermsSfx() {
    if (this.page3TermsSfx) return;
    this.page3TermsSfx = new Audio("./assets/audio/ui/page3-popup-beep-zizz-increasing.wav");
    this.page3TermsSfx.loop = false;
    this.page3TermsSfx.preload = "auto";
    this.page3TermsSfx.volume = 0.62;
  }

  startPage3TermsSfx() {
    this.ensure();
    if (this.page3TermsSfxStarted) return;
    if (!this.page3TermsSfx) this.initPage3TermsSfx();
    this.page3TermsSfxStarted = true;
    this.page3TermsSfx.currentTime = 0;
    this.page3TermsSfx.play().then(() => {
      this.pendingPage3TermsSfx = false;
    }).catch(() => {
      this.page3TermsSfxStarted = false;
      this.pendingPage3TermsSfx = true;
    });
  }

  stopPage3TermsSfx() {
    this.page3TermsSfxStarted = false;
    this.pendingPage3TermsSfx = false;
    if (!this.page3TermsSfx) return;
    this.page3TermsSfx.pause();
    this.page3TermsSfx.currentTime = 0;
  }

  retryPage3TermsSfx() {
    if (!this.pendingPage3TermsSfx) return;
    this.startPage3TermsSfx();
  }

  initPage6FileAudio() {
    if (this.page6Music) return;
    this.page6Music = new Audio("./assets/audio/ui/page6-cozy-cookie-collection-loop.wav");
    this.page6Music.loop = true;
    this.page6Music.preload = "auto";
    this.page6Music.volume = 0.42;
  }

  startPage6Music() {
    this.ensure();
    if (!this.page6Music) this.initPage6FileAudio();
    if (!this.page6Music.paused) return;
    this.page6Music.play().then(() => {
      this.pendingPage6Music = false;
    }).catch(() => {
      this.pendingPage6Music = true;
    });
  }

  stopPage6Music() {
    this.pendingPage6Music = false;
    if (!this.page6Music) return;
    this.page6Music.pause();
    this.page6Music.currentTime = 0;
  }

  retryPage6Music() {
    if (!this.pendingPage6Music) {
      if (this.page6Music?.paused && state.currentView === "gallery") {
        this.page6Music.play().catch(() => {
          this.pendingPage6Music = true;
        });
      }
      return;
    }
    this.startPage6Music();
  }

  playPage1Hover() {
    this.playFileOneShot(this.page1Hover);
  }

  playPage1Click() {
    this.playFileOneShot(this.page1Click);
  }

  playPage2Hover() {
    this.playFileOneShot(this.page2Hover);
  }

  playPage2Drag() {
    this.playFileOneShot(this.page2Drag);
  }

  playPage2Drop() {
    this.playFileOneShot(this.page2Drop);
  }

  playPage2Warning() {
    this.playFileOneShot(this.page2Warning);
  }

  playTvGlitch() {
    if (!this.ensure()) return;
    this.stopSources(this.tvGlitchSources);
    const t = this.now();

    const staticSource = this.ctx.createBufferSource();
    staticSource.buffer = this.createNoiseBuffer(1.5);
    const staticFilter = this.ctx.createBiquadFilter();
    staticFilter.type = "bandpass";
    staticFilter.frequency.setValueAtTime(2600, t);
    staticFilter.frequency.exponentialRampToValueAtTime(620, t + 1.15);
    staticFilter.Q.value = 0.9;
    const staticGain = this.ctx.createGain();
    staticGain.gain.setValueAtTime(0.0001, t);
    staticGain.gain.linearRampToValueAtTime(0.45, t + 0.06);
    staticGain.gain.setValueAtTime(0.38, t + 0.52);
    staticGain.gain.exponentialRampToValueAtTime(0.0001, t + 1.35);
    staticSource.connect(staticFilter).connect(staticGain).connect(this.systemGain);
    staticSource.start(t);
    staticSource.stop(t + 1.45);

    const whine = this.ctx.createOscillator();
    whine.type = "sawtooth";
    whine.frequency.setValueAtTime(92, t);
    whine.frequency.exponentialRampToValueAtTime(1300, t + 0.28);
    whine.frequency.exponentialRampToValueAtTime(55, t + 1.1);
    const whineFilter = this.ctx.createBiquadFilter();
    whineFilter.type = "bandpass";
    whineFilter.frequency.value = 980;
    whineFilter.Q.value = 7;
    const whineGain = this.ctx.createGain();
    whineGain.gain.setValueAtTime(0.0001, t);
    whineGain.gain.linearRampToValueAtTime(0.16, t + 0.09);
    whineGain.gain.setValueAtTime(0.11, t + 0.7);
    whineGain.gain.exponentialRampToValueAtTime(0.0001, t + 1.28);
    whine.connect(whineFilter).connect(whineGain).connect(this.systemGain);
    whine.start(t);
    whine.stop(t + 1.35);

    [0.12, 0.32, 0.48, 0.78, 0.94].forEach((offset, index) => {
      const buzz = this.ctx.createOscillator();
      buzz.type = index % 2 ? "square" : "sawtooth";
      buzz.frequency.value = 46 + index * 19;
      const buzzGain = this.ctx.createGain();
      buzzGain.gain.setValueAtTime(0.0001, t + offset);
      buzzGain.gain.linearRampToValueAtTime(0.18, t + offset + 0.015);
      buzzGain.gain.exponentialRampToValueAtTime(0.0001, t + offset + 0.11);
      buzz.connect(buzzGain).connect(this.systemGain);
      buzz.start(t + offset);
      buzz.stop(t + offset + 0.13);
      this.tvGlitchSources.push(buzz);
    });

    this.tvGlitchSources.push(staticSource, whine);
  }

  playFileOneShot(audioEl) {
    if (!audioEl) return;
    audioEl.pause();
    audioEl.currentTime = 0;
    audioEl.play().catch(() => {
      // Browser may require the next pointer/click gesture.
    });
  }

  setPage(viewName) {
    if (!this.ensure()) return;
    this.stopAmbienceTimer();
    this.stopBaking();
    if (viewName !== "cover" && viewName !== "ingredients") this.stopBgMusic();
    if (viewName !== "gallery") this.stopPage6Music();
    if (viewName !== "reveal") {
      this.stopResultLoop();
      this.stopPage5Music();
    }
    if (viewName !== "mixing") this.stopMixing();

    if (viewName === "cover") {
      this.fade(this.ambienceGain, 0, 0.35);
      this.startPage1Ambience();
    } else if (viewName === "ingredients") {
      this.startKitchenAmbience(0.075, 0.018, { ovenRoom: true });
      this.startPage2Ambience();
    } else if (viewName === "mixing") {
      this.fade(this.ambienceGain, 0.02, 0.65);
    } else if (viewName === "baking") {
      this.fade(this.ambienceGain, 0, 0.4);
      this.startBaking();
    } else if (viewName === "gallery") {
      this.fade(this.ambienceGain, 0, 0.45);
      this.startPage6Music();
    } else if (viewName === "reveal") {
      this.fade(this.ambienceGain, 0.015, 0.5);
      this.startPage5Music();
    }
  }

  startKitchenAmbience(level, subLevel, options = {}) {
    this.stopAmbienceTimer();
    this.stopSources(this.ambientSources);
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.createNoiseBuffer(2);
    noise.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 720;
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.value = level;
    noise.connect(filter).connect(noiseGain).connect(this.ambienceGain);
    noise.start();
    this.ambientSources.push(noise);

    if (subLevel > 0) {
      const sub = this.ctx.createOscillator();
      sub.type = "sine";
      sub.frequency.value = 54;
      const subGain = this.ctx.createGain();
      subGain.gain.value = subLevel;
      sub.connect(subGain).connect(this.ambienceGain);
      sub.start();
      this.ambientSources.push(sub);
    }

    if (options.music) {
      this.startSoothingMusic();
    }

    if (options.ovenRoom) {
      this.startBakingRoomLayer();
    }

    this.fade(this.ambienceGain, 1, 0.7);
  }

  startSoothingMusic() {
    const chord = [261.63, 329.63, 392, 523.25];
    chord.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      filter.type = "lowpass";
      filter.frequency.value = 1100;
      gain.gain.value = 0.012 / (index + 1) + 0.004;
      osc.connect(filter).connect(gain).connect(this.ambienceGain);
      osc.start();
      this.ambientSources.push(osc);
    });

    const shimmer = this.ctx.createOscillator();
    const shimmerGain = this.ctx.createGain();
    shimmer.type = "triangle";
    shimmer.frequency.value = 784;
    shimmerGain.gain.value = 0.006;
    shimmer.connect(shimmerGain).connect(this.ambienceGain);
    shimmer.start();
    this.ambientSources.push(shimmer);
  }

  startBakingRoomLayer() {
    const ovenHum = this.ctx.createOscillator();
    const ovenHumGain = this.ctx.createGain();
    ovenHum.type = "sine";
    ovenHum.frequency.value = 96;
    ovenHumGain.gain.value = 0.018;
    ovenHum.connect(ovenHumGain).connect(this.ambienceGain);
    ovenHum.start();
    this.ambientSources.push(ovenHum);

    this.ambienceTimer = window.setInterval(() => {
      if (state.currentView !== "ingredients") return;
      if (Math.random() > 0.52) {
        this.playOvenDoor();
      } else {
        this.playIngredientRustle();
      }
    }, 5200);
  }

  playOvenDoor() {
    this.playNoise(0.22, "lowpass", 420, 0.07, this.ambienceGain);
    this.playTone(118, 0.16, "triangle", this.ambienceGain, 0.035, 0.05);
    this.playNoise(0.1, "bandpass", 900, 0.035, this.ambienceGain);
  }

  playIngredientRustle() {
    this.playNoise(0.24, "bandpass", 1450, 0.04, this.ambienceGain);
    this.playNoise(0.09, "highpass", 2600, 0.018, this.ambienceGain);
  }

  startVacuumRoom() {
    this.stopAmbienceTimer();
    this.stopSources(this.ambientSources);
    const noise = this.ctx.createBufferSource();
    noise.buffer = this.createNoiseBuffer(2);
    noise.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 260;
    filter.Q.value = 0.6;
    const gain = this.ctx.createGain();
    gain.gain.value = 0.018;
    noise.connect(filter).connect(gain).connect(this.ambienceGain);
    noise.start();
    this.ambientSources.push(noise);
    this.fade(this.ambienceGain, 1, 0.8);
  }

  playTone(freq, duration, type = "sine", target = this.systemGain, volume = 0.18, startOffset = 0) {
    if (!this.ensure()) return;
    const t = this.now() + startOffset;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(volume, t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain).connect(target);
    osc.start(t);
    osc.stop(t + duration + 0.03);
  }

  playNoise(duration, filterType, frequency, volume, target = this.systemGain) {
    if (!this.ensure()) return;
    const t = this.now();
    const source = this.ctx.createBufferSource();
    source.buffer = this.createNoiseBuffer(duration + 0.05);
    const filter = this.ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.value = frequency;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(volume, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    source.connect(filter).connect(gain).connect(target);
    source.start(t);
    source.stop(t + duration + 0.05);
  }

  playCoverHover() {
    this.playTone(940, 0.08, "triangle", this.systemGain, 0.055);
    this.playNoise(0.08, "highpass", 2600, 0.025);
  }

  playSoftChime() {
    [660, 990, 1320].forEach((freq, index) => this.playTone(freq, 0.42, "sine", this.systemGain, 0.09, index * 0.035));
    this.playTone(440, 0.5, "triangle", this.systemGain, 0.05, 0.08);
  }

  playHoverReveal() {
    this.playTone(1240, 0.07, "square", this.systemGain, 0.045);
    this.playTone(1680, 0.06, "sine", this.systemGain, 0.032, 0.035);
  }

  playPackagingGrab() {
    this.playNoise(0.18, "bandpass", 1500, 0.045);
  }

  playBowlDrop() {
    this.playNoise(0.14, "lowpass", 360, 0.12);
    this.playTone(170, 0.16, "triangle", this.systemGain, 0.07);
  }

  playWarning() {
    this.playNoise(0.28, "highpass", 1700, 0.14);
    this.playTone(210, 0.22, "sawtooth", this.systemGain, 0.08);
    this.playTone(255, 0.22, "sawtooth", this.systemGain, 0.06);
  }

  startMixing() {
    if (!this.ensure()) return;
    this.stopMixing();
    const wet = this.ctx.createBufferSource();
    wet.buffer = this.createNoiseBuffer(1.2);
    wet.loop = true;
    const wetFilter = this.ctx.createBiquadFilter();
    wetFilter.type = "lowpass";
    wetFilter.frequency.value = 620;
    const wetGain = this.ctx.createGain();
    wetGain.gain.value = 0.02;
    wet.connect(wetFilter).connect(wetGain).connect(this.mixGain);
    wet.start();

    const rising = this.ctx.createOscillator();
    rising.type = "sawtooth";
    rising.frequency.value = 92;
    const risingFilter = this.ctx.createBiquadFilter();
    risingFilter.type = "bandpass";
    risingFilter.frequency.value = 680;
    risingFilter.Q.value = 5;
    const risingGain = this.ctx.createGain();
    risingGain.gain.value = 0.0001;
    rising.connect(risingFilter).connect(risingGain).connect(this.mixGain);
    rising.start();

    const anxiety = this.ctx.createOscillator();
    anxiety.type = "square";
    anxiety.frequency.value = 420;
    const anxietyFilter = this.ctx.createBiquadFilter();
    anxietyFilter.type = "bandpass";
    anxietyFilter.frequency.value = 1800;
    anxietyFilter.Q.value = 8;
    const anxietyGain = this.ctx.createGain();
    anxietyGain.gain.value = 0.0001;
    anxiety.connect(anxietyFilter).connect(anxietyGain).connect(this.mixGain);
    anxiety.start();

    this.mixingSources.push(wet, rising, anxiety);
    this.mixingWetGain = wetGain;
    this.mixingWetFilter = wetFilter;
    this.mixingRising = rising;
    this.mixingRisingGain = risingGain;
    this.mixingAnxiety = anxiety;
    this.mixingAnxietyFilter = anxietyFilter;
    this.mixingAnxietyGain = anxietyGain;
    this.fade(this.mixGain, 1, 0.35);
  }

  updateMixing(velocity, progressRatio) {
    if (!this.ctx || !this.mixingWetGain) return;
    const speed = Math.min(Math.max(velocity * 55, 0), 1);
    const t = this.now();
    this.mixingWetGain.gain.setTargetAtTime(0.035 + speed * 0.09, t, 0.04);
    this.mixingWetFilter.frequency.setTargetAtTime(720 - speed * 390, t, 0.05);
    this.mixingRising.frequency.setTargetAtTime(120 + progressRatio * 560 + speed * 180, t, 0.05);
    this.mixingRisingGain.gain.setTargetAtTime(Math.max(0.0001, (progressRatio - 0.18) * 0.14 + speed * 0.035), t, 0.04);
    this.mixingAnxiety.frequency.setTargetAtTime(360 + speed * 720 + progressRatio * 340, t, 0.035);
    this.mixingAnxietyFilter.frequency.setTargetAtTime(1200 + speed * 2600, t, 0.035);
    this.mixingAnxietyGain.gain.setTargetAtTime(Math.max(0.0001, speed * speed * 0.07), t, 0.025);

    if (speed > 0.45 && t - this.lastMixPing > 0.22 - speed * 0.12) {
      this.lastMixPing = t;
      this.playTone(880 + Math.random() * 780, 0.08, "square", this.systemGain, 0.045);
      if (speed > 0.78) this.playNoise(0.08, "highpass", 3100, 0.05, this.systemGain);
    }
  }

  stopMixing() {
    this.stopPage3MixLoop();
    this.stopPage3TermsSfx();
    this.fade(this.mixGain, 0, 0.25);
    window.setTimeout(() => this.stopSources(this.mixingSources), 300);
  }

  startBaking() {
    if (!this.ensure()) return;
    this.stopBaking();
    const hum = this.ctx.createOscillator();
    hum.type = "sine";
    hum.frequency.value = 82;
    const humGain = this.ctx.createGain();
    humGain.gain.value = 0.08;
    hum.connect(humGain).connect(this.ovenGain);
    hum.start();

    const fan = this.ctx.createBufferSource();
    fan.buffer = this.createNoiseBuffer(1.2);
    fan.loop = true;
    const fanFilter = this.ctx.createBiquadFilter();
    fanFilter.type = "lowpass";
    fanFilter.frequency.value = 520;
    const fanGain = this.ctx.createGain();
    fanGain.gain.value = 0.035;
    fan.connect(fanFilter).connect(fanGain).connect(this.ovenGain);
    fan.start();

    this.ovenSources.push(hum, fan);
    this.ovenHum = hum;
    this.ovenFanFilter = fanFilter;
    this.nextBakeTick = this.now() + 0.52;
    this.fade(this.ovenGain, 1, 0.35);
  }

  updateBaking(progressRatio) {
    if (!this.ctx || !this.ovenHum) return;
    const t = this.now();
    this.ovenHum.frequency.setTargetAtTime(82 + progressRatio * 46, t, 0.08);
    this.ovenFanFilter.frequency.setTargetAtTime(520 + progressRatio * 1550, t, 0.08);
    if (t >= this.nextBakeTick) {
      this.playBakingTick(progressRatio);
      const interval = Math.max(0.075, 0.62 - progressRatio * 0.53);
      this.nextBakeTick = t + interval;
      if (progressRatio > 0.72) {
        this.playBakingTick(progressRatio, 0.045);
      }
      if (progressRatio > 0.9) {
        this.playTone(1480 + Math.random() * 320, 0.035, "square", this.ovenGain, 0.025, 0.03);
      }
    }
  }

  playBakingTick(progressRatio = 0, offset = 0) {
    this.playTone(760 + progressRatio * 760, 0.032, "square", this.ovenGain, 0.035 + progressRatio * 0.025, offset);
  }

  stopBaking() {
    this.nextBakeTick = 0;
    this.fade(this.ovenGain, 0, 0.3);
    window.setTimeout(() => this.stopSources(this.ovenSources), 350);
  }

  playReveal(resultId) {
    this.playTone(1320, 0.2, "triangle", this.systemGain, 0.11);
    this.playTone(220, 0.28, "sawtooth", this.systemGain, 0.08, 0.18);

    if (resultId === "glossy") {
      [740, 988, 1318, 1760].forEach((freq, index) => this.playTone(freq, 0.32, "sine", this.systemGain, 0.07, index * 0.055));
    } else if (resultId === "barbed") {
      this.playNoise(0.38, "bandpass", 2900, 0.17);
      this.playTone(96, 0.42, "sawtooth", this.systemGain, 0.08);
    } else if (resultId === "radioactive") {
      for (let i = 0; i < 9; i += 1) {
        this.playTone(1600 + Math.random() * 900, 0.035, "square", this.systemGain, 0.05, i * 0.08);
      }
      this.playTone(62, 0.7, "sine", this.systemGain, 0.09);
    } else {
      this.playNoise(0.42, "highpass", 900, 0.2);
      this.playTone(1240, 0.22, "sawtooth", this.systemGain, 0.08);
    }
  }

  playResultLoop(src) {
    if (!src) return;
    this.ensure();
    this.pendingResultAudioSrc = src;
    if (this.resultAudio?.src.endsWith(src) && !this.resultAudio.paused) return;
    this.stopResultLoop(false);
    this.resultAudio = new Audio(src);
    this.resultAudio.loop = true;
    this.resultAudio.volume = 1;
    this.resultAudio.preload = "auto";
    this.resultAudio.play().then(() => {
      this.pendingResultAudioSrc = null;
    }).catch(() => {
      this.pendingResultAudioSrc = src;
      // Browser autoplay policies can still block until the next gesture.
    });
  }

  retryResultLoop() {
    if (this.pendingResultAudioSrc) {
      this.playResultLoop(this.pendingResultAudioSrc);
    } else if (this.resultAudio?.paused) {
      this.resultAudio.play().catch(() => {});
    }
  }

  stopResultLoop(clearPending = true) {
    if (clearPending) this.pendingResultAudioSrc = null;
    if (!this.resultAudio) return;
    this.resultAudio.pause();
    this.resultAudio.currentTime = 0;
    this.resultAudio = null;
  }

  playInsideReveal() {
    this.playTone(520, 0.06, "square", this.systemGain, 0.045);
    this.playTone(1440, 0.09, "square", this.systemGain, 0.035, 0.04);
    this.playNoise(0.12, "highpass", 2400, 0.06);
  }

  playMechanicalClick() {
    this.playNoise(0.05, "highpass", 1800, 0.07);
    this.playTone(140, 0.08, "square", this.systemGain, 0.045);
  }
}

const audio = new AudioEngine();

function clearMixingResiduals() {
  document.documentElement.style.setProperty("--mix-blur", "0px");
  state.isWhiskDragging = false;
  if (el.termFlashes) el.termFlashes.innerHTML = "";
  audio.stopPage3MixLoop();
  audio.stopPage3TermsSfx();
}

function showView(viewName) {
  if (viewName !== "mixing") {
    clearMixingResiduals();
  }
  state.currentView = viewName;
  for (const view of document.querySelectorAll(".view")) {
    view.classList.toggle("is-active", view.dataset.view === viewName);
  }
  audio.setPage(viewName);
}

function resetForNewRun() {
  state.selected = [];
  state.hasHoveredTerms = false;
  state.scores = { Exposure: 0, Control: 0, Seduction: 0 };
  state.currentResult = null;
  state.mixingProgress = 0;
  el.selectedList.innerHTML = "";
  renderIngredients();
}

function preloadVisuals() {
  const assets = [
    ...INGREDIENTS.map((item) => item.image),
    ...RESULTS.map((item) => item.image),
    ...RESULTS.map((item) => item.audio),
    "./assets/audio/ui/page1-ambience.wav",
    "./assets/audio/ui/page1-hover.wav",
    "./assets/audio/ui/page1-click.wav",
    "./assets/audio/page2/ambience-subbass.wav",
    "./assets/audio/page2/hover-notification.wav",
    "./assets/audio/page2/drag-friction.wav",
    "./assets/audio/page2/drop-impact.wav",
    "./assets/audio/page2/warning-tear-error.wav",
    "./assets/audio/ui/page6-cozy-cookie-collection-loop.wav",
    "./assets/audio/ui/page5-eerie-musicbox-loop.wav",
    "./assets/audio/ui/clean-mixing-wet-batter-loop.wav",
    "./assets/audio/ui/page3-popup-beep-zizz-increasing.wav",
  ];
  assets.forEach((src) => {
    if (src.endsWith(".wav")) {
      const audioEl = new Audio(src);
      audioEl.preload = "auto";
      return;
    }
    const img = new Image();
    img.src = src;
  });
}

function buildIngredientTooltip(item) {
  const copy = INGREDIENT_TOOLTIPS[item.id];
  if (!copy) {
    return `<div class="ingredient-tooltip" role="tooltip"><h4>${item.name}</h4><p>${item.term}</p></div>`;
  }
  const bodyHtml = copy.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
  return `
    <div class="ingredient-tooltip" role="tooltip">
      <h4>${copy.title}</h4>
      ${bodyHtml}
      <p class="tooltip-tagline">${copy.tagline}</p>
      <p class="tooltip-meaning">What it really means: ${copy.meaning}</p>
    </div>
  `;
}

function getIngredientZIndex(id) {
  const index = INGREDIENTS.findIndex((item) => item.id === id);
  if (id === "cross_site") {
    const contactsIndex = INGREDIENTS.findIndex((item) => item.id === "contacts");
    return contactsIndex + 1;
  }
  if (id === "contacts") {
    const crossSiteIndex = INGREDIENTS.findIndex((item) => item.id === "cross_site");
    return crossSiteIndex + 1;
  }
  return index + 1;
}

function renderIngredients() {
  el.ingredientLayer.innerHTML = "";

  INGREDIENTS.forEach((item) => {
    const node = document.createElement("div");
    node.className = "ingredient";
    node.dataset.id = item.id;
    node.style.left = `${item.x}%`;
    node.style.top = `${item.y}%`;
    node.style.zIndex = String(getIngredientZIndex(item.id));
    if (TOOLTIP_BELOW_IDS.has(item.id)) {
      node.classList.add("tooltip-below");
    }
    node.innerHTML = `
      <img class="ingredient-media" src="${item.image}" alt="${item.name}" draggable="false" />
      <span class="ingredient-name">${item.name}</span>
      ${buildIngredientTooltip(item)}
    `;

    if (state.selected.includes(item.id)) {
      node.classList.add("is-selected");
    } else {
      wireIngredientEvents(node, item);
    }

    el.ingredientLayer.appendChild(node);
  });
}

function wireIngredientEvents(node, item) {
  let hoverTimer = null;

  node.addEventListener("mouseenter", () => {
    if (state.dragItemId) return;
    hoverTimer = window.setTimeout(() => {
      state.hasHoveredTerms = true;
      audio.playPage2Hover();
    }, 500);
  });

  node.addEventListener("mouseleave", () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      hoverTimer = null;
    }
  });

  node.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      hoverTimer = null;
    }
    audio.ensure();
    audio.playPage2Drag();
    state.dragItemId = item.id;
    node.classList.add("dragging");
    node.setPointerCapture(event.pointerId);
  });

  node.addEventListener("pointermove", (event) => {
    if (state.dragItemId !== item.id) return;
    const tableRect = el.tableScene.getBoundingClientRect();
    const x = ((event.clientX - tableRect.left) / tableRect.width) * 100;
    const y = ((event.clientY - tableRect.top) / tableRect.height) * 100;
    node.style.left = `${x - 7}%`;
    node.style.top = `${y - 7}%`;
    const overDropzone = pointInsideDropzone(event.clientX, event.clientY);
    el.bowlDropzone.classList.toggle("is-over", overDropzone);
  });

  node.addEventListener("pointerup", (event) => {
    if (state.dragItemId !== item.id) return;
    state.dragItemId = null;
    node.classList.remove("dragging");
    node.releasePointerCapture(event.pointerId);
    const inDropzone = pointInsideDropzone(event.clientX, event.clientY);
    el.bowlDropzone.classList.remove("is-over");
    if (inDropzone) {
      audio.playPage2Drop();
      onIngredientDropped(item);
    }
    renderIngredients();
  });
}

function pointInsideDropzone(clientX, clientY) {
  const rect = el.bowlDropzone.getBoundingClientRect();
  return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
}

function onIngredientDropped(item) {
  if (state.selected.includes(item.id) || state.selected.length >= 4) return;
  state.selected.push(item.id);
  addSelectedChip(item.name);

  if (state.selected.length === 4) {
    if (!state.hasHoveredTerms) {
      audio.playPage2Warning();
      el.microModal.classList.remove("hidden");
      return;
    }
    startMixingStep();
  }
}

function addSelectedChip(name) {
  const chip = document.createElement("div");
  chip.className = "selected-chip";
  chip.textContent = name;
  el.selectedList.appendChild(chip);
}

function startMixingStep() {
  scoreSelection();
  renderMixIngredients();
  showView("mixing");
  audio.startMixing();
  startMixingTracker();
}

function renderMixIngredients() {
  const starts = [
    { x: 18, y: 22, r: -18 },
    { x: 62, y: 20, r: 15 },
    { x: 20, y: 62, r: 12 },
    { x: 62, y: 58, r: -10 },
  ];

  el.mixIngredientLayer.innerHTML = "";
  state.selected.forEach((id, index) => {
    const ingredient = INGREDIENTS.find((entry) => entry.id === id);
    if (!ingredient) return;

    const start = starts[index % starts.length];
    const piece = document.createElement("img");
    piece.className = "mix-ingredient-piece";
    piece.src = ingredient.image;
    piece.alt = "";
    piece.dataset.startX = String(start.x);
    piece.dataset.startY = String(start.y);
    piece.dataset.startR = String(start.r);
    piece.dataset.endX = String(42 + (index % 2) * 8);
    piece.dataset.endY = String(42 + Math.floor(index / 2) * 8);
    el.mixIngredientLayer.appendChild(piece);
  });
  updateMixVisuals(0);
}

function scoreSelection() {
  state.scores = { Exposure: 0, Control: 0, Seduction: 0 };
  state.selected.forEach((id) => {
    const ingredient = INGREDIENTS.find((entry) => entry.id === id);
    if (!ingredient) return;
    state.scores.Exposure += ingredient.points.Exposure;
    state.scores.Control += ingredient.points.Control;
    state.scores.Seduction += ingredient.points.Seduction;
  });
}

function startMixingTracker() {
  state.mixingProgress = 0;
  state.isWhiskDragging = false;
  state.lastTermFlash = 0;
  audio.stopPage3TermsSfx();
  document.documentElement.style.setProperty("--mix-blur", "0px");
  el.mixProgress.textContent = "0%";
  el.termFlashes.innerHTML = "";
  el.whisk.style.left = "22%";
  el.whisk.style.top = "30%";
  el.whisk.style.transform = "perspective(700px) rotateX(4deg) rotateY(-5deg) rotate(-18deg)";
  updateMixVisuals(0);

  let previousAngle = null;
  let previousTimestamp = performance.now();
  let rafId = null;
  let termAmbientTimer = null;

  termAmbientTimer = window.setInterval(() => {
    if (state.currentView !== "mixing") return;
    const ratio = Math.min(state.mixingProgress / 100, 1);
    if (ratio < 0.04) return;
    maybeFlashTerms(false);
    if (ratio > 0.35) maybeFlashTerms(false);
    if (ratio > 0.6) maybeFlashTerms(false);
    if (ratio > 0.8) maybeFlashTerms(false);
  }, 380);

  const onPointerMove = (event) => {
    if (state.currentView !== "mixing") return;
    if (!state.isWhiskDragging) return;
    const rect = el.mixZone.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    const angle = Math.atan2(dy, dx);
    const xPct = Math.min(Math.max(((event.clientX - rect.left) / rect.width) * 100, 24), 76);
    const yPct = Math.min(Math.max(((event.clientY - rect.top) / rect.height) * 100, 22), 72);
    const angleDeg = (angle * 180) / Math.PI;
    const tiltX = Math.sin(angle) * 11;
    const tiltY = Math.cos(angle) * -9;
    const skew = Math.sin(angle * 2) * 4;
    const depthScale = 1 + Math.max(dy / rect.height, -0.16) * 0.18;

    el.whisk.style.left = `${xPct - 22}%`;
    el.whisk.style.top = `${yPct - 13}%`;
    el.whisk.style.transform = `perspective(700px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) rotate(${(angleDeg + 28).toFixed(2)}deg) skewX(${skew.toFixed(2)}deg) scale(${depthScale.toFixed(3)})`;

    const now = performance.now();
    if (previousAngle !== null) {
      let delta = Math.abs(angle - previousAngle);
      if (delta > Math.PI) delta = 2 * Math.PI - delta;
      const dt = Math.max(now - previousTimestamp, 16);
      const velocity = delta / dt;
      state.mixingProgress += velocity * MIXING_PROGRESS_GAIN;
      const blurAmount = Math.min(velocity * 90, 4.5);
      document.documentElement.style.setProperty("--mix-blur", `${blurAmount.toFixed(2)}px`);
      if (velocity > 0.018) {
        flashTerm();
      }
      audio.updateMixing(velocity, Math.min(state.mixingProgress / 100, 1));
      updateMixProgress();
      if (state.mixingProgress >= 100) {
        cleanup();
        startBakingStep();
      }
    }
    previousAngle = angle;
    previousTimestamp = now;
  };

  const onPointerDown = (event) => {
    if (state.currentView !== "mixing") return;
    state.isWhiskDragging = true;
    audio.ensure();
    audio.startPage3MixLoop();
    el.whisk.classList.add("is-dragging");
    el.mixZone.setPointerCapture?.(event.pointerId);
    previousAngle = null;
    previousTimestamp = performance.now();
    onPointerMove(event);
  };

  const onPointerUp = (event) => {
    state.isWhiskDragging = false;
    el.whisk.classList.remove("is-dragging");
    el.mixZone.releasePointerCapture?.(event.pointerId);
    previousAngle = null;
  };

  const cleanup = () => {
    if (rafId) cancelAnimationFrame(rafId);
    if (termAmbientTimer) clearInterval(termAmbientTimer);
    el.mixZone.removeEventListener("pointerdown", onPointerDown);
    el.mixZone.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  };

  const settleLoop = () => {
    if (state.currentView !== "mixing") return;
    rafId = requestAnimationFrame(settleLoop);
  };

  rafId = requestAnimationFrame(settleLoop);
  el.mixZone.addEventListener("pointerdown", onPointerDown);
  el.mixZone.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
}

function updateMixProgress() {
  const pct = Math.min(Math.round(state.mixingProgress), 100);
  el.mixProgress.textContent = `${pct}%`;
  updateMixVisuals(pct / 100);
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function mixRgb(from, to, ratio) {
  return {
    r: Math.round(from.r + (to.r - from.r) * ratio),
    g: Math.round(from.g + (to.g - from.g) * ratio),
    b: Math.round(from.b + (to.b - from.b) * ratio),
  };
}

function rgbToCss({ r, g, b }, alpha = 1) {
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getSelectedBatterTarget() {
  const selectedColors = state.selected
    .map((id) => BATTER_COLOR_INFLUENCE[id])
    .filter(Boolean)
    .map(hexToRgb);

  if (!selectedColors.length) return hexToRgb(BATTER_BASE_COLOR);

  const total = selectedColors.reduce(
    (sum, color) => ({
      r: sum.r + color.r,
      g: sum.g + color.g,
      b: sum.b + color.b,
    }),
    { r: 0, g: 0, b: 0 }
  );

  return {
    r: Math.round(total.r / selectedColors.length),
    g: Math.round(total.g / selectedColors.length),
    b: Math.round(total.b / selectedColors.length),
  };
}

function updateMixVisuals(ratio) {
  const eased = Math.min(Math.max(ratio, 0), 1);
  const baseColor = hexToRgb(BATTER_BASE_COLOR);
  const targetColor = getSelectedBatterTarget();
  const batterColor = mixRgb(baseColor, targetColor, eased);
  const accentColor = mixRgb(baseColor, targetColor, Math.min(eased + 0.22, 1));

  el.mixBatter.style.setProperty("--batter-color", rgbToCss(batterColor));
  el.mixBatter.style.setProperty("--batter-accent", rgbToCss(accentColor, 0.34 + eased * 0.2));
  el.mixBatter.style.opacity = String(Math.min(eased * 1.35, 1));
  el.mixBatter.style.transform = `scale(${0.58 + eased * 0.42}) rotate(${eased * 70}deg)`;

  for (const piece of el.mixIngredientLayer.querySelectorAll(".mix-ingredient-piece")) {
    const startX = Number(piece.dataset.startX);
    const startY = Number(piece.dataset.startY);
    const startR = Number(piece.dataset.startR);
    const endX = Number(piece.dataset.endX);
    const endY = Number(piece.dataset.endY);
    const x = startX + (endX - startX) * eased;
    const y = startY + (endY - startY) * eased;
    piece.style.left = `${x}%`;
    piece.style.top = `${y}%`;
    piece.style.opacity = String(Math.max(1 - eased * 1.2, 0));
    piece.style.transform = `scale(${1 - eased * 0.38}) rotate(${startR + eased * 220}deg)`;
  }
}

function getTermFlashConfig(progressRatio) {
  const ratio = Math.min(Math.max(progressRatio, 0), 1);
  const overload = ratio * ratio;
  let burstCount = 1;
  if (ratio > 0.8) burstCount = 2 + Math.floor(Math.random() * 2);
  else if (ratio > 0.55) burstCount = Math.random() > 0.4 ? 2 : 1;
  else if (ratio > 0.25) burstCount = Math.random() > 0.65 ? 2 : 1;

  return {
    minInterval: 1100 - overload * 700,
    maxOnScreen: Math.floor(4 + overload * 20),
    displayMs: 4200 + ratio * 3800,
    spawnChance: 0.62 + ratio * 0.35,
    burstCount,
  };
}

function highlightTermText(text) {
  return text.replace(
    DANGER_KEYWORD_PATTERN,
    (match) => `<span class="danger-keyword">${match}</span>`
  );
}

function getTermSlotUsage() {
  const usage = termSlots.map(() => 0);
  el.termFlashes.querySelectorAll(".flash-term-wrap").forEach((node) => {
    const idx = Number(node.dataset.slotIndex);
    if (!Number.isNaN(idx) && usage[idx] !== undefined) usage[idx] += 1;
  });
  return usage;
}

function pickTermSlot() {
  const usage = getTermSlotUsage();
  const minUsage = Math.min(...usage);
  const candidates = usage
    .map((count, index) => ({ count, index }))
    .filter((entry) => entry.count === minUsage)
    .map((entry) => entry.index);
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function spawnTermAtSlot(progressRatio, displayMs, slotIndex) {
  const card = TERMS_CARDS[Math.floor(Math.random() * TERMS_CARDS.length)];
  const slot = termSlots[slotIndex];
  const stackLevel = getTermSlotUsage()[slotIndex];
  const stackOffsetX = (stackLevel % 2) * 2.4 - 1.2;
  const stackOffsetY = Math.floor(stackLevel / 2) * 3;
  const floatDuration = 6 + Math.random() * 3.5;

  const wrap = document.createElement("div");
  wrap.className = "flash-term-wrap";
  wrap.dataset.slotIndex = String(slotIndex);
  wrap.style.left = `${Math.min(Math.max(slot.left + stackOffsetX, 0), 82)}%`;
  wrap.style.top = `${Math.min(Math.max(slot.top + stackOffsetY, 0), 88)}%`;
  wrap.style.zIndex = String(10 + stackLevel);
  wrap.style.setProperty("--float-duration", `${floatDuration}s`);
  wrap.style.setProperty("--float-delay", `${Math.random() * 2.5}s`);

  const node = document.createElement("div");
  node.className = `flash-term terms-card ${card.tier} term-size-${card.size}`;
  if (Math.random() > 0.55) node.classList.add("terms-card--flicker");
  node.style.setProperty("--term-duration", `${displayMs}ms`);
  node.innerHTML = highlightTermText(card.text);

  wrap.appendChild(node);
  const isFirstTerm = el.termFlashes.querySelectorAll(".flash-term-wrap").length === 0;
  el.termFlashes.appendChild(wrap);
  if (isFirstTerm) {
    audio.ensure();
    audio.startPage3TermsSfx();
  }
  window.setTimeout(() => wrap.remove(), displayMs + 150);
}

function spawnTerm(progressRatio, displayMs) {
  spawnTermAtSlot(progressRatio, displayMs, pickTermSlot());
}

function maybeFlashTerms(force = false) {
  const ratio = Math.min(state.mixingProgress / 100, 1);
  const cfg = getTermFlashConfig(ratio);
  const existing = el.termFlashes.querySelectorAll(".flash-term-wrap").length;
  if (existing >= cfg.maxOnScreen) return;

  const now = performance.now();
  if (!force) {
    if (now - (state.lastTermFlash || 0) < cfg.minInterval) return;
    if (Math.random() > cfg.spawnChance) return;
  }

  state.lastTermFlash = now;
  const slotsLeft = cfg.maxOnScreen - existing;
  const count = Math.min(cfg.burstCount, slotsLeft);
  const usedThisBurst = new Set();
  for (let i = 0; i < count; i += 1) {
    const usage = getTermSlotUsage();
    const minUsage = Math.min(...usage);
    const freeCandidates = usage
      .map((slotUsage, index) => ({ slotUsage, index }))
      .filter((entry) => entry.slotUsage === minUsage && !usedThisBurst.has(entry.index))
      .map((entry) => entry.index);
    if (!freeCandidates.length) break;
    const slotIndex = freeCandidates[Math.floor(Math.random() * freeCandidates.length)];
    usedThisBurst.add(slotIndex);
    spawnTermAtSlot(ratio, cfg.displayMs, slotIndex);
  }
}

function flashTerm() {
  maybeFlashTerms(false);
}

function clearBakingTimers() {
  if (bakingFrameId) {
    cancelAnimationFrame(bakingFrameId);
    bakingFrameId = null;
  }
  if (bakingMessageTimer) {
    clearInterval(bakingMessageTimer);
    bakingMessageTimer = null;
  }
}

function getBakeElapsed() {
  return performance.now() - bakingStartedAt + bakingTimeBoost;
}

function getSelectedIngredientWords() {
  return state.selected
    .map((id) => INGREDIENTS.find((item) => item.id === id))
    .filter(Boolean)
    .map((item) => item.contains);
}

function pickBakeWordSlot(index, jitter = 2.5) {
  const slot = BAKE_FLOAT_SLOTS[index % BAKE_FLOAT_SLOTS.length];
  return {
    x: slot.x + (Math.random() * jitter * 2 - jitter),
    y: slot.y + (Math.random() * jitter * 2 - jitter),
  };
}

function spawnBakeDataWord(text, className = "", x = null, y = null, durationMs = null) {
  if (!el.bakeFloatingWords || !text) return;
  const node = document.createElement("span");
  node.className = `bake-data-word ${className}`.trim();
  node.textContent = text;
  if (x == null || y == null) {
    const slot = pickBakeWordSlot(el.bakeFloatingWords.childElementCount);
    node.style.setProperty("--word-x", `${slot.x}%`);
    node.style.setProperty("--word-y", `${slot.y}%`);
  } else {
    node.style.setProperty("--word-x", `${x}%`);
    node.style.setProperty("--word-y", `${y}%`);
  }
  el.bakeFloatingWords.appendChild(node);
  window.setTimeout(() => node.remove(), durationMs ?? bakeDelay(5200));
}

function spawnSofteningTermsLayer() {
  if (!el.bakeSoftenLayer) return;
  el.bakeSoftenLayer.innerHTML = "";
  const items = state.selected
    .map((id) => INGREDIENTS.find((item) => item.id === id))
    .filter(Boolean);
  const slots = BAKE_TERM_SLOTS;
  items.forEach((item, index) => {
    const slot = slots[index % slots.length];
    const termCard = document.createElement("div");
    termCard.className = "bake-term-card";
    termCard.textContent = item.term;
    termCard.style.setProperty("--term-x", `${slot.x}%`);
    termCard.style.setProperty("--term-y", `${slot.y}%`);
    termCard.style.animationDelay = `${index * bakeDelay(450)}ms`;
    el.bakeSoftenLayer.appendChild(termCard);

    const containsCard = document.createElement("div");
    containsCard.className = "bake-term-card";
    containsCard.textContent = item.contains;
    containsCard.style.setProperty("--term-x", `${Math.min(Math.max(slot.x + slot.ox, 6), 94)}%`);
    containsCard.style.setProperty("--term-y", `${Math.min(Math.max(slot.y + slot.oy, 6), 92)}%`);
    containsCard.style.animationDelay = `${bakeDelay(600) + index * bakeDelay(450)}ms`;
    el.bakeSoftenLayer.appendChild(containsCard);
  });
}

function updateBakeProgressBar(progress) {
  if (!el.bakeStepProgress) return;
  el.bakeStepProgress.style.width = `${Math.min(Math.max(progress, 0), 1) * 100}%`;
}

function setBakeStep(stepIndex) {
  if (!el.consentOven || !el.bakeStepBar) return;
  el.consentOven.classList.remove(
    "consent-oven--step-1",
    "consent-oven--step-2",
    "consent-oven--step-3",
    "consent-oven--step-4"
  );
  if (stepIndex >= 0) {
    el.consentOven.classList.add(`consent-oven--step-${stepIndex + 1}`);
  }
  el.bakeStepBar.querySelectorAll(".bake-step").forEach((node, index) => {
    node.classList.toggle("is-active", index === stepIndex);
    node.classList.toggle("is-complete", index < stepIndex);
  });
}

function spawnStepWords(stepIndex) {
  if (bakingWordsSpawned[stepIndex]) return;
  bakingWordsSpawned[stepIndex] = true;
  if (stepIndex === 0) {
    spawnSofteningTermsLayer();
    getSelectedIngredientWords().forEach((word, index) => {
      window.setTimeout(() => {
        const slot = pickBakeWordSlot(index);
        spawnBakeDataWord(word, "bake-data-word--soften", slot.x, slot.y);
      }, index * bakeDelay(520));
    });
    return;
  }
  if (stepIndex === 1) {
    BAKE_BLEND_PHRASES.forEach((phrase, index) => {
      window.setTimeout(() => {
        const slot = pickBakeWordSlot(index + 2);
        spawnBakeDataWord(phrase, "bake-data-word--blend", slot.x, slot.y);
      }, index * bakeDelay(580));
    });
    getSelectedIngredientWords().forEach((word, index) => {
      window.setTimeout(() => {
        const slot = pickBakeWordSlot(index + BAKE_BLEND_PHRASES.length + 4);
        spawnBakeDataWord(word, "bake-data-word--blend", slot.x, slot.y);
      }, bakeDelay(780) + index * bakeDelay(500));
    });
    return;
  }
  if (stepIndex === 2) {
    BAKE_SWEET_PHRASES.forEach((phrase, index) => {
      window.setTimeout(() => {
        const slot = pickBakeWordSlot(index + 1);
        spawnBakeDataWord(phrase, "bake-data-word--sweet", slot.x, slot.y);
      }, index * bakeDelay(640));
    });
  }
}

function completeAllBakeSteps() {
  if (!el.consentOven || !el.bakeStepBar) return;
  el.consentOven.classList.remove(
    "consent-oven--step-1",
    "consent-oven--step-2",
    "consent-oven--step-3"
  );
  el.consentOven.classList.add("consent-oven--step-4");
  el.bakeStepBar.querySelectorAll(".bake-step").forEach((node) => {
    node.classList.add("is-complete");
    node.classList.remove("is-active");
  });
}

function showAcceptAllPopup() {
  if (!el.acceptAllPopup || state.bakingAcceptedAll || bakingPopupShown) return;
  bakingPopupShown = true;
  el.acceptAllPopup.classList.remove("hidden");
}

function hideAcceptAllPopup() {
  el.acceptAllPopup?.classList.add("hidden");
}

function triggerAcceptAllBake() {
  if (state.bakingAcceptedAll || bakingFinished) return;
  state.bakingAcceptedAll = true;
  hideAcceptAllPopup();
  el.consentOven?.classList.add("consent-oven--accept-all");
  el.acceptAllToast?.classList.remove("hidden");
  el.bakeOvenGlitch?.classList.remove("hidden");
  el.bakeOvenGlitch?.classList.add("is-visible");
  audio.playPage2Warning();
  BAKE_EXTRA_PERMISSIONS.forEach((word, index) => {
    window.setTimeout(() => {
      const slot = pickBakeWordSlot(index + 6);
      spawnBakeDataWord(word, "bake-data-word--blend", slot.x, slot.y);
    }, index * bakeDelay(240));
  });
  window.setTimeout(() => {
    el.bakeOvenGlitch?.classList.remove("is-visible");
    el.bakeOvenGlitch?.classList.add("hidden");
  }, bakeDelay(450));
  window.setTimeout(() => el.acceptAllToast?.classList.add("hidden"), bakeDelay(2600));

  const elapsed = getBakeElapsed();
  const totalDuration = BAKE_STEP_MS * 4 + BAKE_PREVIEW_MS;
  const remaining = Math.max(0, totalDuration - elapsed);
  bakingTimeBoost += remaining * 0.45;
}

function showBakePreview(result) {
  if (!el.bakePreview || !result) return;
  el.bakePreview.className = "consent-oven__preview is-visible";
  const previewClass = BAKE_PREVIEW_CLASS[result.id];
  if (previewClass) el.bakePreview.classList.add(previewClass);
}

function resetBakingVisuals() {
  clearBakingTimers();
  bakingTimeBoost = 0;
  bakingFinished = false;
  bakingWordsSpawned = [false, false, false, false];
  bakingPopupShown = false;
  state.bakingAcceptedAll = false;
  state.bakingResult = null;
  if (el.bakeFloatingWords) el.bakeFloatingWords.innerHTML = "";
  if (el.bakeSoftenLayer) el.bakeSoftenLayer.innerHTML = "";
  if (el.consentOven) {
    el.consentOven.className = "consent-oven";
  }
  if (el.bakePreview) {
    el.bakePreview.className = "consent-oven__preview hidden";
  }
  el.bakeOvenGlitch?.classList.add("hidden");
  el.bakeOvenGlitch?.classList.remove("is-visible");
  hideAcceptAllPopup();
  el.acceptAllToast?.classList.add("hidden");
  updateBakeProgressBar(0);
  setBakeStep(-1);
  el.bakeStepBar?.querySelectorAll(".bake-step").forEach((node) => {
    node.classList.remove("is-active", "is-complete");
  });
}

function startBakingStep() {
  resetBakingVisuals();
  showView("baking");
  state.bakingResult = decideResult();
  bakingStartedAt = performance.now();

  let messageIndex = -1;
  el.bakeMessage.textContent = "Your choices are being softened, sweetened, and served.";
  bakingMessageTimer = window.setInterval(() => {
    messageIndex = (messageIndex + 1) % bakeMessages.length;
    el.bakeMessage.textContent = bakeMessages[messageIndex];
  }, BAKE_MESSAGE_INTERVAL_MS);

  el.consentOven?.style.setProperty("--bake-duration-scale", String(BAKE_DURATION_SCALE));

  let previewStarted = false;
  let lastStepIndex = -1;
  const totalBeforePreview = BAKE_STEP_MS * 4;

  const tick = () => {
    const elapsed = getBakeElapsed();
    const progress = Math.min(elapsed / totalBeforePreview, 1);
    const stepIndex = Math.min(Math.floor(elapsed / BAKE_STEP_MS), BAKE_STEPS.length - 1);

    audio.updateBaking(progress);
    updateBakeProgressBar(progress);

    if (stepIndex !== lastStepIndex) {
      lastStepIndex = stepIndex;
      setBakeStep(stepIndex);
      spawnStepWords(stepIndex);
      if (stepIndex === 3) {
        el.bakeMessage.textContent = "Almost ready to accept.";
      }
    }

    if (elapsed >= BAKE_ACCEPT_POPUP_AT && !state.bakingAcceptedAll) {
      showAcceptAllPopup();
    }

    if (elapsed >= totalBeforePreview && !previewStarted) {
      previewStarted = true;
      bakingFinished = true;
      hideAcceptAllPopup();
      completeAllBakeSteps();
      updateBakeProgressBar(1);
      showBakePreview(state.bakingResult);
    }

    if (elapsed >= totalBeforePreview + BAKE_PREVIEW_MS) {
      clearBakingTimers();
      playTvTransition(startRevealStep);
      return;
    }

    bakingFrameId = requestAnimationFrame(tick);
  };

  bakingFrameId = requestAnimationFrame(tick);
}

function getFallbackCookieId(exposure, control, seduction) {
  const max = Math.max(exposure, control, seduction);
  const isExposureHighest = exposure === max;
  const isControlHighest = control === max;
  const isSeductionHighest = seduction === max;
  const tiedHighestCount =
    (isExposureHighest ? 1 : 0) + (isControlHighest ? 1 : 0) + (isSeductionHighest ? 1 : 0);

  if (tiedHighestCount === 1) {
    if (isSeductionHighest) return "glossy";
    if (isExposureHighest) return "burnt";
    return "barbed";
  }

  const tieOrder = ["radioactive", "overloaded", "burnt", "barbed", "glossy"];
  for (const cookieId of tieOrder) {
    if (cookieId === "radioactive") continue;
    if (cookieId === "overloaded" && tiedHighestCount === 3) return "overloaded";
    if (cookieId === "burnt" && isExposureHighest) return "burnt";
    if (cookieId === "barbed" && isControlHighest) return "barbed";
    if (cookieId === "glossy" && isSeductionHighest) return "glossy";
  }
  return "burnt";
}

function evaluateCookieResult(selectedIds, scores) {
  const selected = new Set(selectedIds);
  const exposure = scores.Exposure;
  const control = scores.Control;
  const seduction = scores.Seduction;
  const debug = {
    selectedIngredientIds: selectedIds.map((id) => INGREDIENT_SCORE_IDS[id] || id),
    totals: { E: exposure, C: control, S: seduction },
    matchedRule: null,
    finalCookie: null,
  };

  if (
    exposure >= 6 &&
    control >= 5 &&
    selected.has("location") &&
    selected.has("third_party") &&
    (selected.has("camera") || selected.has("history") || selected.has("ai_profile"))
  ) {
    debug.matchedRule = "1. Exploded Cookie";
    debug.finalCookie = "exploded";
    return { id: "exploded", debug };
  }

  if (
    exposure >= 5 &&
    control >= 4 &&
    selected.has("ai_profile") &&
    (selected.has("history") || selected.has("camera"))
  ) {
    debug.matchedRule = "2. Radioactive Cookie";
    debug.finalCookie = "radioactive";
    return { id: "radioactive", debug };
  }

  if (seduction >= 6 && seduction > exposure && seduction > control) {
    debug.matchedRule = "3. Glossy Perfect Cookie";
    debug.finalCookie = "glossy";
    return { id: "glossy", debug };
  }

  if (exposure >= 7 && exposure > control && exposure > seduction) {
    debug.matchedRule = "4. Burnt Cookie";
    debug.finalCookie = "burnt";
    return { id: "burnt", debug };
  }

  if (control >= 6 && control > exposure && control > seduction) {
    debug.matchedRule = "5. Barbed-Wire Cookie";
    debug.finalCookie = "barbed";
    return { id: "barbed", debug };
  }

  if (
    exposure >= 4 &&
    control >= 4 &&
    seduction >= 4 &&
    Math.max(exposure, control, seduction) - Math.min(exposure, control, seduction) <= 1
  ) {
    debug.matchedRule = "6. Overloaded Cookie";
    debug.finalCookie = "overloaded";
    return { id: "overloaded", debug };
  }

  const fallbackId = getFallbackCookieId(exposure, control, seduction);
  debug.matchedRule = "7. Fallback";
  debug.finalCookie = fallbackId;
  return { id: fallbackId, debug };
}

function logCookieOutputDebug(debug) {
  console.group("[Cookie Output]");
  console.log("Selected ingredient ids:", debug.selectedIngredientIds);
  console.log("Total scores:", debug.totals);
  console.log("Matched output rule:", debug.matchedRule);
  console.log("Final cookie output:", debug.finalCookie);
  console.groupEnd();
}

function decideResult() {
  scoreSelection();
  const evaluation = evaluateCookieResult(state.selected, state.scores);
  state.cookieOutputDebug = evaluation.debug;
  logCookieOutputDebug(evaluation.debug);
  return RESULTS.find((item) => item.id === evaluation.id);
}

function startRevealStep() {
  state.currentResult = state.bakingResult || decideResult();
  if (!state.currentResult) return;
  state.unlocked.add(state.currentResult.id);

  showView("reveal");
  el.revealBg.style.background = state.currentResult.bg;
  el.resultName.textContent = state.currentResult.name;
  el.resultLine.textContent = state.currentResult.line;
  el.scoreLine.textContent = `Exposure ${state.scores.Exposure} / Control ${state.scores.Control} / Seduction ${state.scores.Seduction}`;
  if (state.cookieOutputDebug) {
    const debug = state.cookieOutputDebug;
    el.scoreLine.textContent += ` | Rule: ${debug.matchedRule} | Output: ${debug.finalCookie}`;
    console.log("[Cookie Output Reveal]", debug);
  }
  el.resultCookieImg.src = state.currentResult.image;
  el.resultCookieImg.alt = state.currentResult.name;
  el.insideRevealPanel.classList.add("hidden");
  el.seeInsideBtn.classList.remove("hidden");
  renderInsideReveal();
  audio.playReveal(state.currentResult.id);
  audio.playResultLoop(state.currentResult.audio);
  runGlitchSequence();
}

function renderInsideReveal() {
  const result = state.currentResult;
  if (!result) return;
  renderList(el.containsList, result.insideContains || []);
  if (el.insideMeaning) {
    el.insideMeaning.textContent = result.insideMeaning || "";
  }
  el.stingLine.textContent = result.insideFinalLine || result.sting || "Easy to accept. Hard to undo.";
}

function renderList(listNode, items) {
  listNode.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listNode.appendChild(li);
  });
}

function showInsideReveal() {
  el.insideRevealPanel.classList.remove("hidden");
  el.seeInsideBtn.classList.add("hidden");
  audio.retryResultLoop();
  audio.playInsideReveal();
  runGlitchSequence();
}

function playTvTransition(onMidpoint) {
  if (!el.tvTransition) {
    onMidpoint();
    return;
  }

  audio.playTvGlitch();
  el.tvTransition.classList.remove("hidden");
  el.tvTransition.style.animation = "none";
  void el.tvTransition.offsetWidth;
  el.tvTransition.style.animation = "";

  window.setTimeout(() => {
    onMidpoint();
  }, 760);

  window.setTimeout(() => {
    el.tvTransition.classList.add("hidden");
  }, 1500);
}

function runGlitchSequence() {
  el.glitchLayer.style.opacity = "0";
  let flashCount = 0;
  const timer = window.setInterval(() => {
    flashCount += 1;
    el.glitchLayer.style.opacity = flashCount % 2 === 0 ? "0.65" : "0.16";
    if (flashCount >= 7) {
      clearInterval(timer);
      el.glitchLayer.style.opacity = "0";
    }
  }, 160);
}

function renderGallery() {
  el.galleryGrid.innerHTML = "";
  RESULTS.forEach((result) => {
    const slot = document.createElement("div");
    const unlocked = state.unlocked.has(result.id);
    slot.className = `gallery-slot ${unlocked ? "unlocked" : ""}`;
    slot.innerHTML = `
      <img class="gallery-cookie-img" src="${result.image}" alt="${unlocked ? result.name : "Locked cookie"}" />
      <div class="slot-name">${unlocked ? result.name : "Locked Cookie"}</div>
    `;
    el.galleryGrid.appendChild(slot);
  });
}

startBtn.addEventListener("click", () => {
  audio.ensure();
  audio.playPage1Click();
  showView("ingredients");
  renderIngredients();
});

soundToggleBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  audio.ensure();
  audio.startPage1Ambience();
  audio.playPage1Click();
  soundToggleBtn.classList.add("is-on");
  soundToggleBtn.textContent = "sound on ✓";
});

startBtn.addEventListener("mouseenter", () => {
  audio.ensure();
  audio.startPage1Ambience();
  audio.playPage1Hover();
});

el.continueAnywayBtn.addEventListener("click", () => {
  audio.playSoftChime();
  el.microModal.classList.add("hidden");
  startMixingStep();
});

el.acceptAllBtn?.addEventListener("click", () => {
  audio.ensure();
  triggerAcceptAllBake();
});

el.seeInsideBtn.addEventListener("click", showInsideReveal);

el.closeInsideBtn.addEventListener("click", () => {
  el.insideRevealPanel.classList.add("hidden");
  el.seeInsideBtn.classList.remove("hidden");
});

toGalleryBtn.addEventListener("click", () => {
  audio.ensure();
  audio.playMechanicalClick();
  showView("gallery");
  renderGallery();
});

retryBtn.addEventListener("click", () => {
  audio.playMechanicalClick();
  resetForNewRun();
  showView("ingredients");
});

window.addEventListener(
  "pointerdown",
  () => {
    audio.ensure();
    audio.setPage(state.currentView);
  },
  { once: true }
);

window.addEventListener("pointerdown", () => {
  if (state.currentView === "reveal") {
    audio.retryResultLoop();
    audio.retryPage5Music();
  } else if (state.currentView === "gallery") {
    audio.retryPage6Music();
  } else if (state.currentView === "mixing") {
    if (state.isWhiskDragging) audio.retryPage3MixLoop();
    audio.retryPage3TermsSfx();
  }
});

preloadVisuals();
renderGallery();
