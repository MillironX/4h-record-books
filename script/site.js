// JavaScript Document
// From https://css-tricks.com/text-blocks-over-image/

$(function() {
	'use strict';
	
	$("h6")
		.wrapInner("<span>");
	
	$("h6 br")
		.before("<span class='spacer'>")
		.after("<span class='spacer'>");
});