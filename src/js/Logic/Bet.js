export default class Bet {
    constructor() {
    }
    bet(key, money) {
        switch (key) {
            case 38:
                return money == 0 ? event.preventDefault() : money -= 50000;
            case 40:
                return money == this.yourMoneyToBet ? event.preventDefault() : this.checkYouCanStillPlay(e.target.value);
            default:
                event.preventDefault();
                alert("ZŁY PRZYCISK");
        }
    }
    checkYouCanStillPlay(e) {
        if (e != 0) {
            money = parseInt(money) + 50000;
        }
    }
}