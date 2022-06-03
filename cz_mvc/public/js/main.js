
var ul = document.getElementById('fio');

var requestURL = 'https://portfolio.tspu.edu.ru/zzz/portfolio/meyder.php?gruppa=403';

var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  var fio = request.response;
  showStudents(fio);

}


var jsonObj_data = {};
var session_data  = {};
var marks_data = {};

function showStudents(jsonObj) {
  console.log("showStudents"); 
  var student = jsonObj['files'];
  var marks = jsonObj['marks'];
  var out = '';
  var prog = '';
  var m =[];
  var p=[];
  var out_json = [];
  var marks_json=[];
  for (var i = 0; i < student.length; i++) {
    var item = {};
    item["fio"] = student[i].fio;
    item["edecanat_id"] = student[i].edecanat_id;
    if (!checkFioAndId(out_json, item))
      out_json.push(item);
  }   
    console.log(out_json);
  localStorage.setItem('jsonObj_data', JSON.stringify(jsonObj));
  
  for(var i = 0; i < out_json.length; i++) 
      out += `<a href="index.html" id="${out_json[i].edecanat_id}:${out_json[i].fio}" onclick="showStudent(this.id)"
               class="list-group-item list-group-item-action">${out_json[i].fio}</a>`;
  	
	 	   
  $('#fio').html(out);
  $('#mark').html(prog);


 }  
function checkFioAndId(outJson, item)  {
  for(var i = 0; i < outJson.length; i++)
    if(outJson[i].fio == item.fio && outJson[i].edecanat_id == item.edecanat_id)
      return true;
  return false;
}
function checkMarksAndId(marks_outJson, item_mark)  {
  for(var i = 0; i < marks_outJson.length; i++)
    if(marks_outJson[i].edecanat_id == item_mark.edecanat_id && marks_json[i].semester == item_mark.semester  )
      return true;
  return false;
  }

function showStudent(data) {
  console.log("showStudent");
  let str = data;
  console.log(str); 
  session_data["id"] = str.substring(0, str.indexOf(':'));
  console.log(session_data.id);
  str = str.substring(str.indexOf(':') + 1);
  session_data["fio"] = str.substring(0);
  console.log(session_data.fio);
  localStorage.setItem('session_data', JSON.stringify(session_data));
}


