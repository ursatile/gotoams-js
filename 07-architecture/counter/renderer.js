export default class Renderer {
    constructor(shadowRoot) {
        this.root = shadowRoot;
    }
    render(counterEngine) {
        //TODO: render the counter when the component is first added to the page
        this.root.innerHTML = '//TODO: implement Renderer.render())';
        
        // These elements have to be exposed as properties so that the controller
        // can attach event listeners to them.
        this.incrementButton = document.createElement('button');
        this.decrementButton = document.createElement('button');
        this.resetButton = document.createElement('button');
    }

    update(counterEngine) {
        //TODO: update the web page based on the state of the counterEngine
        throw('Renderer.update() is not implemented!');
    }
}