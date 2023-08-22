import '../public/css/hsad_common.css';
import '../public/css/components.css';
import '../public/css/home.css';
import 'swiper/css';

import Swiper,{ Navigation, Pagination }  from 'swiper/bundle';
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger);

function homeVideoBar(){
  const homeVideoSwiper = new Swiper(".hero-video-wrap", {
    slidesPerView: 2,
    spaceBetween: 80,
    centeredSlides: true,
    loop: true,
    on:{
      transitionStart: function(){      
        var videos = document.querySelectorAll('video');
        Array.prototype.forEach.call(videos, function(video){
          video.pause();
        });
      },
      transitionEnd: function(){      
        var activeIndex = this.activeIndex;
        var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
        var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
        var playPromise = activeSlideVideo.play();
        if(playPromise !== undefined){
          playPromise.then(
            function(){
              activeSlideVideo.play();   
            }
          )
          .catch(error=>{

          });
        }   
      },
    },
    autoplay: {
      delay: 4000,
    },
    speed:800,
    direction: 'horizontal',
  });
}

homeVideoBar();

//-------------------

const homePopup = document.querySelector('.popup-outer');
const btnSelects = document.querySelectorAll('.btn-select');

btnSelects.forEach(function(btnSelect){
  btnSelect.addEventListener('click', function(){
    homePopup.classList.add('active');
  });
});
homePopup.addEventListener('click', function(){
  homePopup.classList.remove('active');
});

//-------------------
const pageWrap = document.querySelector('.page-wrap');
const homeHero1 = document.getElementById("home-1-hero-1");
const homeHero2 = document.getElementById("home-1-hero-2");
const homeHero2Rect = homeHero2.getBoundingClientRect();
const viewportHeight = window.innerHeight;

window.addEventListener('scroll', function(){
  if(window.scrollY > 200){
    // window.scrollTo(0, window.innerHeight-200)
  }
  console.log(pageWrap.scrollTop);
});

//--------------------

// ScrollTrigger.create({
//   trigger: ".page-wrap",
//   start: "top top", 
//   end: "bottom +=900px",
//   pin: "#home-1-hero-1"
// });

