function simpleEquation() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let result = -b/a;

    if (a!=0)
    {
        document.getElementById("result").innerHTML = result;
    }
    else
    {
        if (a==0 && b!=0)
        {
            document.getElementById("result").innerHTML = "Phuong trinh vo nghiem";
        }
        else
            document.getElementById("result").innerHTML = "Phuong trinh co vo so nghiem";
    }
}
function clearButton() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
}