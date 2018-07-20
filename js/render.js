$(function (){

// render paper home
$.getJSON( "data/papers.json", function( data ) {
	$.get('template/papers_home.html', function(template) {
		var rendered = Mustache.render(template, data);
		$('#papers').html(rendered);
	});
});


// render bio
$.getJSON( "data/bio.json", function( data ) {
	$.get('template/bio.html', function(template) {
		var rendered = Mustache.render(template, data);
		$('#bio').html(rendered);
	});
});

// render research
$.getJSON( "data/research.json", function( data ) {
	$.get('template/research.html', function(template) {
		var rendered = Mustache.render(template, data);
		$('#research').html(rendered);
	});
});


});
