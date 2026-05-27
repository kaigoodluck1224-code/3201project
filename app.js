const INGREDIENTS = [
  {
    id: "ads",
    name: "Extra Sweetness",
    term: "Personalised ads",
    contains: "personalised ads",
    shapedBy: "personalisation",
    points: { Exposure: 1, Control: 1, Seduction: 3 },
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
    points: { Exposure: 3, Control: 2, Seduction: 0 },
    image: "./assets/ingredients/ingredient-11.png",
    x: 21,
    y: 13,
  },
  {
    id: "location",
    name: "Local Flavour",
    term: "Location access",
    contains: "location access",
    shapedBy: "local relevance",
    points: { Exposure: 3, Control: 1, Seduction: 0 },
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
    points: { Exposure: 2, Control: 2, Seduction: 1 },
    image: "./assets/ingredients/ingredient-09.png",
    x: 10,
    y: 35,
  },
  {
    id: "history",
    name: "Always Fresh",
    term: "Cross-device tracking",
    contains: "cross-device tracking",
    shapedBy: "continuous updating",
    points: { Exposure: 2, Control: 2, Seduction: 1 },
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
    points: { Exposure: 3, Control: 1, Seduction: 1 },
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
    points: { Exposure: 3, Control: 2, Seduction: 0 },
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
    points: { Exposure: 2, Control: 3, Seduction: 0 },
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
    points: { Exposure: 2, Control: 3, Seduction: 1 },
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
    points: { Exposure: 3, Control: 3, Seduction: 0 },
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
    points: { Exposure: 0, Control: 2, Seduction: 3 },
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
    points: { Exposure: 2, Control: 3, Seduction: 0 },
    image: "./assets/ingredients/ingredient-04.png",
    x: 47,
    y: 68,
  },
];

const RESULTS = [
  {
    id: "glossy",
    name: "Glossy Perfect Cookie",
    line: "Perfectly personalised. Smooth, attractive, and built from your habits.",
    color: "#e8ba8d",
    image: "./assets/results/glossy.png",
    audio: "./assets/audio/results/glossy.wav",
    shapedBy: ["convenience", "personalisation", "default trust", "hidden tracker icons"],
    sting: "Sweet on the surface, invasive underneath.",
    bg: "linear-gradient(120deg, #9f5665, #6a355a 42%, #201728 100%)",
  },
  {
    id: "burnt",
    name: "Burnt Cookie",
    line: "Overbaked. Excessive exposure has burned through the boundary.",
    color: "#503629",
    image: "./assets/results/burnt.png",
    audio: "./assets/audio/results/burnt.wav",
    shapedBy: ["exposure", "location tracking", "partner access", "rushed consent"],
    sting: "You gave too much, and the system burned through the edge.",
    bg: "linear-gradient(120deg, #5c3427, #2f1f19 48%, #101013 100%)",
  },
  {
    id: "barbed",
    name: "Barbed-Wire Cookie",
    line: "Protected for the system, not for you.",
    color: "#a0a0a0",
    image: "./assets/results/barbed.png",
    audio: "./assets/audio/results/barbed.wav",
    shapedBy: ["restriction", "enclosure", "data capture", "persistent identifiers"],
    sting: "The wrapper is not your safety. It is the system's fence.",
    bg: "linear-gradient(130deg, #20334d, #1b1b22 40%, #111014 100%)",
  },
  {
    id: "radioactive",
    name: "Radioactive Cookie",
    line: "Unstable. Long-term risk keeps glowing after the click.",
    color: "#97cf40",
    image: "./assets/results/radioactive.png",
    audio: "./assets/audio/results/radioactive.wav",
    shapedBy: ["predictive modelling", "persistent tracking", "system learning", "cross-device profiling"],
    sting: "It does not explode immediately. It keeps emitting.",
    bg: "linear-gradient(120deg, #395422, #18331a 41%, #0d1410 100%)",
  },
  {
    id: "overloaded",
    name: "Overloaded Cookie",
    line: "Too much to notice. Options, extras, and permissions pile up.",
    color: "#eda35d",
    image: "./assets/results/overloaded.png",
    audio: "./assets/audio/results/overloaded.wav",
    shapedBy: ["enhanced experience", "extras", "unreadable options", "hidden permissions"],
    sting: "When everything looks useful, the structure disappears.",
    bg: "linear-gradient(120deg, #6a3344, #48224e 44%, #181225 100%)",
  },
  {
    id: "exploded",
    name: "Exploded Cookie",
    line: "Exposed. The sweet shell split open into raw data structure.",
    color: "#ff4f58",
    image: "./assets/results/exploded.png",
    audio: "./assets/audio/results/exploded.wav",
    shapedBy: ["location data", "ad profiling", "behavioural tracking", "partner access"],
    sting: "Easy to accept. Hard to undo.",
    bg: "linear-gradient(120deg, #5f1f2b, #2a1f47 36%, #111019 100%)",
  },
];

