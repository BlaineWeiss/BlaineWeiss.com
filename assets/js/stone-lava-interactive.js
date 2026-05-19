document.addEventListener("DOMContentLoaded", function () {
  const launchBtn = document.getElementById("launch-analysis-btn");
  const modal = document.getElementById("analysis-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  const closeBg = document.getElementById("close-modal-bg");
  
  const stepBtns = document.querySelectorAll(".bw-step-btn");
  const interactiveFrames = document.querySelectorAll(".bw-interactive-frame");

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

  // Interactive Frame Navigation for the 7-Frame Animation
  stepBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      const targetFrame = parseInt(this.getAttribute("data-frame"));

      // Update button styling
      stepBtns.forEach(b => b.classList.remove("is-active"));
      this.classList.add("is-active");

      // Crossfade to the specific image frame
      interactiveFrames.forEach((frame, index) => {
        if (index === targetFrame) {
          frame.classList.add("is-visible");
        } else {
          frame.classList.remove("is-visible");
        }
      });
    });
  });
});
