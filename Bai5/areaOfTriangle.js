function areaOfRightTriangle() {
    let base = parseInt(document.getElementById("base").value);
    let verticalHeight = parseInt(document.getElementById("verticalHeight").value);
    let area = (0.5*verticalHeight*base);

    if (base<0 || verticalHeight<0)
    {
        alert("Vui long nhap lai");
        document.getElementById("base").value = "";
        document.getElementById("verticalHeight").value = "";
    }
    else
    {
        document.getElementById("result").value = area;
    }
}