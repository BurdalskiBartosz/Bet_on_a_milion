import Draw from './Draw';
import category from '../Data/Category';
export default class DrawCategory extends Draw {
    constructor() {
        super();
        this.category = category;
        this.usedCategories = new Array();
    }
    draw() {
        const drawnCategories = new Array();
        let counter = 0;
        // NOWA LINIJKA

        const variable = "WARTOSC";
    }
    excludeCategory(category) {
        this.usedCategories.push(category);
    }
}