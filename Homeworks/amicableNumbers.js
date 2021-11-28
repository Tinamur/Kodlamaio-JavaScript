//Arkadaş Sayılar

function findAmicable(number1, number2) {
  let total1 = 1; //1 e kesin bölünüyor
  for (let i = 2; i <= number1 / 2; i++) {
    if (number1 % i === 0) {
      total1 += i;
    }
  }
  //Eğer 1. Toplam Sayı 2 ye eşit değilse devam bile etme
  if (total1 === number2) {
    let total2 = 1;
    for (let i = 2; i <= number2 / 2; i++) {
      if (number2 % i === 0) {
        total2 += i;
      }
    }
    if (total2 === number1) {
      console.log(number1 + " ve " + number2 + " Sayıları Kardeş Sayılardır");
    }
  } else {
    console.log(number1 + " ve " + number2 + " Sayıları Kardeş Sayı değildir");
  }
}

findAmicable(100, 200);
findAmicable(220, 284);
findAmicable(220, 1184);
findAmicable(1184, 1210);
