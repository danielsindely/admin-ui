$(document).ready(function() {
	$("#menu").menu();

	$("#buttonUpload").click(function() {
		switchPage("upload", loadPageUpload);
	});
	$("#buttonStations").click(function() {
		switchPage("stations", loadPageStations);
	});
	$("#buttonCategories").click(function() {
		switchPage("categories", loadPageCategories);
	});
	$("#buttonArtists").click(function() {
		switchPage("artists", loadPageArtists);
	});
	log("page loaded");
});

function log(text) {
	var logmezo = $("#debug");
	logmezo.html(logmezo.html() + text + "<br>");
}

function switchPage(page, callback) {
	log("switching to page: " + page);
	$("#pageContent").load("html/" + page + ".html", callback);
}

function loadPageUpload() {
	log("loadPageUpload()");
}

function loadPageStations() {
	log("loadPageStations()");
}

function loadPageCategories() {
	log("loadPageCategories()");

	$("#tabs").tabs();

	var urlListCategories = "http://api.staginga.we7.com/api/0.1/filterCategories?apiKey=we7int&appVersion=1";
	$.getJSON(urlListCategories, function(data) {
		log("data: " + data);
		var items = [];
		$.each(data, function(key, val) {
			items.push('<li id="' + key + '">' + val + '</li>');
		});
		$('<ul/>', {
			'class' : 'my-new-list',
			html : items.join('')
		}).appendTo('body');
	});
}

function loadPageArtists() {
	log("loadPageArtists()");
}
