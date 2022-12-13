const input = require('sync-input');

console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");
console.log("What do you want to convert?");
const fromCurrency = input("From: ").toUpperCase();
if (fromCurrency !== "USD" && fromCurrency !== "JPY" && fromCurrency !== "EUR" && fromCurrency !== "RUB" && fromCurrency !== "GBP") {
    console.log("Unknown currency");
    return;
}

let toCurrency = input("To: ").toUpperCase();
if (toCurrency !== "USD" && toCurrency !== "JPY" && toCurrency !== "EUR" && toCurrency !== "RUB" && toCurrency !== "GBP") {
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

let newAmount;

switch(fromCurrency) {
    case "USD":
        newAmount = amount;
        break;
    case "JPY":
        newAmount = amount / 113.5;
        break;
    case "EUR":
        newAmount = amount / 0.89;
        break;
    case "RUB":
        newAmount = amount / 74.36;
        break;
    case "GBP":
        newAmount = amount / 0.75;
        break;
    default:
        console.log("error!");
        break;
}

if (toCurrency === "USD") {
    console.log(`Result: ${amount} ${fromCurrency} equals ${(newAmount).toFixed(4)} USD`);
}
else if (toCurrency === "JPY") {
    console.log(`Result: ${amount} ${fromCurrency} equals ${(newAmount * 113.5).toFixed(4)} JPY`);
}
else if (toCurrency === "EUR") {
    console.log(`Result: ${amount} ${fromCurrency} equals ${(newAmount * 0.89).toFixed(4)} EUR`);
}
else if (toCurrency === "RUB") {
    console.log(`Result: ${amount} ${fromCurrency} equals ${(newAmount * 74.36).toFixed(4)} RUB`);
}
else if (toCurrency === "GBP") {
    console.log(`Result: ${amount} ${fromCurrency} equals ${(newAmount * 0.75).toFixed(4)} GBP`);
}