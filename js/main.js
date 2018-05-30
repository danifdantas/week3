(function () {
	"use strict"; 
	console.log("file connected"); 

// single line commen
/* 
Multiline
Comment
*/

var words = "This is a string of letters"; // variable (string of text) / if the name you gave to the variable is blue you should change it, avoid capital letter, you can put everything inside a variable.
var num = 1;
console.log(words);
console.log("Number of times of visited "+num); // + you can add things or concatenate things together

var teams = ["Knights","Caps","Leafs"]; // array / starts at 0, the first position is 0
console.log(teams[0]);

var iconSet = document.querySelectorAll(".icons");
console.log(iconSet);



function i_am_a_function() {
console.log("From i_am_a_function()");

} // give a name that makes sense for a function

window.addEventListener("load",i_am_a_function, false);

function logLoaded(evt) {
	//console.log("svg loaded");
	//console.log(evt);
	var targetSVG = evt.currentTarget.contentDocument;
	//console.log(targetSVG);
	var theIcon = targetSVG.querySelector(".mainIcon");
	//console.log(theIcon);
	theIcon.addEventListener("click", logClicked, false);
}
function logClicked(evt) {

	console.log(evt.currentTarget.id);
}

for (var i = 0; i<iconSet.length; i++) {
	//console.log(i);
	iconSet[i].addEventListener("load", logLoaded, false);
	
}



}) ();