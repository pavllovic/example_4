import * as lib from 'Lib/countdownTimer/countdownTimer.js';

const CountdownTimer = lib.countdownTimer;

CountdownTimer.prototype = {
  constructor: CountdownTimer,
  initTimer: lib.initTimer,
  setInitialStateTimer: lib.setInitialStateTimer,
  setNextStateTimer: lib.setNextStateTimer,
  startTimer: lib.startTimer,
  resetTimer: lib.resetTimer,
  updateTimer: lib.updateTimer,
  updateTotalValue: lib.updateTotalValue,
  updateSecondsValue: lib.updateSecondsValue,
  updateSeconds: lib.updateSeconds,
  updateMinutesValue: lib.updateMinutesValue,
  updateMinutes: lib.updateMinutes,
  updateHoursValue: lib.updateHoursValue,
  updateHours: lib.updateHours,
  updateDaysValue: lib.updateDaysValue,
  updateDays: lib.updateDays,
  formatValue: lib.formatValue,
  updateTimerElement: lib.updateTimerElement,
};

export default CountdownTimer;
