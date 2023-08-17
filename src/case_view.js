import '../public/css/hsad_common.css';
import '../public/css/codrop_scroll_animation.css';
import '../public/css/article_case.css';

const pageBack = document.getElementsByClassName('page__back');


function scrollBackColor(){
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  // var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var height = 5000;
  var scrolled = (winScroll / height) * 10;
  document.getElementById('page-back').style.opacity = scrolled 
}
window.onscroll = function(){
  scrollBackColor();
}