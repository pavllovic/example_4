import CarouselReview from 'Components/carousel-review/carousel-review.js';
import Form from 'Components/form/form.js';
import CountdownTimer from 'Components/timer/timer.js';

const carouseReview = new CarouselReview(document.querySelector('#carousel-review'));
const form = new Form(document.querySelector('#form-order'));
// const timer = new CountdownTimer(60 * 60 * 1000 + 60 * 1000);

const countdownTimerElement = document.querySelector('#timer-countdown');
const timeLeft = 30 * 60 * 1000;
const timer = new CountdownTimer(timeLeft, countdownTimerElement);

carouseReview.init();
form.init();
timer.initTimer();

if (module.hot) {
  module.hot.accept();
}
