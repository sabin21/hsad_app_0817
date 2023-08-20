import '../public/css/hsad_common.css';
import '../public/css/home.css';
import '../public/css/components.css';

const homeDummyImg = document.querySelector('.home-img-2-1');
let isFirstImage = true;

homeDummyImg.addEventListener('click', function(){
  if(isFirstImage){
    homeDummyImg.src = './img/dummy/home/home_2_1.png';
  } else {
    homeDummyImg.src = './img/dummy/home/home_2_2.png';
  }
  isFirstImage = !isFirstImage;
});