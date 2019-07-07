import {Person} from "./Person.js";

export class Legal_Person extends Person{

	constructor(name, email, phone, cnpj){
		super(name, email, phone);
		this.cnpj = cnpj;
	}

	createPerson(){
		alert("Legal entity created");
	}

	getId(){
		return this.cnpj;
	}
} 