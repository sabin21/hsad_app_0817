import '../public/css/hsad_common.css';

import '../public/css/components.css';
import '../public/css/home.css';
import 'swiper/css';

import Swiper,{ Navigation, Pagination }  from 'swiper/bundle';

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
        activeSlideVideo.play();    
      },
    },
    autoplay: {
      delay: 4000,
    },
    speed:800,
    direction: 'horizontal',
  });
}
// homeVideoBar();
