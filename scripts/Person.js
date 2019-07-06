export class Person{

	constructor(name, email, phone){
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.createPerson();
	}

	getName(){
		return this.name;
	}

	getEmail(){
		return this.email;
	}

	getPhone(){
		return this.phone;
	}

	createPerson(){
		alert("Person created");
	}
}