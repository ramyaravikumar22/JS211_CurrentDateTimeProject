// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numToString = (n) => {
  return n.toString();
}
const numberToString = () => {
const value1 = document.getElementById('value1').value;
const str = numToString(value1);
document.getElementById("numbertostring").innerHTML = typeof str;
}

// Write a JavaScript program to convert a string to the number.

const stringToNum = (s) => {
  const value2 = document.getElementById('num').value
  const num = parseInt(s);
  document.getElementById("stringToNum").innerHTML = typeof num; 
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  function checkDataType(data) {
    if (typeof data === 'boolean') {
      console.log('Boolean');
    } else if (data === null) {
      console.log('Null');
    } else if (data === undefined) {
      console.log('Undefined');
    } else if (typeof data === 'number' && isNaN(data)) {
      console.log('NaN');
    } else if (typeof data === 'number') {
      console.log('Number');
    } else if (typeof data === 'string') {
      console.log('String');
    }
  }
  
  checkDataType(true);  // Boolean
  checkDataType(null);  // Null
  checkDataType(undefined);  // Undefined
  checkDataType(NaN);  // NaN
  checkDataType(10);  // Number
  checkDataType('Hello');  // String

  
// Write a JavaScript program that adds 2 numbers together.

const addTwoNumbers = () => {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const sum = num1 + num2;
  document.getElementById("Total").innerHTML = sum;
};


// Write a JavaScript program that runs only when 2 things are true.

const twoTrueValue = (x, y) => {
  const oneTrueValue = document.getElementById("oneTrueValue").value;
  const secondTrueValue = document.getElementById("secondTrueValue").value;
  const printTrueValue = document.getElementById("printTrueValue");

  if(oneTrueValue == "true" && secondTrueValue == "true") {
      printTrueValue.innerHTML = true;
  } else {
      printTrueValue.innerHTML = "This is AND logic operator. Two true values are required to print a true value!"
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrueValue = (a, b) => {
  const oneValue = document.getElementById("oneValue").value;
  const twoValue = document.getElementById("twoValue").value;
  const printValue = document.getElementById("printValue");

  if(oneValue == "true" || twoValue == "true") {
    printValue.innerHTML = true;
  } else {
    printValue.innerHTML = "Execution halted: Atleast one true value is required!" ;
  }
}

// Write a JavaScript program that runs when both things are not true.  

const notTrueValue = (m, n) => {
  const valueA = document.getElementById("valueA").value;
  const valueB = document.getElementById("valueB").value;
  const printFalseValue = document.getElementById("printFalseValue");
  if(valueA == "false" && valueB == "false") {
      printFalseValue.innerHTML = false;
  } else {
      printFalseValue.innerHTML = "Error"
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
