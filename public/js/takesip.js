'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	console.log("oi");
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("yes");
	$.get('user', updateImage);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function updateImage(result) {
	console.log(result);
	var countNumber = result["growth"];
	var projectHTML = "<img src='../images/Cup" + countNumber + ".png' style='width:40%' ... />";
	$('.sip-tracker').html(projectHTML);
	if (result["countMax"] == true) {
		alert("You've already reached your daily limit!");
	}
}