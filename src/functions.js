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

let products = [product1,
    product2, 
    product3];

addToCart4(products);
