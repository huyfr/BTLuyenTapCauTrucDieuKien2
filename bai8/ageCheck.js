function ageCheck() {
    let input = document.getElementById("ageInput").value;

    if (input>0 && input<120)
    {
        document.getElementById("result").innerHTML = " Tuoi cua ban la "+ input;
    }
    else
    {
        alert("Vui long nhap lai");
        document.getElementById("result").innerHTML = "";
        document.getElementById("ageInput").value = "";
    }
}