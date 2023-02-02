console.log(".................1st task................")
let isEqualsJson = (obj1,obj2)=>{
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);

    //return true when the two json has same length and all the properties has same value key by key
    return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
}

let obj1 = {name:"Person 1",age:5};
let obj2 = {age:5 , name:"Person 1"}; 

console.log("json is equals: "+ isEqualsJson(obj1,obj2));


console.log("...........Task 1: Simple Programs todo for variables task 1st question....................")
var a;
var b;
var c;
var d;
console.log(a,b,c,d)

console.log("............Task 1: Simple Programs todo for variables task 2nd question....................")



console.log("...........Task 1: Simple Programs todo for variables task 3rd question....................")
var firstName = "Dhamotharan";
var lastName = "Jaganathan";
var age1 = 26;
var maritalStatus = "single";
console.log(firstName, lastName, age, maritalStatus)

console.log("..........Task 1: Simple Programs todo for variables task 4th question....................")
var [firstName, lastName, age, maritalStatus] = ["Dhamotharan", "Jaganathan", 26, "single"]
console.log(firstName, lastName, age, maritalStatus)

console.log("..........Task 1: Simple Programs todo for variables task 5th question....................")
var a = "Hi there";
var check = true;
var b;
var c = null;
console.log(a, check, b, c)

console.log("..........Task 1: Simple Programs todo for variables task 6th question....................")
var x = "100";
var y = +x;
console.log(typeof y)

console.log("..........Task 1: Simple Programs todo for variables task 7th question....................")

console.log("..........Square of a number....................")
var a = 7;
var squareOfNumber = Math.pow(a,2);
console.log(squareOfNumber);

console.log("..........Swapping 2 numbers....................")
var a = 5;
var b = 7;
[a, b] = [b, a];
console.log(a, b);

console.log("..........Addition of 3 numbers....................")
var a = 5;
var b = 10;
var c = 15;
var sum = a+b+c;
console.log(sum)

console.log("..........Celsius to Fahrenheit conversion....................")
var tempAtCelsius = 45;
var tempAtFahrenheit = (tempAtCelsius*1.8) + 32;
console.log(tempAtFahrenheit)

console.log("..........Meter to miles....................")
var distanceInMeter = 2500;
var distanceInMiles = distanceInMeter*0.00062137;
console.log(distanceInMiles.toFixed(3)+"Miles")

console.log("..........Pounds to kg....................")
var weightInPound = 165;
var weightInKg = weightInPound*0.45359237
console.log(weightInKg.toFixed(3))

console.log("..........Power of any number x ^ y....................")
var x = 15;
var y = 5
var squareOfNumber = Math.pow(a,y);
console.log(squareOfNumber);

console.log("..........volume of sphere....................")
var radius = 5;
var volumeOfSphere = (4/3)*(22/7)*(Math.pow(radius,3))
console.log(volumeOfSphere.toFixed(3))

console.log("..........area of triangle...................")
var base = 5;
var height = 7;
var area = (1/2)*base*height
console.log(area)


console.log("*****get all country flag******");

let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function(){
    const data1 = JSON.parse(xhr.response);
    for(key in data1){
        console.log((+key+1)+" "+"=>", data1[key].flags.png);
     }
   
}

// rest country name, region, sub-region ans population

let xhr1 = new XMLHttpRequest();
xhr1.open("GET","https://restcountries.com/v3.1/all");
xhr1.send();
xhr1.onload = function(){
    console.log('*******Countryname,Region,Subregion,Population*******')
    const data2 = JSON.parse(xhr1.response);
    for(key in data2){
        console.log((+key+1)+ ". country name -", data2[key].name.common, '* Region -', data2[key].region, '* Sub region -',data2[key].subregion, '** Population -', data2[key].population );
        
    }
   
}
