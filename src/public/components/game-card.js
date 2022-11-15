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
    this.gameImage.addEventListener("click", this.#openEditModal.bind(this));
  }
}

window.customElements.define(`game-card`, GameCard);

// // add template (spaced items) to the shadowDom from template
// this.shadowRoot.appendChild(template.content.cloneNode(true));

// Way to hit elements from main DOM
// document.getElementsByTagName('game-card')[0].shadowRoot.querySelector('.gameImage')

/*
class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    this.shadowRoot.innerHTML = `
        <style>
            #backdrop {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background: rgba(0,0,0,0.75);
                z-index: 10;
                opacity: 0;
                pointer-events: none;
            }

            :host([opened]) #backdrop,
            :host([opened]) #modal {
                opacity: 1;
                pointer-events: all;
            }

            #modal {
                position: fixed;
                top: 15vh;
                left: 25%;
                width: 50%;
                z-index: 100;
                background: white;
                border-radius: 3px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.26);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                opacity: 0;
                pointer-events: none;
            }

            header {
                padding: 1rem;
            }

            ::slotted(h1) {
                font-size: 1.25rem;
            }

            #main {
                padding: 1rem;
            }

            #actions {
                border-top: 1px solid #ccc;
                padding: 1rem;
                display: flex;
                justify-content: flex-end;
            }

            #actions button {
                margin: 0 0.25rem;
            }
        </style>
        <div id="backdrop"></div>
        <div id="modal">
            <header>
                <slot name="title">Please Confirm Payment</slot>
            </header>
            <section id="main">
                <slot></slot>
            </section>
            <section id="actions">
                <button id="cancel-btn">Cancel</button>
                <button id="confirm-btn">Okay</button>
            </section>
        </div>
    `;
    const slots = this.shadowRoot.querySelectorAll('slot');
    slots[1].addEventListener('slotchange', event => {
      console.dir(slots[1].assignedNodes());
    });
    const cancelButton = this.shadowRoot.querySelector('#cancel-btn');
    const confirmButton = this.shadowRoot.querySelector('#confirm-btn');
    cancelButton.addEventListener('click', this._cancel.bind(this));
    confirmButton.addEventListener('click', this._confirm.bind(this));

  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this.hasAttribute('opened')) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }

  static get observedAttributes() {
    return ['opened'];
  }

  open() {
    this.setAttribute('opened', '');
    this.isOpen = true;
  }

  hide() {
    if (this.hasAttribute('opened')) {
      this.removeAttribute('opened');
    }
    this.isOpen = false;
  }

  _cancel(event) {
    this.hide();
    const cancelEvent = new Event('cancel', { bubbles: true, composed: true });
    event.target.dispatchEvent(cancelEvent);
  }

  _confirm() {
    this.hide();
    const confirmEvent = new Event('confirm');
    this.dispatchEvent(confirmEvent);
  }
}

customElements.define('uc-modal', Modal);
*/

/* 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Web Components</title>
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 2rem;
        font-family: sans-serif;
      }
    </style>
    <script src="modal.js"></script>
  </head>
  <body>
    <uc-modal>
      <h1 slot="title">Please Confirm</h1>
      <p>With your confirmation you agree to pay the full amount!</p>
    </uc-modal>
    <p>Please confirm your choice.</p>
    <button>Show Details & Confirm</button>
    <script>
      const confirmButton = document.querySelector('button');
      const modal = document.querySelector('uc-modal');

      modal.addEventListener('confirm', () => {
        console.log('Confirmed...');
      });

      modal.addEventListener('cancel', () => {
        console.log('Cancelled...');
      });

      confirmButton.addEventListener('click', () => {
        //  modal.setAttribute('opened', '');
        if (!modal.isOpen) {
          modal.open();
          console.log('Opening...');
        }
      });
    </script>
  </body>
</html>
*/
