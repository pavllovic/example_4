import * as lib from 'Lib/carousel/carousel.js';

const CarouselReview = lib.carousel;

CarouselReview.prototype = {
  constructor: CarouselReview,
  init: lib.init,
  setListeners: lib.setListeners,
  getNextSlide: lib.getNextSlide,
  getPrevSlide: lib.getPrevSlide,
  nextSlide: lib.nextSlide,
  prevSlide: lib.prevSlide,
  changeSlide: lib.changeSlide,
  activateSlide: lib.activateSlide,
  deactivateSlide: lib.deactivateSlide,
  disableControl: lib.disableControl,
  undisableControl: lib.undisableControl,
  handleEvent: lib.handleEvent,
};

export default CarouselReview;
