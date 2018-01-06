// JavaScript Document
// From https://css-tricks.com/text-blocks-over-image/

$(function() {
	'use strict';
	
	$("h4")
		.wrapInner("<span>");
	
	$("h4 br")
		.before("<span class='spacer'>")
		.after("<span class='spacer'>");
});

function visibleLink(linkId) {
	'use strict';
	$('.'+linkId).css({'display': 'inline-block'});
}

function invisibleLink(linkId) {
	'use strict';
	$('.'+linkId).css({'display': 'none'});
}