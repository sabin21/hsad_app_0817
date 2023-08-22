
//--------------------

const btnGnbOpen = document.querySelector('.btn-burger');
const gnbWrap = document.querySelector('.gnb-wrap');
const btnGnbClose = document.querySelector('.btn-gnb-close');

btnGnbOpen.addEventListener('click', function(){
  gnbWrap.classList.add('active');
});
btnGnbClose.addEventListener('click', function(){
  gnbWrap.classList.remove('active');
});

console.log('tototo')

/*------------------------*/