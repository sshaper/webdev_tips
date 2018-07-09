"use strict";

var ed = {}

ed.lastButton;

ed.init = function(){
	document.getElementById('buttonGroup').addEventListener('click', ed.displayResult, false);
}

ed.displayResult = function(event){
	
	if(event.target.nodeName.toUpperCase() === "INPUT"){
		if(ed.lastButton === undefined){
			ed.lastButton = event.target;
		}
		else {
			ed.lastButton.setAttribute('class', 'btn btn-primary');
			ed.lastButton = event.target;
		}
		event.target.setAttribute('class','btn btn-danger');
		document.getElementsByTagName('p')[0].innerHTML = `The button clicked is ${event.target.value}`;	
	}
}

ed.init();