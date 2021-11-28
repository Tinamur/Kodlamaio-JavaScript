//ASAL Sayı Bulma

function findPrime(...numbers) {
  let primeNumbers = [];
  let nonPrimeNumbers = [];

  numbers.forEach((number) => {
    if (isPrime(number)) {
      primeNumbers.push(number);
    } else {
      nonPrimeNumbers.push(number);
    }
  });
  writeNumbers(primeNumbers, nonPrimeNumbers);
}

function isPrime(number) {
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function writeNumbers(primeNumbers, nonPrimeNumbers) {
  console.log("Prime Numbers : " + primeNumbers); // Çabuk olsun diye doğruca diziyi yazdırıyorum
  console.log("Nonprime Numbers : " + nonPrimeNumbers);
}

function findPrimeUpTo1000() {
    let primeNumbers = [] //console da çok satır kapladığı için dizi içine atıp yazdıracağım - böyle yapınca da pek güzel görünmüyor ama
    for (let i = 2 ; i<=1000 ; i++){
        if (isPrime(i)) {
            primeNumbers.push(i)
        }
    }
    console.log("Asal sayılar : " + primeNumbers);
}

findPrime(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17,18,19,20,21,22);
//
findPrimeUpTo1000()
