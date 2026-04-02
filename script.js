function predict() {
    let area = document.getElementById("area").value;
    let eff = document.getElementById("efficiency").value;
    let irr = document.getElementById("irradiance").value;
    let pr = document.getElementById("pr").value;

    if(area && eff && irr && pr){
        let output = area * eff * irr * pr;
        document.getElementById("result").innerHTML =
            "⚡ Estimated Solar Output: " + output.toFixed(2) + " kWh/day";
    } else {
        document.getElementById("result").innerHTML =
            "Please fill all fields!";
    }
}