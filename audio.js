/* globals earthPositions, TweenLite */

(() => {
  const elements = {
    fileUpload: document.getElementById("FileUpload"),
    fileDrop: document.getElementById("FileDrop"),
    fileTitle: document.getElementById("FileTitle"),
    audio: document.getElementById("Audio"),
    progressBar: document.getElementById("ProgressBar"),
    audioButton: document.getElementById("AudioButton"),
    circles: document.getElementsByTagName("circle"),
    options: document.getElementById("ChooseInput"),
    optionFileInput: document.querySelector(
      '.ChooseInput-option[data-type="file"]'
    ),
    optionMic: document.querySelector('.ChooseInput-option[data-type="mic"]'),
    thresholdPick: document.getElementById("ThresholdPick"),
    colorPick: document.getElementById("ColorPick"),
    scalePick: document.getElementById("ScalePick"),
    svgContainer: document.getElementById("SvgContainer"),
    svg: document.getElementById("Svg")
  };

  const text = {
    not_supported: "Not supported."
  };

  const classes = {
    playButton: "SongInfo-button--play",
    pauseButton: "SongInfo-button--pause",
    no_js: "NoJs",
    active: "is-active",
    audio_selected: "audio-selected",
    audio_active: "audio-active",
    scaled_down: "scaled-down"
  };

  let threshold = parseInt(elements.thresholdPick.value, 10);
  let color = parseInt(elements.colorPick.value, 10);
  let scale = parseInt(elements.scalePick.value, 10);

  let defaultCircleColor;

  elements.thresholdPick.addEventListener("input", e => {
    threshold = parseInt(e.target.value, 10);
  });

  elements.colorPick.addEventListener("input", e => {
    color = parseInt(e.target.value, 10);
  });

  const colorPickRange =
    parseInt(elements.colorPick.min, 10) + parseInt(elements.colorPick.max, 10);
  elements.scalePick.addEventListener("input", e => {
    scale = colorPickRange - e.target.value;
  });

  const circlesLen = 512;
  const colorMulti = 320 / circlesLen;
  const micButtonText = elements.optionMic.innerText;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  let context;
  let analyser;
  let dataArray;
  let source;
  let mode = false;
  let init = true;
  let animationFrame;
  let duration;
  let stream;
  let audioInitialized;

  elements.fileDrop.addEventListener("drop", e => dropHandler(e), false);
  elements.fileDrop.addEventListener(
    "dragover",
    e => dragOverHandler(e),
    false
  );
  elements.fileDrop.addEventListener("dragend", e => dragEndHandler(e), false);
  elements.fileUpload.addEventListener(
    "change",
    e => changeFileHandling(e),
    false
  );
  elements.audioButton.addEventListener(
    "click",
    e => audioButtonHandling(e),
    false
  );
  elements.audio.addEventListener("play", playHandling, false);
  elements.audio.addEventListener("pause", pauseHandling, false);

  // Gets audio file duration
  elements.audio.addEventListener(
    "canplaythrough",
    () => {
      duration = elements.audio.duration;
    },
    false
  );

  elements.optionFileInput.addEventListener("click", e => {
    const elem = e.target;

    if (!audioInitialized) {
      initAudio();
    }

    if (elem.classList.contains(classes.active)) {
      activateFileInput(true);
    } else {
      deactivateMic();
      activateFileInput(true);
    }
  });

  elements.optionMic.addEventListener("click", e => {
    const elem = e.target;

    if (!audioInitialized) {
      initAudio();
    }

    if (elem.classList.contains(classes.active)) {
      deactivateMic();
    } else {
      deactivateFileInput();
      activateMic();
    }
  });

  function initAudio() {
    context = new AudioContext();
    analyser = context.createAnalyser();
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    source = context.createMediaElementSource(elements.audio);
    audioInitialized = true;

    source.connect(context.destination);
    source.connect(analyser);

    analyser.fftSize = 2048;
  }

  /* file input
   ********************************************************* */

  function activateFileInput(openDialog) {
    mode = "file";
    elements.optionFileInput.classList.add(classes.active);

    if (openDialog) {
      elements.fileUpload.click();
    }
  }

  function deactivateFileInput() {
    mode = false;

    elements.optionFileInput.classList.remove(classes.active);

    document.body.classList.remove(classes.audio_active);

    stopFileInputAnalyzing();
  }

  function stopFileInputAnalyzing() {
    elements.audio.src = "";
    stopDrawing();
  }

  /* mic
   ********************************************************* */

  function activateMic() {
    mode = "mic";

    init = false;

    try {
      elements.optionMic.innerText = elements.optionMic.getAttribute(
        "data-active-text"
      );
      elements.optionMic.classList.add(classes.active);

      navigator.mediaDevices.getUserMedia({ audio: true }).then(s => {
        stream = s;
        source = context.createMediaStreamSource(stream);
        source.connect(analyser);
        draw();
      });
    } catch (e) {
      alert(text.not_supported);
    }
  }

  function deactivateMic() {
    if (init) {
      return;
    }

    mode = false;

    document.body.classList.remove(classes.audio_active);

    elements.optionMic.innerText = micButtonText;
    elements.optionMic.classList.remove(classes.active);

    stopMicAnalyzing();
  }

  function stopMicAnalyzing() {
    if (stream && stream.getTracks()) {
      stream.getTracks().forEach(track => track.stop());
    }

    pauseDrawing();
  }

  /* handling
   ********************************************************* */

  function audioButtonHandling(e) {
    e.preventDefault();
    const el = e.target;

    if (el.classList.contains(classes.playButton)) {
      elements.audio.play();
    } else {
      elements.audio.pause();
    }
  }

  function changeFileHandling(e) {
    const file = e.target.files[0];

    elements.audio.src = URL.createObjectURL(file);
    elements.fileTitle.innerText = file.name;

    elements.audio.play();

    elements.fileUpload.value = "";
  }

  function playHandling() {
    draw();
    elements.audioButton.setAttribute(
      "title",
      elements.audioButton.getAttribute("data-pause-text")
    );
    elements.audioButton.classList.remove(classes.playButton);
    elements.audioButton.classList.add(classes.pauseButton);

    init = false;
  }

  function pauseHandling() {
    pauseDrawing();

    elements.audioButton.setAttribute(
      "title",
      elements.audioButton.getAttribute("data-play-text")
    );
    elements.audioButton.classList.add(classes.playButton);
    elements.audioButton.classList.remove(classes.pauseButton);

    document.body.classList.remove(classes.audio_active);
    elements.svgContainer.removeAttribute("style");
  }

  /* drag'n'drop
   ********************************************************* */

  function dropHandler(e) {
    e.preventDefault();
    // If dropped items aren't files, reject them
    const dt = e.dataTransfer;
    let i;

    if (dt.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (i = 0; i < dt.items.length; i += 1) {
        if (dt.items[i].kind === "file") {
          const f = dt.items[i].getAsFile();
          elements.audio.src = URL.createObjectURL(f);
          elements.fileTitle.innerText = f.name;
          elements.audio.play();
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (i = 0; i < dt.files.length; i += 1) {
        const file = dt.files[i];
        elements.audio.src = URL.createObjectURL(file);
        elements.fileTitle.innerText = file.name;
        elements.audio.play();
      }
    }

    elements.fileDrop.classList.remove(classes.active);
    deactivateMic();
    activateFileInput();
  }

  function dragOverHandler(e) {
    e.preventDefault();
    elements.fileDrop.classList.add(classes.active);
  }

  function dragEndHandler(e) {
    // Remove all of the drag data
    const dt = e.dataTransfer;
    let i;

    if (dt.items) {
      // Use DataTransferItemList interface to remove the drag data
      for (i = 0; i < dt.items.length; i += 1) {
        dt.items.remove(i);
      }
    } else {
      // Use DataTransfer interface to remove the drag data
      e.dataTransfer.clearData();
    }

    elements.fileDrop.classList.remove(classes.active);
    deactivateMic();
    activateFileInput();
  }

  /* drawing
   ********************************************************* */

  function draw() {
    elements.svg.classList.remove(classes.scaled_down);
    document.body.classList.add(classes.audio_selected);
    document.body.classList.add(classes.audio_active);

    animationFrame = requestAnimationFrame(draw);

    let i;

    analyser.getByteFrequencyData(dataArray);

    for (i = circlesLen - 1; i >= 0; i -= 1) {
      const val = dataArray[circlesLen - i];
      const circle = elements.circles[i];

      if (val < threshold) {
        clearAnimation(circle);
      } else {
        TweenLite.to(circle, 0, {
          scale: val / scale,
          fill: `hsl(${i * colorMulti + color}, 100%, 50%)`,
          transformOrigin: "center center"
        });
      }
    }

    if (mode === "file") {
      setProgress();
    }
  }

  function pauseDrawing() {
    window.cancelAnimationFrame(animationFrame);

    for (let i = circlesLen - 1; i >= 0; i -= 1) {
      clearAnimation(elements.circles[i]);
    }
  }

  function stopDrawing() {
    pauseDrawing();

    elements.audioButton.classList.remove(classes.playButton);
    elements.audioButton.classList.remove(classes.pauseButton);
    elements.fileTitle.innerText = "";
    elements.progressBar.removeAttribute("style");
  }

  function clearAnimation(circle) {
    TweenLite.to(circle, 0.75, {
      scale: 1,
      fill: defaultCircleColor
    });
  }

  function setProgress() {
    elements.progressBar.style.transform = `translateX(-${100 -
      100 * (elements.audio.currentTime / duration)}%)`;
  }

  if (AudioContext) {
    for (let i = 0; i < circlesLen; i += 1) {
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttributeNS(null, "r", 1);
      circle.setAttribute("cx", earthPositions[i].x);
      circle.setAttribute("cy", earthPositions[i].y);

      elements.svg.appendChild(circle);
    }

    defaultCircleColor = window.getComputedStyle(
      elements.svg.querySelector("circle")
    ).fill;
  } else {
    const p = document.createElement("p");
    p.innerText = text.not_supported;
    p.setAttribute("class", classes.no_js);
    elements.svgContainer.appendChild(p);

    elements.svg.remove();
    elements.options.remove();
  }
})();
