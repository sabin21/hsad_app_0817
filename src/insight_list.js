import '../public/css/hsad_common.css';
import '../public/css/codrop_scroll_animation.css';
import '../public/css/article_case.css';

const accordianItem = document.getElementsByClassName('accordian__item');


for(var i=0; i < accordianItem.length; i++){
  accordianItem[i].addEventListener("mouseenter", function(){
    this.classList.add('active');
  });
  accordianItem[i].addEventListener("mouseout", function(){
    this.classList.remove('active');
  });
}
// document.querySelector('.full-accordian').addEventListener("mouseout", function(){
//   if(!accordianItem[0].classList.contains('active')){
//     accordianItem[0].classList.add('active');
//   }
// });