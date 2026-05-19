---
layout: home
title: Awake Fluorescence Imaging
subtitle: by Blaine Weiss
cover-img: "/assets/img/TESTsupp1.gif"
---

<style>
.bw-section {
  margin: 2.5rem 0;
}

.bw-hero {
  background: linear-gradient(135deg, #111827, #374151);
  color: white;
  padding: 2.25rem;
  border-radius: 22px;
  box-shadow: 0 18px 45px rgba(0,0,0,0.22);
}

.bw-hero h1,
.bw-hero p {
  color: white;
}

.bw-hero h1 {
  margin-top: 0;
  font-size: 2rem;
}

.bw-hero p {
  font-size: 1.05rem;
  line-height: 1.65;
}

.bw-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1.2rem;
}

.bw-badge {
  display: inline-block;
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.35);
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.82rem;
  color: white;
}

.bw-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
  gap: 1rem;
  margin: 1.8rem 0 2.2rem;
}

.bw-metric {
  text-align: center;
  padding: 1.15rem;
  border-radius: 16px;
  background: #f8fafc;
  border: 1px solid #e5e7eb;
}

.bw-metric strong {
  display: block;
  font-size: 1.65rem;
  color: #111827;
}

.bw-split {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(240px, 0.85fr);
  gap: 2rem;
  align-items: center;
  margin: 2rem 0;
}

.bw-image {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 14px 36px rgba(0,0,0,0.18);
}

.bw-banner {
  background: linear-gradient(90deg, #111827, #374151);
  color: white;
  padding: 1.5rem;
  border-radius: 18px;
  margin: 2.75rem 0 1.25rem;
}

.bw-banner h2,
.bw-banner p {
  color: white;
  margin: 0;
}

.bw-banner p {
  margin-top: 0.4rem;
}

.bw-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.bw-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 1.35rem;
  box-shadow: 0 10px 28px rgba(0,0,0,0.07);
  border: 1px solid #eeeeee;
}

.bw-card h3 {
  margin-top: 0;
  color: #111827;
}

.bw-project {
  border-left: 5px solid #c2410c;
  background: #fff7ed;
  padding: 1.35rem;
  border-radius: 16px;
  margin: 1rem 0;
}

.bw-project h3 {
  margin-top: 0;
}

.bw-project ul,
.bw-card ul {
  padding-left: 1.25rem;
}

.bw-cta {
  text-align: center;
  padding: 2rem;
  background: #0f172a;
  color: white;
  border-radius: 22px;
  margin: 3rem 0;
}

.bw-cta h2,
.bw-cta p {
  color: white;
}

.bw-cta a {
  color: #93c5fd;
  font-weight: 700;
}

@media (max-width: 800px) {
  .bw-split {
    grid-template-columns: 1fr;
  }
}
</style>





<style>
/* Full-width hero that breaks out of Beautiful Jekyll's narrow content column */
.bw-full-hero {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  min-height: 940px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: #111827;
}

/* Replace the background-image URL with your wide image/GIF/thumbnail */
.bw-full-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--hero-image) /* url("/assets/img/LAVAconceptart.png"); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.02);
  z-index: 0;
}

/* Dark overlay so text stays readable */
.bw-full-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      90deg,
      rgba(15, 23, 42, 0.5) 0%,
      rgba(15, 23, 42, 0.3) 45%,
      rgba(15, 23, 42, 0.1) 100%
    );
  z-index: 1;
}

.bw-full-hero-inner {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
}

.bw-full-hero-content {
  max-width: 680px;
}

.bw-full-hero-kicker {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.28);
  color: white;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.bw-full-hero h1 {
  margin: 0 0 1rem;
  color: white;
  font-size: clamp(2.35rem, 5vw, 4.75rem);
  line-height: 1.02;
  letter-spacing: -0.045em;
}

