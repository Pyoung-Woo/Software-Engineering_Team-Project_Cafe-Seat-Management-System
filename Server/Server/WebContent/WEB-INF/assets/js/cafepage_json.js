/*
	Written by Roh, Woori
 */

// 가상 data

var checker;
$(document).ready(function () {
	checker = location.href.substr(location.href.lastIndexOf('=') + 1);
	
	console.log(checker);
	
	$("#cafename").append(cafe[checker]["name"]);
	$("#address").append(cafe[checker]["address"]);
	$("#event").append(cafe[checker]["event"]);
	$("#intro").append(cafe[checker]["intro"]);

	$("#seatpage").click(
	function() {window.location.href="cafeseat.html?index="+checker});
	
	$("#add").click(
	function() {
	
		var obj = new Object();
		/* email은 현 유저의 이메일을 넣습니다. */
		obj.email = "user@user.com";
		obj.cafeid = checker;
		
		var jsondata = JSON.stringify(obj);
		
		/* 아래 코드를 실행시켜야 하는데 지금은 가짜 데이터로 해야해서 주석처리 함 
		
		$.ajax({
			type : "POST",
			url : "",
			contentType : "application/x-www-form-urlencoded; charset=utf-8",
			data : {json : jsondata},
			success : function(data) {
				if(data.answer == "success") {
					window.location.href="main.html?index="+checker;
				} else if(data.answer == "fail") {
					alert("fail!");
				} else if(data.answer == "error") {
					alert("error!");
				}
				
				},
			error : function(e) {
			}
		});
		
		*/
		
		window.location.href="favorite.html";
		
		});
	
});
