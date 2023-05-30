import { addObserver, appState } from "../../store";
import styles from "./Card.css"

export default class Card extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }
    
    render() {

        if (this.shadowRoot) this.shadowRoot.innerHTML = "";

        const all = this.ownerDocument.createElement("section");
        all.className="all";
        appState.forms.forEach((f) => {
            const form = this.ownerDocument.createElement("section");

            const FName = this.ownerDocument.createElement("h3");
            FName.textContent=f.name
            form.appendChild(FName)

            const FPrice = this.ownerDocument.createElement("p");
            FPrice.textContent=String(f.price)
            form.appendChild(FPrice)

            const FYear = this.ownerDocument.createElement("p");
            FYear.textContent=String(f.year)
            form.appendChild(FYear)


            all.appendChild(form)
        });
        
        this.shadowRoot?.appendChild(all);

        const css = this.ownerDocument.createElement("style");     
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define('my-card', Card)