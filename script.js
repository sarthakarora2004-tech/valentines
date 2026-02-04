function go(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("p" + n).classList.add("active");
  if (n === 4) confettiPop();
}

const no = document.getElementById("no");
const yes = document.getElementById("yes");
const text = document.getElementById("chilly");

no.addEventListener("mouseover", () => {
  text.classList.remove("hidden");
  no.style.position = "absolute";
  no.style.left = Math.random() * 70 + "%";
  no.style.top = Math.random() * 70 + "%";
});

yes.addEventListener("click", () => go(4));

function confettiPop() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const pieces = [];
  const colors = ["#ff4d6d", "#ffd166", "#cdb4db", "#bde0fe"];

  for (let i = 0; i < 400; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      dx: (Math.random() - 0.5) * 12,
      dy: (Math.random() - 0.8) * 12,
      size: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
      p.x += p.dx;
      p.y += p.dy;
      p.dy += 0.15;

      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(animate);
  }
  animate();
}
