// Exercise 1: Grade calculator
function getGrade(score) {
  if (score < 0 || score > 100) {
    return "Invalid Score";
  } else if (score >= 70) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else {
    return "F";
  }
}

console.log("=== Exercise 1: Grade Calculator ===");
const scores = [85, 70, 65, 60, 55, 50, 49, 0, 100, -5, 101];
for (const score of scores) {
  console.log("Score " + score + " -> " + getGrade(score));
}

// Exercise 2: Number guessing game (1 to 100, 5 attempts)
function guessingGame() {
  const secret = Math.floor(Math.random() * 100) + 1;
  const maxAttempts = 5;
  let low = 1;
  let high = 100;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const guess = Math.floor((low + high) / 2);

    if (guess === secret) {
      console.log("Attempt " + attempt + ": " + guess + " -> Correct! You win.");
      return;
    } else if (guess < secret) {
      console.log("Attempt " + attempt + ": " + guess + " -> Too low");
      low = guess + 1;
    } else {
      console.log("Attempt " + attempt + ": " + guess + " -> Too high");
      high = guess - 1;
    }
  }

  console.log("Out of attempts. The number was " + secret + ".");
}

console.log("");
console.log("=== Exercise 2: Number Guessing Game ===");
guessingGame();

// Exercise 3: FizzBuzz from 1 to 30
console.log("");
console.log("=== Exercise 3: FizzBuzz ===");
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}