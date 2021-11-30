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
            scoreboard();
        }
    }, 1000);
}

function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("box").style.display = "block";
    random();
    time();
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
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = score;
}
