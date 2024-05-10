
function on() {
    // display overlay
    const turnOn = document.getElementById("overlay");
    turnOn.style.display = "block";
    // turn off vertical scroll
    const overflow = document.querySelector("body");
    overflow.style.overflow = "hidden";
}

function off() {
    // display overlay
    const turnOff = document.getElementById("overlay");
    turnOff.style.display = "none";
    // turn off vertical scroll
    const overflow = document.querySelector("body");
    overflow.style.overflow = "";
}