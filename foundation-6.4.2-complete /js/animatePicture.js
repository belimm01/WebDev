function animate() {
    let start = Date.now(); // remember start time
    let timer = setInterval(function () {
        // how much time passed from the start?
        let timePassed = Date.now() - start;
        console.log(timePassed);
        if (timePassed >= 700) {
            clearInterval(timer); // finish the animation after 2 seconds
            return;
        }

        // draw the animation at the moment timePassed

        drawMobile(timePassed);
        drawMac(-timePassed);
        drawDesk(-timePassed);

    }, 20);
}

// as timePassed goes from 0 to 2000
// left gets values from 0px to 400px
function drawMobile(timePassed) {
    mobile.style.left = timePassed / 3 + 'px';
}

function drawMac(timePassed) {
    mac.style.left = timePassed / 3 + 'px';
}

function drawDesk(timePassed) {
    desk.style.left = timePassed / 3 + 'px';
}
