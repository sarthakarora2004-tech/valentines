function next(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("show"));
  document.getElementById("p" + n).classList.add("show");
}

function nope() {
  document.getElementById("msg").classList.remove("hide");
}

function yes() {
  next(4);
  popConfetti();
}

function popConfetti() {
  const c = document.getElementById("confetti");
  const ctx = c.getContext("2d");
  c.width = window.innerWidth;
  c.height = window.innerHeight;

  const pieces = [];
  const colors = ["#ff4d6d","#ffd166","#cdb4db","#bde0fe","#95d5b2"];

  for (let i = 0; i < 300; i++) {
    pieces.push({
      x: c.width / 2,
      y: c.height / 2,
      dx: (Math.random() - 0.5) * 12,
      dy: (Math.random() - 0.7) * 12,
      size: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random()*colors.length)]
    });
  }

  function draw() {
    ctx.clearRect(0,0,c.width,c.height);
    pieces.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x,p.y,p.size,p.size);
      p.x += p.dx;
      p.y += p.dy;
      p.dy += 0.2;

      if (p.y > c.height) {
        p.y = -10;
        p.x = Math.random() * c.width;
      }
    });
    requestAnimationFrame(draw);
  }

  draw();
}
