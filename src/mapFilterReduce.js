let cart = [
  { id: 1, productName: "Telefon", quantity: 1, unitPrice: 4000 },
  { id: 2, productName: "Bardak", quantity: 3, unitPrice: 50 },
  { id: 3, productName: "Kalem", quantity: 2, unitPrice: 10 },
  { id: 4, productName: "Şarj Alet", quantity: 1, unitPrice: 40 },
  { id: 5, productName: "Kitap", quantity: 2, unitPrice: 25 },
  { id: 6, productName: "A4 Kağıt", quantity: 60, unitPrice: 2 },
  { id: 7, productName: "Pil", quantity: 12, unitPrice: 4 },
  { id: 8, productName: "Resim", quantity: 1, unitPrice: 200 },
];

//cart.map(product=>console.log(product.productName))
cart.map((product) => {
  console.log(
    product.productName + " : " + product.unitPrice * product.quantity
  );
});

let quantityOver2 = cart.filter((product) => product.quantity > 2);

console.log(quantityOver2);

let total = cart.reduce(
  (acc, product) => acc + product.unitPrice * product.quantity,
  0
);
console.log(total);
