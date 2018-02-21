function checkCode(theCode) {
    var cCode = document.getElementById('coup');
    var discountCode = "pavara20";
 
    if (discountCode == theCode) {
        document.getElementById("disc").value = "20";
        alert("Your order will be " + document.getElementById("disc").value + "% off!");
    }

    else {
        alert("That is an invalid coupon");
    }
    document.getElementById('coup').value = "";
}