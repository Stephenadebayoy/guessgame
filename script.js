// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// document.querySelector(".check").addEventListener("click", function () {
//   console.log(document.querySelector(".guess").value);

//   document.querySelector(".message").textContent = "Correct Number!";
// });

// let secNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess, typeof guess);

//   // when their is no input
//   if (!guess) {
//     document.querySelector(".message").textContent = "❌No number!";

//     // when player wins or correct number
//   } else if (guess === secNumber) {
//     document.querySelector(".number").textContent = secNumber;
//     document.querySelector(".message").textContent = "✅Correct Number!";
//     score++;
//     document.querySelector(".score").textContent = score;

//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector(".highscore").textContent = highscore;
//     }

//     // when guess is too high
//   } else if (guess > secNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈Too high !";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "😢You lost the game !";
//       document.querySelector(".score").textContent = 0;
//     }

//     // when guess is too low
//   } else if (guess < secNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉Too low !";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "😢You lost the game !";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

// document.querySelector(".again").addEventListener("click", function () {
//   // score = 20;
//   secNumber = Math.trunc(Math.random() * 20) + 1;

//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector(".score").textContent = 20;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = " ";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
// });

// let secNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess, typeof guess);

//   // when their is no input
//   if (!guess) {
//     document.querySelector(".message").textContent = "❌No number!";

//     // when player wins or correct number
//   } else if (guess === secNumber) {
//     document.querySelector(".number").textContent = secNumber;
//     document.querySelector(".message").textContent = "✅Correct Number!";
//     score++;
//     document.querySelector(".score").textContent = score;

//     document.querySelector("body").style.backgroundColor = "#60b347";
//     document.querySelector(".number").style.width = "30rem";

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector(".highscore").textContent = highscore;
//     }
//   } else if (guess !== secNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent =
//         guess > secNumber ? "📈Too high !" : "📉Too low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "😢You lost the game !";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

// document.querySelector(".again").addEventListener("click", function () {
//   // score = 20;
//   secNumber = Math.trunc(Math.random() * 20) + 1;

//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector(".score").textContent = 20;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".guess").value = " ";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
// });

let secNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
  };
  // when their is no input
  if (!guess) {
    displayMessage("❌No number !");

    // when player wins or correct number
  } else if (guess === secNumber) {
    document.querySelector(".number").textContent = secNumber;
    displayMessage("✅Correct Number!");
    score++;
    document.querySelector(".score").textContent = score;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secNumber) {
    if (score > 1) {
      displayMessage(guess > secNumber ? "📈Too high !" : "📉Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😢You lost the game !");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // score = 20;
  secNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
