function checkCode(theCode) {
    var cCode = document.getElementById('coup');
    var discountCode = "30bnsw";
 
    if (discountCode == theCode) {
        document.getElementById("disc").value = "30";
        alert("Your order will be " + document.getElementById("disc").value + "% off!");
    }

    else {
        alert("That is an invalid coupon");
    }
    document.getElementById('coup').value = "";
}
