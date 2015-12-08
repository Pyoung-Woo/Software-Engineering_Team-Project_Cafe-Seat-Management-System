/*
	Written by Roh, Woori
 */

// 가상 data
var user = [
		{
			name : "Elsa",
			password : "1221",
			gender : "2",
			email : "queen@cold.com"
		},
		{
			name : "Jack",
			password : "1225",
			gender : "1",
			email : "frost@moon.com"
		},
		{
			name : "Tintin",
			password : "0606",
			gender : "1",
			email : "snowy@detective.com"
		}];

/*
 * settings.html
 */

var index = 2; // 임시

$("#username").append(user[index]["name"]);
$("#useremail").append(user[index]["email"]);