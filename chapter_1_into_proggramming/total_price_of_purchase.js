/* 
• Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
• After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
• Finally, check the amount against your bank account balance to see if you can afford it or not.
• You should set up some constants for the “tax rate”, “phone price”, “accessory price”, and “spending threshold”, as well as a variable for your “bank account balance”.
• You should define functions for calculating the tax and for formatting the price with a “$” and rounding to two decimal places. 
*/

const TAX_RATE = 0.2;
const PHONE_PRICE = 36000;
const ACCESSORY_PRICE = 200;
const SPENDING_TRESHOLD = 100000;

let bankBalance = 150000;
let amount = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function priceFormat(amount) {
  return `$${amount.toFixed(2)}`;
}

while (amount < bankBalance) {
  amount += PHONE_PRICE;

  if (amount < SPENDING_TRESHOLD) {
    amount += ACCESSORY_PRICE;
  }
}

amount += calculateTax(amount);

console.log('Your purchase\'s cost:', priceFormat(amount));

if (amount > bankBalance) {
  console.log("Sorry. You can't afford it");
}
