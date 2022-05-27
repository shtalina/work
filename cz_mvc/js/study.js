function studyOnLoad() {
	
	console.log("studyOnLoad");
	var str = document.URL;
	console.log(str);
  	var id = str.substring(str.indexOf('?'));
  	console.log("id = " + id);
	var st = JSON.parse(localStorage.getItem("session_study"));
	console.log(JSON.stringify(st));

	var out = '';
	for (var i = 0; i < st.length; i++)
		out += `<tr>\n
 					<td></td>\n
 					<td>${st[i].description}</td>\n
 					<td></td>\n
 				</tr>\n`;

	$('#tbody').html(out);
}