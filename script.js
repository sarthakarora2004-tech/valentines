body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
}

.page {
  min-height: 100vh;
  display: none;
  justify-content: center;
  align-items: center;
  position: relative;
}

.page.active {
  display: flex;
}

/* Pastel bases */
.bg1 { background: #fff0f5; }
.bg2 { background: #fff7e6; }
.bg3 { background: #f3e8ff; }
.bg4 { background: #eafff1; }

/* LIVE FLOATING BACKGROUND */
.floating::before,
.floating::after {
  content: "💖 🍫 🧸 🌈 💕";
  position: absolute;
  font-size: 40px;
  opacity: 0.15;
  animation: float 18s linear infinite;
}

.floating::after {
  animation-duration: 25s;
  font-size: 50px;
}

@keyframes float {
  from { transform: translateY(100vh); }
  to { transform: translateY(-120vh); }
}

/* Card */
.card {
  background: rgba(255,255,255,0.95);
  padding: 40px 25px;
  border-radius: 25px;
  text-align: center;
  max-width: 420px;
  z-index: 2;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
}

/* Text animation */
.fade {
  opacity: 0;
  animation: fadeUp 1s forwards;
}

.delay1 { animation-delay: .4s; }
.delay2 { animation-delay: .8s; }

@keyframes fadeUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Buttons */
button {
  margin-top: 20px;
  padding: 12px 26px;
  border-radius: 25px;
  border: none;
  background: #ff8fab;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.hidden { display: none; }
.small { font-size: 14px; }

#confetti {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}
