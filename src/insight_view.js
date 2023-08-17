import '../public/css/hsad_common.css';
import '../public/css/article_case.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".article-wrap",
  start: "top top", 
  end: "bottom +=900px",
  pin: ".article-right"
});