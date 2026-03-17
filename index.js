const piano = document.querySelector('.piano');
piano.addEventListener("click", playNote);

function playNote(event) {
  if (!event.target.classList.contains("key")) {
    return;
  }

  const note = event.target.classList[2];

  new Audio(`sounds/${note}.mp3`).play();
}