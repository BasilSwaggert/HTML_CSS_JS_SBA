function doService() {
    var x = document.getElementById("mySelect").value;
    if(x === "three"){
        alert("We are sorry, but we only service Minnesota at this time.");
    } else {
        alert("We will be happy to assist you!");
    }
}
setInterval(showTime, 1000); 
function showTime() { 
    var time = new Date(); 
    var hour = time.getHours(); 
    var min = time.getMinutes(); 
    var sec = time.getSeconds(); 
    am_pm = "AM"; 
  
    if (hour > 12) { 
        hour -= 12; 
        am_pm = "PM"; 
    } 
    if (hour == 0) { 
        hr = 12; 
        am_pm = "AM"; 
    } 
  
    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 
  
    var currentTime = hour + ":" 
            + min + ":" + sec + am_pm; 
  
    document.getElementById("clock") 
            .innerHTML = currentTime; 
} 
showTime();
var business_size = prompt("Are you a Business?")
                while ("large") {
                    alert("Then you are on the right page!")
                    break;
                }