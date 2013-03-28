$(document).ready(function() {
	$("#menu").menu();

	$("#buttonUpload").click(function() {
		switchPage("upload");
	});
	$("#buttonStations").click(function() {
		switchPage("stations");
	});
	$("#buttonCategories").click(function() {
		switchPage("categories");
	});
	$("#buttonArtists").click(function() {
		switchPage("artists");
	});
	log("page loaded");
});

function log(text) {
	var logmezo = $("#debug");
	logmezo.html(logmezo.html() + text + "<br>");
}

function switchPage(page) {
	log("switching to page: " + page);
	$("#pageContent").load("html/" + page + ".html");
}
