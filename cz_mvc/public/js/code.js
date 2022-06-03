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

	str =`<a href="index.html" id="${id}" class="list-group-item list-group-item-action">Общая информация</a>\n
	      <a href="progress.html?${id}" id="${id}" onclick="marksOnClick(this.id)" class="list-group-item list-group-item-action">Успеваемость</a>\n
			
		  <a href="recomendation.html" class="list-group-item list-group-item-action">Рекомендации</a>\n
      	  <a href="resume.html" class="list-group-item list-group-item-action">Резюме</a>\n
      	<a class="list-group-item">Достижения</a>\n
		<ul>
		<a id="${id}"  onclick="studyOnClick(this.id)" class="list-group-item list-group-item-action" href="study.html?${id}">Учебная деятельность</a>
        
		</ul>
		<a href="403.html" class="list-group-item list-group-item-action">Список студентов</a>
      	 `;
	$('.list-group').html(str);
        /*<a id="${id}"  class="list-group-item list-group-item-action" href="science.html">Научно-исследовательская деятельность</a>
    	<a id="${id}"  class="list-group-item list-group-item-action" href="social.html">Общественная деятельность</a>
    	<a id="${id}"  class="list-group-item list-group-item-action" href="culture.html">Культурно-творческая деятельность</a>
    	<a id="${id}"  class="list-group-item list-group-item-action" href="sport.html">Спортивная деятельность</a>*/
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
function studyOnClick(id) {
	console.log("studyOnClick");
	var j = JSON.parse(localStorage.getItem("jsonObj_data"));
 	console.log(j);
  	var f = j['files'];
	console.log(f);
  
  	var cat1 = [];
  	for(var i = 0; i < f.length; i++)
  		if((f[i].edecanat_id == id) && (f[i].category == 1))
  			cat1.push(f[i]);
  	localStorage.setItem("session_study", JSON.stringify(cat1));

}