class Workers extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.render();
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `

            `
        }
    }
}

customElements.define("worker-component", Workers);
export default Workers;