.bw-full-hero p {
  color: rgba(255,255,255,0.9);
  font-size: clamp(1.05rem, 1.8vw, 1.3rem);
  line-height: 1.65;
  margin: 0 0 1.6rem;
}

.bw-full-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.bw-hero-button {
  display: inline-block;
  padding: 0.75rem 1.1rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.bw-hero-button:hover {
  transform: translateY(-2px);
  text-decoration: none;
}

.bw-hero-button-primary {
  background: white;
  color: #111827 !important;
  box-shadow: 0 12px 28px rgba(0,0,0,0.25);
}

.bw-hero-button-secondary {
  background: rgba(255,255,255,0.12);
  color: white !important;
  border: 1px solid rgba(255,255,255,0.35);
}

@media (max-width: 700px) {
  .bw-full-hero {
    min-height: 560px;
    align-items: flex-end;
  }

  .bw-full-hero::after {
    background:
      linear-gradient(
        180deg,
        rgba(15, 23, 42, 0.1) 0%,
        rgba(15, 23, 42, 0.2) 65%,
        rgba(15, 23, 42, 0.3) 100%
      );
  }

  .bw-full-hero-inner {
    padding: 4rem 1.15rem;
  }
}
</style>

<style>
.bw-scroll-hero {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  margin-top: 5rem;
  margin-bottom: 5rem;

  position: relative;
  min-height: 400vh;

  background: #020617;
}

.bw-scroll-hero-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  background: #020617;
}

.bw-scroll-hero-bg-original,
.bw-scroll-hero-bg-animation {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: #020617;
}

/* Below is for a static hero to receive a transition to*/
.bw-scroll-hero-bg-original {
  opacity: 1;

  background-image:
    linear-gradient(
      90deg,
      rgba(15, 23, 42, 0.55) 0%,
      rgba(15, 23, 42, 0.35) 45%,
      rgba(15, 23, 42, 0.12) 100%
    ); /* replace semicolon with , to reenable static img*/
    /* url("/assets/img/LAVAconceptart.png"); */

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  transition: opacity 1000ms ease;
}
.bw-scroll-hero-bg-original::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
      90deg,
      rgba(15, 23, 42, 0.55) 0%,
      rgba(15, 23, 42, 0.35) 45%,
      rgba(15, 23, 42, 0.12) 100%);
}
  
.bw-scroll-hero-bg-animation {
  opacity: 0;
  transition: opacity 5000ms ease;
}

.bw-scroll-hero.is-animating .bw-scroll-hero-bg-original {
  opacity: 0;
}

.bw-scroll-hero.is-animating .bw-scroll-hero-bg-animation {
  opacity: 1;
}

.bw-anim-frame {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  opacity: 0;
  z-index: 0;

  transition: opacity 500ms linear;
  will-change: opacity;
}

.bw-anim-frame.is-current {
  opacity: 1;
  z-index: 1;
}

.bw-anim-frame.is-entering {
  opacity: 1;
  z-index: 2;
}
  
  .bw-scroll-hero-content-wrap {
  position: relative;
  z-index: 2;

  width: min(1180px, calc(100% - 3rem));
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(320px, 1.15fr);
  gap: 3rem;
  align-items: center;
}

.bw-scroll-hero-text {
  max-width: 620px;
}

.bw-scroll-hero-text h1 {
  margin: 0 0 1rem;
  color: white;
  font-size: clamp(2.75rem, 6vw, 5.75rem);
  line-height: 0.95;
  letter-spacing: -0.045em;
}

.bw-scroll-hero-text p {
  color: rgba(255,255,255,0.9);
  font-size: clamp(1.05rem, 1.8vw, 1.3rem);
  line-height: 1.65;
  margin: 0 0 1.6rem;
}

.bw-hero-description {
  margin-top: 1.2rem !important;
  max-width: 560px;
  color: rgba(255,255,255,0.76) !important;
  font-size: 1rem !important;
}
.bw-scroll-hero-bg-video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}
  
  

