import '../scss/style.scss';
import category from './Data/Category';
import qa from './Data/QuestionsAndAnswers';
import App from './App.js';


import Timer from './Logic/Timer';
const timer = new Timer(13);
const div = document.querySelector('#root');
timer.countDown(div)
