import category from "./Category";
export default class DrawCategory {
    constructor() {
        this.category = category;
        this.arrOfDrawnCategories = [];
        console.log(this.category, this.arrOfDrawnCategories)
    }
    drawTwoCategories() {
        this.arrOfCategory = [];
        this.counter = 0;
        do {
            this.drawn = Math.floor(Math.random() * this.category.length);
            this.drawnCategory = this.category[this.drawn]
            if (this.arrOfDrawnCategories.includes(this.drawnCategory) != true) {
                this.arrOfDrawnCategories.push(this.drawnCategory);
                this.arrOfCategory.push(this.drawnCategory);
                this.counter++;
            } else if (this.arrOfDrawnCategories.length == 16) {
                this.counter = 2;
            }
        } while (this.counter != 2)
        console.log(this.category, this.arrOfDrawnCategories)

        return this.arrOfCategory
    }
}