
function random() {
    var rtop = Math.floor(Math.random() * 100);
    var rwidth = Math.floor(Math.random() * 100);

    alert(rtop + " and " + rwidth)

    document.getElementsByClassName("box").top = rtop;
    document.getElementsByClassName("box").width = rwidth;
}

function time() {
    for (i = 60; i != 0; i--) {
        await delay(1000);
        document.getElementsByClassName("time").innerhtml = "time " + i
    }
}

function start() {
    random();
    time();
}
