
function marksOnLoad() {
	
	console.log("marksOnLoad");
	var str = document.URL;
	console.log(str);
  	var id = str.substring(str.indexOf('?'));
  	console.log("id = " + id);
  	var marks = JSON.parse(localStorage.getItem("session_marks"));
  	console.log(marks);
  
  	var out = '';
  	for(var i = 0; i < marks.length; i++)
 		out += `<tr>\n
 					<td>${marks[i].discipline}</td>\n
 					<td>${marks[i].mark_name}</td>\n
 					<td>${marks[i].semester}</td>\n
 				</tr>\n`;
 				
   $('#tbody').html(out);
}