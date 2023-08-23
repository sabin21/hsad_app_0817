
//--------------------

if(document.querySelector('.gnb-wrap')){
  const btnGnbOpen = document.querySelector('.btn-burger');
  const gnbWrap = document.querySelector('.gnb-wrap');
  const btnGnbClose = document.querySelector('.btn-gnb-close');

  btnGnbOpen.addEventListener('click', function(){
    gnbWrap.classList.add('active');
  });
  btnGnbClose.addEventListener('click', function(){
    gnbWrap.classList.remove('active');
  });
}

/*------------------------*/

if(document.querySelector('.btn-page-top')){
  const btnPageTop = document.querySelector('.btn-page-top');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 800){
      btnPageTop.classList.add('active');
    }else{
      btnPageTop.classList.remove('active');
    }
  });
  btnPageTop.addEventListener('click', function(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  });
}
if(document.querySelector('.bp-btn-page-top')){
  const bpBtnPageTop = document.querySelector('.btn-page-top');
  const bpArticle = document.querySelector('.bp-article-wrap');
  const bpArticleInner = document.querySelector('.bp-article-inner');

  bpArticle.addEventListener('scroll', function(){
    if(bpArticle.scrollY > 800){
      bpBtnPageTop.classList.add('active');
    }else{
      bpBtnPageTop.classList.remove('active');
    }
  });
  bpBtnPageTop.addEventListener('click', function(){
    bpArticleInner.scrollTo({
      top:0, behavior:'smooth'
    })
  });
}