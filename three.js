
/*function signature/sample */
function  electionResult(votes) {
  let mangoSum = 0;
  let bananaSum = 0;
  for (let vote of votes) {
    if (vote === "mango") {
      mangoSum++;
    }
    else if (vote === "banana")
    {
      bananaSum++;
    }
    else {
      return "invalid"
    }
      
    
  }
  if (mangoSum > bananaSum) {
    return "mango";
  }
  else if
  (bananaSum > mangoSum){
    return "banana";
  }
  else {
    return "drow";
    }
  }
const result = electionResult(["banana", "mango"]);
console.log(result);

