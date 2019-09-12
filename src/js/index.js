import '../scss/style.scss';
import category from './Data/Category';
import qa from './Data/QuestionsAndAnswers';
import App from './App.js';
import Bet from './Logic/Bet.js';
// const bet = new Bet();
let money = 1000000;
// console.log(bet.bet(40, money));
// money = bet.bet(40, money);

const div = document.querySelector('#root');
const input = document.querySelector('input');
div.textContent = money;
input.addEventListener('keydown', (e) => {
    console.log(money);
    money = Bet.bet(e.keyCode, money);
    div.textContent = money;
});