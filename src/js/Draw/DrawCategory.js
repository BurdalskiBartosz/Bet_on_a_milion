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
        do {
            const drawnIndex = this.drawIndex(this.category.length);
            let drawnCategory = this.category[drawnIndex];
            if (drawnCategories.includes(drawnCategory) != true && this.usedCategories.includes(drawnCategory) != true) {
                drawnCategories.push(drawnCategory);
                counter++;
            }
        } while (counter != 2);
        return drawnCategories;
    }
    excludeCategory(category) {
        this.usedCategories.push(category);
    }
}