import * as html from './html.js';

export default class Renderer {
    constructor(shadowRoot) {
        this.root = shadowRoot;
    }

    drawIncrementButton = () => html.element('button', {}, '▲');    
    
    drawDecrementButton = () => html.element('button', {}, '▼');

    drawWrapper() {
        let wrapper = html.element('div', { 'class': "counter-wrapper" });
        this.incrementButton = this.drawIncrementButton();
        this.decrementButton = this.drawDecrementButton();
        this.span = html.element('span', { "id": "counter" });
        let counter = html.element('div', {"class": "counter"});
        counter.appendChild(this.span);
        wrapper.appendChild(this.decrementButton);
        wrapper.appendChild(counter);
        wrapper.appendChild(this.incrementButton);
        return wrapper;
    }

    render(engine) {
        const link = html.element('link', { rel : "stylesheet", href: "counter.css" });
        this.root.appendChild(link);
        let wrapper = this.drawWrapper();
        this.resetButton = html.element('button', {'id': 'reset-button'}, 'Reset');
        wrapper.appendChild(this.resetButton);
        this.root.appendChild(wrapper);
        this.update(engine);
    }
    
    update = (engine) => this.span.innerText = engine.count;
}