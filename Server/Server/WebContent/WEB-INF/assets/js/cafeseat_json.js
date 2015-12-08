/*
	Written by Roh, Woori
 */

/* 여석 표시 */
var checker;
$(document).ready(function () {
	checker = location.href.substr(location.href.lastIndexOf('=') + 1);
	
	console.log(checker);
	
	$("#empty").append(cafe[checker]["empty"]);
	$("#whole").append(cafe[checker]["whole"]);
	
});