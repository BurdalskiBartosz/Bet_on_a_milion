export default class Timer {
    constructor(time) {
        this.time = time;
    }
    countDown(clock) {
        let innerTime = this.time;
        const timer = setInterval(() => {
            clock.textContent = innerTime;
            if (innerTime == 10) {
                clock.style.color = 'red';
            }
            if (innerTime <= 0) {
                this.clearInterval(timer);
            }
            innerTime--;
        }, 1000)
    }
    clearInterval(timer) {
        clearInterval(timer);
    }
}