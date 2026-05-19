---
layout: home
title: Awake Fluorescence Imaging
subtitle: by Blaine Weiss
cover-img: "/assets/img/TESTsupp1.gif"
---

<style>
/* --- Global & General Styles --- */
body {
  overflow-x: hidden; /* Prevents horizontal scrollbars from full-width elements */
}

.bw-section {
  margin: 4rem 0;
}

.bw-hero {
  background: linear-gradient(135deg, #111827, #374151);
  color: white;
  padding: 3rem 2.25rem;
  border-radius: 22px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  margin-top: 2rem;
}
.bw-hero h1, .bw-hero p { color: white; }
.bw-hero h1 { margin-top: 0; font-size: 2.5rem; }
.bw-hero p { font-size: 1.1rem; line-height: 1.7; }

.bw-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
}
.bw-badge {
  display: inline-block;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.25);
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-size: 0.85rem;
  color: white;
  backdrop-filter: blur(4px);
}

.bw-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.25rem;
  margin: 2.5rem 0;
}
.bw-metric {
  text-align: center;
  padding: 1.5rem 1rem;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 20px rgba(0,0,0,0.03);
  transition: transform 0.2s ease;
}
.bw-metric:hover { transform: translateY(-5px); }
.bw-metric strong {
  display: block;
  font-size: 2rem;
  color: #111827;
  margin-bottom: 0.25rem;
}

/* --- Upgraded Research Focus Section --- */
.bw-focus-split {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;
  background: #f8fafc;
  padding: 3rem;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
}
.bw-focus-image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3);
}
.bw-focus-image-wrapper img {
  width: 100%;
  display: block;
}
.bw-focus-text h2 { margin-top: 0; font-size: 2.2rem; color: #0f172a; }
.bw-focus-text p { font-size: 1.05rem; line-height: 1.7; color: #475569; }

/* --- Cinematic Video Hero (STONE-LAVA) --- */
.bw-video-hero {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: #020617;
  overflow: hidden;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.bw-hero-video-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.bw-video-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(90deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.5) 50%, rgba(15, 23, 42, 0.1) 100%);
}
.bw-hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.bw-hero-content-inner { max-width: 650px; }
.bw-hero-content-inner h1 {
  margin: 0 0 1rem;
  color: white;
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 1;
  letter-spacing: -0.02em;
}
.bw-hero-content-inner p {
  color: rgba(255,255,255,0.9);
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.6;
  margin: 0 0 2rem;
}
.bw-hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.bw-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1.05rem;
  text-decoration: none !important;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  border: none;
}
.bw-btn:hover { transform: translateY(-2px); }
.bw-btn-primary {
  background: white;
  color: #0f172a !important;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
.bw-btn-primary:hover { box-shadow: 0 15px 30px rgba(0,0,0,0.3); }
.bw-btn-secondary {
  background: #3b82f6;
  color: white !important;
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
}
.bw-btn-secondary:hover { box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4); }

