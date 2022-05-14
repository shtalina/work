function mainOnLoad() {
	console.log("onLoad");
	var str = JSON.parse(localStorage.getItem('session_data'));
	console.log(str);
	var id = str.id;
	console.log(id);
	var fio = str.fio;
	console.log(fio);
	var j = JSON.parse(localStorage.getItem('jsonObj_data'));
	console.log(j);
	var out = '';
	out += `<td>${str.fio}</td>`;
	$('#fio').html(out);

	str = `<a href="index.html" id="${id}" class="list-group-item list-group-item-action">Общая информация</a>\n
	      <a href="progress.html?${id}" id="${id}" onclick="marksOnClick(this.id)" class="list-group-item list-group-item-action">Успеваемость</a>\n
		  <a href="achieve.html?${id}" id="${id}" onclick="achivementOnClick(this.id)" class="list-group-item list-group-item-action">Достижения</a>\n
		  <a href="recomendation.html" class="list-group-item list-group-item-action">Рекомендации</a>\n
      	  <a href="resume.html" class="list-group-item list-group-item-action">Резюме</a>\n`;
	$('.list-group').html(str);	
}

function marksOnClick(id) {
	console.log("marksOnClick");
	var j = JSON.parse(localStorage.getItem("jsonObj_data"));
	console.log(j);
	var m = j['marks'];
	console.log(m);
	var marks =[] ;
	for (var i = 0; i < m.length; i++) {
    	if(m[i].edecanat_id == id)
    		marks.push(m[i]);
	}   // for(var i = 0; ....
	localStorage.setItem("session_marks", JSON.stringify(marks));
}

function achivementOnClick(id) {
	console.log("achivementOnClick");
	var j = JSON.parse(localStorage.getItem("jsonObj_data"));
	console.log(j);
	var f = j['files'];
	console.log(f);
	var files =[] ;
	for (var i = 0; i < f.length; i++) {
    	if(f[i].edecanat_id == id)
    		files.push(f[i]);
	}   // for(var i = 0; ....
	localStorage.setItem("session_achieve", JSON.stringify(files));
}