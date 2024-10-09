//task1
//1. Declare a variable named myNumber and assign it the value of 10:
let myNumber = 10;

//2. Declare another variable named myString and assign it the value of "Hello, JavaScript!":
let myString = "Hello, JavaScript!";

//3. Print both variables to the console using console.log():
console.log(myNumber);
console.log(myString);

// task 2:

//1. For loop from 0 to 10 and print the number:

for (let i = 0; i <= 10; i++) {
console.log(i);
}
    

//2. For loop to print the first 5 multiples of 3:

for (let i= 1; i <= 5; i++) {
console.log(3 * i);
}
    

//task3

//1,2. Define the addNumbers function and inside it add num1 and num2 together and return the result
  function addNumbers(num1, num2){
    return num1 + num2;
 }

//3. Call the addNumbers function:

const sum = addNumbers(4, 5);  
console.log(sum);

//4. Define the multiplyNumbers function:

 function multiplyNumbers(num1, num2){
    return num1 * num2;
 }
   
//5. Call the multiplyNumbers function:

let multiplication = multiplyNumbers(4, 6);
console.log(multiplication);  
