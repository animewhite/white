import { dispatch } from "../../store";
import { savef } from "../../store/actions";
import { Formi } from "../../types/form";
import styles from "./Form.css"


const info: Formi = {
    name: "",
    price: 0,
    year: 0,
  };

export default class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }
    
    async sendf() {
        dispatch(await savef(info))
        console.log(1)
    }

    render() {
        const all = this.ownerDocument.createElement("section");
        all.className="all";

        const lname = this.ownerDocument.createElement('label');
        lname.textContent="Name";
        all.appendChild(lname);
        const name = this.ownerDocument.createElement('input');
        name.addEventListener("change", (e : any) => {
            info.name= e.target.value;
        });
        name.placeholder="Name";
        all.appendChild(name);

        const lprice = this.ownerDocument.createElement('label');
        lprice.textContent="Price";
        all.appendChild(lprice);
        const price = this.ownerDocument.createElement('input');
        price.addEventListener("change", (e : any) => {
            info.price= e.target.value;
        });
        price.placeholder="Price";
        price.type="number";
        all.appendChild(price);

        const lyears = this.ownerDocument.createElement('label');
        lyears.textContent="Years";
        all.appendChild(lyears);
        const year = this.ownerDocument.createElement('input');
        year.addEventListener("change", (e : any) => {
            info.year= e.target.value;
        });
        year.placeholder="Year";
        year.type="number";
        all.appendChild(year);

        const send = this.ownerDocument.createElement("button");
        send.addEventListener("click", () =>{
            this.sendf();
        })

        send.textContent="Send";
        all.appendChild(send);

        this.shadowRoot?.appendChild(all);

        const css = this.ownerDocument.createElement("style");     
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define('my-form', Form)