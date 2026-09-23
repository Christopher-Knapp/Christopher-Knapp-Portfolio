// =========================
// Certificate Modal
// =========================

const certificateModal = document.getElementById("certificate-modal");
const modalImage = document.getElementById("modal-image");
const closeCertificate = document.querySelector(".close-btn");
const certificateButtons = document.querySelectorAll(".certificate-btn");

certificateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modalImage.src = button.dataset.image;
    certificateModal.style.display = "flex";
  });
});

closeCertificate.addEventListener("click", () => {
  certificateModal.style.display = "none";
});

certificateModal.addEventListener("click", (e) => {
  if (e.target === certificateModal) {
    certificateModal.style.display = "none";
  }
});


// =========================
// Resume Modal
// =========================

const resumeModal = document.getElementById("resume-modal");
const viewResumeBtn = document.getElementById("view-resume-btn");
const closeResume = document.querySelector(".close-resume");

viewResumeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resumeModal.style.display = "flex";
});

closeResume.addEventListener("click", () => {
  resumeModal.style.display = "none";
});

resumeModal.addEventListener("click", (e) => {
  if (e.target === resumeModal) {
    resumeModal.style.display = "none";
  }
});


// =========================
// Escape Key
// =========================

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    certificateModal.style.display = "none";
    resumeModal.style.display = "none";
  }
});