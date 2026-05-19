<style>
/* Clean Video Hero - No more scroll hijacking */
.bw-video-hero {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  min-height: 85vh;
  display: flex;
  align-items: center;
  background: #020617;
  overflow: hidden;
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.bw-hero-video-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* Gradient overlay to ensure text readability */
.bw-video-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
      90deg,
      rgba(15, 23, 42, 0.8) 0%,
      rgba(15, 23, 42, 0.4) 45%,
      rgba(15, 23, 42, 0.1) 100%);
}

.bw-hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.bw-hero-content-inner {
  max-width: 620px;
}

.bw-hero-content h1 {
  margin: 0 0 1rem;
  color: white;
  font-size: clamp(2.75rem, 6vw, 5.75rem);
  line-height: 0.95;
  letter-spacing: -0.045em;
}

.bw-hero-content p {
  color: rgba(255,255,255,0.9);
  font-size: clamp(1.05rem, 1.8vw, 1.3rem);
  line-height: 1.65;
  margin: 0 0 1.6rem;
}

.bw-hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>

<section class="bw-video-hero" markdown="0">
  <video class="bw-hero-video-bg" autoplay muted loop playsinline preload="auto" poster="/assets/img/LAVAconceptart.png">
    <source src="/assets/video/STONELAVAflowvideo.mp4" type="video/mp4">
  </video>
  <div class="bw-hero-content">
    <div class="bw-hero-content-inner">
      <h1>STONE-LAVA</h1>
      <p>A computational framework for spatial and temporal analysis of brain activity, vascular behavior, and multimodal fluorescence imaging datasets.</p>
      <div class="bw-hero-actions">
        <a class="bw-hero-button bw-hero-button-primary" href="/assets/downloads/STONE-LAVA_Installer.exe" download>Get STONE-LAVA</a>
        <button class="bw-hero-button bw-hero-button-secondary" id="launch-analysis-btn" style="cursor: pointer;">Explore STONE-LAVA</button>
      </div>
    </div>
  </div>
</section>

<div class="bw-analysis-modal" id="analysis-modal" markdown="0">
  <div class="bw-modal-backdrop" id="close-modal-bg"></div>
  <div class="bw-modal-content">
    <div class="bw-modal-header">
      <div class="bw-modal-title"><span class="bw-status-dot"></span>STONE-LAVA Analysis Environment</div>
      <button class="bw-close-btn" id="close-modal-btn">✕</button>
    </div>
    <div class="bw-modal-body">
      <div class="bw-modal-sidebar">
        <p class="bw-sidebar-label">Execution Pipeline</p>
        <button class="bw-step-btn is-active" data-frame="0">
          <strong>1. Raw Data Input</strong><span>Load awake intravital multimodal dataset</span>
        </button>
        <button class="bw-step-btn" data-frame="2">
          <strong>2. Activity Segmentation</strong><span>Automated cellular ROI detection</span>
        </button>
        <button class="bw-step-btn" data-frame="5">
          <strong>3. Vascular Tracking</strong><span>Map perivascular endfoot & arteriole motion</span>
        </button>
        <button class="bw-step-btn" data-frame="7">
          <strong>4. Network Synchrony</strong><span>Extract synchronized events and waveforms</span>
        </button>
      </div>
      <div class="bw-modal-visualizer">
        <img class="bw-interactive-frame is-visible" src="/assets/img/stone-lava-anim/frame-00.png" alt="">
        <img class="bw-interactive-frame" src="/assets/img/stone-lava-anim/frame-01.png" alt="">
        <img class="bw-interactive-frame" src="/assets/img/stone-lava-anim/frame-02.png" alt="">
        <img class="bw-interactive-frame" src="/assets/img/stone-lava-anim/frame-03.png" alt="">
        <img class="bw-interactive-frame" src="/assets/img/stone-lava-anim/frame-04.png" alt="">
        <img class="bw-interactive-frame" src="/assets/img/stone-lava-anim/frame-05.png" alt="">
        <img class="bw-interactive-frame" src="/assets/img/stone-lava-anim/frame-06.png" alt="">
        <img class="bw-interactive-frame" src="/assets/img/stone-lava-anim/frame-07.png" alt="">
      </div>
    </div>
  </div>
</div>

/* Modal Container (Hidden by default) */
.bw-analysis-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
}

.bw-analysis-modal.is-open {
  opacity: 1;
  pointer-events: auto;
}

/* Blurred Backdrop */
.bw-modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(2, 6, 23, 0.85);
  backdrop-filter: blur(12px);
}

/* Modal Window */
.bw-modal-content {
  position: relative;
  width: 95%;
  max-width: 1200px;
  background: #0f172a;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
  overflow: hidden;
  transform: translateY(20px) scale(0.98);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.bw-analysis-modal.is-open .bw-modal-content {
  transform: translateY(0) scale(1);
}

/* Header */
.bw-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.bw-modal-title {
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.bw-status-dot {
  width: 10px;
  height: 10px;
  background: #22c55e; /* Green active dot */
  border-radius: 50%;
  box-shadow: 0 0 10px #22c55e;
}

.bw-close-btn {
  background: none;
  border: none;
  color: rgba(255,255,255,0.6);
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.2s;
}
.bw-close-btn:hover { color: white; }

/* Dashboard Body */
.bw-modal-body {
  display: grid;
  grid-template-columns: 320px 1fr;
  height: 70vh;
  min-height: 500px;
}

/* Sidebar Controls */
.bw-modal-sidebar {
  padding: 1.5rem;
  border-right: 1px solid rgba(255,255,255,0.1);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow-y: auto;
}

.bw-sidebar-label {
  color: #94a3b8;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.bw-step-btn {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.05);
  padding: 1.25rem 1rem;
  border-radius: 12px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  color: white;
}
.bw-step-btn:hover { background: rgba(255,255,255,0.08); }

.bw-step-btn.is-active {
  background: rgba(59, 130, 246, 0.15); /* Blue tint */
  border-color: #3b82f6;
  box-shadow: inset 4px 0 0 #3b82f6;
}

.bw-step-btn strong {
  display: block;
  font-size: 1.05rem;
  margin-bottom: 0.35rem;
  color: inherit;
}
.bw-step-btn span {
  display: block;
  font-size: 0.85rem;
  color: #94a3b8;
}

/* Visualizer Area */
.bw-modal-visualizer {
  position: relative;
  background: #000;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.bw-interactive-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.bw-interactive-frame.is-visible {
  opacity: 1;
}

@media (max-width: 900px) {
  .bw-modal-body { grid-template-columns: 1fr; grid-template-rows: auto 1fr; }
  .bw-modal-sidebar { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
}
