(()=>{if(document.querySelector(".gnb-wrap")){var e=document.querySelector(".btn-burger"),t=document.querySelector(".gnb-wrap"),c=document.querySelector(".btn-gnb-close");e.addEventListener("click",(function(){t.classList.add("active")})),c.addEventListener("click",(function(){t.classList.remove("active")}))}if(document.querySelector(".btn-page-top")){var o=document.querySelector(".btn-page-top");window.addEventListener("scroll",(function(){window.scrollY>800?o.classList.add("active"):o.classList.remove("active")})),o.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}if(document.querySelector(".bp-btn-page-top")){var n=document.querySelector(".btn-page-top"),r=document.querySelector(".bp-article-wrap"),i=document.querySelector(".bp-article-inner");r.addEventListener("scroll",(function(){r.scrollY>800?n.classList.add("active"):n.classList.remove("active")})),n.addEventListener("click",(function(){i.scrollTo({top:0,behavior:"smooth"})}))}})();