export function countdownTimer(timeLeft, element) {
  this.total = timeLeft;
  this.timerElement = element;
  this.secondsElement = this.timerElement.querySelector('[data-timer="seconds"]');
  this.minutesElement = this.timerElement.querySelector('[data-timer="minutes"]');
  this.hoursElement = this.timerElement.querySelector('[data-timer="hours"]');
  this.daysElement = this.timerElement.querySelector('[data-timer="days"]');
}

export function initTimer() {
  this.setInitialStateTimer();
  this.startTimer();
}

export function setInitialStateTimer() {
  /* set timer values */
  this.updateSecondsValue();
  this.updateMinutesValue();
  this.updateHoursValue();
  this.updateDaysValue();

  /* set values in timer element */
  if(this.secondsElement) this.updateTimerElement(this.secondsElement, this.seconds);
  if(this.minutesElement) this.updateTimerElement(this.minutesElement, this.minutes);
  if(this.hoursElement) this.updateTimerElement(this.hoursElement, this.hours);
  if(this.daysElement) this.updateTimerElement(this.daysElement, this.days);
}

export function setNextStateTimer() {
  this.total <= 0 ? this.resetTimer() : this.updateTimer();
}

export function updateTimer() {
  this.updateTotalValue();
  this.updateSeconds();
}

export function updateTotalValue() {
  this.total -= 1000;
}

export function updateSecondsValue() {
  this.seconds = Math.floor((this.total / 1000) % 60);
}

export function updateMinutesValue() {
  this.minutes = Math.floor((this.total / 1000 / 60) % 60);
}

export function updateHoursValue() {
  this.hours = Math.floor((this.total / (1000 * 60 * 60)) % 24);
}

export function updateDaysValue() {
  this.days = Math.floor(this.total / (1000 * 60 * 60 * 24));
}

export function updateTimerElement(elem, value) {
  const string = (elem === this.daysElement) ? value : this.formatValue(value);
  const element = elem;
  element.innerText = string;
}

export function updateSeconds() {
  if((this.seconds === 0) && (this.total >= (59 * 1000))) this.updateMinutes();
  this.updateSecondsValue();
  this.updateTimerElement(this.secondsElement, this.seconds);
}

export function updateMinutes() {
  if((this.minutes === 0) && (this.total >= (59 * 60 * 1000))) this.updateHours();
  this.updateMinutesValue();
  this.updateTimerElement(this.minutesElement, this.minutes);
}

export function updateHours() {
  if((this.hours === 0) && (this.total >= (23 * 60 * 60 * 1000))) this.updateDays();
  this.updateHoursValue();
  this.updateTimerElement(this.hoursElement, this.hours);
}

export function updateDays() {
  this.updateDaysValue();
  this.updateTimerElement(this.daysElement, this.days);
}

export function formatValue(value) {
  return `0${value}`.slice(-2);
}

export function startTimer() {
  this.timer = setInterval(() => {
    this.setNextStateTimer();
  }, 1000);
}

export function resetTimer() {
  clearInterval(this.timer);
}
