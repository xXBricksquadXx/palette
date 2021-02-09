const display = document.querySelector("#display");
const paletteDivs = document.querySelectorAll("#palette div");

// Collect all of the styles for any of the divs
const paletteStyles = getComputedStyle(paletteDivs[0]);

paletteDivs.forEach((paletteDiv, index) => {
  paletteDiv.style.setProperty(
    "background-color",

    // Use the indexed color variable value to set the bg color
    paletteStyles.getPropertyValue(`--${index}`)
  );

  paletteDiv.addEventListener("click", function handleClick() {
    display.style.setProperty("background-color", this.style.backgroundColor);
  });
});
