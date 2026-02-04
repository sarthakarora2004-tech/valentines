/* PAGE NAVIGATION */
function go(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("p" + n).classList.add("active");

  if (n === 4) launchConfetti();
}

const no = document.getElementById("no");
const yes = document.getElementById("yes");
const text = document.getElementById("chilly");

/* Playful NO */
no.addEventListener("mouseover", () => {
  text.classList.remove("hidden");
  no.style.position = "absolute";
  no.style.left = Math.random() * 70 + "%";
  no.style.top = Math.random() * 70 + "%";
});

/* YES */
yes.addEventListener("click", () => go(4));

/* CONFETTI – FULL SCREEN, ONCE */
function launchConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#ff8fab", "#ffd6e0", "#ffc2d1", "#cdb4db", "#bde0fe"];
  const pieces = [];

  for (let i = 0; i < 180; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 3 + 2,
      tilt: Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  let frames = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.d;
    });

    frames++;
    if (frames < 240) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  draw();
}
