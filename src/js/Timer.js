export default class Timer {
    constructor(timer, timeForChose) {
        this.timer = timer
        this.timeForChose = timeForChose
    }
    countdown() {
        this.timer.style.color = "white"
        this.currentTime = this.timeForChose;
        this.timer.textContent = this.currentTime;
        this.time = setInterval(() => {
            this.currentTime--;
            this.timer.textContent = this.currentTime;
            if (this.currentTime == 10) {
                this.timer.style.color = "red"
            }
            if (this.currentTime == 0) {
                this.clearCountdown()
            }
            return this.currentTime
        }, 1000)
    }
    clearCountdown() {
        clearInterval(this.time);
        this.timer.textContent = null;
    }
}