class productCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow ( {mode: "open"})
  }

  static get observedAttributes() {
    return ["main_title", "img_src", "img_alt", "product_title", "product_subtitle", "product_text", "product_price", "btn_text"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `

    <section class="container">
      <div class="container__first">
        <h1 class="container__first--title">${this.main_title}</h1>
        <img src="${this.img_src}" alt="${this.img_alt}" class="container__first--image">
      </div>
      <div class="container__second">
        <div class="container__second__texts" >
          <h2 class="container__second__texts--title">${this.product_title}</h2>
          <h3 class="container__second__texts--subtitle">${this.product_subtitle}</h3>
        </div>
        <p class="container__second--text">${this.product_text}</p>
        <div class="container__second__details">
          <h2 class="container__second__details--price">${this.product_price}</h2>
          <button class="container__second__details--btn">${this.btn_text}</button>
        </div>
      </div>
    </section>

    ${this.getStyles()}
    `;
    return template;
  }

  getStyles() {
    return `
    <style>
    @import "/css/dist/main.css"
    </style>
    `
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("product-card", productCard);