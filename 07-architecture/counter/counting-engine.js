export default class CountingEngine {    
    #count;
    #initialValue;
    constructor(count) {
        this.#initialValue = parseInt(count) || 0;
        this.reset();
    }
    increment() {
        this.#count++;
    }
    decrement() {
        this.#count--;
    }    
    reset() {
        this.#count = this.#initialValue;
    }

    get count() { return this.#count }
    get initialValue() { return this.#initialValue }
}