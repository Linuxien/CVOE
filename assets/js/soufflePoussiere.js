var audioContext = null;
var meter = null;
var layer = null;
var layerCtx = null;
var WIDTH = 500;
var rafID = null;
var isBusy = false;
var img1 = new Image();
var img2 = new Image();

window.onload = function () {

  // monkeypatch Web Audio
  window.AudioContext = window.AudioContext || window.webkitAudioContext;

  // grab an audio context
  audioContext = new AudioContext();

  // Attempt to get audio input
  try {
    // monkeypatch getUserMedia
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    // ask for an audio input
    navigator.getUserMedia({
      "audio": {
        "mandatory": {
          "googEchoCancellation": "false",
          "googAutoGainControl": "false",
          "googNoiseSuppression": "false",
          "googHighpassFilter": "false"
        },
        "optional": []
      },
    }, gotStream, didntGetStream);
  } catch (e) {
    alert('getUserMedia threw exception :' + e);
  }

  // on récup le canvas
  layer = document.getElementById('appareil');
  layerCtx = layer.getContext("2d");

}


function didntGetStream() {
  alert('Stream generation failed.');
}

var mediaStreamSource = null;

function gotStream(stream) {
  // Create an AudioNode from the stream.
  mediaStreamSource = audioContext.createMediaStreamSource(stream);

  // Create a new volume meter and connect it.
  meter = createAudioMeter(audioContext);
  mediaStreamSource.connect(meter);

  img1.src = 'appareil1.png';
  img1.onload = function () {
    layerCtx.drawImage(img1, 0, 0);
  }
  img2.src = 'appareil2.png';
  img2.onload = function () {
    layerCtx.drawImage(img2, 0, 0);
  }

  // kick off the visual updating
  drawLoop();
}

function drawLoop(time) {
  // current volume
  var volume = meter.volume * WIDTH * 1.4;

  if (volume > 200) {
    var img,
      opacity = 0;

    if (isBusy) return;
    isBusy = true;

    (function fadeIn() {
      layerCtx.globalAlpha = opacity;
      layerCtx.drawImage(img1, 0, 0, layerCtx.canvas.width, layerCtx.canvas.height);
      opacity += 0.001;
      if (opacity < 1)
        requestAnimationFrame(fadeIn);
      else
        isBusy = false;
    })();

    // on coupe le micro (?)
    meter.shutdown();
    audioContext.close()
  } else {
    // set up the next visual callback
    rafID = window.requestAnimationFrame(drawLoop);
  }

}