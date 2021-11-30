var score = 0;
function random() {
    var rtop = Math.floor(Math.random() * 100);
    var rleft = Math.floor(Math.random() * 100);

    console.log(rtop + " and " + rtop);

    document.getElementById("box").style.top = rtop + "%";
    document.getElementById("box").style.left = rleft + "%";

    score++;
    document.getElementById("live_score").innerHTML = "Score: " + score;
    console.log(score);
}

function time() {
    var counter = 5;
    var interval = setInterval(function() {
        counter--;
        // Display 'counter' wherever you want to display it.
        if (counter <= 0) {
            window.location.href = "./scoreboard.html";
            return;
        }else{
            document.getElementById("timer").innerHTML = "timer: " + counter;
        }
    }, 1000);
}

function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("box").style.display = "block";
    random();
    time();
}
