const imageSlider = (function () {
  // DOM
  const slider = document.createElement("div");
  slider.setAttribute("id", "Image-Slider");

  const buttonLeft = document.createElement("button");
  buttonLeft.textContent = "<";
  buttonLeft.setAttribute("id", "sliderLeftButton");
  slider.appendChild(buttonLeft);

  const buttonRight = document.createElement("button");
  buttonRight.textContent = ">";
  buttonRight.setAttribute("id", "sliderRightButton");
  slider.appendChild(buttonRight);

  const miniButtonBase = document.createElement("div");
  const miniButtonContainer = document.createElement("ul");
  miniButtonContainer.setAttribute("id", "miniButtonContainer");
  miniButtonBase.appendChild(miniButtonContainer);
  slider.appendChild(miniButtonBase);

  function setStyle(element) {
    if (element === buttonLeft || element === buttonRight) {
      element.style.position = "absolute";
      element.style.appearance = "none";
      element.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
      element.style.border = 0;
      element.style.height = "100%";
      element.style.color = "white";
      if (element === buttonRight) element.style.right = 0;

      element.addEventListener("mouseover", (event) => {
        event.stopPropagation();
        element.style.fontSize = "1.2rem";
        element.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
      });
      element.addEventListener("mouseout", (event) => {
        event.stopPropagation();
        element.style.fontSize = "1rem";
        element.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
      });
      element.addEventListener("mousedown", (event) => {
        event.stopPropagation();
        element.style.color = "rgb(201, 255, 237)";
      });
      element.addEventListener("mouseup", (event) => {
        event.stopPropagation();
        element.style.color = "white";
      });
    }
    if (element === miniButtonBase) {
      element.style.position = "absolute";
      element.style.bottom = 0;
      element.style.height = "10%";
      element.style.width = "70%";
      element.style.left = "15%";
      element.style.display = "flex";
      element.style.justifyContent = "center";
    }
  }

  setStyle(buttonLeft);
  setStyle(buttonRight);
  setStyle(miniButtonBase);

  function setImage(imageArray) {
    console.log(imageArray);
  }

  return { slider, setImage };
})();

export default imageSlider;
