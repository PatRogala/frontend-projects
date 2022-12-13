const input = require('sync-input');

console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");
console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
console.log("Type the currency you wish to convert: USD");

let currency = input("To: ").toUpperCase();
if (currency !== "USD" && currency !== "JPY" && currency !== "EUR" && currency !== "RUB" && currency !== "GBP") {
    console.log("Unknown currency");
    return;
}

let amount = Number(input("Amount: "));
if (amount < 1) {
    console.log("The amount cannot be less than 1");
    return;
}

if (isNaN(amount)) {
    console.log("The amount has to be a number");
    return;
}

if (currency === "USD") {
    console.log(`Result: ${amount} USD equals ${(amount).toFixed(4)} USD`);
}
else if (currency === "JPY") {
    console.log(`Result: ${amount} USD equals ${(amount * 113.5).toFixed(4)} JPY`);
}
else if (currency === "EUR") {
    console.log(`Result: ${amount} USD equals ${(amount * 0.89).toFixed(4)} EUR`);
}
else if (currency === "RUB") {
    console.log(`Result: ${amount} USD equals ${(amount * 74.36).toFixed(4)} RUB`);
}
else if (currency === "GBP") {
    console.log(`Result: ${amount} USD equals ${(amount * 0.75).toFixed(4)} GBP`);
}
