import "./scss/style.scss";
import DrawCategory from "./js/DrawCategory";
import Betting from "./js/Betting";
import DrawQuestionAndShowAnswers from "./js/DrawQuestionAndShowAnswers";
import Timer from "./js/Timer";
const startGameBet = () => {
  const gameBet = new GameBetOnAMilion(1000000);
  gameBet.drawCategory();
  btn_start.removeEventListener("click", startGameBet);
  const btn_newGame = document.querySelector(".container_btn-newGame");
  btn_newGame.addEventListener("click", newGame);
};

const newGame = () => {
  location.reload(true);
};

const btn_start = document.querySelector(".container_btn-start");
btn_start.addEventListener("click", startGameBet);

class GameBetOnAMilion {
  constructor(yourMoneyToBet) {
    this.yourMoneyToBet = yourMoneyToBet;
    this.questionCounter = 1;
    this.drawCategoryClassInstance = new DrawCategory();
    this.containersOfCategories = [
      ...document.querySelectorAll(".container_screen_categories_category")
    ];
    this.takeBtnValueAndCallFunctions = this.takeBtnValueAndCallFunctions.bind(
      this
    );
    this.containersOfCategories.forEach(category =>
      category.addEventListener("click", this.takeBtnValueAndCallFunctions)
    );
    this.resetTimer = this.resetTimer.bind(this);
    this.btnToResetTimer = document.querySelector(
      ".container_btn-clearTimeout"
    );
    this.btnToResetTimer.addEventListener("click", this.resetTimer);

    this.timer = document.querySelector(".container_timer");
    this.timeForChose = 60;
    this.timerClassInstance = new Timer(this.timer, this.timeForChose);

    this.money = document.querySelector(".container_money");
    this.money.textContent = this.yourMoneyToBet;
    this.inputsForBets = document.querySelectorAll(
      ".container_answers_playerChoose_answer+input"
    );

    this.containerForAnswers = document.querySelectorAll(
      ".container_answers_playerChoose_answer"
    );

    this.containerForQuestion = document.querySelector(
      ".container_screen_question"
    );
    this.containerForCategory = document.querySelector(
      ".container_screen_categories"
    );
  }
  resetTimer() {
    clearTimeout(this.setTimeoutInGameBetOnAMilion);
    this.timerClassInstance.clearCountdown();
    this.checkAnswers();
  }
  checkHowManyWon() {
    this.changeDisplay("flex", "none");
    this.containerForAnswers.forEach(answer => {
      if (answer.textContent == this.returnOfDrawQuestion[0]) {
        this.correctChoice = answer.nextSibling;
        this.yourMoneyToBet = this.correctChoice.value;
        this.money.textContent = this.yourMoneyToBet;
        if (this.questionCounter != 8 && this.yourMoneyToBet != 0) {
          alert(
            `Poprawna odpowiedź to ${
              this.returnOfDrawQuestion[0]
            } i  wygrałeś ${this.yourMoneyToBet}`
          );
          this.drawCategory();
        } else {
          if (this.yourMoneyToBet != 0 && this.questionCounter == 8) {
            alert(`Gratulacje! Wygrałeś ${this.yourMoneyToBet}`);
          } else {
            alert(
              `Niestety nie udało Ci się wygrać :( Poprawna odpowiedź to: ${
                this.returnOfDrawQuestion[0]
              }`
            );
          }
        }
        this.questionCounter++;
        this.bettingClassInstance.manageWithInputs();
        this.drawQuestionClassInstance.changeAnswersTextContent();
      }
    });
  }
  changeDisplay(categoryDisplay, questionDisplay) {
    this.containerForCategory.style.display = categoryDisplay;
    this.containerForQuestion.style.display = questionDisplay;
  }
  startTheCountdown() {
    this.timerClassInstance.countdown();
    this.setTimeoutInGameBetOnAMilion = setTimeout(() => {
      if (this.timer.textContent == 0) {
        this.checkAnswers();
      }
    }, this.timeForChose * 1000);
  }
  checkAnswers() {
    this.bettingClassInstance.manageWithInputs(true);
    this.checkHowManyWon();
  }
  takeBtnValueAndCallFunctions(e) {
    this.btn_Category = e.target.textContent;
    this.callADrawQuestionInstance(this.btn_Category);
    this.callABettingInstance();
    this.showOrHideCategory();
  }
  callADrawQuestionInstance(btn) {
    this.drawQuestionClassInstance = new DrawQuestionAndShowAnswers(
      btn,
      this.containerForAnswers
    );
    this.returnOfDrawQuestion = this.drawQuestionClassInstance.drawQuestion();
    setTimeout(() => {
      this.changeDisplay("none", "block");
      this.containerForQuestion.textContent = this.returnOfDrawQuestion[1];
      setTimeout(() => {
        this.drawQuestionClassInstance.changeAnswersTextContent(true);
        setTimeout(() => {
          this.bettingClassInstance.manageWithInputs(false);
          this.startTheCountdown();
        }, 2000);
      }, 1000);
    }, 1000);
  }
  callABettingInstance() {
    this.bettingClassInstance = new Betting(
      this.yourMoneyToBet,
      this.money,
      this.inputsForBets
    );
  }
  drawCategory() {
    this.drawnCategories = this.drawCategoryClassInstance.drawTwoCategories();
    this.showOrHideCategory();
  }
  showOrHideCategory() {
    this.containersOfCategories.forEach((category, index) => {
      category.classList.toggle("animation");
      category.textContent = this.drawnCategories[index];
    });
  }
}
