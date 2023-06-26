export default class CountingEngine {    
    #count;
    #initialValue;
    constructor(count) {        
        this.#initialValue = count;
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
}