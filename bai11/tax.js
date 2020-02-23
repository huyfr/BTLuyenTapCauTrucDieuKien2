function tax() {
    let inputWage = parseInt(document.getElementById("input").value);
    let tax;

    if (inputWage<0)
    {
        alert("Vui long nhap lai");
        document.getElementById("input").value ="";
        document.getElementById("result").innerHTML = "";
    }
    else
    {
        if (inputWage<7000000)
        {
            tax = inputWage*0.1;
        }
        else
        {
            if (inputWage<=15000000)
            {
                tax = 7000000*0.1+(inputWage-7000000)*0.2;
            }
            else
            {
                if (inputWage>15000000)
                {
                    tax = 7000000*0.1+15000000*0.2+(inputWage-15000000)*0.3;
                }
            }
        }
    }
    document.getElementById("result").innerHTML = "So tien thue la "+formatNumber(tax);
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}