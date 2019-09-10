import Draw from './Draw';

export default class DrawQuestion extends Draw {
    constructor() {
        super();
    }
    draw(length) {
        return this.drawIndex(length);
    }
}