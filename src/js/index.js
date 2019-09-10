import '../scss/style.scss';
import category from './Data/Category';
import qa from './Data/QuestionsAndAnswers';
import App from './App.js';
console.log(category.length);
// console.log(Object.keys(qa)[2]);
const { Muzyka: [{ question }] } = qa;
const { Książki } = qa;
console.log(Książki)
console.log(question)
//Init game
// const app = new App();