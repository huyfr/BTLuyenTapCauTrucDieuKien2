function convertLength() {
    let input = parseInt(document.getElementById("inputM").value);
    let convert = input*3.2808;

    document.getElementById("outputFeet").value = convert;
}