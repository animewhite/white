import "./components/export"
import "./screens/export";
import { dispatch } from "./store";
import { getf } from "./store/actions";


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        dispatch (await getf())
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('app-dashboard');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)