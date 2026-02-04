function nextPage(num) {
  document.querySelectorAll(".container").forEach(c => c.classList.add("hidden"));
  document.getElementById("page" + num).classList.remove("hidden");
}

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const chillyText = document.getElementById("chilly");

noBtn.addEventListener("mouseover", () => {
  chillyText.classList.remove("hidden");

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
  document.querySelectorAll(".container").forEach(c => c.classList.add("hidden"));
  document.getElementById("yesPage").classList.remove("hidden");
});
