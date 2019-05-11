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
        console.log('Point');
    }else{
        console.log('No Point');
    }
}
game('red',4);