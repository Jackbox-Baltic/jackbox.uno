"use strict";

const app = document.getElementById("app");
let homepages = [ '/', '/index.html' ]; 

if(app){
    app.insertAdjacentHTML('beforeend', '<div class="screenblocker center"><p class="lang-screenblocker">Unfortunately, this screen scale isn\'t supported!</p></div>');
    if(homepages.indexOf(window.location.pathname) >= 0) {
        app.insertAdjacentHTML('beforeend', `
        <div data-v-8691596e="" data-v-2ba6adc4="" class="top-bar">
            <nav data-v-082a7a6a="" data-v-8691596e="" class="nav screen">
                <ul id="clang" data-v-082a7a6a="">
                    <li data-v-082a7a6a="" class="title">Jackbox Baltic</li>
                    <li data-v-082a7a6a="" class="version">
                        <a data-v-1e5a97d3="" class="lang-site"><a data-v-1e5a97d3="" id="sv"></a></a>
                    </li>
                    <li data-v-082a7a6a="" class="moderator">
                        <a data-v-082a7a6a="" href="https://jackbox.tv" class="">ENGLISH</a>
                    </li>
                    <li data-v-082a7a6a="">
                        <a data-v-082a7a6a="" target="_blank" class="open-popup ee"></a>
                    </li>
                    <li data-v-082a7a6a="">
                        <a data-v-082a7a6a="" href="https://lv.jackbox.uno" target="_blank" class="lv"></a>
                    </li>
                    <li data-v-082a7a6a="">
                        <a data-v-082a7a6a="" target="_blank" class="open-popup lt"></a>
                    </li>
                    <li data-v-082a7a6a="">
                        <a data-v-082a7a6a="" href="https://discord.gg/TNK3wsHHUW" target="_blank">DISCORD SERVER<div data-v-082a7a6a="" class="indicator"></div></a>
                    </li>
                </ul>
            </nav>
        </div>
        <div data-v-a0fd2f6c="" id="modal" class="modal jbg modal-transition-leave">
            <div data-v-e6c8e964="" data-v-a0fd2f6c="" class="jbg error content">
            <img data-v-e6c8e964="" src="/assets/images/bubs.gif" alt="M Bubs" class="bubz image">
            <h3 data-v-e6c8e964="" class="text lang-modaloops">Oops...</h3>
            <h3 data-v-e6c8e964="" class="subtext lang-modalsubtext">At the moment, the site is still not ready. Clicking on "OK" will take you to the English version.</h3>
            <div data-v-e6c8e964="" class="actions"><button data-v-e6c8e964="" onclick="location.href='https://jackbox.tv'">ОК</button></div>
            </div>
        </div>
        <div id="snowflakeContainer" style="display: block;">
            <span class="snowflake"></span>
        </div>
      `);
      console.log('yes');
    };
}

if(document.getElementById("sv")){
    function siteversion() {
        let element = document.getElementById("sv");
        element.innerHTML = "221227";
    }
    siteversion()
}

if(document.getElementById("tct")){
    function ladtheme() {
        const toggleTheme = document.querySelector('.toggle-theme')
        console.log('.toggle-theme is found!')
        let el = document.documentElement
        let x = document.getElementById("tct");
        console.log('tct is found!')
    
        toggleTheme.addEventListener('click', () => {
            console.log('It works!');
            if (el.hasAttribute('data-theme')) {
                el.removeAttribute('data-theme');
                console.log('The light theme has been turned on!');
                //x.classList.remove("lang-toggleladoff");
                //x.classList.add("lang-toggleladon");
                x.innerHTML = '🌛';
                localStorage.removeItem('theme');
                console.log('Item removed from local storage');
            } else {
                el.setAttribute('data-theme', 'dark');
                console.log('The dark theme has been turned on!');
                //x.classList.remove("lang-toggleladon");
                //x.classList.add("lang-toggleladoff");
                x.innerHTML = '🌞';
                localStorage.setItem('theme', 'dark');
                console.log('Item added in local storage');
            }
        })
    
        if (localStorage.getItem('theme') !== null) {
            el.setAttribute('data-theme', 'dark');
            //x.classList.add("lang-toggleladoff");
            x.innerHTML = '🌞';
        } else {
            //x.classList.add("lang-toggleladon");
            x.innerHTML = '🌛';
        }
    }
    ladtheme()
    console.log('LAD working!');
}

