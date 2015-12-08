/*
	Written by Roh, Woori
 */

// 가상 data
var cafe = [
		{
			id : "1",
			name : "Monte Christo Cafe",
			address : "Random street 121-5",
			event : "Collect 10 stamps then enjoy free coffee. <br/>"
					+ "Befroe 9am, All coffee 10% discount! <br/>",
			intro : "The most delicious ever. <br/>" + "I love coffee. <br/>"
					+ "Drink and eat all the time.",
			empty : "5",
			whole : "40"
		},
		{
			id : "2",
			name : "Welcome Coffee",
			address : "Java street web 0604",
			event : "Collect 10 stamps then enjoy free coffee. <br/>"
					+ "Befroe 9am, All coffee 10% discount! <br/>",
			intro : "The most delicious ever. <br/>" + "I love coffee. <br/>"
					+ "Drink and eat all the time.",
			empty : "35",
			whole : "50"
		},
		{
			id : "3",
			name : "Cafe on Earth",
			address : "Mong island 8-6",
			event : "Collect 10 stamps then enjoy free coffee. <br/>"
					+ "Befroe 9am, All coffee 10% discount! <br/>",
			intro : "The most delicious ever. <br/>" + "I love coffee. <br/>"
					+ "Drink and eat all the time.",
			empty : "19",
			whole : "45"
		},
		{
			id : "4",
			name : "Yellow Coffee",
			address : "Jay tower 12-6",
			event : "Collect 10 stamps then enjoy free coffee. <br/>"
					+ "Befroe 9am, All coffee 10% discount! <br/>",
			intro : "The most delicious ever. <br/>" + "I love coffee. <br/>"
					+ "Drink and eat all the time.",
			empty : "15",
			whole : "60"
		},
		{
			id : "5",
			name : "Coffee with Angry Cat",
			address : "Champ hall 1-2",
			event : "Collect 10 stamps then enjoy free coffee. <br/>"
					+ "Before 9am, All coffee 10% discount! <br/>",
			intro : "The most delicious ever. <br/>" + "I love coffee. <br/>"
					+ "Drink and eat all the time.",
			empty : "8",
			whole : "30"
		} ];
		
// favorite 가상 테이블
var favorite = [
		{
			email : "user@user.com",
			cafeid : "1"
		},
		{
			email : "tintin@user.com",
			cafeid : "4"
		},
		{
			email : "user@user.com",
			cafeid : "3"
		} ];

/*
 * favorite.html user가 좋아하는 카페만 출력한다.
 */

var flist = $("<ul class='list-group'>").attr("id", "favorite");
$("#favoritelist").append(flist);

/* user의 email과 같은 email을 가진 cafeid를 가져온다고 가정 
	그 숫자가 var fcafe에 obj로 받아온다고 가정*/

var fcafe = [ {cafeid : "1"}, {cafeid : "3"} ];
	

for (var i = 0; i < fcafe.length; i++) {
	var tempid = fcafe[i]["cafeid"];
	var tempindex = tempid-1;
	var first = "<li id='cafe" + tempid
			+ "' class='list-group-item'>" + cafe[tempindex]["name"] + "</li>";

	$("#favorite").append(first);

}
$("#favorite").append("</ul>");


var ul = document.getElementById("favorite");
ul.addEventListener("click", function (e) {
	var target = e.target;
	while (target && target.parentNode !== ul) {
		target = target.parentNode;
		if(!target) {return;}
	}
	if (target.tagName === "LI") {
		$("#"+target.id).click(
			function() {
				var str = target.id;
				var index = str.substr(4, str.length);
				window.location.href="cafepage.html?index="+(index-1);}
		)
	}
});