export default () => {
  const elements = {
    svgContainer: document.getElementById("SvgContainer"),
    informationButton: document.getElementById("InformationButton"),
    information: document.getElementById("Information")
  };

  const classes = {
    active: "is-active",
    audio_active: "audio-active",
    out_of_viewport: "out-of-viewport"
  };

  const midpointX = window.innerWidth / 2;
  const midpointY = window.innerHeight / 2;
  const rotateMulti = 10;

  addMoveMapListener();
  addInformationButtonListener();

  /* moving the map
   ********************************************************* */

  function addMoveMapListener() {
    document.addEventListener("mousemove", e => rotate(e), false);
    document.addEventListener(
      "mouseout",
      event => {
        if (!document.body.classList.contains(classes.audio_active)) return;

        const e = event || window.event;
        const from = e.relatedTarget || e.toElement;
        if (!from || from.nodeName === "HTML") {
          elements.svgContainer.classList.add(classes.out_of_viewport);
        }
      },
      false
    );
  }

  function rotate(e) {
    if (!document.body.classList.contains(classes.audio_active)) return;

    const valX = ((e.clientX - midpointX) / midpointX) * rotateMulti;
    const valY = ((midpointY - e.clientY) / midpointY) * rotateMulti;
    elements.svgContainer.classList.remove(classes.out_of_viewport);
    elements.svgContainer.style.transform = `perspective(1000px) rotateY(${valX}deg) rotateX(${valY}deg)`;
  }

  /* opening the info window
   ********************************************************* */

  function addInformationButtonListener() {
    elements.informationButton.addEventListener("click", e => {
      e.preventDefault();

      informationOverlayHandling();
    });

    elements.information.addEventListener("click", e => {
      e.stopPropagation();

      if (e.target === elements.information) {
        closeInformationOverlay();
      }
    });
  }

  function informationOverlayHandling() {
    elements.information.classList.toggle(classes.active);
    elements.informationButton.blur();
  }

  function closeInformationOverlay() {
    elements.information.classList.remove(classes.active);
  }
};
