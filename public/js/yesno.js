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
	$('#yesbtn').click(submitYes);
	$('#nobtn').click(submitNo);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */

function submitYes(e) {
	alert('Thank you for your response!');
	ga('create', 'UA-158765349-3', 'auto');
	ga('send', 'event', 'yes', 'click');
}

function submitNo(e) {
	alert('Thank you for your response!');
	ga('create', 'UA-158765349-3', 'auto');
	ga('send', 'event', 'no', 'click');
}