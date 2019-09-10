export default class Draw {
    constructor() {
        if (this.constructor === Draw) {
            throw new Error("You cannot create this type of class(This is an abstract class).");
        };
    };
    draw() { };
    drawIndex(length) {
        return Math.floor(Math.random * length)
    };
}