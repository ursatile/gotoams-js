class ColorPickerElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        let style = document.createElement('style');
        style.innerHTML = `button { width: 32px; height: 32px; border: 1px solid #fff; border-radius: 16px; cursor: pointer;  } button:focus { outline: none; }`;
        this.shadowRoot.appendChild(style);

        let div = document.createElement('div');
        this.drawPicker(div, this);
        this.shadowRoot.appendChild(div);
    }

    drawPicker(div, picker) {
        let colors = ["#50c236", "#16856f", "#efc306", "#025594", "#b51f8f", "#ff6c53", "#a85642"];
        colors.forEach(c => {
            let button = document.createElement('button');
            button.style.backgroundColor = c;
            button.addEventListener("click", function (clickEvent) {
                const outerEvent = new CustomEvent('pick-color', { bubbles: true, detail: c });
                picker.dispatchEvent(outerEvent);
            });
            div.appendChild(button);
        });
    }
}
window.customElements.define('color-picker', ColorPickerElement);