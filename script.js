const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

// timeline, used to chain together multiple animations
const tl = new TimelineMax();

// element to animate (hero), duration (1sec), object with the starting position of your animation and end position

/**
 * you could bo the same with 'scaling' and more performing but is the image appears to be more squishy
 * .hero {
  height: 60%;
  width: 100%;
  position: relative;
  transform: scaleY(0.5);
}
 *
 */

// single animation
// tl.fromTo(hero, 1, {height: '0%'}, {height: '80%', ease: Power2.easeInOut});


// multiple animations chained
tl
  .fromTo(hero, 1, {height: '0%'}, {height: '80%', ease: Power2.easeInOut})
  .fromTo(hero, 1.2, {width: '100%'}, {width: '80%', ease: Power2.easeInOut})
  .fromTo(slider, 1.2, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut}, "-=1.2")
  .fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x:0}, "-=0.5")
  .fromTo(hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x:0}, "-=0.5")
  .fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x:0}, "-=0.5")
