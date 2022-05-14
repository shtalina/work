function studyOnClick() {
	console.log("studyOnClick");
	var str = document.URL;
	console.log(str);
  	var id = str.substring(str.indexOf('?') + 1);
  	console.log("id = " + id);
  	var achieve = JSON.parse(localStorage.getItem("session_achieve"));
  	console.log(achieve);
  
  	var cat1 = [];
  	for(var i = 0; i < achieve.length; i++)
  		if(achieve[i].category == 1)
  			cat1.push(achieve[i]);
  	localStorage.setItem("session_study", JSON.stringify(cat1));

}