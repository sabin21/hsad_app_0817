
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import '../public/css/app_common.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//--------------------
let darkMode = false;
function checkMode(){
  if(window.location.pathname.includes('/about')){
    document.body.classList.add('dark-mode');
    return darkMode = true;    
  }
}
//--------------------

const btnBurger = document.querySelector('.btn-burger');
btnBurger.addEventListener('click', ()=>{
  btnBurger.classList.toggle('active');
});
//--------------------
window.addEventListener('load',()=>{
  checkMode();
});
