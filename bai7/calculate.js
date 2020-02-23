function quadratic() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);
    let delta = parseInt((b*b)-(4*a*c));
    let x1 = (-b+Math.sqrt(delta))/(2*a);
    let x2 = (-b-Math.sqrt(delta))/(2*a);

    if (a==0)
    {
        alert("Khong phai la phuong trinh bac hai");
        document.getElementById("a").value = "";
        document.getElementById("b").value = "";
        document.getElementById("c").value = "";
        document.getElementById("result").value = "";
    }
    else
    {
        if (delta>0)
        {
            document.getElementById("result").innerHTML = "X1 = "+x1;
            document.getElementById("result2").innerHTML = "X2 = "+x2;
        }
        else
        {
            if (delta==0)
            {
                document.getElementById("result").innerHTML = "X1 = X2 "+(-b/(2*a));
            }
            else
            {
                document.getElementById("result").innerHTML = "Phuong trinh vo nghiem";
            }
        }
    }
}