function check()
{
	var length = document.getElementById("length");
	if(length.value == ""  || isNaN(length.value) || length.value>1000)
	{
		alert("Invalid string length value. Please Try again");
		document.getElementById("length").value = "";
	}
	else{
		if(document.getElementById("l_values").checked)
			randomString();
		else if(document.getElementById("n_values").checked)
			randomNum();
		else if(document.getElementById("ln_values").checked)
			randomStringIncNums();
		else if(document.getElementById("lns_values").checked)
			randomStringIncSymsNum();
	}
}

function randomStringIncSymsNum()
{
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%^&*()_1234567890";
	var string_length = document.getElementById("length").value;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	document.getElementById("code").value = randomstring;
}

function randomStringIncNums()
{
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz1234567890";
	var string_length = document.getElementById("length").value;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	document.getElementById("code").value = randomstring;
}


function randomNum()
{
	var chars = "1234567890";
	var string_length = document.getElementById("length").value;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	document.getElementById("code").value = randomstring;
}

function randomString()
{
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = document.getElementById("length").value;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	document.getElementById("code").value = randomstring;
}
