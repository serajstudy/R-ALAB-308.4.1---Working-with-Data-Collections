

// // Part 1: Refactoring Old Code
// // Part 1: Fizz Buzz

// for( let i= 1; i<=100; i++){

//     if ( i % 3 === 0){
//         console.log("Fizz");

//     } else if ( i % 5 ===0){
//         console.log("Buzz");
//     } else  if ( i % 3===0 && i % 5===0){
//         console.log (" FizzBuzz");
//     } else {console.log(i)

//     }
 
// }



// Feeling Loopy

// Starting String
// let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;

// //  Variables
// let cell1 = "";
// let cell2 = "";
// let cell3 = "";
// let cell4 = "";
// let commas = 0; // Counter variable

// // Loop through string, for loop to have access to the index
// for (let i = 0; i < csvStr.length; i++) {
//   if (csvStr[i] == ",") {
//     // If comma
//     commas++; // Add to comma counter
//   } else if (csvStr[i] == "\n") {
//     // If new line
//     console.log(cell1, cell2, cell3, cell4); // print new line

//     // Clear previous data for new row
//     commas = 0;
//     cell1 = "";
//     cell2 = "";
//     cell3 = "";
//     cell4 = "";
//   } else {
//     // for all chars
//     if (commas == 0) {
//       // put in the appropriate cell, based on commas
//       cell1 += csvStr[i];
//     } else if (commas == 1) {
//       cell2 += csvStr[i];
//     } else if (commas == 2) {
//       cell3 += csvStr[i];
//     } else {
//       cell4 += csvStr[i];
//     }
//   }

//   // If last char in string print final cells
//   if (csvStr.length - 1 == i) {
//     console.log(cell1, cell2, cell3, cell4);
//   }
// }



// Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.

// Starting String
// let csvStr = ` Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232 `;

// //  Variables
// let cell1 = "";
// let cell2 = "";
// let cell3 = "";
// let cell4 = "";
// let commas = 0; // Counter variable

// // Loop through string, for loop to have access to the index
// for (let i = 0; i < csvStr.length; i++) {
//   if (csvStr[i] == ",") {
//     // If comma
//     commas++; // Add to comma counter
//   } else if (csvStr[i] == "\n") {
//     // If new line
//     console.log(cell1, cell2, cell3, cell4); // print new line

//     // Clear previous data for new row
//     commas = 0;
//     cell1 = "";
//     cell2 = "";
//     cell3 = "";
//     cell4 = "";
//   } else {
//     // for all chars
//     if (commas == 0) {
//       // put in the appropriate cell, based on commas
//       cell1 += csvStr[i];
//     } else if (commas == 1) {
//       cell2 += csvStr[i];
//     } else if (commas == 2) {
//       cell3 += csvStr[i];
//     } else {
//       cell4 += csvStr[i];
//     }
//   }

//   // If last char in string print final cells
//   if (csvStr.length - 1 == i) {
//     console.log(cell1, cell2, cell3, cell4);
//   }
// }


// Part 2: Expanding Functionality

// // Starting String
let csvStr = `  ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// //  Variables
// let cell1 = "";
// let cell2 = "";
// let cell3 = "";
// let cell4 = "";
// let commas = 0; // Counter variable

// // Loop through string, for loop to have access to the index
// for (let i = 0; i < csvStr.length; i++) {
//   if (csvStr[i] == ",") {
//     // If comma
//     commas++; // Add to comma counter
//   } else if (csvStr[i] == "\n") {
//     // If new line
//     console.log(cell1, cell2, cell3, cell4); // print new line

//     // Clear previous data for new row
//     commas = 0;
//     cell1 = "";
//     cell2 = "";
//     cell3 = "";
//     cell4 = "";
//   } else {
//     // for all chars
//     if (commas == 0) {
//       // put in the appropriate cell, based on commas
//       cell1 += csvStr[i];
//     } else if (commas == 1) {
//       cell2 += csvStr[i];
//     } else if (commas == 2) {
//       cell3 += csvStr[i];
//     } else {
//       cell4 += csvStr[i];
//     }
//   }

//   // If last char in string print final cells
//   if (csvStr.length - 1 == i) {
//     console.log(cell1, cell2, cell3, cell4);
//   }
// }


// let columnCount = 1;
// for (let i = 0; i < csvStr.length; i++) {
//   if (csvStr[i] === ",") columnCount++;
//   if (csvStr[i] === "\n") break; // only check the header
// }

// let currentRow = new Array(columnCount).fill("");
// let allRows = [];
// let colIndex = 0;

let csvStr = [  ]