

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


// Starting String
let csvStr = `  ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
//  Variables
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let commas = 0; // Counter variable

// Loop through string, for loop to have access to the index
for (let i = 0; i < csvStr.length; i++) {
  if (csvStr[i] == ",") {
    // If comma
    commas++; // Add to comma counter
  } else if (csvStr[i] == "\n") {
    // If new line
    console.log(cell1, cell2, cell3, cell4); // print new line

    // Clear previous data for new row
    commas = 0;
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
  } else {
    // for all chars
    if (commas == 0) {
      // put in the appropriate cell, based on commas
      cell1 += csvStr[i];
    } else if (commas == 1) {
      cell2 += csvStr[i];
    } else if (commas == 2) {
      cell3 += csvStr[i];
    } else {
      cell4 += csvStr[i];
    }
  }

  // If last char in string print final cells
  if (csvStr.length - 1 == i) {
    console.log(cell1, cell2, cell3, cell4);
  }
}



// // Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

let rows = csvStr.split('\n');
let twoDimensionalArray = rows.map(row => row.split(','));
// console.log(twoDimensionalArray);


// Part 3: Transforming Data

// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.



// let table = console.log(twoDimensionalArray);

// or

let table = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"]
];

let headers = table[0];

let arry = [];

for (let i = 0; i < headers.length; i++) {

  arry.push(headers[i].toLowerCase());
}

let objectArray = [];
for (let i = 1; i < table.length; i++) {
  let row = table[i];
  let obj = {};



  for (let s = 0; s < row.length; s++) {
    obj[arry[s]] = row[s];
  }

  objectArray.push(obj);
}

console.log("object Array:")
console.log(objectArray);




// // Part 4: Sorting and Manipulating Data


let table1 = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }];

//  console.log (table1);

// //  Remove the last element from the sorted array.

table1.pop();


console.log(table1);

// // // Insert the following object at index 1:

let add = { id: "48", name: "Barry", occupation: "Runner", age: "25" }

table1.splice(1, 0, add);

console.log(table1);

// // Add the following object to the end of the array:

let endadd = { id: "7", name: "Bilbo", occupation: "None", age: "111" }


table1.push(endadd);
console.log(table1);


// // Part 5: Full Circle

// console.log(table);


let file = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }];


let header = Object.keys(file[0]);
let fileString = headers.join(",");


for (let i = 0; i < file.length; i++) {
  let row = file[i];
  let values = [];

  for (let j = 0; j < header.length; j++) {
    let key = header[j];
    values.push(row[key]);
  }
  let rowString = values.join(",");
  fileString += "\n" + rowString;
}

console.log(fileString);







