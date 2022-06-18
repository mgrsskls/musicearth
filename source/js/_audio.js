import earthPositions from "./_earth";

export default () => {
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
    svgContainer: document.getElementById("SvgContainer"),
    svg: document.getElementById("Svg"),
  };

  const text = {
    notSupported: "Not supported.",
  };

  const classes = {
    playButton: "SongInfo-button--play",
    pauseButton: "SongInfo-button--pause",
    noJs: "NoJs",
    active: "is-active",
    audioSelected: "audio-selected",
    audioActive: "audio-active",
    scaledDown: "scaled-down",
  };

  let threshold = parseInt(elements.thresholdPick.value, 10);

  elements.thresholdPick.addEventListener("input", (e) => {
    threshold = parseInt(e.target.value, 10);
  });

  const circlesLen = 512;
  const circlesLenFromZero = circlesLen - 1;
  const colorMulti = 320 / circlesLen;
  const micButtonText = elements.optionMic.textContent;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const color = 60;
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

  elements.fileDrop.addEventListener("drop", (e) => dropHandler(e), false);
  elements.fileDrop.addEventListener(
    "dragover",
    (e) => dragOverHandler(e),
    false
  );
  elements.fileDrop.addEventListener(
    "dragend",
    (e) => dragEndHandler(e),
    false
  );
  elements.fileUpload.addEventListener(
    "change",
    (e) => changeFileHandling(e),
    false
  );
  elements.audioButton.addEventListener(
    "click",
    (e) => audioButtonHandling(e),
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

  elements.optionFileInput.addEventListener("click", (e) => {
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

  elements.optionMic.addEventListener("click", (e) => {
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

  /**
   *
   */
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

  /**
   *
   * @param {boolean} openDialog
   */
  function activateFileInput(openDialog) {
    mode = "file";
    elements.optionFileInput.classList.add(classes.active);

    if (openDialog) {
      elements.fileUpload.click();
    }
  }

  /**
   *
   */
  function deactivateFileInput() {
    mode = false;

    elements.optionFileInput.classList.remove(classes.active);

    document.body.classList.remove(classes.audioActive);

    stopFileInputAnalyzing();
  }

  /**
   *
   */
  function stopFileInputAnalyzing() {
    elements.audio.src = "";
    stopDrawing();
  }

  /* mic
   ********************************************************* */

  /**
   *
   */
  function activateMic() {
    mode = "mic";

    init = false;

    try {
      elements.optionMic.textContent =
        elements.optionMic.getAttribute("data-active-text");
      elements.optionMic.classList.add(classes.active);

      navigator.mediaDevices.getUserMedia({ audio: true }).then((s) => {
        stream = s;
        source = context.createMediaStreamSource(stream);
        source.connect(analyser);

        requestAnimationFrame(() => {
          elements.svg.classList.remove(classes.scaledDown);
          document.body.classList.add(
            classes.audioSelected,
            classes.audioActive
          );

          draw();
        });
      });
    } catch (e) {
      alert(text.notSupported);
    }
  }

  /**
   *
   */
  function deactivateMic() {
    if (init) {
      return;
    }

    mode = false;

    document.body.classList.remove(classes.audioActive);

    elements.optionMic.textContent = micButtonText;
    elements.optionMic.classList.remove(classes.active);

    stopMicAnalyzing();
  }

  /**
   *
   */
  function stopMicAnalyzing() {
    if (stream && stream.getTracks()) {
      stream.getTracks().forEach((track) => track.stop());
    }

    pauseDrawing();
  }

  /* handling
   ********************************************************* */

  /**
   *
   * @param {Event} e
   */
  function audioButtonHandling(e) {
    e.preventDefault();
    const el = e.target;

    if (el.classList.contains(classes.playButton)) {
      elements.audio.play();
    } else {
      elements.audio.pause();
    }
  }

  /**
   *
   * @param {Event} e
   */
  function changeFileHandling(e) {
    const file = e.target.files[0];

    elements.audio.src = URL.createObjectURL(file);
    elements.fileTitle.textContent = file.name;

    elements.audio.play();

    elements.fileUpload.value = "";
  }

  /**
   *
   */
  function playHandling() {
    requestAnimationFrame(() => {
      elements.svg.classList.remove(classes.scaledDown);
      document.body.classList.add(classes.audioSelected, classes.audioActive);
      elements.audioButton.setAttribute(
        "title",
        elements.audioButton.getAttribute("data-pause-text")
      );
      elements.audioButton.classList.remove(classes.playButton);
      elements.audioButton.classList.add(classes.pauseButton);
      draw();
    });

    init = false;
  }

  /**
   *
   */
  function pauseHandling() {
    pauseDrawing();

    elements.audioButton.setAttribute(
      "title",
      elements.audioButton.getAttribute("data-play-text")
    );
    elements.audioButton.classList.add(classes.playButton);
    elements.audioButton.classList.remove(classes.pauseButton);

    document.body.classList.remove(classes.audioActive);
    elements.svgContainer.removeAttribute("style");
  }

  /* drag'n'drop
   ********************************************************* */

  /**
   *
   * @param {Event} e
   */
  function dropHandler(e) {
    e.preventDefault();
    // If dropped items aren't files, reject them
    const dt = e.dataTransfer;

    if (dt.items) {
      const itemsLength = dt.items.length;

      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < itemsLength; i += 1) {
        if (dt.items[i].kind === "file") {
          const f = dt.items[i].getAsFile();
          elements.audio.src = URL.createObjectURL(f);
          elements.fileTitle.textContent = f.name;
          elements.audio.play();
        }
      }
    } else {
      const filesLength = dt.files.length;

      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < filesLength; i += 1) {
        const file = dt.files[i];
        elements.audio.src = URL.createObjectURL(file);
        elements.fileTitle.textContent = file.name;
        elements.audio.play();
      }
    }

    elements.fileDrop.classList.remove(classes.active);
    deactivateMic();
    activateFileInput();
  }

  /**
   *
   * @param {Event} e
   */
  function dragOverHandler(e) {
    e.preventDefault();
    elements.fileDrop.classList.add(classes.active);
  }

  /**
   *
   * @param {Event} e
   */
  function dragEndHandler(e) {
    // Remove all of the drag data
    const dt = e.dataTransfer;

    if (dt.items) {
      const itemsLength = dt.items.length;

      // Use DataTransferItemList interface to remove the drag data
      for (let i = 0; i < itemsLength; i += 1) {
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

  /**
   *
   */
  function draw() {
    analyser.getByteFrequencyData(dataArray);

    for (let i = circlesLenFromZero; i >= 0; i -= 1) {
      const val = dataArray[circlesLen - i];
      const circle = elements.circles[i];

      if (val < threshold) {
        requestAnimationFrame(() => {
          clearAnimation(circle);
        });
      } else {
        requestAnimationFrame(() => {
          circle.classList.add("animated");
          circle.style.setProperty("--scale", val);
        });
      }
    }

    if (mode === "file") {
      setProgress();
    }

    requestAnimationFrame(draw);
  }

  /**
   *
   */
  function pauseDrawing() {
    window.cancelAnimationFrame(animationFrame);

    for (let i = circlesLenFromZero; i >= 0; i -= 1) {
      clearAnimation(elements.circles[i]);
    }
  }

  /**
   *
   */
  function stopDrawing() {
    pauseDrawing();

    elements.audioButton.classList.remove(
      classes.playButton,
      classes.pauseButton
    );
    elements.fileTitle.textContent = "";
    elements.progressBar.removeAttribute("style");
  }

  /**
   *
   * @param {HTMLElement} circle
   */
  function clearAnimation(circle) {
    circle.classList.remove("animated");
  }

  /**
   *
   */
  function setProgress() {
    requestAnimationFrame(() => {
      elements.progressBar.style.setProperty(
        "--move",
        100 - 100 * (elements.audio.currentTime / duration)
      );
    });
  }

  if (AudioContext) {
    for (let i = 0; i < circlesLen; i += 1) {
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      const position = earthPositions[i];
      circle.setAttributeNS(null, "r", 1);
      circle.setAttribute("cx", position.x);
      circle.setAttribute("cy", position.y);
      circle.setAttribute("fill", `hsl(${i * colorMulti}, 100%, 50%)`);
      circle.setAttribute(
        "style",
        `transform-origin: ${position.x / 10}rem ${position.y / 10}rem`
      );

      elements.svg.appendChild(circle);
    }
  } else {
    const p = document.createElement("p");
    p.textContent = text.notSupported;
    p.setAttribute("class", classes.noJs);
    elements.svgContainer.appendChild(p);

    elements.svg.remove();
    elements.options.remove();
  }
};
