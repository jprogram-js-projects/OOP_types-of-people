var form = document.getElementById("form");
var btn = document.getElementById("btn"); 

var option = ""; // variable that helps to delete the label created for the specific type of person.

function removeFields(id){
	document.getElementById("lineBreak").remove();
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

	form.insertBefore(label, btn);

	createInput();
}

function createInput(){
	var input = document.createElement("input");
	input.setAttribute("id", "newCamp");
	form.insertBefore(input, btn);

	createLineBreak();

	changeMethod();
}

function createLineBreak(){
	var br = document.createElement("br");
	br.setAttribute("id", "lineBreak");
	form.insertBefore(br, btn);
}

function changeMethod(){
	var swap = document.getElementById("type_person");	
	swap.setAttribute("onchange", "removeFields(this.value)");
}