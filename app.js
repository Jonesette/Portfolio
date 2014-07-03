$(document).ready(function () {

	$(".link").mouseover(function() {
		$(this).attr('id', 'hover');
	});

		$(".link").mouseleave(function() {
		$(this).removeAttr('id');
	});
})