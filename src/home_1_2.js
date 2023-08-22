import '../public/css/hsad_common.css';

import '../public/css/components.css';
import '../public/css/home.css';

//-------------------
const homePopup = document.querySelector('.popup-outer');
const btnSelects = document.querySelectorAll('.btn-select');

btnSelects.forEach(function(btnSelect){
  btnSelect.addEventListener('click', function(){
    homePopup.classList.add('active');
  });
})
homePopup.addEventListener('click', function(){
  homePopup.classList.remove('active');
});

