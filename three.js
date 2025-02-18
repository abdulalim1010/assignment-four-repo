
function  electionResult(votes) {
  let mangoSum = 0;
  let bananaSum = 0;
  
  for (let vote of votes){
  
  let normalizedVote = vote.toLowerCase();
  
    if (normalizedVote === "mango") {
      mangoSum++;
    } else if (normalizedVote === "banana") {
      bananaSum++;
    } else {
      return "Invalid"; 
    }
  }
  

  if (mangoSum > bananaSum) {
    return "mango";
  }
  else if
  (bananaSum > mangoSum){
    return "banana";
  }
  else if (mangoSum === 0 && bananaSum === 0) {
    return "Draw";
  }
  else {
    return "draw";
    }
  }
const result = electionResult(["banana","alkj","akj","mango"]);
console.log(result);