@media (max-width: 800px) {
  .bw-scroll-hero {
    min-height: 170vh;
  }

  .bw-scroll-hero-content-wrap {
    grid-template-columns: 1fr;
    align-items: start;
    align-content: start;

    padding-top: 18vh;
    padding-bottom: 2rem;
  }

  .bw-scroll-hero-text {
    max-width: 100%;
  }

  .bw-scroll-hero-bg-original {
    background-position: center right;
  }

  .bw-anim-frame {
    object-position: center right;
  }
}

  
</style>






<div class="bw-hero">
  <h1>Welcome!.</h1>

  <p>
    My name is Blaine, I am a graduate student at the University of Kentucky and a researcher at the Sanders-Brown Center on Aging. My work focuses on <strong>awake intravital fluorescence microscopy</strong>, <strong>mouse models of dementia</strong>, <strong>astrocyte calcium signaling</strong>, <strong>vascular dynamics</strong>, and the development of computational tools for extracting biological meaning from complex imaging datasets.
  </p>

  <p>
    I've built this site to showcase some of my academic accomplishments and as a repository to share my experimental methods and tools used to conduct my research.
    My goal is to build and make available useful analysis systems that make difficult brain imaging experiments more quantitative, reproducible, and visually interpretable.
  </p>

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
  <div class="bw-metric">
    <strong>10</strong>
    Publications
  </div>
  <div class="bw-metric">
    <strong>20+</strong>
    Posters & presentations
  </div>
  <div class="bw-metric">
    <strong>Since 2017</strong>
    Sanders-Brown affiliation
  </div>
  <div class="bw-metric">
    <strong>In-Vivo</strong>
    Awake brain imaging
  </div>
</div>

<div class="bw-section">
  <h2>Research Focus</h2>

  <div class="bw-split">
    <div>
      <p>
        My research centers on understanding how cellular activity and cerebrovascular dynamics interact in the living brain, particularly in the context of dementia and Alzheimer’s disease-related pathology.
      </p>

      <p>
        Using awake intravital microscopy, I study activity patterns across astrocyte somata, processes, and perivascular endfeet while simultaneously examining vascular responses such as dilation and constriction. These datasets are rich, dynamic, and difficult to analyze with conventional tools, which led me to build custom software for event detection, segmentation, synchronization analysis, and vascular-cell coupling.
      </p>
    </div>

    <div>
      <img class="bw-image" src="/assets/img/LAVAdemo-composite.png" alt="Awake fluorescence microscopy example">
    </div>
  </div>
</div>



<!--
<section class="bw-full-hero"
         style="--hero-image: url('/assets/img/LAVAconceptart.png');">
  <div class="bw-full-hero-inner">
    <div class="bw-full-hero-content">
      <span class="bw-full-hero-kicker">In vivo awake microscopy · Astrocyte Ca²⁺ · Neurovascular coupling</span>

      <h1>STONE-LAVA</h1>

      <p>
       A computational framework for spatial and temporal analysis of brain activity, vascular behavior, and multimodal fluorescence imaging datasets.
      </p>


    <div class="bw-full-hero-actions">
      <a class="bw-hero-button bw-hero-button-primary"
         href="/assets/downloads/STONE-LAVA_Installer.exe"
         download>
        Get STONE-LAVA
      </a>

      <a class="bw-hero-button bw-hero-button-secondary"
       href="https://github.com/BlaineWeiss/STONE-LAVA">
        Explore STONE-LAVA
      </a>
</div>
  
    </div>
  </div>
</section>
-->


<section class="bw-scroll-hero">
  <div class="bw-scroll-hero-sticky">

  <div class="bw-scroll-hero-bg-original" aria-hidden="true">
  <video
    class="bw-scroll-hero-bg-video"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    poster="/assets/img/LAVAconceptart.png"
  >
    <source src="/assets/video/STONELAVAflowvideo.mp4" type="video/mp4">
  </video>
