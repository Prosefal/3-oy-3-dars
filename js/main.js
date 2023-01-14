var ball = prompt("Imtihondan olgan balingizni kiriting");


if (ball <= 79){
    alert("O'qishga kira olmadingiz");



}else if (ball >= 80 && ball < 100){
    alert("Super kontrak asosida o'qishga kirdingiz");
    var money = prompt('Kontrakt miqdori yiliga 3000$, sizda qancha pul bor?');
    if (money >= 3000){    
        alert("O'qishga qabul qilindingiz.");
    }else if (money < 3000){
        alert("O'qishga qabul qilinmadingiz.");
    }



}else if (ball >= 100 && ball <= 150){
    alert("Kontrakt asosida o'qishga qabul qilindingiz");
    var money = prompt('Kontrakt miqdori yiliga 2000$, Qancha pulingiz bor?');
    if (money >= 2000){
        alert("O'qishga qabul qilindingiz.");
    }else if (money < 2000){
        alert("O'qishga qabul qilinmadingiz.");
    }


}else if(ball >= 151 && ball <= 180){
    alert("Grant asosida o'qishga qabul kirdingiz");
}else{
    alert("Qiymat noto'g'ri kiritilgan");
}