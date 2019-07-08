import { Legal_Person } from "./Legal_Person.js";
import { Physical_Person } from "./Physical_Person.js";

function register(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var id = document.getElementById("newCamp").value;

	var option = document.getElementById("type_person").value;

	if(option == "CNPJ: "){
		var legal = new Legal_Person(name, email, phone, id);
		createDiv(legal, option);
	} 
	else{
		var physical = new Physical_Person(name, email, phone, id);
		createDiv(physical, option);
	}
}

/*  
*	Este metodo ainda nao esta finalizado
*	Tenho que dar uma refinada na ideia de impressao dos dados.
*/

function createDiv(person, type_person){ 
	var div = document.createElement("div");
	div.setAttribute("id", type_person);

	var text = "\r\n" + "Name: " + person.getName()+
		"\r\n " + " Email: "+ person.getEmail()+
		"\r\n" + " Phone: "+ person.getPhone()+
		type_person+ person.getId()
	;

	div = document.createTextNode(text);
	document.body.appendChild(div);
}

window.register = register