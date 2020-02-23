function area() {
    let inputNumber = parseInt(document.getElementById("inputNumber").value);
    let area = inputNumber*inputNumber;

    if (inputNumber<0)
    {
        alert("Vui long nhap lai!");
    }
    else
    {
        document.getElementById("result").value = area;
    }
}
function clearNumber() {
    document.getElementById("result").value = "";
    document.getElementById("inputNumber").value = "";
}