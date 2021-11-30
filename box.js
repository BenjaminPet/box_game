var rtop = Math.floor(Math.random() * 100);
var rwidth = Math.floor(Math.random() * 100);

alert(rtop + " and " + rwidth)

function noe(t, w) {
    document.getElementsByClassName("box").top = rtop
}

noe(rtop, rwidth);
