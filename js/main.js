//Clock
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
	
	var day =  date.getDate();
	var month = date.getMonth() + 1; 
	var year = date.getFullYear();
	
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;
	
	var date = day + "-" + month + "-" + year;
	document.getElementById("dateDisplay").innertext = date;
	document.getElementById("dateDisplay").textContent = date;
    
    setTimeout(showTime, 1000);
    
}

showTime();

//change colorsets according to the time of the day
function backgroundColor() {
	var background = document.getElementsByTagName('body')[0];
      var currentTime = new Date().getHours();
	  //currentTime = 23;
	  //if the current time is smaller than/equal to zero and if the current time is less than 5 then show the colorset for the night. 
      if (0 <= currentTime&&currentTime < 5) {
       document.body.style.backgroundColor = "#345C9A";
	   document.getElementById("clockDisplay").style.color = "#A6A2FF";
	   document.getElementById("dateDisplay").style.color = "#A6A2FF";
      }
	  
	  //morning
	  if (5 <= currentTime&&currentTime < 8) {
       document.body.style.backgroundColor = "#776FAB";
	   document.getElementById("clockDisplay").style.color = "#A6A2FF";
	   document.getElementById("dateDisplay").style.color = "#352F5D";
      }
	  
	  //day
      if (8 <= currentTime&&currentTime < 17) {
       document.body.style.backgroundColor = "#F8BB62";
	   document.getElementById("clockDisplay").style.color = "##F2D4A8";
	   document.getElementById("dateDisplay").style.color = "#F1D5A5";
      }
	  
	  //evening
      if (17 <= currentTime&&currentTime < 21) {
       document.body.style.backgroundColor = "#C15970";
	   document.getElementById("clockDisplay").style.color = "#FE7D87";
	   document.getElementById("dateDisplay").style.color = "#5D2C35";
      }
	  
	  //night
      if (21 <= currentTime&&currentTime < 24) {
	   document.body.style.backgroundColor = "#454792";
	   document.getElementById("clockDisplay").style.color = "#5B8FC9";
	   document.getElementById("dateDisplay").style.color = "#323159";
      }
}

backgroundColor();