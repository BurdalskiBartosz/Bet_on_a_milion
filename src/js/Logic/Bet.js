export default class Bet {
    static bet(key, money) {
        let moneyInt = parseInt(money);
        switch (key) {
            case 38:
                return moneyInt == 0 ? this.prevent(moneyInt) : moneyInt - 50000;
            case 40:
                return moneyInt == 1000000 ? this.prevent(moneyInt) : moneyInt + 50000;
            default:
                event.preventDefault();
                alert("ZŁY PRZYCISK");
                return moneyInt;
        }
    }
    static prevent(moneyInt) {
        event.preventDefault();
        return moneyInt;
    }
}