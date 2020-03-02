function convert() {
    let num = parseFloat(document.getElementById("addValue").value);
    let option01 = document.getElementById("select01").value;
    let option02 = document.getElementById("select02").value;
    console.log(num, option02, option01);
    if (option01 == option02) {
        document.getElementById("result").innerHTML = num;
    } else if (option01 == "feet") {
        document.getElementById("result").innerHTML = num * 0.305;
    } else {
        document.getElementById("result").innerHTML = num * 3.279;
    }
}


