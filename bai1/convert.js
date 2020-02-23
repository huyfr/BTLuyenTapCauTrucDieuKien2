function convertTemperature() {
    let input = parseInt(document.getElementById("inputTemperature").value);
    let convert = input*(9/5)+32;

    document.getElementById("outTemperature").value = convert;
}