</div>
    <!-- <div class="bw-scroll-hero-bg-original" aria-hidden="true"></div> -->

    <div class="bw-scroll-hero-bg-animation" aria-hidden="true">
      <img class="bw-anim-frame is-current" src="/assets/img/stone-lava-anim/frame-00.png" alt="">
      <img class="bw-anim-frame" src="/assets/img/stone-lava-anim/frame-01.png" alt="">
      <img class="bw-anim-frame" src="/assets/img/stone-lava-anim/frame-02.png" alt="">
      <img class="bw-anim-frame" src="/assets/img/stone-lava-anim/frame-03.png" alt="">
      <img class="bw-anim-frame" src="/assets/img/stone-lava-anim/frame-04.png" alt="">
      <img class="bw-anim-frame" src="/assets/img/stone-lava-anim/frame-05.png" alt="">
      <img class="bw-anim-frame" src="/assets/img/stone-lava-anim/frame-06.png" alt="">
      <img class="bw-anim-frame" src="/assets/img/stone-lava-anim/frame-07.png" alt="">
    </div>


    <div class="bw-scroll-hero-content-wrap">
      <div class="bw-scroll-hero-text">
        <h1>STONE-LAVA</h1>

        <p>
          A computational framework for spatial and temporal analysis of brain activity,
          vascular behavior, and multimodal fluorescence imaging datasets.
        </p>

        <div class="bw-full-hero-actions">
          <a class="bw-hero-button bw-hero-button-primary"
             href="/assets/downloads/STONE-LAVA_Installer.exe"
             download>
            Get STONE-LAVA
          </a>

          <a class="bw-hero-button bw-hero-button-secondary"
             href="https://github.com/BlaineWeiss/STONE-LAVA">
            Explore STONE-LAVA
          </a>
        </div>

        <p class="bw-hero-description">
          Analyze cellular activity, vascular dynamics, and network-level signaling from complex awake fluorescence imaging datasets.
        </p>
      </div>
    </div>

  </div>
</section>
<script src="/assets/js/stone-lava-trigger-animation.js"></script>
<script src="/assets/js/stone-lava-gallery.js"></script>



<div class="bw-banner">
  <h2>Featured Platform: STONE-LAVA</h2>
  <p>A computational framework for spatial and temporal analysis of brain activity, vascular behavior, and multimodal fluorescence imaging datasets.</p>
</div>

<div class="bw-project">
  <h3>STONE</h3>
  <p><strong>Spatial & Temporal Observation of Network Events</strong></p>

  <p>
    STONE is designed for functional imaging analysis of cellular activity. It includes tools for activity-based cell detection, filtering, event detection, waveform extraction, and network-level synchrony analysis.
  </p>

  <ul>
    <li>Activity-informed ROI detection</li>
    <li>Subcellular signal extraction</li>
    <li>Calcium event detection</li>
    <li>Network synchrony and correlation analysis</li>
    <li>Export workflows for reproducible downstream analysis</li>
  </ul>
</div>

<div class="bw-project">
  <h3>LAVA</h3>
  <p><strong>Localized Analysis of Vascular Astrocytes</strong></p>

  <p>
    LAVA was developed to compare stimulation-induced vascular motion with local perivascular cellular signaling. It was named for its original use case: measuring astrocyte endfoot activity around cerebral arterioles.
  </p>

  <ul>
    <li>Vessel-associated ROI analysis</li>
    <li>Perivascular astrocyte/endfoot signal quantification</li>
    <li>Dilation and constriction tracking</li>
    <li>Event-locked vascular-cell comparisons</li>
    <li>Multimodal image/signal integration</li>
  </ul>
</div>

