// tests/renderer.test.js
import CountingEngine from "../counting-engine";
import Renderer from "../renderer";

test('renderer draws correct value', () => {
    // Create an HTML element to act as the root element for our renderer
    let root = document.createElement('div');
    let renderer = new Renderer(root);

    // Instantiate a new counting engine
    let engine = new CountingEngine(5);
    // Tell the renderer to render the engine into the root element
    renderer.render(engine);

    // Retrieve a reference to the span element inside the rendered DOM
    let span = root.querySelector("span");    
    expect(span.innerText).toBe(5);
});
    