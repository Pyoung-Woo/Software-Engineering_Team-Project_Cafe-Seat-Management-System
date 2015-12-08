/*
	Written by Roh, Woori
 */

// 가상 data
var cafe ;
$(function() {
						
						$
								.ajax({
									type : "GET",
									url : "http://192.168.0.52:8080/Team3Server/team3?cmd=cafelist",
									contentType : "application/x-www-form-urlencoded; charset=utf-8",
									data : cafe,
									datatype : "json",
									success : function(data) {
										cafe = data;
										var list = $("<ul class='list-group'>").attr("id", "list");
										$("#cafelist").append(list);
											for (var i = 0; i < cafe.length; i++) {
	var first = "<li id='cafe" + cafe[i]["id"]
			+ "' class='list-group-item'>" + cafe[i]["name"] + "</li>";
	$("#list").append(first);

}
$("#list").append("</ul>");


/* 해당하는 리스트를 클릭하면 그 값이 index로 함께 cafepage.html로 넘어간다. */
var ul = document.getElementById("list");
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
									},
									error : function(e) {
										alert("정보를 다시 확인해주세요.");
									}
								});
					});
/*
 * main.html. Cafe list를 출력한다.
 */

/* data에 따라 list를 그리는 코드 */
