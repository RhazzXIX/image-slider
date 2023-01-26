
const imageSlider = (function () {
  
  // DOM
  const slider = document.createElement('div');
  slider.setAttribute('id', 'Image-Slider');

  function setImage (imageArray) {
    console.log(imageArray);
  }
  
  return {slider, setImage}
}) ();

export default imageSlider;