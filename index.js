const isCreditCardNumberValid = (cardNumber) => {

    const a = document.getElementById("cardnum").value

    var sum = 0
    var numlength = a.length
    let checkNumber = true

    if (numlength < 16 && numlength > 16) {
        return alert("Girilen kart numarası 16 haneli olmalı")
    }

    for (let i=0; i<numlength;i++){
        let digits = parseInt(a.charAt(i))
        let num2 = parseInt(a.charAt(numlength-1-i))    //her elemanı integere çeviriyorum eğer çevrilemeyen olur ise geçersiz karekter
        if (isNaN(digits)){                             // uyarısı veriyorum
            return alert("Geçersiz karekter")
        }
        if (digits !== num2){                           //tüm rakamların aynı olup olmadığını kontrol ediyorum
            checkNumber= false
        }
        sum += digits
    }
    if ((parseInt(a.charAt(numlength-1))) % 2 !== 0 ){
        return alert("son hane çift olmalı ")
    }
    if (sum < 16 ){
        alert("sayıların toplamı 16 dan büyük olmalıdır")
    }

    if (checkNumber){
        alert("tüm rakamlar aynı")
    }

}
