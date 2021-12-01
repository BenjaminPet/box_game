var score = 0;
var noe = [];

function get_random() {
    var rtop = Math.floor(Math.random() * 100);
    var rleft = Math.floor(Math.random() * 100);

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
            scoreboard();
        }
    }, 1000);
}

function start_round() {
    document.getElementById("start").style.display = "none";
    document.getElementById("box").style.display = "block";
    get_random();
    time();
    console.log(noe);
}
function thelevel(x) {
    var boxd = document.querySelectorAll("box");
    if (x === 1) {
        boxd.style.width = "10px";
        boxd.style.height = "10px";
    }
}

function new_game() {
    var user = document.getElementById("username").value;
    var levelf = document.getElementById("level").value;
    console.log(levelf);
    thelevel(levelf);
    noe = [user, levelf];

}

function scoreboard() {

    


    var table = document.getElementById("TheScoreboard");

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Add some text to the new cells:
    cell1.innerHTML = "jfjf";
    cell2.innerHTML = noe(1);
    cell3.innerHTML = score;
}
