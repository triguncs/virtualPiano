const piano = document.querySelector('.piano');
piano.addEventListener("mousedown", (event) => {
  const key = event.target.closest(".key");
  if (!key) return;

  playNote(key);
});

function playNote(key) {
  const note = key.classList[2];
  new Audio(`sounds/${note}.mp3`).play();
}