/* --- Feature Cards & Grids --- */
.bw-banner {
  background: linear-gradient(90deg, #1e293b, #334155);
  color: white;
  padding: 2rem;
  border-radius: 20px;
  margin: 3rem 0 1.5rem;
  text-align: center;
}
.bw-banner h2, .bw-banner p { color: white; margin: 0; }
.bw-banner h2 { font-size: 2rem; margin-bottom: 0.5rem; }

.bw-project {
  border-left: 5px solid #3b82f6;
  background: #eff6ff;
  padding: 2rem;
  border-radius: 16px;
  margin: 1.5rem 0;
  box-shadow: 0 10px 25px rgba(0,0,0,0.03);
}
.bw-project h3 { margin-top: 0; color: #1e3a8a; font-size: 1.6rem; }

.bw-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}
.bw-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 1.75rem;
  box-shadow: 0 12px 30px rgba(0,0,0,0.06);
  border: 1px solid #f1f5f9;
  transition: transform 0.2s;
}
.bw-card:hover { transform: translateY(-5px); }
.bw-card h3 { margin-top: 0; color: #0f172a; }

/* --- Interactive Modal (Dark Theme UI) --- */
.bw-modal {
  position: fixed; inset: 0; z-index: 9999;
  display: flex; align-items: center; justify-content: center;
  opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
}
.bw-modal.is-open { opacity: 1; pointer-events: auto; }
.bw-modal-bg {
  position: absolute; inset: 0;
  background: rgba(2, 6, 23, 0.85); backdrop-filter: blur(8px);
}
.bw-modal-content {
  position: relative; width: 95%; max-width: 1200px;
  background: #0f172a; border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6);
  overflow: hidden; transform: scale(0.98); transition: transform 0.3s;
}
.bw-modal.is-open .bw-modal-content { transform: scale(1); }
.bw-modal-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.5rem; background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.bw-modal-title { color: white; font-weight: 600; display: flex; align-items: center; gap: 0.5rem; }
.bw-status-dot { width: 10px; height: 10px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 10px #22c55e; }
.bw-close-btn {
  background: none; border: none; color: #94a3b8; font-size: 1.5rem; cursor: pointer;
}
.bw-close-btn:hover { color: white; }
.bw-modal-body {
  display: grid; grid-template-columns: 320px 1fr; height: 75vh; min-height: 500px;
}
.bw-modal-sidebar {
  padding: 1.5rem; border-right: 1px solid rgba(255,255,255,0.08);
  display: flex; flex-direction: column; gap: 0.75rem; overflow-y: auto;
}
.bw-sidebar-label {
  color: #64748b; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem;
}
.bw-step-btn {
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);
  padding: 1.25rem 1rem; border-radius: 12px; text-align: left;
  cursor: pointer; transition: all 0.2s; color: white;
}
.bw-step-btn:hover { background: rgba(255,255,255,0.08); }
.bw-step-btn.is-active {
  background: rgba(59, 130, 246, 0.15); border-color: #3b82f6;
}
.bw-step-btn strong { display: block; font-size: 1.05rem; margin-bottom: 0.25rem; color: #f8fafc; }
.bw-step-btn span { display: block; font-size: 0.85rem; color: #94a3b8; }
.bw-modal-vis { position: relative; background: #000; width: 100%; height: 100%; overflow: hidden; }
.bw-frame {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain;
  opacity: 0; transition: opacity 0.3s ease;
}
.bw-frame.is-visible { opacity: 1; }

@media (max-width: 900px) {
  .bw-focus-split { grid-template-columns: 1fr; padding: 2rem; }
  .bw-modal-body { grid-template-columns: 1fr; grid-template-rows: auto 1fr; height: 85vh; }
  .bw-modal-sidebar { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
}
</style>

<div class="bw-hero">
  <h1>Welcome!</h1>
  <p>My name is Blaine, I am a graduate student at the University of Kentucky and a researcher at the Sanders-Brown Center on Aging. My work focuses on <strong>awake intravital fluorescence microscopy</strong>, <strong>mouse models of dementia</strong>, <strong>astrocyte calcium signaling</strong>, <strong>vascular dynamics</strong>, and the development of computational tools for extracting biological meaning from complex imaging datasets.</p>
  <p>I've built this site to showcase some of my academic accomplishments and as a repository to share my experimental methods and tools used to conduct my research. My goal is to build and make available useful analysis systems that make difficult brain imaging experiments more quantitative, reproducible, and visually interpretable.</p>
  <div class="bw-badge-row">
    <span class="bw-badge">Awake two-photon microscopy</span>
    <span class="bw-badge">Astrocyte Ca²⁺ signaling</span>
    <span class="bw-badge">Neurovascular coupling</span>
    <span class="bw-badge">Field electrophysiology</span>
    <span class="bw-badge">Image analysis software</span>
    <span class="bw-badge">STONE-LAVA</span>
  </div>
</div>

<div class="bw-metrics">
  <div class="bw-metric"><strong>10</strong> Publications</div>
  <div class="bw-metric"><strong>20+</strong> Posters & presentations</div>
  <div class="bw-metric"><strong>Since 2017</strong> Sanders-Brown affiliation</div>
  <div class="bw-metric"><strong>In-Vivo</strong> Awake brain imaging</div>
</div>

<div class="bw-focus-split">
  <div class="bw-focus-text">
    <h2>Research Focus</h2>
    <p>My research centers on understanding how cellular activity and cerebrovascular dynamics interact in the living brain, particularly in the context of dementia and Alzheimer’s disease-related pathology.</p>
    <p>Using awake intravital microscopy, I study activity patterns across astrocyte somata, processes, and perivascular endfeet while simultaneously examining vascular responses such as dilation and constriction. These datasets are rich, dynamic, and difficult to analyze with conventional tools, which led me to build custom software for event detection, segmentation, synchronization analysis, and vascular-cell coupling.</p>
  </div>
  <div class="bw-focus-image-wrapper">
    <img src="/assets/img/LAVAdemo-composite.png" alt="Awake fluorescence microscopy example">
  </div>
</div>

<div class="bw-video-hero" markdown="0"><video class="bw-hero-video-bg" autoplay muted loop playsinline preload="auto" poster="/assets/img/LAVAconceptart.png"><source src="/assets/video/STONELAVAflowvideo.mp4" type="video/mp4"></video><div class="bw-hero-content"><div class="bw-hero-content-inner"><h1>STONE-LAVA</h1><p>A computational framework for spatial and temporal analysis of brain activity, vascular behavior, and multimodal fluorescence imaging datasets.</p><div class="bw-hero-actions"><a class="bw-btn bw-btn-primary" href="/assets/downloads/STONE-LAVA_Installer.exe" download>Get STONE-LAVA</a><button class="bw-btn bw-btn-secondary" id="launch-modal-btn"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Explore Pipeline</button></div></div></div></div>

<div class="bw-banner">
  <h2>Featured Platform: STONE-LAVA</h2>
  <p>A computational framework for spatial and temporal analysis of brain activity, vascular behavior, and multimodal fluorescence imaging datasets.</p>
</div>

<div class="bw-project">
  <h3>STONE</h3>
  <p><strong>Spatial & Temporal Observation of Network Events</strong></p>
  <p>STONE is designed for functional imaging analysis of cellular activity. It includes tools for activity-based cell detection, filtering, event detection, waveform extraction, and network-level synchrony analysis.</p>
  <ul>
    <li>Activity-informed ROI detection</li>
    <li>Subcellular signal extraction</li>
    <li>Calcium event detection</li>
    <li>Network synchrony and correlation analysis</li>
    <li>Export workflows for reproducible downstream analysis</li>
  </ul>
</div>

<div class="bw-project" style="border-left-color: #c2410c; background: #fff7ed;">
  <h3 style="color: #9a3412;">LAVA</h3>
  <p><strong>Localized Analysis of Vascular Astrocytes</strong></p>
  <p>LAVA was developed to compare stimulation-induced vascular motion with local perivascular cellular signaling. It was named for its original use case: measuring astrocyte endfoot activity around cerebral arterioles.</p>
  <ul>
    <li>Vessel-associated ROI analysis</li>
    <li>Perivascular astrocyte/endfoot signal quantification</li>
    <li>Dilation and constriction tracking</li>
    <li>Event-locked vascular-cell comparisons</li>
    <li>Multimodal image/signal integration</li>
  </ul>
</div>

<div class="bw-section">
  <h2>Research Themes</h2>
  <div class="bw-card-grid">
    <div class="bw-card">
      <h3>Awake Intravital Microscopy</h3>
      <p>Imaging brain activity in awake mouse models to capture cellular and vascular dynamics under more physiologically relevant conditions.</p>
    </div>
    <div class="bw-card">
      <h3>Astrocyte-Vascular Coupling</h3>
      <p>Quantifying how astrocyte compartments, especially perivascular endfeet, relate to nearby arteriole motion and stimulation-induced vascular responses.</p>
    </div>
    <div class="bw-card">
      <h3>Dementia Models</h3>
      <p>Applying advanced imaging and analysis tools to mouse models relevant to Alzheimer’s disease and neurodegenerative pathology.</p>
    </div>
    <div class="bw-card">
      <h3>Functional Signal Analysis</h3>
      <p>Developing pipelines for fluorescence signal processing, event detection, filtering, synchronization, and network-level activity mapping.</p>
    </div>
    <div class="bw-card">
      <h3>Software Development</h3>
      <p>Building MATLAB-based tools that streamline complex imaging analyses and improve reproducibility across experiments.</p>
    </div>
    <div class="bw-card">
      <h3>Data Visualization</h3>
      <p>Creating visual and quantitative summaries of cellular activity, vascular motion, network structure, and compartment-specific signaling.</p>
    </div>
  </div>
</div>

<div class="bw-modal" id="interactive-modal" markdown="0"><div class="bw-modal-bg" id="close-bg"></div><div class="bw-modal-content"><div class="bw-modal-header"><div class="bw-modal-title"><span class="bw-status-dot"></span>STONE-LAVA Analysis Environment</div><button class="bw-close-btn" id="close-btn">✕</button></div><div class="bw-modal-body"><div class="bw-modal-sidebar"><p class="bw-sidebar-label">Execution Pipeline</p><button class="bw-step-btn is-active" data-frame="0"><strong>1. Raw Data Input</strong><span>Load awake intravital multimodal dataset</span></button><button class="bw-step-btn" data-frame="2"><strong>2. Activity Segmentation</strong><span>Automated cellular ROI detection</span></button><button class="bw-step-btn" data-frame="5"><strong>3. Vascular Tracking</strong><span>Map perivascular endfoot & arteriole motion</span></button><button class="bw-step-btn" data-frame="7"><strong>4. Network Synchrony</strong><span>Extract synchronized events and waveforms</span></button></div><div class="bw-modal-vis"><img class="bw-frame is-visible" src="/assets/img/stone-lava-anim/frame-00.png" alt=""><img class="bw-frame" src="/assets/img/stone-lava-anim/frame-01.png" alt=""><img class="bw-frame" src="/assets/img/stone-lava-anim/frame-02.png" alt=""><img class="bw-frame" src="/assets/img/stone-lava-anim/frame-03.png" alt=""><img class="bw-frame" src="/assets/img/stone-lava-anim/frame-04.png" alt=""><img class="bw-frame" src="/assets/img/stone-lava-anim/frame-05.png" alt=""><img class="bw-frame" src="/assets/img/stone-lava-anim/frame-06.png" alt=""><img class="bw-frame" src="/assets/img/stone-lava-anim/frame-07.png" alt=""></div></div></div></div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const launchBtn = document.getElementById("launch-modal-btn");
  const modal = document.getElementById("interactive-modal");
  const closeBtn = document.getElementById("close-btn");
  const closeBg = document.getElementById("close-bg");
  
  const stepBtns = document.querySelectorAll(".bw-step-btn");
  const frames = document.querySelectorAll(".bw-frame");

  if (!launchBtn || !modal) return;

  // Open Modal
  launchBtn.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
  });

  // Close Modal
  function closeModal() {
    modal.classList.remove("is-open");
    document.body.style.overflow = ""; // Restore scrolling
  }
  
  closeBtn.addEventListener("click", closeModal);
  closeBg.addEventListener("click", closeModal);

  // Frame Navigation Logic
  stepBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      const targetFrame = parseInt(this.getAttribute("data-frame"));

      // Update Active Button Style
      stepBtns.forEach(b => b.classList.remove("is-active"));
      this.classList.add("is-active");

      // Crossfade to corresponding image
      frames.forEach((frame, index) => {
        if (index === targetFrame) {
          frame.classList.add("is-visible");
        } else {
          frame.classList.remove("is-visible");
        }
      });
    });
  });
});
</script>
