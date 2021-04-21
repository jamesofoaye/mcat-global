// End date
let countDownDate = new Date('May 2, 2021 00:00:00').getTime();

// Update every 1 second
let x = setInterval(function () {

    // Retrieving today's date
    let now = new Date().getTime();

    // Calculation of the distance between today and the end
    let distance = countDownDate - now;

    //Time calculation
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display of the result in the id = demo
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the counter reaches the end
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "EXPIRED";
    }
}, 1000);

