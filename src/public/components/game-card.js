class GameCard extends GameSection {
  constructor() {
    super();
  }

  gameImage;

  connectedCallback() {
    this.#render();
  }

  #styles = `
    <style>
      :host([hide]){
        display: none;
      }

      .gameImage {
        width: 300px;
        height: 150px;
        max-width: 100%;
        cursor: pointer;
        border-radius: 20px;
        margin: 5px;
      }

      .gameImage:hover{
        box-shadow: 2px 4px 10px 4px white;
      }
    </style>
  `;

  #openEditModal() {
    let name = this.getAttribute("id");

    this.customModal.setAttribute("open", "editGame");
    this.customModal.setAttribute("name", `${name}`);
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    if (oldValue === newValue) return;
  }

  static get observedAttributes() {
    return ["hide"];
  }

  #render() {
    let name = this.getAttribute("name");
    let imageLocation = this.getAttribute("imageLocation");
    let platform = this.getAttribute("platform");

    this._shadow.innerHTML = `
      ${this.#styles}
      
      <img
        class="gameImage"
        src='${imageLocation}'
        alt='${name}'
        title='${platform}'
      ></img>
    `;

    // shadowRoot elements init
    this.gameImage = this.shadowRoot.querySelector(".gameImage");

    // event handlers
    this.gameImage.onclick = () => this.#openEditModal();
  }
}

window.customElements.define(`game-card`, GameCard);
