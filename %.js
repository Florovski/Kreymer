// Креймер Максим 1ИСП-21
alert("Данная программа служит для нахождения остатка от деления двух чисел");

var num1 = prompt("Введите первое число:");
var num2 = prompt("Введите второе число:");

var floatNum1 = parseFloat(num1);
var floatNum2 = parseFloat(num2);
var res = floatNum1 % floatNum2;

alert("Ответ: " + res);
console.log("Остаток от деления:", res);