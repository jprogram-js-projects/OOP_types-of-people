import {Person} from "./Person.js";

export class Physical_Person extends Person{
	
	constructor(name, email, phone, cpf){
		super(name, email, phone);
		this.cpf = cpf;
	}

	createPerson(){
		alert("Individual created");
	}
}