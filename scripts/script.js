import { Legal_Person } from "./Legal_Person.js";
import { Physical_Person } from "./Physical_Person.js";

function Legal(name, email, phone, id){
	var legal = new Legal_Person(name, email, phone, id);
}

function Physical(name, email, phone, id){
	var physical = new Physical_Person(name, email, phone, id);
}

function register(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var id = document.getElementById("newCamp").value;

	var option = document.getElementById("type_person").value;

	if(option == "CNPJ:"){
		console.log("cnpj");
		Legal(name, email, phone, id);
	} 
	else{
		console.log("cpf");
		Physical(name, email, phone, id);
	}
}

window.register = register