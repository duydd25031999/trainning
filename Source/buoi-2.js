

function drawClock() {
    clock.drawFace();
    clock.drawNumbers();
    clock.drawTime();
}

setInterval(drawClock, 1000);