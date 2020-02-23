function calculate() {
    let input = parseInt(document.getElementById("input").value);
    let bill;

    if (input<0)
    {
        alert("Vui long nhap lai");
        document.getElementById("input").value = "";
        document.getElementById("result").innerHTML = "";
    }
    else
    {
        if (input<=100)
        {
            bill = input*600;
            document.getElementById("result").innerHTML = "Tong tien dien: "+bill;
        }
        else
        {
            if (input<=150)
            {
                bill = (100*600)+(input-100)*700;
                document.getElementById("result").innerHTML = "Tong tien dien: "+bill;
            }
            else
            {
                if (input<=200)
                {
                    bill = (100*600)+(50*700)+(input-150)*900;
                    document.getElementById("result").innerHTML = "Tong tien dien: "+bill;
                }
                else
                {
                    if (input>=201)
                    {
                        bill = (100*600)+(50*700)+(50*900)+(input-200)*1100;
                        document.getElementById("result").innerHTML = "Tong tien dien: "+bill;
                    }
                }
            }
        }
    }
}