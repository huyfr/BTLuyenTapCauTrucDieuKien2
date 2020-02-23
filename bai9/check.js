function triangleCheck() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    if (a<0 || b<0 || c<0)
    {
        document.getElementById("result").innerHTML = "Day khong phai la 3 canh cua mot tam giac";
    }
    else
    {
        if (a+b>c)
        {
            document.getElementById("result").innerHTML = "Day la 3 canh cua mot tam giac";
        }
        else
        {
            if (b+c>a)
            {
                document.getElementById("result").innerHTML = "Day la 3 canh cua mot tam giac";
            }
            else
            {
                if (a+c>b)
                {
                    document.getElementById("result").innerHTML = "Day la 3 canh cua mot tam giac";
                }
                else
                {
                    document.getElementById("result").innerHTML = "Day khong phai la 3 canh cua mot tam giac";
                }
            }
        }
    }
}