if(document.getElementById("modal")){
    let popupBg = document.querySelector('.modal');
    let popup = document.querySelector('.content');
    let openPopupButtons = document.querySelectorAll('.open-popup');
    let closePopupButton = document.querySelector('.actions');
    
    openPopupButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            popupBg.classList.add('active');
            popup.classList.add('active');
        })
    });
    
    closePopupButton.addEventListener('click', () => {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    });
    
    document.addEventListener('click', (e) => {
        if (e.target === popupBg) {
            popupBg.classList.remove('active');
            popup.classList.remove('active');
        }
    });
}

if(document.getElementById("accordion")){
    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        
        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
        
        // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
        //   currentlyActiveAccordionItemHeader.classList.toggle("active");
        //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        // }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
        accordionItemBody.style.maxHeight = 0;
        }
        
    });
    });
    console.log('FAQ working!');
}

window.onload = function () {
    const carousels = document.querySelectorAll(".carousel") || [];
  
    carousels.forEach((carousel) => {
      setupCarousel(carousel);
    });
  
    function setupCarousel(carousel) {
        const nextButton = carousel.querySelector('.carousel-button-right');
        const prevButton = carousel.querySelector('.carousel-button-left');
        const track = carousel.querySelector('.carousel-track');

        const dotsNav = carousel.querySelector('.carousel-nav');
        const dots = Array.from(dotsNav.children);

        const slides = Array.from(track.children);
        const slideWidth = slides[0].getBoundingClientRect().width;
        console.log(slideWidth);
        const targetIndex = slides.findIndex;
    
        const setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        };
        slides.forEach(setSlidePosition);
    
        function moveToSlide(track, currentSlide, targetSlide) {
            track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        }
    
        function updateDots(currentDot, targetDot) {
            currentDot.classList.remove('current-slide');
            targetDot.classList.add('current-slide');
        }
    
        function hideShowArows(slides, prevButton, nextButton, targetIndex) {
            if (targetIndex === 0) {
                prevButton.classList.add('is-hidden');
                nextButton.classList.remove('is-hidden');
            } else if (targetIndex === slides.length - 1) {
                prevButton.classList.remove('is-hidden');
                nextButton.classList.add('is-hidden'); 
            } else {
                prevButton.classList.remove('is-hidden');
                nextButton.classList.remove('is-hidden'); 
            }
        }

        nextButton.addEventListener('click', event => {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling;
            const currentDot = dotsNav.querySelector('.current-slide');
            const nextDot = currentDot.nextElementSibling;
            const nextIndex = slides.findIndex(slide => slide === nextSlide);
    
            moveToSlide(track, currentSlide, nextSlide);
            updateDots(currentDot, nextDot);
            hideShowArows(slides, prevButton, nextButton, nextIndex);
        });
    
        prevButton.addEventListener('click', event => {
            const currentSlide = track.querySelector('.current-slide');
            const prevSlide = currentSlide.previousElementSibling;
            const currentDot = dotsNav.querySelector('.current-slide');
            const prevDot = currentDot.previousElementSibling;
            const prevIndex = slides.findIndex(slide => slide === prevSlide);
    
            moveToSlide(track, currentSlide, prevSlide);
            updateDots(currentDot, prevDot);
            hideShowArows(slides, prevButton, nextButton, prevIndex);
        });
    
        dotsNav.addEventListener('click', event => {
            const targetDot = event.target.closest('button');
    
            const currentSlide = track.querySelector('.current-slide');
            const currentDot = dotsNav.querySelector('.current-slide');
            const targetIndex = dots.findIndex(dot => dot === targetDot);
            const targetSlide = slides[targetIndex];

            if (!targetDot) return;
            console.log('OMG. YOU\'RE CLICKED ON THE ' + targetIndex + ' DOT!');
    
            moveToSlide(track, currentSlide, targetSlide);
            updateDots(currentDot, targetDot);
            hideShowArows(slides, prevButton, nextButton, targetIndex);
        });
    }
}

console.log(window.location.pathname)

// Credits
// Carousel: https://codepen.io/brianmarco/pen/WNdaNov
// Accordion: https://codepen.io/Coding_Journey/pen/RwNgYmm
// Homepages: https://stackoverflow.com/questions/28394649/check-if-homepage-using-window-location
