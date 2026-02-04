function nextPage(num) {
  document.querySelectorAll(".card").forEach(c => c.classList.add("hidden"));
  document.getElementById("page" + num).classList.remove("hidden");
}

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const chilly = document.getElementById("chilly");

noBtn.addEventListener("mouseover", () => {
  chilly.classList.remove("hidden");
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
});

yesBtn.addEventListener("click", () => {
  document.querySelectorAll(".card").forEach(c => c.classList.add("hidden"));
  document.getElementById("yesPage").classList.remove("hidden");
});
