const modal = document.getElementById("certificate-modal");

const modalImage = document.getElementById("modal-image");

const closeBtn = document.querySelector(".close-btn");

const buttons = document.querySelectorAll(".certificate-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.style.display = "flex";

    modalImage.src = button.dataset.image;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});
const resumeModal = document.getElementById("resume-modal");

const viewResume = document.getElementById("view-resume-btn");

const closeResume = document.querySelector(".close-resume");

viewResume.addEventListener("click", function (e) {
  e.preventDefault();

  resumeModal.style.display = "flex";
});

closeResume.addEventListener("click", function () {
  resumeModal.style.display = "none";
});

resumeModal.addEventListener("click", function (e) {
  if (e.target === resumeModal) {
    resumeModal.style.display = "none";
  }
});