const state = {
  currentView: "cover",
  selected: [],
  hasHoveredTerms: false,
  scores: { Exposure: 0, Control: 0, Seduction: 0 },
  unlocked: new Set(),
  currentResult: null,
  dragItemId: null,
  mixingProgress: 0,
  isWhiskDragging: false,
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
  bakeBarInner: document.getElementById("bake-progress-inner"),
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
  shapedByList: document.getElementById("shaped-by-list"),
  stingLine: document.getElementById("sting-line"),
  galleryGrid: document.getElementById("gallery-grid"),
  tvTransition: document.getElementById("tv-transition"),
};

const startBtn = document.getElementById("start-btn");
const soundToggleBtn = document.getElementById("sound-toggle-btn");
const toGalleryBtn = document.getElementById("to-gallery-btn");
const retryBtn = document.getElementById("retry-btn");

const termsPool = [
  "consent_to_third_party_access = true",
  "tracking_scope: behavioral + biometric",
  "retention_period: undefined",
  "share_with_partners: enabled",
  "session_replay.capture_all_inputs()",
  "geo_watch.interval = 15s",
];

const bakeMessages = [
  "Personalising your experience...",
  "Optimising ad relevance...",
  "Calibrating behavioral profile...",
  "Syncing with trusted partners...",
  "Finalising sweet surveillance...",
];

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
    if (viewName !== "reveal") this.stopResultLoop();
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
      this.startVacuumRoom();
    } else if (viewName === "reveal") {
      this.fade(this.ambienceGain, 0.015, 0.5);
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

function showView(viewName) {
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

function renderIngredients() {
  el.ingredientLayer.innerHTML = "";

  INGREDIENTS.forEach((item) => {
    const node = document.createElement("div");
    node.className = "ingredient";
    node.dataset.id = item.id;
    node.style.left = `${item.x}%`;
    node.style.top = `${item.y}%`;
    node.innerHTML = `
      <img class="ingredient-media" src="${item.image}" alt="${item.name}" draggable="false" />
      <span class="ingredient-name">${item.name}</span>
      <span class="tooltip">${item.term}</span>
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
  document.documentElement.style.setProperty("--mix-blur", "0px");
  el.mixProgress.textContent = "0%";
  el.termFlashes.innerHTML = "";
  el.whisk.style.left = "28%";
  el.whisk.style.top = "37%";
  el.whisk.style.transform = "perspective(700px) rotateX(4deg) rotateY(-5deg) rotate(-18deg)";
  updateMixVisuals(0);

  let previousAngle = null;
  let previousTimestamp = performance.now();
  let rafId = null;

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
      state.mixingProgress += velocity * 58;
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

function flashTerm() {
  if (Math.random() > 0.4) return;
  const line = termsPool[Math.floor(Math.random() * termsPool.length)];
  const node = document.createElement("div");
  node.className = "flash-term";
  node.style.left = `${Math.random() * 80}%`;
  node.style.top = `${Math.random() * 70}%`;
  node.textContent = line;
  el.termFlashes.appendChild(node);
  window.setTimeout(() => node.remove(), 860);
}

function startBakingStep() {
  showView("baking");
  let progress = 0;
  let messageIndex = 0;
  el.bakeBarInner.style.width = "0%";
  el.bakeMessage.textContent = bakeMessages[0];
  const bakeDuration = 7000;
  const start = performance.now();

  const timer = window.setInterval(() => {
    messageIndex = (messageIndex + 1) % bakeMessages.length;
    el.bakeMessage.textContent = bakeMessages[messageIndex];
  }, 1400);

  const tick = () => {
    const elapsed = performance.now() - start;
    progress = Math.min((elapsed / bakeDuration) * 100, 100);
    audio.updateBaking(progress / 100);
    el.bakeBarInner.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(timer);
      playTvTransition(startRevealStep);
      return;
    }
    requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

function decideResult() {
  const { Exposure, Control, Seduction } = state.scores;
  const selected = new Set(state.selected);
  const highest = Math.max(Exposure, Control, Seduction);

  // Rule 1: all three dimensions elevated — sensory overload
  if (Exposure >= 5 && Control >= 5 && Seduction >= 4) {
    return RESULTS.find((item) => item.id === "overloaded");
  }
  // Rule 2: specific high-risk combination — data explosion
  if (
    Exposure >= 6 &&
    Control >= 5 &&
    selected.has("location") &&
    selected.has("third_party") &&
    (selected.has("camera") || selected.has("ai_profile"))
  ) {
    return RESULTS.find((item) => item.id === "exploded");
  }
  // Rule 3: exposure + control + Future Recipe Learning (ai_profile) — radioactive long-term risk
  if (Exposure >= 6 && Control >= 5 && selected.has("ai_profile")) {
    return RESULTS.find((item) => item.id === "radioactive");
  }
  // Rule 4: control-dominated profile
  if (Control >= 6 && Control === highest) {
    return RESULTS.find((item) => item.id === "barbed");
  }
  // Rule 5: exposure-dominated profile
  if (Exposure >= 7 && Exposure === highest) {
    return RESULTS.find((item) => item.id === "burnt");
  }
  // Rule 6: seduction-dominated profile
  if (Seduction >= 6 && Seduction === highest) {
    return RESULTS.find((item) => item.id === "glossy");
  }
  // Default fallback
  return RESULTS.find((item) => item.id === "burnt");
}

function startRevealStep() {
  state.currentResult = decideResult();
  if (!state.currentResult) return;
  state.unlocked.add(state.currentResult.id);

  showView("reveal");
  el.revealBg.style.background = state.currentResult.bg;
  el.resultName.textContent = state.currentResult.name;
  el.resultLine.textContent = state.currentResult.line;
  el.scoreLine.textContent = `Exposure ${state.scores.Exposure} / Control ${state.scores.Control} / Seduction ${state.scores.Seduction}`;
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
  const selectedIngredients = state.selected
    .map((id) => INGREDIENTS.find((entry) => entry.id === id))
    .filter(Boolean);
  const contains = [...new Set(selectedIngredients.map((ingredient) => ingredient.contains))];
  const shapedBy = [
    ...new Set([
      ...selectedIngredients.map((ingredient) => ingredient.shapedBy),
      ...(state.currentResult?.shapedBy || []),
    ]),
  ];

  renderList(el.containsList, contains);
  renderList(el.shapedByList, shapedBy);
  el.stingLine.textContent = state.currentResult?.sting || "Easy to accept. Hard to undo.";
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

el.seeInsideBtn.addEventListener("click", showInsideReveal);

el.closeInsideBtn.addEventListener("click", () => {
  el.insideRevealPanel.classList.add("hidden");
  el.seeInsideBtn.classList.remove("hidden");
});

toGalleryBtn.addEventListener("click", () => {
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
  }
});

preloadVisuals();
renderGallery();
