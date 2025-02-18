function electionResult(votes) {
  let mangoSum = 0;
  let bananaSum = 0;

  // Loop through each vote in the array
  for (let vote of votes) {
    // Normalize the vote to lowercase to handle case insensitivity
    let normalizedVote = vote.toLowerCase();

    if (normalizedVote === "mango") {
      mangoSum++; // Count mango votes
    } else if (normalizedVote === "banana") {
      bananaSum++; // Count banana votes
    } else {
      return "Invalid"; // If there's any invalid vote, return "Invalid"
    }
  }

  // Determine the result based on the count of votes
  if (mangoSum > bananaSum) {
    return "Mango";
  } else if (bananaSum > mangoSum) {
    return "Banana";
  } else {
    return "Draw"; // If the votes are tied, return "Draw"
  }
}

// কিছু পরীক্ষা করে দেখি
console.log(electionResult(["mango", "banana", "Na-Vote", "mango"])); // "Mango"
console.log(electionResult([])); // "Draw"
console.log(electionResult(["mango", "banana", "invalid", "no"])); // "Invalid"
console.log(electionResult(["mango"])); // "Mango"
console.log(electionResult(["banana", "banana", "some invalid vote", "no"])); // "Banana"
console.log(electionResult(["mango", "banana", "mango"])); // "Mango"
console.log(electionResult(["mango", "banana", "banana"])); // "Banana"
console.log(electionResult(["mango", "banana", "mango", "banana", "mango"])); // "Mango"
 