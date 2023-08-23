import '../public/css/hsad_common.css';
import '../public/css/components.css';
import '../public/css/capability.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from "jquery";

gsap.registerPlugin(ScrollTrigger);

//--------------------

const caseHeader = document.querySelector('.case-header');

window.addEventListener('scroll', function(){
  if(this.window.scrollY >= 104){
    caseHeader.classList.add('active');
  }else{
    caseHeader.classList.remove('active');
  }
});

//-------------------------------

class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.case-header-item').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
    element.addClass('active');
    element.siblings().removeClass('active');
	}
	
	onScroll() {
		// this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	// checkTabContainerPosition() {
	// 	let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
	// 	if($(window).scrollTop() > offset) {
	// 		$('.case-header').addClass('case-header-top');
	// 	} 
	// 	else {
	// 		$('.case-header').removeClass('case-header-top');
	// 	}
	// }
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.case-header-item').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		// $('.et-hero-tab-slider').css('width', width);
		// $('.et-hero-tab-slider').css('left', left);
	}	
}

// new StickyNavigation();

/*---------------*/

const btnBPViews = document.querySelectorAll('.btn-pink-line');
const bpArticle = document.querySelector('.bp-article-wrap');
const btnBpClose = document.querySelector('.btn-bp-close');
const bpArticleMask = document.querySelector('.bp-hero-mask');

btnBPViews.forEach(function(btnBPView){
  btnBPView.addEventListener('click', function(){
    bpArticle.classList.add('active');
		bpArticleMask.classList.add('active');
		document.body.style.overflowY = 'hidden';
  });
});

btnBpClose.addEventListener('click', function(){
	bpArticle.classList.remove('active');
	bpArticleMask.classList.remove('active');
	document.body.style.overflowY = 'scroll';
});