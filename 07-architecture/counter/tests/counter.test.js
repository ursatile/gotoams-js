// tests/counter.test.js
import MyCounterElement from '../counter.js';

describe('counting engine handles keyboard events', () => {
    test('up arrow increments engine', () => {
        // Instantiate a new component and run the connectedCallback() method
        let counter = new MyCounterElement();        
        counter.connectedCallback();
        // Replace the counter engine's increment method with a Jest mock
        counter.engine.increment = jest.fn();        
        // Simulate a keypress ArrowUp event
        let fakeEvent = { code: "ArrowUp" };
        counter.handleKeydown(fakeEvent);
        expect(counter.engine.increment).toHaveBeenCalledTimes(1);
    });
});


