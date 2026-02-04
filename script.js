// Page switching
let currentPage = 1;

function nextPage(page) {
  document.getElementById(`page${currentPage}`).classList.remove("active");
  currentPage = page;
  document.getElementById(`page${currentPage}`).classList.add("active");
}

// Confetti (runs only once)
let confettiDone = false;

function celebrate() {
  if (confettiDone) return;
  confettiDone = true;

  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 6,
      spread: 70,
      origin: { y: 0.6 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// NO button dodge logic (hover + click)
const noBtn = document.getElementById("noBtn");

function dodgeNo() {
  const x = Math.random() * 70;
  const y = Math.random() * 70;

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "%";
  noBtn.style.top = y + "%";

  document.getElementById("msg").classList.remove("hide");
}
