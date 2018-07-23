$(function (){

Array.prototype.remove = function(from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};

// render paper
$.getJSON( "data/papers.json", function( data ) {
	var sorted = { papers: data.papers.sort(function(a, b) {
	    return b.date - a.date;
	}) };
	//home
	$.get('template/papers_home.html', function(template) {
		var rendered = Mustache.render(template, sorted);
		$('#papers').html(rendered);
	});
	// publications
	$.get('template/paper_card.html', function(template) {
		var rendered = Mustache.render(template, sorted);
		$('#paper_cards').html(rendered);
		$('p.abstract').each(function (){
			$(this).html($(this).html().substring(0, 400) + "...");
		});
	});
});


// render bio
$.getJSON( "data/bio.json", function( data ) {
	$.get('template/bio.html', function(template) {
		var rendered = Mustache.render(template, data);
		$('#bio').html(rendered);
	});
	$(".news").html(data["news"]);
	$(".sub-news").html(data["sub-news"]);
});

// render research
$.getJSON( "data/research.json", function( data ) {
	$.get('template/research.html', function(template) {
		var rendered = Mustache.render(template, data);
		$('#research').html(rendered);
	});
});


});
