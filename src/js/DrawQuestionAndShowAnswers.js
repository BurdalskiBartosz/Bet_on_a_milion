import questionsAndAnswers from './QuestionsAndAnswers';
export default class DrawQuestionAndShowAnswers {
    constructor(chosenCategory, containerForAnswers) {
        this.chosenCategory = chosenCategory;
        this.containerForAnswers = containerForAnswers
        this.questionsAndAnswers = questionsAndAnswers;
        this.questionsFromTheCategory = this.questionsAndAnswers[this.chosenCategory];
    }
    drawQuestion() {
        this.drawNumberOfQuestion = Math.floor(Math.random() * this.questionsFromTheCategory.length);
        return [this.questionsFromTheCategory[this.drawNumberOfQuestion].correctAnswer, this.questionsFromTheCategory[this.drawNumberOfQuestion].question]
    }
    changeAnswersTextContent(showOrHide) {
        this.containerForAnswers.forEach((answer, index) => {
            if (showOrHide == true) {
                setTimeout(() => {
                    answer.textContent = this.questionsFromTheCategory[this.drawNumberOfQuestion].answers[index];
                }, index * 500);
            } else {
                answer.textContent = ""
            }
        })
    }
}