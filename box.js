var score = 0;
var round = 1;

var scorearr = []; 


function get_random() {
    var rtop = Math.floor(Math.random() * 100);
    var rleft = Math.floor(Math.random() * 100);

    document.getElementById("box").style.top = rtop + "%";
    document.getElementById("box").style.left = rleft + "%";

    score++;
    document.getElementById("live_score").innerHTML = "Score: " + score;
}

function time() {
    var counter = 5;
    document.getElementById("timer").innerHTML = "Timer: 5";
    var interval = setInterval(function () {
        counter--;
        // Display 'counter' wherever you want to display it.
        if (counter <= 0) {
            sessionStorage.setItem("score", score);
            window.location.href = "./scoreboard.html";
        } else {
            document.getElementById("timer").innerHTML = "Timer: " + counter;

        }
    }, 1000);
}

function start_round() {
    alert(sessionStorage.getItem("score_list"))
    document.getElementById("start").style.display = "none";
    document.getElementById("box").style.display = "block";
    document.body.style.backgroundColor = sessionStorage.getItem("dark_mode1");
    document.body.style.color = sessionStorage.getItem("dark_mode2");
    var level = sessionStorage.getItem("level");

    thelevel(level);
    get_random();
    time();
}

function thelevel(x) {
    var boxd = document.getElementById("box");
    if (x == 5) {
        boxd.style.width = "10px";
        boxd.style.height = "10px";
    } else if (x == 4) {
        boxd.style.width = "20px";
        boxd.style.height = "20px";
    } else if (x == 3) {
        boxd.style.width = "30px";
        boxd.style.height = "30px";
    } else if (x == 2) {
        boxd.style.width = "40px";
        boxd.style.height = "40px";
    } else if (x == 1) {
        boxd.style.width = "50px";
        boxd.style.height = "50px";
    }
}

function box_game() {
    alert(sessionStorage.getItem("score_list"))
    sessionStorage.setItem("user", document.getElementById("username").value);
    sessionStorage.setItem("level", document.getElementById("level").value);
}

function new_game() {
    window.location.href = "./index.html";
}

function scoreboard() {
    document.body.style.backgroundColor = sessionStorage.getItem("dark_mode1");
    document.body.style.color = sessionStorage.getItem("dark_mode2");
    var score = sessionStorage.getItem("score");
    var user = sessionStorage.getItem("user");
    var level = sessionStorage.getItem("level");

    var array = [user, score, level];

    alert(array)

    sessionStorage.setItem("score_list", scorearr + JSON.stringify(array))

    alert(scorearr)

    var list = JSON.parse(sessionStorage.getItem("score_list"))

    alert(list);

    var len = list.length;

    alert(len);

    // add to list 
    for (let i = 0; i < len; i++) {
        var x = document.getElementById('myTable').insertRow(-1);
        var y = x.insertCell(0);
        var z = x.insertCell(1);
        var v = x.insertCell(2);
        var l = x.insertCell(3);
        y.innerHTML = i + 1;
        z.innerHTML = list[0];
        v.innerHTML = list[1];
        l.innerHTML = list[2];
    }
}

function darkmode_get() {
    var checkBox = document.getElementById("backgroundswith");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        document.getElementById("body1").style.backgroundColor = "black";
        document.body.style.color = "white";
        sessionStorage.setItem("dark_mode1", "black");
        sessionStorage.setItem("dark_mode2", "white");
    } else {
        document.getElementById("body1").style.backgroundColor = "white";
        document.body.style.color = "black";
        sessionStorage.setItem("dark_mode1", "white");
        sessionStorage.setItem("dark_mode2", "black");
    }
}