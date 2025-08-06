let csvStr = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Step 1: Count columns from the first row
let firstLine = "";
for (let i = 0; i < csvStr.length; i++) {
  if (csvStr[i] == "\n") {
    break; // stop at first line
  }
  firstLine += csvStr[i];
}

let columnCount = 1; // start with 1 column
for (let i = 0; i < firstLine.length; i++) {
  if (firstLine[i] == ",") {
    columnCount++; // count commas to get total columns
  }
}

console.log("Total columns:", columnCount);

// Step 2: Create 2D array
let table = []; // this will be our final 2D array
let currentCell = ""; // building up the current cell text
let currentRow = [];  // current row of cells
let commaCounter = 0; // track how many commas in a row

for (let i = 0; i < csvStr.length; i++) {
  let char = csvStr[i];

  if (char == ",") {
    currentRow.push(currentCell);
    currentCell = "";
    commaCounter++;
  } else if (char == "\n") {
    currentRow.push(currentCell); // push last cell before new line
    table.push(currentRow);       // push row to table
    currentCell = "";
    currentRow = [];
    commaCounter = 0;
  } else {
    currentCell += char;
  }

  // Last character in string
  if (i == csvStr.length - 1) {
    currentRow.push(currentCell); // push last cell
    table.push(currentRow);       // push last row
  }
}

// Step 3: Print the final 2D array
console.log(table);