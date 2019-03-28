export default class Betting {
    constructor(yourMoneyToBet, money, inputsForBets) {
        this.yourMoneyToBet = yourMoneyToBet
        this.money = money
        this.inputsForBets = inputsForBets
        this.show = this.show.bind(this)
    }
    manageWithInputs(trueOrFalse) {
        this.inputsForBets.forEach((input) => {
            if (trueOrFalse == false) {
                input.disabled = trueOrFalse
                input.addEventListener('keydown', this.show)
            } else if (trueOrFalse == true) {
                input.disabled = trueOrFalse
                input.removeEventListener('keydown', this.show)
            } else {
                input.value = 0
            }
        })
    }
    show(e) {
        switch (e.keyCode) {
            case 38:
                this.money.textContent == 0 ? event.preventDefault() : this.money.textContent -= 50000;
                break;
            case 40:
                this.money.textContent == this.yourMoneyToBet ? event.preventDefault() : this.checkYouCanStillPlay(e.target.value)
                break;
            default:
                event.preventDefault();
                alert("ZŁY PRZYCISK")
        }
    }
    checkYouCanStillPlay(e) {
        if (e != 0) {
            this.money.textContent = parseInt(this.money.textContent) + 50000;
        }
    }
}