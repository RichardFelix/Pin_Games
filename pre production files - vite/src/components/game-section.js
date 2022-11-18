import styles from "../css/game-section.css";

export class GameSection extends HTMLElement {
  constructor() {
    super();
  }

  _shadow = this.attachShadow({ mode: "open" });

  // vars
  gamesArr = [DATA.installedArr, DATA.playLaterArr, DATA.wishlistArr];
  headerArr = ["Installed", "Play Later", "Wishlist"];

  // elems
  customModal = document.querySelector("custom-modal");

  connectedCallback() {
    this.#render();
  }

  attributeChangedCallback(prop, oldValue, newValue) {
    if (oldValue === newValue) return;
  }

  static get observedAttributes() {
    return ["open"];
  }

  #render() {
    let sectionHTML = "";
    let headerCount = 0;

    this.gamesArr.forEach((arr) => {
      if (arr.length > 0) {
        let gamesHTML = "";
        let tempHTML = "";

        arr.forEach((item) => {
          gamesHTML += `
                <game-card 
                    id="${item.name}"
                    name="${item.name}"
                    imageLocation="${item.imageLocation}"
                    platform="${item.platform}"
                >
                </game-card>`;
        });

        tempHTML = `
            <section>
                <h1 id="header" class="header">
                    ${this.headerArr[headerCount]}
                </h1>
                <div id="gamesDiv" class="gamesDiv">
                    ${gamesHTML}
                </div>
            </section>
            `;

        sectionHTML += tempHTML;
      }

      headerCount++;
    });

    this._shadow.innerHTML = `
          <style>
            ${styles}
          </style>

          ${sectionHTML}
        `;
  }
}

// window.customElements.define(`game-section`, GameSection);
