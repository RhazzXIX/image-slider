import './styles/style.css'
import imageSlider from './scripts/image-slider';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png'
import image6 from './images/image6.png'


const body = document.querySelector('body');
const div = document.createElement('div');
div.textContent = 'Hello Up-skilling World!';
// body.appendChild(div);
body.appendChild(imageSlider.slider);

const imageArray = []

for (let i = 0; i <= 5; i += 1) {
  const image = new Image ();
  switch (i) {
    case 1:
      image.src = image2;
      break;
    case 2:
      image.src = image3;
      break;
    case 3:
      image.src = image4;
      break;
    case 4:
      image.src = image5;
      break;
    case 5:
      image.src = image6;
      break;
    default:
      image.src = image1;
  }
  imageArray.push(image)
}

console.log(imageArray);

console.log(imageSlider)
imageSlider.setImage(imageArray)