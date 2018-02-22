function checkCode(theCode) {
    var cCode = document.getElementById('coup');
    var twentyCode = "20tfgs"
    var thirtyCode = "30bnsw"
     
    if (twentyCode == theCode) {
        document.getElementById("disc").value = "20";
        alert("Your order will be " + document.getElementById("disc").value + "% off!, select 'Buy Now' for your discount");
    }
    
    else if (thirtyCode == the Code) {
    	document.getElementById("disc").value = "30";
    	alert("Your order will be " + document.getElementById("disc").value + "% off!, select 'Buy Now' for your discount");

    else {
        alert("That is an invalid coupon");
    }
    document.getElementById('coup').value = "";
}
