function area() {
    let width = parseInt(document.getElementById("inputWidth").value);
    let length = parseInt(document.getElementById("inputLength").value);
    let area = length*width;

    if (width<0 || length<0)
    {
        alert("Vui long nhap lai")
        document.getElementById("inputLength").value = "";
        document.getElementById("inputWidth").value = "";
    }
    else
    {
        document.getElementById("result").value = area;
    }
}