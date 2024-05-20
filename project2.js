const hourE1 = document.getElementById("hour");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const ampmE1 = document.getAnimations("ampm");

function updateCLOCK(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm ="AM"

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    hourE1.innerText = h;
    minutesE1.innerText = m;
    secondsE1.innerText = s;
    ampmE1, (innerText = ampm);

}
updateCLOCK()