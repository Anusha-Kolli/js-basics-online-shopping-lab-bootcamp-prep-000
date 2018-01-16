var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;

}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var item_object = {};
  item_object[item] = price
  cart.push(item_object)
  console.log(item + " has been added to your cart.");
 return cart;
}



function viewCart() {

  if (cart.length == 0) console.log("Your shopping cart is empty.");
   else {
     var sentence = 'In your cart, you have ';
     for (var i = 0; i < cart.length; i++) {
       var obj = cart[i];
       var item = Object.keys(obj)[0]
       var price = Object.values(obj)[0]
      if (cart.length == 1) {
         sentence += `${item} at $${price}.`
       } else if (cart.length == 2) {
         if (i == cart.length - 1) {
           sentence += `and ${item} at $${price}.`
         } else {
           sentence += `${item} at $${price} `
         }
       } else if (cart.length > 2) {
         if (i == cart.length - 1) {
           sentence += `and ${item} at $${price}.`
         } else {
           sentence += `${item} at $${price}, `
         }
      }
     }
     console.log(sentence)
  }
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
