import '../public/css/hsad_common.css';
import '../public/css/case.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from "jquery";

gsap.registerPlugin(ScrollTrigger);

//--------------------

const caseHeader = document.querySelector('.case-header');

window.addEventListener('scroll', function(){
  if(window.scrollY >= 104){
    caseHeader.classList.add('case-header-top');
  }else{
    caseHeader.classList.remove('case-header-top');
  }
});

const projectTl1 = gsap.timeline();

projectTl1
.to('.thumb-1',{width:'60%', height:'70%',  duration:1});
