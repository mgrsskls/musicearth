export default () => {
  const elements = {
    svgContainer: document.getElementById("SvgContainer"),
    informationButton: document.getElementById("InformationButton"),
    information: document.getElementById("Information"),
  };

  const classes = {
    active: "is-active",
    audio_active: "audio-active",
    out_of_viewport: "out-of-viewport",
  };

  addInformationButtonListener();

  /* opening the info window
   ********************************************************* */

  /**
   *
   */
  function addInformationButtonListener() {
    elements.informationButton.addEventListener("click", (e) => {
      e.preventDefault();

      informationOverlayHandling();
    });

    elements.information.addEventListener("click", (e) => {
      e.stopPropagation();

      if (e.target === elements.information) {
        closeInformationOverlay();
      }
    });
  }

  /**
   *
   */
  function informationOverlayHandling() {
    elements.information.classList.toggle(classes.active);
    elements.informationButton.blur();
  }

  /**
   *
   */
  function closeInformationOverlay() {
    elements.information.classList.remove(classes.active);
  }
};
