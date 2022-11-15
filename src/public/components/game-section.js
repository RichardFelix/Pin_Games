class GameSection extends HTMLElement {
  constructor() {
    super();
  }

  _shadow = this.attachShadow({ mode: "open" });

  // vars
  gamesArr = [DATA.installedArr, DATA.playLaterArr, DATA.wishlistArr];
  headerArr = ["Installed", "Play Later", "Wishlist"];

  // elems
  customModal = document.getElementsByTagName("custom-modal")[0];

  connectedCallback() {
    this.#render();
  }

  #styles = `
      <style>    
          :host([open]){
            display: flex;
            justify-content: center;
            flex-direction: column;
          }  

          .gamesDiv{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .header{
            color: #fff;
            background-color: rgb(119, 136, 153);
            text-align: center;
            box-shadow: 5px 5px 5px 0px #000;  
            text-shadow: 2px 3px black; 
            padding: 5px;         
          }
      </style>
    `;

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
        ${this.#styles}

        ${sectionHTML}
      `;
  }
}

window.customElements.define(`game-section`, GameSection);