<div class="bw-section">
  <div class="bw-split">
    <div>
      <h2>Why this matters</h2>

      <p>
        Awake fluorescence imaging produces data that are spatially complex, temporally dynamic, and biologically heterogeneous. Manual analysis is often slow, subjective, and difficult to reproduce.
      </p>

      <p>
        My computational work aims to bridge this gap by creating tools that can detect biologically meaningful activity patterns, compare cellular signaling with vascular behavior, quantify network-level dynamics, preserve metadata and analysis provenance, and generate figure-ready outputs for publication and collaboration.
      </p>
    </div>

    <div>
      <img class="bw-image" src="/assets/img/PLACEHOLDER_STONE_LAVA_SCREENSHOT.png" alt="STONE-LAVA software screenshot">
    </div>
  </div>
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
<!--
<div class="bw-section">
  <h2>Publications & Scientific Output</h2>

  <p>
    My work includes peer-reviewed publications, conference presentations, poster awards, and computational tools related to neurodegeneration, brain imaging, and functional analysis.
  </p>

  <div class="bw-card-grid">
    <div class="bw-card">
      <h3>Publications</h3>
      <p>Add selected first-author and co-author publications here.</p>
      <p><strong>Weiss et al.</strong> Title of publication. <em>Journal Name</em>. Year.</p>
      <p><a href="#">Google Scholar</a> · <a href="#">PubMed</a></p>
    </div>

    <div class="bw-card">
      <h3>Posters & Presentations</h3>
      <p>Add selected conference posters, talks, and scientific presentations here.</p>
      <ul>
        <li>Markesbery Symposium</li>
        <li>AAIC</li>
        <li>Neuroscience meetings</li>
        <li>University research events</li>
      </ul>
    </div>

    <div class="bw-card">
      <h3>Recognition</h3>
      <p>Add awards, fellowships, cover art, poster awards, or invited presentation highlights here.</p>
    </div>
  </div>
</div>

<div class="bw-section">
  <h2>Featured Visuals</h2>

  <div class="bw-card-grid">
    <div class="bw-card">
      <img class="bw-image" src="/assets/img/PLACEHOLDER_FIGURE_1.gif" alt="Microscopy movie placeholder">
      <h3>Awake Imaging Movie</h3>
      <p>Short description of what this movie shows.</p>
    </div>

    <div class="bw-card">
      <img class="bw-image" src="/assets/img/PLACEHOLDER_FIGURE_2.png" alt="ROI analysis placeholder">
      <h3>Activity Detection</h3>
      <p>Short description of segmentation, ROI detection, or calcium activity extraction.</p>
    </div>

    <div class="bw-card">
      <img class="bw-image" src="/assets/img/PLACEHOLDER_FIGURE_3.png" alt="Vascular analysis placeholder">
      <h3>Vascular-Cell Coupling</h3>
      <p>Short description of arteriole motion and perivascular astrocyte signaling.</p>
    </div>
  </div>
</div>

<div class="bw-section">
  <h2>STONE-LAVA Under Construction</h2>

  <p>
    STONE-LAVA is currently being developed as a unified analysis environment for multimodal fluorescence imaging datasets.
  </p>

  <ul>
    <li>Improved event detection workflows</li>
    <li>Metadata-aware export formats</li>
    <li>Multichannel imaging compatibility</li>
    <li>Vascular-cell coupling modules</li>
    <li>Reproducible analysis outputs</li>
    <li>Publication-ready visualization tools</li>
  </ul>

  <p>
    <a href="https://github.com/BlaineWeiss/STONE-LAVA">View the GitHub Repository</a>
  </p>
</div>

<div class="bw-cta">
  <h2>Interested in collaboration?</h2>

  <p>
    I am interested in projects involving awake brain imaging, astrocyte biology, neurovascular coupling, Alzheimer’s disease models, image analysis, and computational tool development.
  </p>

  <p>
    <a href="#">View my CV</a> ·
    <a href="https://github.com/BlaineWeiss">GitHub</a> ·
    <a href="#">Google Scholar</a> ·
    <a href="mailto:YOUR_EMAIL_HERE">Contact</a>
  </p>
</div>
-->
