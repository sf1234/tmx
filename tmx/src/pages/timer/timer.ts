import { Component, Input } from '@angular/core';
import { CountdownTimer } from './countdownTimer';

@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})

export class Timer {

  @Input() timeInSeconds: number;


  public timer: CountdownTimer;
  expired : boolean = false;
  constructor() { }

  ngOnInit() {
    this.initTimer();
    this.startTimer();
  }

  hasFinished() {
    return this.timer.hasFinished;
  }

  initTimer() {
    if (!this.timeInSeconds) { this.timeInSeconds = 0; }

    this.timer = <CountdownTimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };

    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
  }

  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  pauseTimer() {
    this.timer.runTimer = false;
  }

  resumeTimer() {
    this.startTimer();
  }

  negativeTimerTick() {

   setTimeout(() => {
     if (!this.timer.runTimer) { return; }
     this.timer.secondsRemaining++;
     this.timer.displayTime = "- "+this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
       this.negativeTimerTick();
   }, 1000);

 }
timerTick() {
   setTimeout(() => {
     if (!this.timer.runTimer) { return; }
     this.timer.secondsRemaining--;
     this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
     if (this.timer.secondsRemaining > 0) {
       this.timerTick();
     }
     else {
       this.timer.hasFinished = true;
       this.expired = true;
       this.negativeTimerTick();
     }
   }, 1000);
 }

  getSecondsAsDigitalClock(inputSeconds: number) {
    let sec_num : number = parseInt(inputSeconds.toString(), 10),
       hours: number = Math.floor(sec_num / 3600),
       minutes : number= Math.floor((sec_num - (hours * 3600)) / 60),
       seconds: number = sec_num - (hours * 3600) - (minutes * 60);
    let hoursString : string = '',
         minutesString : string = '',
         secondsString : string = '';
    hoursString = (hours < 10) ? "0" + hours : hours.toString();
    minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
    secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
    return minutesString + ':' + secondsString;
    //return hoursString + ':' + minutesString + ':' + secondsString;
  }
}
