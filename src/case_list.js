import '../public/css/hsad_common.css';
import '../public/css/case.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from "jquery";

gsap.registerPlugin(ScrollTrigger);

class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 90;
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
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		// let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
    let offset = 104;
		if($(window).scrollTop() > offset) {
			$('.case-header').addClass('case-header-top');
		} 
		else {
			$('.case-header').removeClass('case-header-top');
		}
	}
	
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
		$('.case-header-item-bar').css('width', width);
		$('.case-header-item-bar').css('left', left);
	}
	
}

// new StickyNavigation();

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
