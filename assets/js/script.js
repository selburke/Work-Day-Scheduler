var today = moment();

//Table Header: Date
$(".date").text(today.format('LL'));


//Business Hours
var businessHrs = document.querySelectorAll(".businessHrs");
var time = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

for (var i = 0; i < businessHrs.length; i++) {
    businessHrs[i].textContent = time[i];
}

//Past, Present, & Future
//past = "LightCoral"
//present = "LightCyan"
//future = "LightGreen"


var currentTime = moment().format("HH");

var am9 = moment("9:00", "HH:mm").format("HH");
var am10 = moment("10:00", "HH:mm").format("HH");
var am11 = moment("11:00", "HH:mm").format("HH");
var pm12 = moment("12:00", "HH:mm").format("HH");
var pm1 = moment("13:00", "HH:mm").format("HH");
var pm2 = moment("14:00", "HH:mm").format("HH");
var pm3 = moment("15:00", "HH:mm").format("HH");
var pm4 = moment("16:00", "HH:mm").format("HH");
var pm5 = moment("17:00", "HH:mm").format("HH");

//9am
if(currentTime > am9){
    document.getElementById("am9").style.color="LightCoral";
} else if(currentTime < am9){
    document.getElementById("am9").style.color="LightGreen";
} else {document.getElementById("am9").style.color="LightCyan";
};

//10am
if(currentTime > am10){
    document.getElementById("am10").style.color="LightCoral";
} else if(currentTime < am10){
    document.getElementById("am10").style.color="LightGreen";
} else {document.getElementById("am10").style.color="LightCyan";
};

//11am
if(currentTime > am11){
    document.getElementById("am11").style.color="LightCoral";
} else if(currentTime < am11){
    document.getElementById("am11").style.color="LightGreen";
} else {document.getElementById("am11").style.color="LightCyan";
};

//12pm
if(currentTime > pm12){
    document.getElementById("pm12").style.color="LightCoral";
} else if(currentTime < pm12){
    document.getElementById("pm12").style.color="LightGreen";
} else {document.getElementById("pm12").style.color="LightCyan";
};

//1pm
if(currentTime > pm1){
    document.getElementById("pm1").style.color="LightCoral";
} else if(currentTime < pm1){
    document.getElementById("pm1").style.color="LightGreen";
} else {document.getElementById("pm1").style.color="LightCyan";
};

//2pm
if(currentTime > pm2){
    document.getElementById("pm2").style.color="LightCoral";
} else if(currentTime < pm2){
    document.getElementById("pm2").style.color="LightGreen";
} else {document.getElementById("pm2").style.color="LightCyan";
};

//3pm
if(currentTime > pm3){
    document.getElementById("pm3").style.color="LightCoral";
} else if(currentTime < pm3){
    document.getElementById("pm3").style.color="LightGreen";
} else {document.getElementById("pm3").style.color="LightCyan";
};

//4pm
if(currentTime > pm4){
    document.getElementById("pm4").style.color="LightCoral";
} else if(currentTime < pm4){
    document.getElementById("pm4").style.color="LightGreen";
} else {document.getElementById("pm4").style.color="LightCyan";
};

//5pm
if(currentTime > pm5){
    document.getElementById("pm5").style.color="LightCoral";
} else if(currentTime < pm5){
    document.getElementById("pm5").style.color="LightGreen";
} else {document.getElementById("pm5").style.color="LightCyan";
};

//Save
$('.savebtn').on('click', function() {
    const time = $(this).attr('id')
    const value = $(this).siblings('td').children().val();
    if (value == '') {
        alert("Please enter a text");
        return
    } 
    localStorage.setItem(time, value);

})