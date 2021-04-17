// 31.	Write a js program to check whether a number is even or odd using functions.
// function odd_even(){
//   var no;
//   no=Number(document.getElementById("no_input").value);
//   if(no%2==0)
//   {
//   alert("Even Number");
//   }
//   else
//   {
//   alert("Odd Number");
//   }
// }

// 32.	Write a js program to check whether a number is prime, Armstrong or perfect number using functions.


// const number = prompt("Enter a positive integer");
// const numberOfDigits = number.length;
// let sum = 0;

// // create a temporary variable
// let temp = number;

// while (temp > 0) {

//     let remainder = temp % 10;

//     sum += remainder ** numberOfDigits;

//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer
// }

// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }

// 33.	Write a js program to find maximum between two numbers using conditional operator.

// var n1 = 5, n2 = 10, max;

// // Largest among n1 and n2
// max = (n1 > n2) ? n1 : n2;

// // Print the largest number
// document.write("Largest number between "
//     + n1 + " and " + n2
//     + " is " + max + ".");

// 34.	Write a js program to find maximum between three numbers using conditional operator.
// const num1 = parseFloat(prompt("Enter first number: "));
// const num2 = parseFloat(prompt("Enter second number: "));
// const num3 = parseFloat(prompt("Enter third number: "));
// let largest;

// // check the condition
// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }

// // display the result
// console.log("The largest number is " + largest);


//35. Write a js program to check whether a number is even or odd using conditional operator
// const number = prompt("Enter a number: ");

// //check if the number is even
// if(number % 2 == 0) {
//     console.log("The number is even.");
// }

// // if the number is odd
// else {
//     console.log("The number is odd.");
// }


// 36.	Write a js program to check whether year is leap year or not using conditional operator.

// function checkLeapYear(year) {

//   //three conditions to find out the leap year
//   if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//       console.log(year + ' is a leap year');
//   } else {
//       console.log(year + ' is not a leap year');
//   }
// }

// // take input
// const year = prompt('Enter a year:');

// checkLeapYear(year);

// <!-- 37.	Write a js program to check whether character is an alphabet or not using conditional operator. -->

// 38.	Write a js program to print day of week name using switch case
// var date = new Date(),
// days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log("Today is : " + days[date.getDay()]);
// if(date.getHours() >= 12) {
// console.log("current time is : " + (date.getHours() - 12) + "PM :" + date.getMinutes() + ":" + date.getSeconds());
// }else {
// console.log("current time is : " + date.getHours() + "AM:" + date.getMinutes() + ":" + date.getSeconds());
// }


// 39.	 Write a js program print total number of days in a month using switch case.
// var day = 3;
// var dayName;
// switch (day) {
//     case 1:
//         dayName = 'Sunday';
//         break;
//     case 2:
//         dayName = 'Monday';
//         break;
//     case 3:
//         dayName = 'Tuesday';
//         break;
//     case 4:
//         dayName = 'Wednesday';
//         break;
//     case 5:
//         dayName = 'Thursday';
//         break;
//     case 6:
//         dayName = 'Friday';
//         break;
//     case 7:
//         dayName = 'Saturday';
//         break;
//     default:
//         dayName = 'Invalid day';
// }
// console.log(dayName); // Tuesday


// 40.	 Write a js program to check whether an alphabet is vowel or consonant using switch case.
// var mychar = "C";
// 	document.write("Checking the character...<br/>");
// 	switch(mychar)
// 	{
// 		default: document.write(mychar + " is a consonant.");
// 			break;
// 		case "A": document.write(mychar + " is a vowel.");
// 			break;
// 		case "E": document.write(mychar + " is a vowel.");
// 			break;
// 		case "I": document.write(mychar + " is a vowel.");
// 			break;
// 		case "O": document.write(mychar + " is a vowel.");
// 			break;
// 		case "U": document.write(mychar + " is a vowel.");
// 			break;
// 	}
// 	document.write("<br/>Done!");