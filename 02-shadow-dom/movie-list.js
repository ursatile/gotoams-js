// movie-list.js
class MovieListElement extends HTMLElement {
    
    #topSuperSecretShadow;
    constructor() {
        super();     
        this.#topSuperSecretShadow = this.attachShadow({mode: 'closed'});
    }

    connectedCallback() {
        this.#topSuperSecretShadow.innerHTML = `
        <ul>
        <li>Alien</li>
        <li>Back to the Future</li>
        <li>Dirty Dancing</li>
        <li>Jumanji</li>
        <li>Zoolander</li>
        </ul>`;
    }
  }
  
  customElements.define('movie-list', MovieListElement);