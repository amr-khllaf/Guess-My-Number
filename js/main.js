"use strict";

// console.log(document.querySelector(".message").textContent); //! This how to select element and to get the content of it

//* ---------------------------------------------------
//& ==> What is the DOM & DOM Manipulation
//* ---------------------------------------------------

//! DOM(Document Object Model) is a ==> Structured representation of the HTML document. Allows to access and manipulate the HTML document and style to manipulate it.

//! DOM is a tree structure that represents the HTML document. It is made up of elements, attributes, and text nodes. The DOM is a read-only representation of the HTML document, and it is used to interact with the HTML document and its elements.

//! DOM is a connection between the HTML document and the JavaScript code. It allows the JavaScript code to access and manipulate the HTML document.

//* There is one element node and the DOM Tree is made up of multiple element nodes. Each element node has a parent node, child nodes, and sibling nodes.

//! DOM alawys start with Document node. (This object serves as entry point to the whole document (DOM))

//* HTML is ==> the Root node of the DOM Tree.

//^ DOM amd DOM Methods aren't part of JavaScript, they are part of the Browser and thwy are a part of the Web API and we can access them from JavaScript.

//* ---------------------------------------------------
//& ==> Selecting & Manipulating Elements
//* ---------------------------------------------------

//! We can ser and get the content element and change it :

// console.log(document.querySelector(".message").textContent); //Start guessing...
// document.querySelector(".message").textContent = "Correct Number 🎉";

// console.log(document.querySelector(".message").textContent); //Correct Number 🎉

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 60;
// console.log(document.querySelector(".guess").value);

//* ---------------------------------------------------
//& ==> Handling Click Events (My App)
//* ---------------------------------------------------

//! Define the Secret Number :
let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highScore = 0;
let number = document.querySelector(".number");

const displayMyMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//! The function in addEventListener() is the Event Handling Function
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //~ When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔️ No Number..!";
    displayMyMessage("⛔️ No Number..!");
  }
  //~ When Player Wins The Game
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number 🎉";
    displayMyMessage("Correct Number 🎉");
    document.querySelector("body").style.backgroundColor = "#60b347";
    // document.querySelector(".number").style.width = "30rem";
    number.style.width = "30rem";
    // document.querySelector(".number").textContent = secretNumber;
    number.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //! Refactor The Below Code
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈 Too High..!" : "📉 Too Low..!";
      displayMyMessage(
        guess > secretNumber ? "📈 Too High..!" : "📉 Too Low..!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent =
      //   "💥 You Lost The Game ..!";
      displayMyMessage("💥 You Lost The Game ..!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
//~ When the guess is too High
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too High..!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent =
//         "💥 You Lost The Game ..!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
//   //~ When the guess is too Low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉 Too Low..!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent =
//         "💥 You Lost The Game ..!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

//! When the Again Button is Clicked (Implement the Agian Game functionality )

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMyMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  // document.querySelector(".number").textContent = "?";
  number.textContent = "?";
  // document.querySelector(".number").style.width = "15rem";
  number.style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
