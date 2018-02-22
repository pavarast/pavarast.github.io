function checkCode(theCode) {
    var cCode = document.getElementById('coup');
    var tenCode = "pavara10";
    var twentyCode = "pavara20";
    var thirtyCode = "pavara30";
    var fiftyCode = "pavara50";
    if (tenCode == theCode) {
        document.getElementById("disc").value = "10";
        alert("Your order will be " + document.getElementById("disc").value + "% off!");
    }

    else if (twentyCode == theCode) {
        document.getElementById("disc").value = "20";
        alert("Your order will be " + document.getElementById("disc").value + "% off!");
    }

    else if (thirtyCode == theCode) {
        document.getElementById("disc").value = "30";
        alert("Your order will be " + document.getElementById("disc").value + "% off!");
    }

    else if (fiftyCode == theCode) {
        document.getElementById("disc").value = "50";
        alert("Your order will be " + document.getElementById("disc").value + "% off!");
    } else {
        alert("That is an invalid coupon");
    }
    document.getElementById('coup').value = "";
}
