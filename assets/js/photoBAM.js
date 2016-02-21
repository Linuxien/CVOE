function photoAvecBam () {

  var videoInput = document.getElementById('vid');
  var canvasInput = document.getElementById('compare');
  var canvasOverlay = document.getElementById('overlay')
  var overlayContext = canvasOverlay.getContext('2d');
  // snapshot
  var snapshot_btn = document.getElementById("snapshot_btn");
  var snapshot = document.getElementById("snapshot");
  var snapshotContext = snapshot.getContext('2d');
  // iamges
  var mask = document.getElementById("mask");
  var bam = document.getElementById("bam");
  
  var errorCallback = function (e) {
    console.log('erreur!', e);
  };
  var localMediaStream = null;

  canvasOverlay.style.position = "absolute";
  canvasOverlay.style.top = '5em';
  canvasOverlay.style.left = '5em';
  canvasOverlay.style.zIndex = '100001';
  canvasOverlay.style.display = 'block';

  // the face tracking setup

  var htracker = new headtrackr.Tracker({
    altVideo: {
      ogv: "./media/capture5.ogv",
      mp4: "./media/capture5.mp4"
    },
    calcAngles: true,
    ui: false,
    headPosition: false
  });
  htracker.init(videoInput, canvasInput);
  htracker.start();

  
  document.addEventListener("facetrackingEvent", function (event) {
    // clear canvas
    overlayContext.clearRect(0, 0, 320, 240);
    
    // once we have stable tracking, draw rectangle
    if (event.detection == "CS") {
      overlayContext.translate(event.x, event.y)
      overlayContext.rotate(event.angle - (Math.PI / 2));
      overlayContext.drawImage(mask, (-((event.width + 125) / 2)) >> 0, (-((event.height) / 2 + 25)) >> 0, event.width + 125, event.height);
      overlayContext.rotate((Math.PI / 2) - event.angle);
      overlayContext.translate(-event.x, -event.y);
      
      // on affiche bam
      overlayContext.drawImage(bam, 0, 50);
    }
  });

  snapshot_btn.addEventListener("click", function snapshot() {
    if (localMediaStream) {
      // TODO faire effet flash ?
      // TODO polaroid ?
      snapshotContext.drawImage(videoInput, 0, 0, 320, 240);
      snapshotContext.drawImage(canvasOverlay, 0, 0, 320, 240);

      htracker.stop();
//      htracker.stopStream();
      localMediaStream.getTracks()[0].stop();
      
      canvasOverlay.remove();
      videoInput.remove();
      snapshot_btn.remove();
      
      // on passe au dial suivant
      dialPage(10);
    }
  });

  navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  navigator.getUserMedia({
    video: true
  }, function (stream) {
    videoInput.src = window.URL.createObjectURL(stream);
    localMediaStream = stream;
  }, errorCallback);
}