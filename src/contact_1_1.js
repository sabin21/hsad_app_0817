import '../public/css/hsad_common.css';
import '../public/css/components.css';
import lottie from 'lottie-web';

const lottieCanvas = document.getElementById('pict-area');

lottie.loadAnimation({
  container: lottieCanvas, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './lottie/animation_lljx9mgf.json'
});

const homeDummyImg = document.querySelector('.contact-con');
let isFirstImage = true;

homeDummyImg.addEventListener('click', function(){
  if(isFirstImage){
    homeDummyImg.src = './img/dummy/contact_con_1.png';
  } else {
    homeDummyImg.src = './img/dummy/contact_con_2.png';
  }
  isFirstImage = !isFirstImage;
});



