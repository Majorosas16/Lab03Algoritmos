import Employee, { Attribute } from "./components/myComponent/myComponent";
import { workers } from "./data/data";

class AppContainer extends HTMLElement {

    arrayEmployee: Employee[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        workers.forEach(element => {
            const employeeCard = this.ownerDocument.createElement("worker-component") as Employee;
            employeeCard.setAttribute(Attribute.image, element.image);
            employeeCard.setAttribute(Attribute.name, element.name);
            employeeCard.setAttribute(Attribute.uid, `${Number(element.id)}`); //hay que convertir el number en string
            employeeCard.setAttribute(Attribute.age, `${Number(element.age)}`);
            employeeCard.setAttribute(Attribute.gender, element.gender);
            employeeCard.setAttribute(Attribute.area, element.jobDetails.area);
            employeeCard.setAttribute(Attribute.position, element.jobDetails.position);
            employeeCard.setAttribute(Attribute.timeincompany, `${Number(element.jobDetails.timeInCompany)}`);
            employeeCard.setAttribute(Attribute.xp, `${Number(element.jobDetails.experience)}`);
            this.arrayEmployee.push(employeeCard);

            console.log(this.arrayEmployee); 
        });
    }

    connectedCallback() {
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <h1>Workers</h1>`;

            const filter = this.arrayEmployee.filter(element => Number(element.uid) % 2 === 0);

            filter.forEach((element) => {
                this.shadowRoot?.appendChild(element);
            });
        }
    }
}
customElements.define("app-container",AppContainer);

