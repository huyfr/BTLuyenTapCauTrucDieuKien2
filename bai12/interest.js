function interest()
{
    let inputMoneys = parseInt(document.getElementById("inputMoneys").value);
    let inputMonths = parseInt(document.getElementById("inputMonths").value);
    let result = parseInt(document.getElementById("inputMoneys").value);
    for (let i=0; i<inputMonths; i++)
    {
        inputMoneys=inputMoneys+inputMoneys*0.3/100;
    }
    result=inputMoneys-result;
    document.getElementById("result").innerHTML="So tien lai sau "+inputMonths+" :"+formatNumber(result);
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}