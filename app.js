// var num1 = 6

// if(num1 % 3 === 0){
//     console.log('The Number is divisible by 3')
// }
// else if(num1 % 3 !== 0){
//     console.log('The Number is Not divisible by 3')
// }


// var age = prompt('Enter your Age :')

// if(age % 2 == 0){
//     console.log('Even Number')
// }else{
//     console.log('Odd Number')
// // }

// var age = prompt('Enter Your Age :')

// if(age > 50){
//     console.log('Senior Citizen')
// } else if(age > 18){
//     console.log('Old Enough')
// }
// else{
//     console.log('Too Young')
// }

// var username = prompt('Enter Your Name')

// var vowels = ('a,e,i,o,u')

// if(username == vowels){
//     console.log('contain vowels')
// }


    //   functions 

// Assignment 1

function greetUser(username){
    console.log('Hello ' + username); 
}

greetUser('zain');

// Assignment 2

function dateAndTime(){
    console.log(Date());
}

dateAndTime();

// Assignment 3

function fullName(){
    var firstName = prompt('Write your first name');
    var lastName = prompt('Write your last name');
    console.log('Welcome ' + firstName + ' ' + lastName);
}

fullName();

// Assignment 4

function sumOfTwoNumbers(){
    var num1 = +prompt('Enter first number');
    var num2 = +prompt('Enter second number');
    var sumOfTwoNumbers = num1 + num2;
    console.log(sumOfTwoNumbers);
}

sumOfTwoNumbers();

// Assignment 5

function calculator(){
    var num3 = +prompt('Enter first number');
    var num4 = +prompt('Enter second number');
    var operation = prompt('Enter arithmetic operator you want to perform i.e + , - , * , / , %');
    if(operation === '+'){
        console.log(num3 + num4);
    }
    else if(operation === '-'){
        console.log(num3 - num4);
    }
    else if(operation === '*'){
        console.log(num3 * num4);
    }
    else if(operation === '/'){
        console.log(num3 / num4);
    }
    else if(operation === '%'){
        console.log(num3 % num4);
    }
    else{}
}

calculator();

// Assignment 6

function square(num5){
    console.log(num5 ** 2);
}

square(5);

// Assignment 7

let num6 = +prompt('Enter a number to calculate its factorial');

function factorialOfNumber(){
    if(num6 < 0){
        console.log('The factorial of negative integer does not exist');
    }
    else if(num6 === 0){
        console.log('The factorial of zero is 1.');
    }
    else{
        let fact = 1
        for(i = 1 ; i <= num6 ; i++){
            fact *= i;
        }
        console.log('The factorial of ' + num6 + ' is ' + fact);
    }
}
factorialOfNumber();

// Assignment 8

var num9 = +prompt('Enter first number');
var num10 = +prompt('Enter second number');

function counting(){
    if(num9 > num10){
        console.log('First number must be smaller than second number');
    }
    else if(num9 < num10){
        num9 += 1;
        console.log(num9);
        counting();
    }
}

counting();

// Assignment 9

function calculateHypotenuse(){
    let base = +prompt('Enter value of base');
    let perpendicular = +prompt('Enter value of perpendicular');
    function calculateSquare(){
        let baseSquare = base ** 2;
        let perpendicularSquare = perpendicular ** 2;
        let hypotenuseSquare = baseSquare + perpendicularSquare;
        console.log('Hypotenuse Square = ' + hypotenuseSquare);
    }
    calculateSquare() 
}

calculateHypotenuse();

// Assignment 12

function areaOfRectangle(width , height){
    return width * height;
}

let width = 4;
let height = 3;

console.log('The area of rectangle is ' + areaOfRectangle(width , height));
console.log('The area of rectangle is ' + areaOfRectangle(5 , 6));

// Assignment 15

var param = function inner(){
    return typeof inner;
}
alert(param());

// Assignment 16

function powerOfANumber(base , exponent){
    return base**exponent;
}

console.log('5 to the power 3 is ' + powerOfANumber(5 , 3));

// Assignment 23

function returnType(input){
    return typeof input;
}

console.log('The type of 12 is ' + returnType(12));
console.log('The type of "Hello" is ' + returnType('Hello'));
console.log('The type of true is ' + returnType(true));
console.log('The type of {} is ' + returnType({}));
console.log('The type of function() {} is ' + returnType(function() {}));
console.log('The type of () is ' + returnType());

// Assignment 26

let date = new Date();
let currentYear = date.getFullYear();

function calculateAge(birthYear , currentYear){
    return 'You are either ' + (currentYear - birthYear - 1) + ' or ' + (currentYear - birthYear) + ' years old';
}
console.log(calculateAge(2000 , currentYear));
console.log(calculateAge(1995 , currentYear));
console.log(calculateAge(1990 , currentYear));

// Assignment 27

function calculateSupply(age , amountPerDay){
    let maxAge = 80;
    return 'You will need ' + ((maxAge - age) * amountPerDay) + ' oreo biscuits to last you until the ripe old age of ' + maxAge;
}

console.log(calculateSupply(24 , 2));
console.log(calculateSupply(23 , 3));
console.log(calculateSupply(22 , 4));

// Assignment 28

function calcCircumference(radius){
    let circumference = 2 * 3.142 * radius;
    return 'The circumference of a circle is ' + circumference;
}

console.log(calcCircumference(4));

function calcArea(radius){
    let area = 3.142 * (radius**2);
    return 'The area of a circle is ' + area;
}

console.log(calcArea(4));

// Assignment 29

function celsiusToFahrenheit(celsius){
    let fahrenheit = ((9/5) * celsius) + 32;
    return celsius + 'C is ' + fahrenheit + 'F'; 
}

console.log(celsiusToFahrenheit(10));

function fahrenheitToCelsius(fahrenheit){
    let celsius = 5/9 * (fahrenheit - 32);
    return fahrenheit + 'F is ' + celsius + 'C';
}

console.log(fahrenheitToCelsius(50));




