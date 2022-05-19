//1
let hello = "Hello World";
document.write(hello + "<br>");
//2
let erlan = "hello erlan";
document.write(erlan + "<br>");
erlan = "hello erlan abdullaev";
document.write(erlan + "<br>");
//3
let name = "Erlan";
let email = "abdullaev.erlan.kk@gmail.com";
document.write("My name is:" + name + "<br>");
document.write("My email:" + email + "<br>");
//4
const SOUVENIR_WEIGHT = 75;
const TRINKET_WEIGHT = 112;
let souvenir = Number(prompt("Введите количество сувениров"));
let trinket = Number(prompt("Введите количество безделушек"));
let totalWeight = SOUVENIR_WEIGHT * souvenir + TRINKET_WEIGHT * trinket;
document.write(`Общий вес посылки составляет : ${totalWeight} гр <br>`);
//5
let a = Number(prompt("Введите целое число a ="));
let b = Number(prompt("Введите целое число b ="));
document.write(a + b + "<br>");
document.write(a - b + "<br>");
document.write(a * b + "<br>");
document.write(a / b + "<br>");
document.write((a % b) + "<br>");
document.write(a ** b + "<br>");
