let isRecording = false;
let recordingStartTime = 0;
let recordedKeys = [];

const recordBtn = document.querySelector('.js-record');
const playBtn = document.querySelector('.js-play');
const piano = document.querySelector('.piano');

piano.addEventListener("mousedown", (event) => {
  const key = event.target.closest(".key");
  if (!key) return;

  playNote(key);
});

function playNote(key) {
  const note = key.classList[2];
  new Audio(`sounds/${note}.mp3`).play();

  if (isRecording) {
    let timeOffset = Date.now() - recordingStartTime;

    recordedKeys.push({
      note: note,
      time: timeOffset
    });
  }
}

function startRecording() {
  recordedKeys = [];
  recordingStartTime = Date.now();
  isRecording = true;
}

function stopRecording() {
  isRecording = false;
}

recordBtn.addEventListener("click", function() {
  if (!isRecording) {
    startRecording();
    recordBtn.textContent = "Stop Recording";
  } else {
    stopRecording();
    recordBtn.textContent = "Start Recording";
    console.log(recordedKeys);
  }
});

function playRecording() {
  recordedKeys.forEach(function(noteObject) {
    setTimeout(function() {
      new Audio(`sounds/${noteObject.note}.mp3`).play();
    }, noteObject.time);
  });
}

playBtn.addEventListener('click', function() {
  if (recordedKeys.length === 0) return;
  playRecording();
});