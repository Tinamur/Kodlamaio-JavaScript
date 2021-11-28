//Mükemmel Sayılar

function findPerfectNumbersUpTo1000() {
  //burayı bilinen en küçük mükemmel sayı olan 6 dan başlatmak mantıklı olabilir.
  for (let i = 1; i <= 1000; i++) {
    if (isPerfectNumber(i)) {
      console.log(i + " : Mükemmel bir sayı");
    }
  }
}

function isPerfectNumber(number) {
  let total = 0; // her ne kadar 1 e garanti bölünüyor olsa da 1 sayısı için yazdığımızda 1 yazmak kodu bozar - baya saçma bi cümle oldu ama doğru bir cümle
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      total += i;
    }
  }
  if (total === number) {
    return true;
  } else {
    return false;
  }
}

findPerfectNumbersUpTo1000();
