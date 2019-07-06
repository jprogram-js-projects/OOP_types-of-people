var create = false;
var f = document.getElementById("form");
var btn = document.getElementById("btn");
var option = "";

function removeCampos(id){
	document.getElementById(option).remove();
	document.getElementById("newCamp").remove();
	createLabel(id);
}

function createLabel(nameType){
	var label = document.createElement("label");
	label.setAttribute("id", nameType);

	var text = document.createTextNode(nameType);
	label.appendChild(text);

	option = nameType;

	f.insertBefore(label, btn);

	//document.form.insertBefore(label, phone);
	//document.body.appendChild(label);
	alert(nameType);
	createInput();
}

function createInput(){
	var input = document.createElement("input");
	input.setAttribute("id", "newCamp");
	f.insertBefore(input, btn);

	var a = document.getElementById("type_person");	
	a.setAttribute("onchange", "removeCampos(this.value)");
}
