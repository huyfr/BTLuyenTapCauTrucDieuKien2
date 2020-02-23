function calculate() {
    let input = parseFloat(document.getElementById("input").value);
    let option = parseFloat(document.getElementById("option").value);
    let interest = input*(option/100);

    if (input<0)
    {
        alert("Vui long nhap lai");
        document.getElementById("input").value = "";
        document.getElementById("result").innerHTML = "";
    }
    else
    {
        document.getElementById("result").innerHTML = "So tien lai: "+interest;
    }
}