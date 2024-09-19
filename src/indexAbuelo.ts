import Employee, { Attribute } from "./components/myComponent/myComponent";
import { workers } from "./data/data";

class AppContainer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <h2>aaaaaa</h2>`;

        //     this.profiles.forEach((profile) => {
        //         this.shadowRoot?.appendChild(profile);
        //     })
        // }
    }
}
}
customElements.define("app-container",AppContainer);

