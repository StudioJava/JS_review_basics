/* 
Create a function called `difference` that takes 2 prices 
and calculates the difference between the 2. Validate that 
your function is working by passing different numbers to it.
*/
function difference(num1,num2){
    return num1 - num2;
}
//console.log(difference(103,32));

//Creating an object
fruit1 = {
    name:'apple',
    price:3,
    shape:'round',
    color:'red'
}
fruit1.price = 8;
//console.log(fruit1.price);

/* 
Create 2 objects for 2 different cars, set a different
 brand, model, plate number, color and price for each. 
 Then change the price of the first car and the brand and model of the second car.
 Verify that your changes have taken place.
*/
 car1 = {
     brand:'Honda',
     model:'Civic',
     plateNumber:'K234MA',
     color:'White',
     price:26000
 }
 car2 = {
    brand:'VW',
    model:'Taurugh',
    plateNumber:'T3234ER',
    color:'Black',
    price:32000
 }
 car1.price = 12000;
 car2.brand = 'Toyota';
 //console.log(car1.price);
 //console.log(car2.brand);
 
 //Booleans
 age = 17;
 if(age >= 18){
     console.log('Sell Beer');
 }else console.log('No Beer Sell Allowed');

/* 
Create a `speed` variable and give it a number value. The speed limit is `50` (Km/h). 
If the speed is over the limit, give the driver a speeding ticket, 
otherwise they're free to go.
*/
 var speed = 50;
 function speedCheck(mph){
    if(mph > 50){
        console.log('Speeding Ticket')
    }else{
        console.log('Free to go ');
    }
 }
speedCheck(120);
//Logical Operator
var payment;
if (payment != "card") {
    console.log("Sell Beer")
  }

/* 
Create a simple pool game (snooker), 
where the ball that's going in the hole will score 1 point only if
1. either the ball has a color
2. or all other balls went through already
*/
snookerGame = {
ball1:{
    color:'white',
    number:1
},
ball2:{
    color:'red',
    number: 2
}
}
// function snookerGame(ballColor,ballNumber){
//     var counter = 0;
// if(ballColor != 'white' && ballNumber !== 7 ){
// return console.log('One Point');
// }else{
//     return console.log('No Point');
// }
// }
function game(ballColor,number){
    if(ballColor != 'white' || number != 7){
        console.log('You go a Point');
    }else{
        console.log('No Point');
    }
}
game('red',4);
//console.log(snookerGame.ball1.color);
//ARRAYS
var apple = 3;
var banana = 2;
var cherry = 7;
var cart = [apple,banana,cherry];
console.log(cart);
//+++LOOPS+++++ for(item in cart){console.log(cart[item])}
for(item in cart){
    console.log(cart[item]);
}
//Adding all elements of number array
var total = 0;
for(item in cart){
    total += cart[item];
    console.log(total)
}

/*
Create a bowling game where an array of scores for a single player
 is passed to a function which returns the sum of all scores. However, 
 if a score is 10 (strike), increase the total by 15 points.
*/
var score = [2,4,7,9,10,3,6,10];
function scoreSum(array){
    var total = 0;
    for(item in array){
        total = total +  array[item];
        if(array[item] == 10){
            total = total + 15;

        }
       console.log(total);

    }
}
console.log(scoreSum(score));
/*
Set the constants `city` and `color` to 
your likings and the constant `birth` to your year of birth,
then use them to log the following phrase as a string:

Hello, I'm *name*, I come from *city*, my favourite color is *color* 
and I'm *years* old. (Where *years* should be a calculated inline
     based on your year of birth).
*/
const name = 'Teddy';
const city = 'Moncton';
const color = 'Red';
const birth = 'February';
const number = 4;
console.log(`Hello, I'm ${name} I come from ${city} my favourite color is ${color} born in ${birth}`);
typeof number;
/*
1. Create a list of countries as an array
1. Create a function that, given a country and a position, 
will add that country either at the beginning or the end of the array
1. Create another function that, given a position,
 will either remove a country from the beginning 
 or the end of the array
---
*/
var countries = ['USA','Mexico','Canada','India','Peru','Thailand'];
function addPlace(name){
    countries.push(name);
}
addPlace('England');
console.log(countries);
//Understanding local and global scope
var x = 'outside';
function printScope(){
    var x = 'inside';
    console.log(x);
}
printScope();
const fruit = {
    name:'apple',
    price: 3
}
fruit.shape = 'round';
console.log(fruit.shape);
delete fruit.price;
console.log(fruit);

//Functional Object Oriented Programming
 carA = {
    brand:'Mercedes',
    status:'at rest',
    start: function(){
        this.status = 'running';
    },
    stop: function(){
        this.status = 'at rest';
    }
}
console.log(carA.status)
carA.start();
console.log(carA.status)