function addToCart(productName = "Karpuz", quantity = 1) {
  console.log("Sepete Eklenen ürün : " + productName + " adet " + quantity);
}

addToCart("Elma", 10);
addToCart("Yumurta", 16);
addToCart();

let sayHello = () => {
  console.log("Hello Kodlama IO!");
};
sayHello();

let sayHello2 = function () {
  console.log("Hello From sayHello2");
};
sayHello2();

function addToCart2(productName, quantity, unitPrice) {} //yanlış kullanım

let product1 = {
  productName: "Elma",
  unitPrice: 10,
  quantity: 5,
};
let product2 = {
  productName: "Armut",
  unitPrice: 12,
  quantity: 10,
};

let product3 = {
  productName: "Karpuz",
  unitPrice: 25,
  quantity: 1,
};

function addToCart3(product) {
  console.log(
    "Ürün: " +
      product.productName +
      " adet: " +
      product.quantity +
      " fiyat: " +
      product.unitPrice +
      " toplam: " +
      product.unitPrice * product.quantity
  );
}
addToCart3(product1);
addToCart3(product2);
addToCart3(product3);

function addToCart4(products) {
  console.log(products);
}

let products = [product1, product2, product3];

addToCart4(products);

//REST - Her zaman en sonda rest yap
function add(bisey, ...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  console.log(total);
  console.log(bisey); // rest den sonra yaparsan bozulur fonksiyon
}

add(10, 20, 30, 40);

//SPREAD - dizi içindeki elemanları dağıt gönder
let numbers = [30, 10, 40, 20, 50];
console.log(Math.max(...numbers)); //buraya spread ile dizi elemanları gönderilir

//Destruct - arraydaki bir öğeyi doğruca değişkene at ve daha fazlası

let [
  akdeniz,
  karadeniz,
  ege,
  doguAnadolu,
  [akdenizSehirleri, karadenizSehirleri],
] = [
  { name: "Akdeniz", population: "15M" },
  { name: "Karadeniz", population: "13M" },
  { name: "Ege", population: "14M" },
  { name: "Doğu Anadolu", population: "16M" },
  [
    ["Mersin", "Antalya"],
    ["Trabzon", "Rize"],
    ["İzmir", "Aydın"],
    ["Malatya", "Hakkari"],
  ],
];

console.log(akdeniz);
console.log(ege);
console.log(karadenizSehirleri);

let newProductName, newUnitPrice, newQuantity;
({
  productName: newProductName,
  unitPrice: newUnitPrice,
  quantity: newQuantity,
} = product1);
console.log(newProductName);
